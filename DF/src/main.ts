
/* {
  "aKey": "CK:TGA:FNGK:BLDC:FNK:DEV:CATK:CT005:AFGK:V001:AFK:MMS:AFVK:v1:bldc",
  "deploymentArtifactKey": "CK:CT005:FNGK:AF:FNK:CDF-DPD:CATK:V001:AFGK:MMS:AFK:VGPH_MMS_DPD:AFVK:v1",
  "appGroupDesc": "VGPH",
  "logType": "mongodb",
  "appDesc": "Mandate Management System",
  "isOld": true,
  "clientCode": "CT003",
  "loginDetails": {
    "firstName": "sam",
    "lastName": "m",
    "loginId": "samm",
    "email": "samm@torus.tech",
    "mobile": "",
    "status": "active",
    "accessProfile": [
      "admin"
    ],
    "accessExpires": "",
    "dateAdded": "2026-01-29T07:55:46.216Z",
    "profile": "",
    "userUniqueId": "12707b9f-4547-4f14-b207-6eee0a83fc14",
    "lastActive": "2026-03-24T05:45:47.006Z",
    "client": "CT003",
    "users": "sammsam m",
    "edit": "",
    "noOfProductsService": 0,
    "touring": {
      "isneedTouring": false,
      "touringData": {
        "/torus": {
          "stepIndex": 0,
          "isSkipped": false,
          "completed": false,
          "notVisited": []
        },
        "/control-center/company-profile": {
          "stepIndex": 0,
          "isSkipped": true,
          "completed": false,
          "notVisited": []
        },
        "/control-center/tenant": {
          "stepIndex": 0,
          "isSkipped": true,
          "completed": false,
          "notVisited": []
        },
        "artifactselector": {
          "stepIndex": 0,
          "isSkipped": true,
          "completed": false,
          "notVisited": []
        },
        "/home": {
          "stepIndex": 0,
          "isSkipped": true,
          "completed": false,
          "notVisited": []
        }
      }
    },
    "quickLinks": [
      {
        "label": "My Account",
        "key": "PersonalmyAccount",
        "routes": "/control-center/account-profile"
      },
      {
        "label": "Appearance",
        "key": "Personalappearance",
        "routes": "/control-center/appearance"
      },
      {
        "label": "Tenant",
        "key": "tenant",
        "routes": "/control-center/tenant"
      },
      {
        "label": "User Roles",
        "key": "userroles",
        "routes": "/control-center/user-roles"
      },
      {
        "label": "User Management",
        "key": "usermanagement",
        "routes": "/control-center/user-management"
      }
    ]
  }
} */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import authPlugin from './auth.middleware';
import { CommonService } from './common.Service';
import * as fs from 'fs';
import DecryptPayloadMiddleware from './decryptPayloadMiddleware';
import multipart from '@fastify/multipart';
import { BigIntInterceptor } from './bigint.interceptor';
import { EnvData } from './envData/envData.service';
//import { envData as mongoClientEnvData } from './mongoClient';
import { decrypt } from './decrypt';
import { Logger } from '@nestjs/common';
const Redis = require('ioredis');

async function bootstrap() {
  const logger = new Logger('Redis');
  const redis = new Redis({
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
  }).on('error', (err:any) => {
    console.log('Redis Client Error', err);
    throw err;
  });

  let configData = null;
  try {
    const redisResult = await redis.call('JSON.GET', "CK:CT005:FNGK:AF:FNK:CDF-DPD:CATK:V001:AFGK:MMS:AFK:VGPH_MMS_DPD:AFVK:v1:NDP");
    if (redisResult) {
      const parsed = JSON.parse(redisResult);
      const rootKey = Object.keys(parsed)[0];
      const encryptedPayload = parsed[rootKey];
      const decryptedData = decrypt<{ data: any }>(encryptedPayload);
      configData = decryptedData.data;

      if (configData) {
        logger.log('✅ Config fetched from Redis');
      } else {
        throw new Error('Config structure Redis - No DPD data found');
      }
    } else {
      logger.warn('⚠️ No config found in Redis for key');
    }
  } catch (error) {
    logger.error('Error loading config from Redis:', error);
  }

   //if (configData) {
   // mongoClientEnvData.setConfig(configData);
 // }

  const fastifyAdapter = new FastifyAdapter({
    bodyLimit: 500 * 1024 * 1024, // 500MB limit
    logger: true,
  });
  if (configData) {
    EnvData.preloadConfig(configData);
    logger.log('✅ Config preloaded into EnvData before bootstrap');
  }
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );

  const envData = app.get(EnvData);

  if (!configData) {
    console.error('❌EndDetails Not Initialized');
    throw new Error('DPD config data is required for application startup');
  }

  envData.setConfig(configData);
  console.log('✅ Config loaded into EndDetails');

    // Global interceptor for BigInt serialization
  app.useGlobalInterceptors(new BigIntInterceptor());
  //app.use(
    //session({
      //secret: 'Torus9x',
      //resave: false,
      //saveUninitialized: false,
    //}),
  //);
  
  //Middleware applied
  const fastifyInstance = fastifyAdapter.getInstance();
  const commonService = app.get(CommonService);
  //await fastifyInstance.register(authPlugin(commonService), { prefix: '/te' });
  await fastifyInstance.register(DecryptPayloadMiddleware(commonService));
   // Register the core Fastify multipart plugin
  fastifyInstance.register(multipart as any);    
  //CORS
  app.enableCors({methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']});

  // Microservice setup (TCP transport)
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: process.env.PO_PORT,
    },
  });
  await app.startAllMicroservices();

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('The Nestjs API documentation')
    .setVersion('0.1')
    .addTag('ERD API')
    .addTag('Torus API')
    .addTag('Scheduler API')
    .addBearerAuth(
    { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 
    'JWT-auth',
    )
    .addServer('https://tgadev.toruslowcode.com/ct005/v001/mms/v1/api','Production Server')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));
  SwaggerModule.setup('docs', app, document);

  //helmet
  await app.register(helmet,{
  contentSecurityPolicy: false,
  global: true, 
  });

  // Start Fastify app
  await app.listen(process.env.APP_PORT,"0.0.0.0");
}
bootstrap();
