import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PoEvent } from "src/dto";
import { DynamicFlowService } from "src/Torus/v1/te/dynamicFlow.service";

@Controller('df')
export class DFmandate_error_lst_dbController {
   constructor(private readonly dynamicFlowService:DynamicFlowService){}

        @EventPattern('mandate_error_lst_db_681dfce096e94428bdc0edc413a795eb_RequestIntiated') 
        async mandate_error_lst_db_681dfce096e94428bdc0edc413a795eb_RequestIntiated(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
    
}