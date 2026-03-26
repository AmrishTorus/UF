'use client'


import React, { useState, useContext, useEffect, useRef } from 'react'; 
import { Text } from '@/components/Text';
import { Card } from '@/components/Card';
import { Modal } from '@/components/Modal';
import { Icon } from '@/components/Icon';
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { getCookie } from '@/app/components/cookieMgment';
import { AxiosService } from "@/app/components/axiosService";
import { codeExecution } from '@/app/utils/codeExecution';
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { useRouter } from 'next/navigation';
import { eventBus } from '@/app/eventBus';
import { getFilterProps, getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { te_refreshDto } from '@/app/interfaces/interfaces';
import { useHandleDfdRefresh } from '@/context/dfdRefreshContext';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { DecodedToken,PrimaryTableData,SecurityData,EncryptionFlagPageData,PaginationData,AllowedGroupNode,ActionDetails } from "@/types/global";
import { eventDecisionTable } from '@/app/utils/evaluateDecisionTable';
import decodeToken from '@/app/components/decodeToken';
import i18n from '@/app/components/i18n';

const Carderror_rate = ({checkToAdd,setCheckToAdd,encryptionFlagCompData}:any) => {
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();
  const token: string = getCookie('token');
  const decodedTokenObj:any = decodeToken(token);
  const {dfd_mongo_totalcalls_dfd_v1Props, setdfd_mongo_totalcalls_dfd_v1Props} = useContext(TotalContext) as TotalContextProps; 
  const keyset:any=i18n.keyset("language");
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  const toast : Function=useInfoMsg();
  const routes : AppRouterInstance  = useRouter();
  const prevRefreshRef = useRef<any>(false);
  //showComponentAsPopup || showArtifactAsModal
  /////////////
   //another screen
  const {api_info_groupd3ad5, setapi_info_groupd3ad5}= useContext(TotalContext) as TotalContextProps  
  const {api_info_groupd3ad5Props, setapi_info_groupd3ad5Props}= useContext(TotalContext) as TotalContextProps  
  const {info_group5e349, setinfo_group5e349}= useContext(TotalContext) as TotalContextProps  
  const {info_group5e349Props, setinfo_group5e349Props}= useContext(TotalContext) as TotalContextProps  
  const {info_summary_groupa2a0f, setinfo_summary_groupa2a0f}= useContext(TotalContext) as TotalContextProps  
  const {info_summary_groupa2a0fProps, setinfo_summary_groupa2a0fProps}= useContext(TotalContext) as TotalContextProps  
  const {total_calls5c0ea, settotal_calls5c0ea}= useContext(TotalContext) as TotalContextProps  
  const {success_rateee58b, setsuccess_rateee58b}= useContext(TotalContext) as TotalContextProps  
  const {error_rate960d3, seterror_rate960d3}= useContext(TotalContext) as TotalContextProps  
  const {api_process_log_groupff19c, setapi_process_log_groupff19c}= useContext(TotalContext) as TotalContextProps  
  const {api_process_log_groupff19cProps, setapi_process_log_groupff19cProps}= useContext(TotalContext) as TotalContextProps  
  const {api_process_log655a7, setapi_process_log655a7}= useContext(TotalContext) as TotalContextProps  
  const {api_process_log655a7Props, setapi_process_log655a7Props}= useContext(TotalContext) as TotalContextProps  
  //////////////
 
  
  const handleMapperDetails=async():Promise<void>=>{
    try{
    let code:string;
    const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1",  componentId:"a7e5b7356fa848f2b4e46119e6fa2a0f",controlId:"a02b02bfc5f74976a1780bf47ff960d3",isTable:false,accessProfile:accessProfile,from:"cardError Rate"},{
      headers: {
        Authorization: `Bearer ${token}`
    }})
    code = orchestrationData?.data?.code;
    if (code != '') {
          let codeStates: Record<string, any> = {}
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
        codeExecution(code,codeStates)
      }
    }catch(err){
      console.log(err)
    }
    try{
      if(Array.isArray(dfd_mongo_totalcalls_dfd_v1Props)){
      setinfo_summary_groupa2a0f((pre:any)=>({...pre,error_rate:dfd_mongo_totalcalls_dfd_v1Props[0]?.error_rate}));
  }
    }catch(err){
      console.log(err);
    }
  }

  const handleClick=async(value:Record<string, any>):Promise<void>=>{
  }


useEffect(() => {
  if (prevRefreshRef.current) {
    handleMapperDetails()
  }else 
  prevRefreshRef.current= true
},[error_rate960d3?.refresh])

useEffect(() => {
  if(Array.isArray(dfd_mongo_totalcalls_dfd_v1Props)){
    setinfo_summary_groupa2a0f((pre:any)=>({...pre,error_rate:dfd_mongo_totalcalls_dfd_v1Props[0]?.error_rate}));
  }
},[dfd_mongo_totalcalls_dfd_v1Props])

  const style = {
    
    display: 'flex',
   // boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)', 
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

  if (error_rate960d3?.isHidden) {
    return <></>
  }  
  return (
    <div 
    style={{gridColumn: `17 / 25`,gridRow: `1 / 27`, gap:``, height: `100%`, overflow: 'auto'}} >
      <Card 
      style={style}
      className="p-1 !text-lg"   
      theme="danger"
      view="filled"
      label={keyset("Error Rate")}
      disabled= {error_rate960d3?.isDisabled ? true : false}
      onClick={handleClick} 
      contentAlign={"center"}
      >
      {info_summary_groupa2a0f?.error_rate?info_summary_groupa2a0f?.error_rate:"0"}
      </Card>
    </div>
  )
}

export default Carderror_rate
