'use client'




import React, {useState, useContext,useEffect } from 'react';
import { AxiosService } from "@/app/components/axiosService";
import { deleteAllCookies,getCookie } from '@/app/components/cookieMgment';
import { codeExecution } from '@/app/utils/codeExecution';
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { Label } from '@/components/Label';
import { useRouter } from 'next/navigation';
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { eventDecisionTable } from '@/app/utils/evaluateDecisionTable';
import decodeToken from '@/app/components/decodeToken';
import { eventBus } from '@/app/eventBus';
import { Modal } from '@/components/Modal';
import { getFilterProps,getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { useHandleDfdRefresh } from '@/context/dfdRefreshContext';
import { DecodedToken,PrimaryTableData,SecurityData,EncryptionFlagPageData,PaginationData,AllowedGroupNode,ActionDetails } from "@/types/global";
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const Labelapi_categorys = ({encryptionFlagCompData}:any) => {
  const token:string = getCookie('token'); 
  const decodedTokenObj:any = decodeToken(token);
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  const toast:Function=useInfoMsg();
  const routes: AppRouterInstance = useRouter();
  const [allCode,setAllCode]=useState<string>("");

 /////////////
   //another screen
  const {api_info_groupd3ad5, setapi_info_groupd3ad5}= useContext(TotalContext) as TotalContextProps;
  const {api_info_groupd3ad5Props, setapi_info_groupd3ad5Props}= useContext(TotalContext) as TotalContextProps;
  const {info_group5e349, setinfo_group5e349}= useContext(TotalContext) as TotalContextProps;
  const {info_group5e349Props, setinfo_group5e349Props}= useContext(TotalContext) as TotalContextProps;
  const {apinamesf3b7f, setapinamesf3b7f}= useContext(TotalContext) as TotalContextProps;
  const {versions69477, setversions69477}= useContext(TotalContext) as TotalContextProps;
  const {statuss6320b, setstatuss6320b}= useContext(TotalContext) as TotalContextProps;
  const {api_categorys43935, setapi_categorys43935}= useContext(TotalContext) as TotalContextProps;
  const {release_datesd97a1, setrelease_datesd97a1}= useContext(TotalContext) as TotalContextProps;
  const {api_resource_paths6c67f, setapi_resource_paths6c67f}= useContext(TotalContext) as TotalContextProps;
  const {apiname45fa8, setapiname45fa8}= useContext(TotalContext) as TotalContextProps;
  const {versiona736c, setversiona736c}= useContext(TotalContext) as TotalContextProps;
  const {statusddf07, setstatusddf07}= useContext(TotalContext) as TotalContextProps;
  const {api_category95348, setapi_category95348}= useContext(TotalContext) as TotalContextProps;
  const {release_dateb41fc, setrelease_dateb41fc}= useContext(TotalContext) as TotalContextProps;
  const {api_resourcepath88fa9, setapi_resourcepath88fa9}= useContext(TotalContext) as TotalContextProps;
  const {info_summary_groupa2a0f, setinfo_summary_groupa2a0f}= useContext(TotalContext) as TotalContextProps;
  const {info_summary_groupa2a0fProps, setinfo_summary_groupa2a0fProps}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log_groupff19c, setapi_process_log_groupff19c}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log_groupff19cProps, setapi_process_log_groupff19cProps}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log655a7, setapi_process_log655a7}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log655a7Props, setapi_process_log655a7Props}= useContext(TotalContext) as TotalContextProps;
  //////////////


const handleMapperValue=async()=>{
  try{
    //fetching orchestration data for label
    const orchestrationData: any = await AxiosService.post(
      '/UF/Orchestration',
      {
        key: "CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1",
        componentId: "f0167144898c456bb433c00a9b75e349",
        controlId: "cae4f3525c594792ba0a400a12743935",
        isTable: false,
        from:"label",
        accessProfile:accessProfile
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    if(orchestrationData?.data?.error == true){
      return
    }
    setAllCode(orchestrationData?.data?.code);
  }catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  handleMapperValue();
  setinfo_group5e349((pre:any)=>({...pre,api_categorys:""}));
},[api_categorys43935?.refresh])


const handleClick =async(e:any)=>{
  setinfo_group5e349((prev: any) => ({ ...prev, api_categorys: e.target.value }));
  let code = allCode;
    if (code != '') {
    let codeStates: any = {};
      codeStates['api_info_group']  = api_info_groupd3ad5,
      codeStates['setapi_info_group'] = setapi_info_groupd3ad5,
      codeStates['info_group']  = info_group5e349,
      codeStates['setinfo_group'] = setinfo_group5e349,
      codeStates['info_summary_group']  = info_summary_groupa2a0f,
      codeStates['setinfo_summary_group'] = setinfo_summary_groupa2a0f,
      codeStates['api_process_log_group']  = api_process_log_groupff19c,
      codeStates['setapi_process_log_group'] = setapi_process_log_groupff19c,
      codeStates['api_process_log']  = api_process_log655a7,
      codeStates['setapi_process_log'] = setapi_process_log655a7,
  codeExecution(code,codeStates);
  }
}


  if (api_categorys43935?.isHidden) {
    return <></>
  }  

  return (
    <div 
      style={{gridColumn: `13 / 17`,gridRow: `1 / 11`, gap:``, height: `100%`, overflow: 'hidden'}} >

      <Label 
        className=""
        disabled= {api_categorys43935?.isDisabled ? true : false}
        theme="normal"
        interactive={false}
      onClick = {handleClick}
      >
      Category
      </Label>
    </div>
  )
}

export default Labelapi_categorys
