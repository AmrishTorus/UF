




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
import Iconmost_used_api_icon  from "./Iconmost_used_api_icon";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { getCookie } from "@/app/components/cookieMgment";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { useTheme } from '@/hooks/useTheme';


const Grouptotal_api_calls_group = ({lockedData={},setLockedData,primaryTableData={}, setPrimaryTableData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagPageData, nodeData, setNodeData,paginationDetails,isFormOpen=false,setIsProcessing}:any)=> {
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
  const {dfd_mongo_linechart_dfd_v1Props, setdfd_mongo_linechart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_tob_consents_request_dfd_v1Props, setdfd_tob_consents_request_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_api_repository_dfd_v1Props, setdfd_mongo_api_repository_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongodb_maindashboard_dfd_v1Props, setdfd_mongodb_maindashboard_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_tob_total_used_api_dfd_v1Props, setdfd_tob_total_used_api_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
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
      "most_used_apis",
      "most_used_api_icon"
    ],
    "allowedGroups": [
      "canvas",
      "vob_dashboard_screen",
      "api_usage_group",
      "req_group",
      "active_group",
      "total_api_calls_group",
      "most_group",
      "line_chart_group",
      "api_call_over_frequency_subscreen",
      "ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1",
      "api_call_over_hour_group",
      "ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1",
      "api_call_over_month_group",
      "ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1",
      "api_call_over_week_group",
      "total_used_api_group",
      "list_of_register_tpp_group",
      "connected_application",
      "api_repo_table",
      "api_repository",
      "group123",
      "group454",
      "group",
      "group6576",
      "group79679"
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
  const {api_usage_group868b4, setapi_usage_group868b4}= useContext(TotalContext) as TotalContextProps;
  const {api_usage_group868b4Props, setapi_usage_group868b4Props}= useContext(TotalContext) as TotalContextProps;
  const {req_groupdf5e7, setreq_groupdf5e7}= useContext(TotalContext) as TotalContextProps;
  const {req_groupdf5e7Props, setreq_groupdf5e7Props}= useContext(TotalContext) as TotalContextProps;
  const {active_group31e18, setactive_group31e18}= useContext(TotalContext) as TotalContextProps;
  const {active_group31e18Props, setactive_group31e18Props}= useContext(TotalContext) as TotalContextProps;
  const {total_api_calls_groupd4dee, settotal_api_calls_groupd4dee}= useContext(TotalContext) as TotalContextProps;
  const {total_api_calls_groupd4deeProps, settotal_api_calls_groupd4deeProps}= useContext(TotalContext) as TotalContextProps;
  const {most_used_apis2686b, setmost_used_apis2686b}= useContext(TotalContext) as TotalContextProps;
  const {most_used_api_icon6560d, setmost_used_api_icon6560d}= useContext(TotalContext) as TotalContextProps;
  const {most_groupc5ce0, setmost_groupc5ce0}= useContext(TotalContext) as TotalContextProps;
  const {most_groupc5ce0Props, setmost_groupc5ce0Props}= useContext(TotalContext) as TotalContextProps;
  const {line_chart_groupadc5c, setline_chart_groupadc5c}= useContext(TotalContext) as TotalContextProps;
  const {line_chart_groupadc5cProps, setline_chart_groupadc5cProps}= useContext(TotalContext) as TotalContextProps;
  const {api_call_over_frequency_subscreenb8acc, setapi_call_over_frequency_subscreenb8acc}= useContext(TotalContext) as TotalContextProps;
  const {api_call_over_frequency_subscreenb8accProps, setapi_call_over_frequency_subscreenb8accProps}= useContext(TotalContext) as TotalContextProps;
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7, setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7}= useContext(TotalContext) as TotalContextProps;
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props}= useContext(TotalContext) as TotalContextProps;
  const {api_call_over_hour_group12590, setapi_call_over_hour_group12590}= useContext(TotalContext) as TotalContextProps;
  const {api_call_over_hour_group12590Props, setapi_call_over_hour_group12590Props}= useContext(TotalContext) as TotalContextProps;
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789, setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789}= useContext(TotalContext) as TotalContextProps;
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props}= useContext(TotalContext) as TotalContextProps;
  const {api_call_over_month_groupd1676, setapi_call_over_month_groupd1676}= useContext(TotalContext) as TotalContextProps;
  const {api_call_over_month_groupd1676Props, setapi_call_over_month_groupd1676Props}= useContext(TotalContext) as TotalContextProps;
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3, setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3}= useContext(TotalContext) as TotalContextProps;
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props}= useContext(TotalContext) as TotalContextProps;
  const {api_call_over_week_group03bb6, setapi_call_over_week_group03bb6}= useContext(TotalContext) as TotalContextProps;
  const {api_call_over_week_group03bb6Props, setapi_call_over_week_group03bb6Props}= useContext(TotalContext) as TotalContextProps;
  const {total_used_api_groupcd37d, settotal_used_api_groupcd37d}= useContext(TotalContext) as TotalContextProps;
  const {total_used_api_groupcd37dProps, settotal_used_api_groupcd37dProps}= useContext(TotalContext) as TotalContextProps;
  const {list_of_register_tpp_groupbe9d5, setlist_of_register_tpp_groupbe9d5}= useContext(TotalContext) as TotalContextProps;
  const {list_of_register_tpp_groupbe9d5Props, setlist_of_register_tpp_groupbe9d5Props}= useContext(TotalContext) as TotalContextProps;
  const {connected_application19ab2, setconnected_application19ab2}= useContext(TotalContext) as TotalContextProps;
  const {connected_application19ab2Props, setconnected_application19ab2Props}= useContext(TotalContext) as TotalContextProps;
  const {api_repo_table162e4, setapi_repo_table162e4}= useContext(TotalContext) as TotalContextProps;
  const {api_repo_table162e4Props, setapi_repo_table162e4Props}= useContext(TotalContext) as TotalContextProps;
  const {api_repositoryb1ab8, setapi_repositoryb1ab8}= useContext(TotalContext) as TotalContextProps;
  const {api_repositoryb1ab8Props, setapi_repositoryb1ab8Props}= useContext(TotalContext) as TotalContextProps;
  const {group1233a04c, setgroup1233a04c}= useContext(TotalContext) as TotalContextProps;
  const {group1233a04cProps, setgroup1233a04cProps}= useContext(TotalContext) as TotalContextProps;
  const {group4549ff98, setgroup4549ff98}= useContext(TotalContext) as TotalContextProps;
  const {group4549ff98Props, setgroup4549ff98Props}= useContext(TotalContext) as TotalContextProps;
  const {group657d5, setgroup657d5}= useContext(TotalContext) as TotalContextProps;
  const {group657d5Props, setgroup657d5Props}= useContext(TotalContext) as TotalContextProps;
  const {group6576622ab, setgroup6576622ab}= useContext(TotalContext) as TotalContextProps;
  const {group6576622abProps, setgroup6576622abProps}= useContext(TotalContext) as TotalContextProps;
  const {group796798bff3, setgroup796798bff3}= useContext(TotalContext) as TotalContextProps;
  const {group796798bff3Props, setgroup796798bff3Props}= useContext(TotalContext) as TotalContextProps;
  //////////////
  const [open, setOpen] = React.useState(false);
  async function securityCheck() {
  const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Design:AFVK:v1",componentId:"6f9c80070d3f414787075e5de4fd4dee",from:"GroupTotalApiCallsGroup",accessProfile:accessProfile},{
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
      setmost_used_apis2686b({...most_used_apis2686b,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("most_used_api_icon")){
      setmost_used_api_icon6560d({...most_used_api_icon6560d,isDisabled:true});
    }
  //////////////
    if (code != '') {
      let codeStates: any = {};
      codeStates['vob_dashboard_screen']  = vob_dashboard_screen9ce49,
      codeStates['setvob_dashboard_screen'] = setvob_dashboard_screen9ce49,
      codeStates['api_usage_group']  = api_usage_group868b4,
      codeStates['setapi_usage_group'] = setapi_usage_group868b4,
      codeStates['req_group']  = req_groupdf5e7,
      codeStates['setreq_group'] = setreq_groupdf5e7,
      codeStates['active_group']  = active_group31e18,
      codeStates['setactive_group'] = setactive_group31e18,
      codeStates['total_api_calls_group']  = total_api_calls_groupd4dee,
      codeStates['settotal_api_calls_group'] = settotal_api_calls_groupd4dee,
      codeStates['most_group']  = most_groupc5ce0,
      codeStates['setmost_group'] = setmost_groupc5ce0,
      codeStates['line_chart_group']  = line_chart_groupadc5c,
      codeStates['setline_chart_group'] = setline_chart_groupadc5c,
      codeStates['api_call_over_frequency_subscreen']  = api_call_over_frequency_subscreenb8acc,
      codeStates['setapi_call_over_frequency_subscreen'] = setapi_call_over_frequency_subscreenb8acc,
      codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1']  = ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7,
      codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7,
      codeStates['api_call_over_hour_group']  = api_call_over_hour_group12590,
      codeStates['setapi_call_over_hour_group'] = setapi_call_over_hour_group12590,
      codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1']  = ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789,
      codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789,
      codeStates['api_call_over_month_group']  = api_call_over_month_groupd1676,
      codeStates['setapi_call_over_month_group'] = setapi_call_over_month_groupd1676,
      codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1']  = ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3,
      codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3,
      codeStates['api_call_over_week_group']  = api_call_over_week_group03bb6,
      codeStates['setapi_call_over_week_group'] = setapi_call_over_week_group03bb6,
      codeStates['total_used_api_group']  = total_used_api_groupcd37d,
      codeStates['settotal_used_api_group'] = settotal_used_api_groupcd37d,
      codeStates['list_of_register_tpp_group']  = list_of_register_tpp_groupbe9d5,
      codeStates['setlist_of_register_tpp_group'] = setlist_of_register_tpp_groupbe9d5,
      codeStates['connected_application']  = connected_application19ab2,
      codeStates['setconnected_application'] = setconnected_application19ab2,
      codeStates['api_repo_table']  = api_repo_table162e4,
      codeStates['setapi_repo_table'] = setapi_repo_table162e4,
      codeStates['api_repository']  = api_repositoryb1ab8,
      codeStates['setapi_repository'] = setapi_repositoryb1ab8,
      codeStates['group123']  = group1233a04c,
      codeStates['setgroup123'] = setgroup1233a04c,
      codeStates['group454']  = group4549ff98,
      codeStates['setgroup454'] = setgroup4549ff98,
      codeStates['group']  = group657d5,
      codeStates['setgroup'] = setgroup657d5,
      codeStates['group6576']  = group6576622ab,
      codeStates['setgroup6576'] = setgroup6576622ab,
      codeStates['group79679']  = group796798bff3,
      codeStates['setgroup79679'] = setgroup796798bff3,

    codeExecution(code,codeStates);
    } 
  }


    const handleOnload=()=>{
  }
  const handleOnChange=()=>{

  }
  const total_api_calls_groupd4deeRef = useRef<any>(null);
  const handleClearSearch = () => {
    total_api_calls_groupd4deeRef.current?.setSearchParams();
    total_api_calls_groupd4deeRef.current?.handleSearch({});
  };

  useEffect(() => {    
    securityCheck()   
    handleOnload()
    if (prevRefreshRef.current) {
      if(!Array.isArray(total_api_calls_groupd4dee) && Object.keys(total_api_calls_groupd4dee)?.length>0)
      {
        settotal_api_calls_groupd4dee({})
      }
    }else 
      prevRefreshRef.current= true
  }, [total_api_calls_groupd4deeProps?.refresh,token])


  const renderBUttons=()=>{
    return (
      <></>
    )
  }
  return (
    <div 
      style={{          
        gridColumn: '13 / 19',
        gridRow: '17 / 39',
      
        //rowGap: '0px',
        display: 'grid',
        gridTemplateColumns: 'repeat(24, 1fr)',
        gridTemplateRows: 'repeat(auto-fill, minmax(4px, 1fr))',
        height: '100%',
        overflow: 'auto',
        gridAutoRows: '4px',
        columnGap: '0px',
        backgroundColor:'',
        backgroundImage:"url('https://cdns3dfsdev.toruslowcode.com/torus/9.1/CT009/resources/images/neeew1.jpg')",
        backgroundPosition: '',
        backgroundSize: '',
        backgroundRepeat: '',
        backgroundAttachment: '',
        backgroundClip: '',
        backgroundBlendMode: ''
      }}
      className={`flex flex-col overflow-auto rounded-md !rounded-xl ${isDark ? 'text-white' : 'text-black'}`}
    >
        {allowedControls.includes("most_used_apis") ?<Cardmost_used_apis  /* 2686b */checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData}  />: <div></div>}
        {allowedControls.includes("most_used_api_icon")?<Iconmost_used_api_icon /* 6560d */ encryptionFlagCompData={encryptionFlagCompData}  />: <div></div>}
    </div>
 )
}

export default Grouptotal_api_calls_group
