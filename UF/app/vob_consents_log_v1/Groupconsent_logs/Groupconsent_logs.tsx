




'use client'
import React,{ useEffect, useState,useContext, useRef } from 'react';
import { AxiosService } from '@/app/components/axiosService';
import { uf_authorizationCheckDto } from '@/app/interfaces/interfaces';
import { codeExecution } from '@/app/utils/codeExecution';
import { useRouter } from 'next/navigation';
import { getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { useHandleGroupArrayCopyFormData } from '@/app/utils/commonfunctions'; 
import { CommonHeaderAndTooltip } from '@/components/CommonHeaderAndTooltip';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { Icon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import { eventBus } from '@/app/eventBus';
import clsx from "clsx";
import { useHandleDfdRefresh } from '@/context/dfdRefreshContext';
import evaluateDecisionTable from '@/app/utils/evaluateDecisionTable';
import decodeToken from '@/app/components/decodeToken';
import uoMapperData from '@/context/dfdmapperContolnames.json';
import Tableconsent_logs  from './Tableconsent_logs';  
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { getCookie } from "@/app/components/cookieMgment";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { useTheme } from '@/hooks/useTheme';


const Groupconsent_logs = ({lockedData={},setLockedData,primaryTableData={}, setPrimaryTableData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagPageData, nodeData, setNodeData,paginationDetails,isFormOpen=false,setIsProcessing}:any)=> {
  const token:string = getCookie('token'); 
  const decodedTokenObj:any = decodeToken(token);
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();
  const copyFormData=useHandleGroupArrayCopyFormData()
  let code:any = ``;
  let idx = "";
  let item = "";
  const { isDark, isHighContrast, bgStyle, textStyle } = useTheme();
  const {dfd_tob_consent_request_ca_dfd_v1Props, setdfd_tob_consent_request_ca_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const encryptionFlagComp: boolean = encryptionFlagPageData?.flag || false;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagPageData?.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagPageData?.method;
  let encryptionFlagCompData :any ={
    "flag":encryptionFlagComp,
    "dpd":encryptionDpd,
    "method":encryptionMethod
  };
  const [showFlag, setShowFlag] = React.useState<string>("");
  const securityData:any={
  "TOB Template ": {
    "allowedControls": [
      "request_consent_baseconsentid",
      "interactionid",
      "request_consent_permissions",
      "consentbody_data_revokedby",
      "request_consent_expiratriondatetime",
      "status"
    ],
    "allowedGroups": [
      "canvas",
      "consent_logs_group",
      "consent_logs"
    ],
    "blockedControls": [],
    "readOnlyControls": []
  }
};
  const prevRefreshRef = useRef(false);
  const [allowedComponent,setAllowedComponent]=useState<any>("");
  const [allowedControls,setAllowedControls]=useState<any>("");
  const toast=useInfoMsg();
  const confirmMsgFlag: boolean = false;
  const [allCode,setAllCode]=useState<any>("");
  const routes = useRouter();
  const [showProfileAsModalOpen, setShowProfileAsModalOpen] = React.useState(false);
  const [showElementAsPopupOpen, setShowElementAsPopupOpen] = React.useState(false);
  const [ButtonGoRuleData,setButtonGoRuleData]=useState<any>({})
 /////////////
   //another screen
  const {consent_logs_group3070a, setconsent_logs_group3070a}= useContext(TotalContext) as TotalContextProps;
  const {consent_logs_group3070aProps, setconsent_logs_group3070aProps}= useContext(TotalContext) as TotalContextProps;
  const {consent_logs53635, setconsent_logs53635}= useContext(TotalContext) as TotalContextProps;
  const {consent_logs53635Props, setconsent_logs53635Props}= useContext(TotalContext) as TotalContextProps;
  const {request_consent_baseconsentid4221e, setrequest_consent_baseconsentid4221e}= useContext(TotalContext) as TotalContextProps;
  const {interactionid5cd91, setinteractionid5cd91}= useContext(TotalContext) as TotalContextProps;
  const {request_consent_permissions1448d, setrequest_consent_permissions1448d}= useContext(TotalContext) as TotalContextProps;
  const {consentbody_data_revokedby6ede9, setconsentbody_data_revokedby6ede9}= useContext(TotalContext) as TotalContextProps;
  const {request_consent_expiratriondatetime3ba51, setrequest_consent_expiratriondatetime3ba51}= useContext(TotalContext) as TotalContextProps;
  const {status61386, setstatus61386}= useContext(TotalContext) as TotalContextProps;
  //////////////
  const [open, setOpen] = React.useState(false);
  async function securityCheck() {
  const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Consents_Log:AFVK:v1",componentId:"c6d9d40fe273408a8398282399253635",from:"GroupConsentLogs",isTable : true,accessProfile:accessProfile},{
    headers: {
      Authorization: `Bearer ${token}`
    }})
  code = orchestrationData?.data?.code;
  const security:any[] = orchestrationData?.data?.security;
  const allowedGroups:any[] = orchestrationData?.data?.allowedGroups;
  if(orchestrationData?.data?.error === true){
    toast(orchestrationData?.data?.errorDetails?.message, 'danger')
    return
  }
  setAllowedControls(security) 
  setAllowedComponent(allowedGroups) 
  if(orchestrationData?.data?.rule?.nodes?.length > 0){
    let schemaFlag:any = evaluateDecisionTable(orchestrationData?.data?.rule.nodes,{},{...decodedTokenObj});

    if (schemaFlag.output) {
      setShowFlag(schemaFlag.output.toLowerCase());
    }else{
      setShowFlag("")
    }
  }
    
  /////////////
    if(orchestrationData?.data?.readableControls.includes("request_consent_baseconsentid")){
      setrequest_consent_baseconsentid4221e({...request_consent_baseconsentid4221e,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("interactionid")){
      setinteractionid5cd91({...interactionid5cd91,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("request_consent_permissions")){
      setrequest_consent_permissions1448d({...request_consent_permissions1448d,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("consentbody_data_revokedby")){
      setconsentbody_data_revokedby6ede9({...consentbody_data_revokedby6ede9,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("request_consent_expiratriondatetime")){
      setrequest_consent_expiratriondatetime3ba51({...request_consent_expiratriondatetime3ba51,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("status")){
      setstatus61386({...status61386,isDisabled:true});
    }
  //////////////
  }


    const handleOnload=()=>{
  }
  const handleOnChange=()=>{

  }
  const consent_logs53635Ref = useRef<any>(null);
  const handleClearSearch = () => {
    consent_logs53635Ref.current?.setSearchParams();
    consent_logs53635Ref.current?.handleSearch({});
  };

  useEffect(() => {    
    securityCheck()   
    handleOnload()
    if (prevRefreshRef.current) {
      if(!Array.isArray(consent_logs53635) && Object.keys(consent_logs53635)?.length>0)
      {
        setconsent_logs53635({})
      }
    }else 
      prevRefreshRef.current= true
  }, [consent_logs53635Props?.refresh,token])


  const renderBUttons=()=>{
    return (
          <></>
    )
  }
  return (
    <div 
      style={{          
        gridColumn: '1 / 25',
        gridRow: '17 / 101',
      
        //rowGap: '0px',
        overflow: 'visible',
        backgroundColor:'',
        backgroundImage:"url('')",
        backgroundPosition: '',
        backgroundSize: '',
        backgroundRepeat: '',
        backgroundAttachment: '',
        backgroundClip: '',
        backgroundBlendMode: ''
      }}
      className={`flex flex-col overflow-auto rounded-md  ${isDark ? 'text-white' : 'text-black'}`}
    >
      <div className='flex flex-col h-full w-full min-w-0 overflow-auto'>
        <div className='flex flex-1 w-full min-h-0'>
       {<Tableconsent_logs headerButtonsRenders={renderBUttons}
        lockedData={lockedData} setLockedData={setLockedData}  primaryTableData={primaryTableData} setPrimaryTableData={setPrimaryTableData}  refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} paginationDetails={paginationDetails} open={open} setOpen={setOpen} ref={consent_logs53635Ref} ButtonGoRuleData={ButtonGoRuleData} setButtonGoRuleData ={setButtonGoRuleData}/>}
      </div>
      </div>
    </div>
 )
}

export default Groupconsent_logs
