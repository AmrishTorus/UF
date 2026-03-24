
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonService } from './common.Service';
import { RuleService } from './ruleService';
import { CodeService } from './codeService';
import { RedisService } from './redisService';
import { JwtService } from '@nestjs/jwt';
import { MongoService } from './mongoService';
import { UfModule } from './Torus/v1/uf/uf.module';
import { TeModule } from './Torus/v1/te/te.module';
import { ConfigService } from "@nestjs/config";
import { ScheduleModule } from '@nestjs/schedule';
import { DFsubscreen_dbModule } from './dfd/DFsubscreen_db/v1/DFsubscreen_db.module';    
import { DFCombo_subscreen_dbModule } from './dfd/DFCombo_subscreen_db/v1/DFCombo_subscreen_db.module';    
import { DFmandate_error_lst_dbModule } from './dfd/DFmandate_error_lst_db/v1/DFmandate_error_lst_db.module';    
import { DFmandate_doc_lst_dbModule } from './dfd/DFmandate_doc_lst_db/v1/DFmandate_doc_lst_db.module';    
import { DFmandate_list_dbModule } from './dfd/DFmandate_list_db/v1/DFmandate_list_db.module';    
import { Mms_Core_Banking_ApiModule } from './pfd/Mms_Core_Banking_Api/v1/Mms_Core_Banking_Api.module';    
import { mandate_scan_saveModule } from './pfd/mandate_scan_save/v1/mandate_scan_save.module';    
//import { DecryptPayloadMiddleware } from './decryptPayloadMiddleware';
import { EncryptInterceptor } from './encryptInterceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheModule } from '@nestjs/cache-manager';
import { BullModule } from '@nestjs/bullmq';
import { EnvDataModule } from './envData/envData.module';
import { EnvData } from './envData/envData.service';


@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: process.env.HOST,
        port: parseInt(process.env.PORT)       
      },
    }),
  CacheModule.register({isGlobal:true}),
  ScheduleModule.forRoot(),UfModule,TeModule,EnvDataModule,DFsubscreen_dbModule,DFCombo_subscreen_dbModule,DFmandate_error_lst_dbModule,DFmandate_doc_lst_dbModule,DFmandate_list_dbModule,Mms_Core_Banking_ApiModule,mandate_scan_saveModule,], 
  controllers: [AppController],
  providers: [AppService,CommonService,RuleService,CodeService,JwtService,RedisService,ConfigService,EnvData,MongoService,{
      provide: APP_INTERCEPTOR,
      useClass: EncryptInterceptor,
    }],
})
export class AppModule implements NestModule {
  configure() {}
}
