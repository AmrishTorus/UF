import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PoEvent } from "src/dto";
import { DynamicFlowService } from "src/Torus/v1/te/dynamicFlow.service";

@Controller('pf')
export class Mms_Core_Banking_ApiController {
   constructor(private readonly dynamicFlowService:DynamicFlowService){}

        @EventPattern('CT005UFUFWV001MMSMmsMandateInfov1CT005PFPFDV001MMSMmsCoreBankingApiv1_1b1c2e0f05214aea89d61ea9721c84f0_01d0493b62ba459287ea85227ab596b0111_ReqApiIntiate') 
        async CT005UFUFWV001MMSMmsMandateInfov1CT005PFPFDV001MMSMmsCoreBankingApiv1_1b1c2e0f05214aea89d61ea9721c84f0_01d0493b62ba459287ea85227ab596b0111_ReqApiIntiate(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSMmsCoreBankingApiv1_180751379e4d48128d41ddc5748dc2c4_d6ncx9577m3g008g68yg_ReqApiSuccess') 
        async CT005PFPFDV001MMSMmsCoreBankingApiv1_180751379e4d48128d41ddc5748dc2c4_d6ncx9577m3g008g68yg_ReqApiSuccess(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
    
}