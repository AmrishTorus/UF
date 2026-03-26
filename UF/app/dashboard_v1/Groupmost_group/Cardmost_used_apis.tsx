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

const Cardmost_used_apis = ({checkToAdd,setCheckToAdd,encryptionFlagCompData}:any) => {
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();
  const token: string = getCookie('token');
  const decodedTokenObj:any = decodeToken(token);
  const {dfd_mongodb_maindashboard_dfd_v1Props, setdfd_mongodb_maindashboard_dfd_v1Props} = useContext(TotalContext) as TotalContextProps; 
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
  const {vob_dashboard_screen9ce49, setvob_dashboard_screen9ce49}= useContext(TotalContext) as TotalContextProps  
  const {vob_dashboard_screen9ce49Props, setvob_dashboard_screen9ce49Props}= useContext(TotalContext) as TotalContextProps  
  const {most_groupc5ce0, setmost_groupc5ce0}= useContext(TotalContext) as TotalContextProps  
  const {most_groupc5ce0Props, setmost_groupc5ce0Props}= useContext(TotalContext) as TotalContextProps  
  const {most_used_apis72497, setmost_used_apis72497}= useContext(TotalContext) as TotalContextProps  
  const {active_group31e18, setactive_group31e18}= useContext(TotalContext) as TotalContextProps  
  const {active_group31e18Props, setactive_group31e18Props}= useContext(TotalContext) as TotalContextProps  
  const {req_groupdf5e7, setreq_groupdf5e7}= useContext(TotalContext) as TotalContextProps  
  const {req_groupdf5e7Props, setreq_groupdf5e7Props}= useContext(TotalContext) as TotalContextProps  
  const {error_groupcf699, seterror_groupcf699}= useContext(TotalContext) as TotalContextProps  
  const {error_groupcf699Props, seterror_groupcf699Props}= useContext(TotalContext) as TotalContextProps  
  const {line_chart_groupadc5c, setline_chart_groupadc5c}= useContext(TotalContext) as TotalContextProps  
  const {line_chart_groupadc5cProps, setline_chart_groupadc5cProps}= useContext(TotalContext) as TotalContextProps  
  const {bar_chart_group31635, setbar_chart_group31635}= useContext(TotalContext) as TotalContextProps  
  const {bar_chart_group31635Props, setbar_chart_group31635Props}= useContext(TotalContext) as TotalContextProps  
  const {api_repo_table162e4, setapi_repo_table162e4}= useContext(TotalContext) as TotalContextProps  
  const {api_repo_table162e4Props, setapi_repo_table162e4Props}= useContext(TotalContext) as TotalContextProps  
  const {api_repositoryb1ab8, setapi_repositoryb1ab8}= useContext(TotalContext) as TotalContextProps  
  const {api_repositoryb1ab8Props, setapi_repositoryb1ab8Props}= useContext(TotalContext) as TotalContextProps  
  const {connected_application17a5d, setconnected_application17a5d}= useContext(TotalContext) as TotalContextProps  
  const {connected_application17a5dProps, setconnected_application17a5dProps}= useContext(TotalContext) as TotalContextProps  
  //////////////
 
  
  const handleMapperDetails=async():Promise<void>=>{
    try{
    let code:string;
    const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Screen:AFVK:v1",  componentId:"e46460169e424963a78d04eee5ec5ce0",controlId:"54043c1682304c12af6d8074e9972497",isTable:false,accessProfile:accessProfile,from:"cardMost Used API"},{
      headers: {
        Authorization: `Bearer ${token}`
    }})
    code = orchestrationData?.data?.code;
    if (code != '') {
          let codeStates: Record<string, any> = {}
          codeStates['vob_dashboard_screen']  = vob_dashboard_screen9ce49,
          codeStates['setvob_dashboard_screen'] = setvob_dashboard_screen9ce49,
          codeStates['most_group']  = most_groupc5ce0,
          codeStates['setmost_group'] = setmost_groupc5ce0,
          codeStates['active_group']  = active_group31e18,
          codeStates['setactive_group'] = setactive_group31e18,
          codeStates['req_group']  = req_groupdf5e7,
          codeStates['setreq_group'] = setreq_groupdf5e7,
          codeStates['error_group']  = error_groupcf699,
          codeStates['seterror_group'] = seterror_groupcf699,
          codeStates['line_chart_group']  = line_chart_groupadc5c,
          codeStates['setline_chart_group'] = setline_chart_groupadc5c,
          codeStates['bar_chart_group']  = bar_chart_group31635,
          codeStates['setbar_chart_group'] = setbar_chart_group31635,
          codeStates['api_repo_table']  = api_repo_table162e4,
          codeStates['setapi_repo_table'] = setapi_repo_table162e4,
          codeStates['api_repository']  = api_repositoryb1ab8,
          codeStates['setapi_repository'] = setapi_repositoryb1ab8,
          codeStates['connected_application']  = connected_application17a5d,
          codeStates['setconnected_application'] = setconnected_application17a5d,
        codeExecution(code,codeStates)
      }
    }catch(err){
      console.log(err)
    }
    try{
      if(Array.isArray(dfd_mongodb_maindashboard_dfd_v1Props)){
      setmost_groupc5ce0((pre:any)=>({...pre,most_used_apis:dfd_mongodb_maindashboard_dfd_v1Props[0]?.most_used_apis}));
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
},[most_used_apis72497?.refresh])

useEffect(() => {
  if(Array.isArray(dfd_mongodb_maindashboard_dfd_v1Props)){
    setmost_groupc5ce0((pre:any)=>({...pre,most_used_apis:dfd_mongodb_maindashboard_dfd_v1Props[0]?.most_used_apis}));
  }
},[dfd_mongodb_maindashboard_dfd_v1Props])

  const style = {
    
    display: 'flex',
   // boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)', 
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

  if (most_used_apis72497?.isHidden) {
    return <></>
  }  
  return (
    <div 
    style={{gridColumn: `1 / 25`,gridRow: `1 / 49`, gap:``, height: `100%`, overflow: 'auto'}} >
      <Card 
      style={style}
      className="!rounded-[10px] p-1 !text-3xl !text-white font-bold"   
      theme="normal"
      view="clear"
      label={keyset("Most Used API")}
      disabled= {most_used_apis72497?.isDisabled ? true : false}
      onClick={handleClick} 
      contentAlign={"center"}
      >
      {most_groupc5ce0?.most_used_apis?most_groupc5ce0?.most_used_apis:"0"}
      </Card>
    </div>
  )
}

export default Cardmost_used_apis
