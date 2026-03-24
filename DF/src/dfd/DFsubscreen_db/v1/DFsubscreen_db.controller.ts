import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PoEvent } from "src/dto";
import { DynamicFlowService } from "src/Torus/v1/te/dynamicFlow.service";

@Controller('df')
export class DFsubscreen_dbController {
   constructor(private readonly dynamicFlowService:DynamicFlowService){}

        @EventPattern('subscreen_db_7f403fb40f0744ab805632f7eba6c8bf_RequestInitiation') 
        async subscreen_db_7f403fb40f0744ab805632f7eba6c8bf_RequestInitiation(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('subscreen_db_0a399637910841a79c8f605d784233ee_RequestCompleted') 
        async subscreen_db_0a399637910841a79c8f605d784233ee_RequestCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
    
}