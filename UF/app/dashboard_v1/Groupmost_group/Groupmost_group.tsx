




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
import Cardmost_used_apis  from "./Cardmost_used_apis";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { getCookie } from "@/app/components/cookieMgment";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { useTheme } from '@/hooks/useTheme';


const Groupmost_group = ({lockedData={},setLockedData,primaryTableData={}, setPrimaryTableData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagPageData, nodeData, setNodeData,paginationDetails,isFormOpen=false,setIsProcessing}:any)=> {
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
  const {dfd_mongodb_maindashboard_dfd_v1Props, setdfd_mongodb_maindashboard_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_tob_consents_request_dfd_v1Props, setdfd_tob_consents_request_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_api_repository_dfd_v1Props, setdfd_mongo_api_repository_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_barchart_dfd_v1Props, setdfd_mongo_barchart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_linechart_dfd_v1Props, setdfd_mongo_linechart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
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
      "most_used_apis"
    ],
    "allowedGroups": [
      "canvas",
      "vob_dashboard_screen",
      "most_group",
      "active_group",
      "req_group",
      "error_group",
      "line_chart_group",
      "bar_chart_group",
      "api_repo_table",
      "api_repository",
      "connected_application"
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
  const {vob_dashboard_screen9ce49, setvob_dashboard_screen9ce49}= useContext(TotalContext) as TotalContextProps;
  const {vob_dashboard_screen9ce49Props, setvob_dashboard_screen9ce49Props}= useContext(TotalContext) as TotalContextProps;
  const {most_groupc5ce0, setmost_groupc5ce0}= useContext(TotalContext) as TotalContextProps;
  const {most_groupc5ce0Props, setmost_groupc5ce0Props}= useContext(TotalContext) as TotalContextProps;
  const {most_used_apis72497, setmost_used_apis72497}= useContext(TotalContext) as TotalContextProps;
  const {active_group31e18, setactive_group31e18}= useContext(TotalContext) as TotalContextProps;
  const {active_group31e18Props, setactive_group31e18Props}= useContext(TotalContext) as TotalContextProps;
  const {req_groupdf5e7, setreq_groupdf5e7}= useContext(TotalContext) as TotalContextProps;
  const {req_groupdf5e7Props, setreq_groupdf5e7Props}= useContext(TotalContext) as TotalContextProps;
  const {error_groupcf699, seterror_groupcf699}= useContext(TotalContext) as TotalContextProps;
  const {error_groupcf699Props, seterror_groupcf699Props}= useContext(TotalContext) as TotalContextProps;
  const {line_chart_groupadc5c, setline_chart_groupadc5c}= useContext(TotalContext) as TotalContextProps;
  const {line_chart_groupadc5cProps, setline_chart_groupadc5cProps}= useContext(TotalContext) as TotalContextProps;
  const {bar_chart_group31635, setbar_chart_group31635}= useContext(TotalContext) as TotalContextProps;
  const {bar_chart_group31635Props, setbar_chart_group31635Props}= useContext(TotalContext) as TotalContextProps;
  const {api_repo_table162e4, setapi_repo_table162e4}= useContext(TotalContext) as TotalContextProps;
  const {api_repo_table162e4Props, setapi_repo_table162e4Props}= useContext(TotalContext) as TotalContextProps;
  const {api_repositoryb1ab8, setapi_repositoryb1ab8}= useContext(TotalContext) as TotalContextProps;
  const {api_repositoryb1ab8Props, setapi_repositoryb1ab8Props}= useContext(TotalContext) as TotalContextProps;
  const {connected_application17a5d, setconnected_application17a5d}= useContext(TotalContext) as TotalContextProps;
  const {connected_application17a5dProps, setconnected_application17a5dProps}= useContext(TotalContext) as TotalContextProps;
  //////////////
  const [open, setOpen] = React.useState(false);
  async function securityCheck() {
  const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Screen:AFVK:v1",componentId:"e46460169e424963a78d04eee5ec5ce0",from:"GroupMostGroup",accessProfile:accessProfile},{
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
    if(orchestrationData?.data?.readableControls.includes("most_used_apis")){
      setmost_used_apis72497({...most_used_apis72497,isDisabled:true});
    }
  //////////////
    if (code != '') {
      let codeStates: any = {};
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

    codeExecution(code,codeStates);
    } 
  }


    const handleOnload=()=>{
  }
  const handleOnChange=()=>{

  }
  const most_groupc5ce0Ref = useRef<any>(null);
  const handleClearSearch = () => {
    most_groupc5ce0Ref.current?.setSearchParams();
    most_groupc5ce0Ref.current?.handleSearch({});
  };

  useEffect(() => {    
    securityCheck()   
    handleOnload()
    if (prevRefreshRef.current) {
      if(!Array.isArray(most_groupc5ce0) && Object.keys(most_groupc5ce0)?.length>0)
      {
        setmost_groupc5ce0({})
      }
    }else 
      prevRefreshRef.current= true
  }, [most_groupc5ce0Props?.refresh,token])


  const renderBUttons=()=>{
    return (
      <></>
    )
  }
  return (
    <div 
      style={{          
        gridColumn: '1 / 7',
        gridRow: '1 / 49',
      
        //rowGap: '0px',
        display: 'grid',
        gridTemplateColumns: 'repeat(24, 1fr)',
        gridTemplateRows: 'repeat(auto-fill, minmax(4px, 1fr))',
        height: '100%',
        overflow: 'auto',
        gridAutoRows: '4px',
        columnGap: '0px',
        backgroundColor:'',
        backgroundImage:"url('https://cdns3dfsdev.toruslowcode.com/torus/9.1/CT009/resources/images/blue.jpg')",
        backgroundPosition: '',
        backgroundSize: '',
        backgroundRepeat: '',
        backgroundAttachment: '',
        backgroundClip: '',
        backgroundBlendMode: ''
      }}
      className={`flex flex-col overflow-auto rounded-md !rounded-3xl ${isDark ? 'text-white' : 'text-black'}`}
    >
        {allowedControls.includes("most_used_apis") ?<Cardmost_used_apis  /* 72497 */checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData}  />: <div></div>}
    </div>
 )
}

export default Groupmost_group
