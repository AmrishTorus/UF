import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { PoEvent } from "src/dto";
import { DynamicFlowService } from "src/Torus/v1/te/dynamicFlow.service";

@Controller('pf')
export class mandate_scan_saveController {
   constructor(private readonly dynamicFlowService:DynamicFlowService){}

        @EventPattern('CT005UFUFWV001MMSMmsMandateInfov1CT005PFPFDV001MMSmandatescansavev1_7bf1230b2af34cbd857d373cacca864a_df39c0db027c407dbd4110c300d2c3e81112_RequestInitiation') 
        async CT005UFUFWV001MMSMmsMandateInfov1CT005PFPFDV001MMSmandatescansavev1_7bf1230b2af34cbd857d373cacca864a_df39c0db027c407dbd4110c300d2c3e81112_RequestInitiation(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_adff3fe181da4793b443cc96e9c5b77d_d6e477w9zagg008mrdkg_RequestCompleted') 
        async CT005PFPFDV001MMSmandatescansavev1_adff3fe181da4793b443cc96e9c5b77d_d6e477w9zagg008mrdkg_RequestCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_12180ce9c1df4a28a6f68dd02755b5f1_d6e477w9zagg008mrdm0_PostRequestCompleted') 
        async CT005PFPFDV001MMSmandatescansavev1_12180ce9c1df4a28a6f68dd02755b5f1_d6e477w9zagg008mrdm0_PostRequestCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_af9475735d5c4084939716411ded359d_d70h4ehgba3g0088zqng_ProcedureRequestCompleted') 
        async CT005PFPFDV001MMSmandatescansavev1_af9475735d5c4084939716411ded359d_d70h4ehgba3g0088zqng_ProcedureRequestCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_454409d10dd8465f802bec019cc8c99f_d6rfqhpywvpg008p41g0_FileListDataFound') 
        async CT005PFPFDV001MMSmandatescansavev1_454409d10dd8465f802bec019cc8c99f_d6rfqhpywvpg008p41g0_FileListDataFound(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_10b9932652a24f9da3b864c36c454019_d6s73ppy0y8g008n36ag_dbNodeCompleted') 
        async CT005PFPFDV001MMSmandatescansavev1_10b9932652a24f9da3b864c36c454019_d6s73ppy0y8g008n36ag_dbNodeCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005UFUFWV001MMSMmsMandateInfov1CT005PFPFDV001MMSmandatescansavev1_84cad112b306402ebd68c452959a7f9f_35bbbff9845d4a268ef55f788405d6701112_OutputnodeSuccess') 
        async CT005UFUFWV001MMSMmsMandateInfov1CT005PFPFDV001MMSmandatescansavev1_84cad112b306402ebd68c452959a7f9f_35bbbff9845d4a268ef55f788405d6701112_OutputnodeSuccess(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_b980c69d22894881a4444315bdc36361_d6s4q5wy0y8g008n1x5g_UpdateNodeCompleted') 
        async CT005PFPFDV001MMSmandatescansavev1_b980c69d22894881a4444315bdc36361_d6s4q5wy0y8g008n1x5g_UpdateNodeCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_063b90d88bfc42d1bba36e1c31d87396_d6s4q5wy0y8g008n1x60_updatedApiCompleted') 
        async CT005PFPFDV001MMSmandatescansavev1_063b90d88bfc42d1bba36e1c31d87396_d6s4q5wy0y8g008n1x60_updatedApiCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_e4cd8ccafa5c492ebc045063e5abf91d_d6s73ppy0y8g008n36cg_procedureNodeCompleted') 
        async CT005PFPFDV001MMSmandatescansavev1_e4cd8ccafa5c492ebc045063e5abf91d_d6s73ppy0y8g008n36cg_procedureNodeCompleted(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
           @EventPattern('CT005PFPFDV001MMSmandatescansavev1_054a045e98ad46bf9f5640854e5cb5de_d6xxx7cjdtb0008k08zg_CheckValtnErrorSuccs') 
        async CT005PFPFDV001MMSmandatescansavev1_054a045e98ad46bf9f5640854e5cb5de_d6xxx7cjdtb0008k08zg_CheckValtnErrorSuccs(input: PoEvent) { 
           return await this.dynamicFlowService.DynamicFlowProcess(input)
        }       
    
}