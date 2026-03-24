import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PoEvent } from "src/dto";
import { DynamicFlowService } from "src/Torus/v1/te/dynamicFlow.service";

@Controller('df')
export class DFmandate_doc_lst_dbController {
   constructor(private readonly dynamicFlowService:DynamicFlowService){}

        @EventPattern('mandate_doc_lst_db_38be773e780044e79578f1fb3637addd_ReqIntiated') 
        async mandate_doc_lst_db_38be773e780044e79578f1fb3637addd_ReqIntiated(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
    
}