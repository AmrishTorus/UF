




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
import Labelapinames  from "./Labelapinames";
import Labelversions  from "./Labelversions";
import Labelstatuss  from "./Labelstatuss";
import Labelapi_categorys  from "./Labelapi_categorys";
import Labelrelease_dates  from "./Labelrelease_dates";
import Labelapi_resource_paths  from "./Labelapi_resource_paths";
import TextInputapiname  from "./TextInputapiname";
import TextInputversion  from "./TextInputversion";
import TextInputstatus  from "./TextInputstatus";
import TextInputapi_category  from "./TextInputapi_category";
import TextInputrelease_date  from "./TextInputrelease_date";
import TextInputapi_resourcepath  from "./TextInputapi_resourcepath";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { getCookie } from "@/app/components/cookieMgment";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { useTheme } from '@/hooks/useTheme';


const Groupinfo_group = ({lockedData={},setLockedData,primaryTableData={}, setPrimaryTableData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagPageData, nodeData, setNodeData,paginationDetails,isFormOpen=false,setIsProcessing}:any)=> {
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
  const {dfd_mongo_totalcalls_dfd_v1Props, setdfd_mongo_totalcalls_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_api_repository_dfd_v1Props, setdfd_mongo_api_repository_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongodb_api_process_logs_dfd_v1Props, setdfd_mongodb_api_process_logs_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
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
      "apinames",
      "versions",
      "statuss",
      "api_categorys",
      "release_dates",
      "api_resource_paths",
      "apiname",
      "version",
      "status",
      "api_category",
      "release_date",
      "api_resourcepath"
    ],
    "allowedGroups": [
      "canvas",
      "api_info_group",
      "info_group",
      "info_summary_group",
      "api_process_log_group",
      "api_process_log"
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
  const [open, setOpen] = React.useState(false);
  async function securityCheck() {
  const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1",componentId:"f0167144898c456bb433c00a9b75e349",from:"GroupInfoGroup",accessProfile:accessProfile},{
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
    if(orchestrationData?.data?.readableControls.includes("apinames")){
      setapinamesf3b7f({...apinamesf3b7f,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("versions")){
      setversions69477({...versions69477,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("statuss")){
      setstatuss6320b({...statuss6320b,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("api_categorys")){
      setapi_categorys43935({...api_categorys43935,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("release_dates")){
      setrelease_datesd97a1({...release_datesd97a1,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("api_resource_paths")){
      setapi_resource_paths6c67f({...api_resource_paths6c67f,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("apiname")){
      setapiname45fa8({...apiname45fa8,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("version")){
      setversiona736c({...versiona736c,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("status")){
      setstatusddf07({...statusddf07,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("api_category")){
      setapi_category95348({...api_category95348,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("release_date")){
      setrelease_dateb41fc({...release_dateb41fc,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("api_resourcepath")){
      setapi_resourcepath88fa9({...api_resourcepath88fa9,isDisabled:true});
    }
  //////////////
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


    const handleOnload=()=>{
  }
  const handleOnChange=()=>{

  }
  const info_group5e349Ref = useRef<any>(null);
  const handleClearSearch = () => {
    info_group5e349Ref.current?.setSearchParams();
    info_group5e349Ref.current?.handleSearch({});
  };

  useEffect(() => {    
    securityCheck()   
    handleOnload()
    if (prevRefreshRef.current) {
      if(!Array.isArray(info_group5e349) && Object.keys(info_group5e349)?.length>0)
      {
        setinfo_group5e349({})
      }
    }else 
      prevRefreshRef.current= true
  }, [info_group5e349Props?.refresh,token])


  const renderBUttons=()=>{
    return (
      <></>
    )
  }
  return (
    <div 
      style={{          
        gridColumn: '1 / 16',
        gridRow: '13 / 42',
      
        //rowGap: '0px',
        display: 'grid',
        gridTemplateColumns: 'repeat(24, 1fr)',
        gridTemplateRows: 'repeat(auto-fill, minmax(4px, 1fr))',
        height: '100%',
        overflow: 'auto',
        gridAutoRows: '4px',
        columnGap: '0px',
        backgroundColor:'#ededed',
        backgroundImage:"url('')",
        backgroundPosition: '',
        backgroundSize: '',
        backgroundRepeat: '',
        backgroundAttachment: '',
        backgroundClip: '',
        backgroundBlendMode: ''
      }}
      className={`flex flex-col overflow-auto rounded-md p-1 ${isDark ? 'text-white' : 'text-black'}`}
    >
        {allowedControls.includes("apinames")?<Labelapinames   /* f3b7f */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("versions")?<Labelversions   /* 69477 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("statuss")?<Labelstatuss   /* 6320b */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("api_categorys")?<Labelapi_categorys   /* 43935 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("release_dates")?<Labelrelease_dates   /* d97a1 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("api_resource_paths")?<Labelapi_resource_paths   /* 6c67f */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("apiname") ?<TextInputapiname   /* 45fa8 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("version") ?<TextInputversion   /* a736c */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("status") ?<TextInputstatus   /* ddf07 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("api_category") ?<TextInputapi_category   /* 95348 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("release_date") ?<TextInputrelease_date   /* b41fc */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("api_resourcepath") ?<TextInputapi_resourcepath   /* 88fa9 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
    </div>
 )
}

export default Groupinfo_group
