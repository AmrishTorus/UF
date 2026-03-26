




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
import Texttotal_used_api_text  from "./Texttotal_used_api_text";
import Textget_accounts_text  from "./Textget_accounts_text";
import Progressget_acc_progress  from "./Progressget_acc_progress";
import Textget_account_id_text  from "./Textget_account_id_text";
import Progressget_acc_id_progress  from "./Progressget_acc_id_progress";
import Textget_balance_text  from "./Textget_balance_text";
import Progressget_balance_progress  from "./Progressget_balance_progress";
import Textget_direct_debits_text  from "./Textget_direct_debits_text";
import Progressget_direct_debits_progress  from "./Progressget_direct_debits_progress";
import Textproducts_text  from "./Textproducts_text";
import Progressproduct_progress  from "./Progressproduct_progress";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { getCookie } from "@/app/components/cookieMgment";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { useTheme } from '@/hooks/useTheme';


const Grouptotal_used_api_group = ({lockedData={},setLockedData,primaryTableData={}, setPrimaryTableData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagPageData, nodeData, setNodeData,paginationDetails,isFormOpen=false,setIsProcessing}:any)=> {
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
      "total_used_api_text",
      "get_accounts_text",
      "get_acc_progress",
      "get_account_id_text",
      "get_acc_id_progress",
      "get_balance_text",
      "get_balance_progress",
      "get_direct_debits_text",
      "get_direct_debits_progress",
      "products_text",
      "product_progress"
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
  const {total_used_api_text0681a, settotal_used_api_text0681a}= useContext(TotalContext) as TotalContextProps;
  const {get_accounts_textded93, setget_accounts_textded93}= useContext(TotalContext) as TotalContextProps;
  const {get_acc_progressf3140, setget_acc_progressf3140}= useContext(TotalContext) as TotalContextProps;
  const {get_account_id_textcfcd9, setget_account_id_textcfcd9}= useContext(TotalContext) as TotalContextProps;
  const {get_acc_id_progress564cc, setget_acc_id_progress564cc}= useContext(TotalContext) as TotalContextProps;
  const {get_balance_textc22b2, setget_balance_textc22b2}= useContext(TotalContext) as TotalContextProps;
  const {get_balance_progressa0d54, setget_balance_progressa0d54}= useContext(TotalContext) as TotalContextProps;
  const {get_direct_debits_text067ca, setget_direct_debits_text067ca}= useContext(TotalContext) as TotalContextProps;
  const {get_direct_debits_progress04032, setget_direct_debits_progress04032}= useContext(TotalContext) as TotalContextProps;
  const {products_textc39eb, setproducts_textc39eb}= useContext(TotalContext) as TotalContextProps;
  const {product_progressee376, setproduct_progressee376}= useContext(TotalContext) as TotalContextProps;
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
  const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Design:AFVK:v1",componentId:"d42ef98a96c5441a8eeb036107ccd37d",from:"GroupTotalUsedApiGroup",accessProfile:accessProfile},{
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
    if(orchestrationData?.data?.readableControls.includes("total_used_api_text")){
      settotal_used_api_text0681a({...total_used_api_text0681a,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("get_accounts_text")){
      setget_accounts_textded93({...get_accounts_textded93,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("get_acc_progress")){
      setget_acc_progressf3140({...get_acc_progressf3140,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("get_account_id_text")){
      setget_account_id_textcfcd9({...get_account_id_textcfcd9,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("get_acc_id_progress")){
      setget_acc_id_progress564cc({...get_acc_id_progress564cc,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("get_balance_text")){
      setget_balance_textc22b2({...get_balance_textc22b2,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("get_balance_progress")){
      setget_balance_progressa0d54({...get_balance_progressa0d54,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("get_direct_debits_text")){
      setget_direct_debits_text067ca({...get_direct_debits_text067ca,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("get_direct_debits_progress")){
      setget_direct_debits_progress04032({...get_direct_debits_progress04032,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("products_text")){
      setproducts_textc39eb({...products_textc39eb,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("product_progress")){
      setproduct_progressee376({...product_progressee376,isDisabled:true});
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
  const total_used_api_groupcd37dRef = useRef<any>(null);
  const handleClearSearch = () => {
    total_used_api_groupcd37dRef.current?.setSearchParams();
    total_used_api_groupcd37dRef.current?.handleSearch({});
  };

  useEffect(() => {    
    securityCheck()   
    handleOnload()
    if (prevRefreshRef.current) {
      if(!Array.isArray(total_used_api_groupcd37d) && Object.keys(total_used_api_groupcd37d)?.length>0)
      {
        settotal_used_api_groupcd37d({})
      }
    }else 
      prevRefreshRef.current= true
  }, [total_used_api_groupcd37dProps?.refresh,token])


  const renderBUttons=()=>{
    return (
      <></>
    )
  }
  return (
    <div 
      style={{          
        gridColumn: '10 / 16',
        gridRow: '41 / 115',
      
        //rowGap: '0px',
        display: 'grid',
        gridTemplateColumns: 'repeat(24, 1fr)',
        gridTemplateRows: 'repeat(auto-fill, minmax(4px, 1fr))',
        height: '100%',
        overflow: 'auto',
        gridAutoRows: '4px',
        columnGap: '2px',
        backgroundColor:'',
        backgroundImage:"url('')",
        backgroundPosition: '',
        backgroundSize: '',
        backgroundRepeat: '',
        backgroundAttachment: '',
        backgroundClip: '',
        backgroundBlendMode: ''
      }}
      className={`flex flex-col overflow-auto rounded-md p-1  ${isDark ? 'text-white' : 'text-black'}`}
    >
          {allowedControls.includes("total_used_api_text") ?<Texttotal_used_api_text   /* 0681a */ isDynamic={false } index={idx} item={item} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
          {allowedControls.includes("get_accounts_text") ?<Textget_accounts_text   /* ded93 */ isDynamic={false } index={idx} item={item} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("get_acc_progress")?<Progressget_acc_progress  /* f3140 */ isDynamic={false } index={idx} item={item} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
          {allowedControls.includes("get_account_id_text") ?<Textget_account_id_text   /* cfcd9 */ isDynamic={false } index={idx} item={item} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("get_acc_id_progress")?<Progressget_acc_id_progress  /* 564cc */ isDynamic={false } index={idx} item={item} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
          {allowedControls.includes("get_balance_text") ?<Textget_balance_text   /* c22b2 */ isDynamic={false } index={idx} item={item} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("get_balance_progress")?<Progressget_balance_progress  /* a0d54 */ isDynamic={false } index={idx} item={item} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
          {allowedControls.includes("get_direct_debits_text") ?<Textget_direct_debits_text   /* 067ca */ isDynamic={false } index={idx} item={item} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("get_direct_debits_progress")?<Progressget_direct_debits_progress  /* 04032 */ isDynamic={false } index={idx} item={item} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
          {allowedControls.includes("products_text") ?<Textproducts_text   /* c39eb */ isDynamic={false } index={idx} item={item} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("product_progress")?<Progressproduct_progress  /* ee376 */ isDynamic={false } index={idx} item={item} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
    </div>
 )
}

export default Grouptotal_used_api_group
