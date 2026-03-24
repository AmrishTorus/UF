import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PoEvent } from "src/dto";
import { DynamicFlowService } from "src/Torus/v1/te/dynamicFlow.service";

@Controller('df')
export class DFCombo_subscreen_dbController {
   constructor(private readonly dynamicFlowService:DynamicFlowService){}

        @EventPattern('Combo_subscreen_db_62c7d0dca5684d28ac4e0aee18458751_RequestInitiated') 
        async Combo_subscreen_db_62c7d0dca5684d28ac4e0aee18458751_RequestInitiated(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('Combo_subscreen_db_aa17ac717ee04fe397c1202196bea3a6_RequestCompleted') 
        async Combo_subscreen_db_aa17ac717ee04fe397c1202196bea3a6_RequestCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
    
}