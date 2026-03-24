import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PoEvent } from "src/dto";
import { DynamicFlowService } from "src/Torus/v1/te/dynamicFlow.service";

@Controller('df')
export class DFmandate_list_dbController {
   constructor(private readonly dynamicFlowService:DynamicFlowService){}

        @EventPattern('mandate_list_db_e8337a54cda84d58bea31e6598155e99_RequestIntiated') 
        async mandate_list_db_e8337a54cda84d58bea31e6598155e99_RequestIntiated(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
    
}