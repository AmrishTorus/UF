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
  const {api_usage_group868b4, setapi_usage_group868b4}= useContext(TotalContext) as TotalContextProps  
  const {api_usage_group868b4Props, setapi_usage_group868b4Props}= useContext(TotalContext) as TotalContextProps  
  const {req_groupdf5e7, setreq_groupdf5e7}= useContext(TotalContext) as TotalContextProps  
  const {req_groupdf5e7Props, setreq_groupdf5e7Props}= useContext(TotalContext) as TotalContextProps  
  const {active_group31e18, setactive_group31e18}= useContext(TotalContext) as TotalContextProps  
  const {active_group31e18Props, setactive_group31e18Props}= useContext(TotalContext) as TotalContextProps  
  const {total_api_calls_groupd4dee, settotal_api_calls_groupd4dee}= useContext(TotalContext) as TotalContextProps  
  const {total_api_calls_groupd4deeProps, settotal_api_calls_groupd4deeProps}= useContext(TotalContext) as TotalContextProps  
  const {most_groupc5ce0, setmost_groupc5ce0}= useContext(TotalContext) as TotalContextProps  
  const {most_groupc5ce0Props, setmost_groupc5ce0Props}= useContext(TotalContext) as TotalContextProps  
  const {error_rate72497, seterror_rate72497}= useContext(TotalContext) as TotalContextProps  
  const {error_rate_icon89a9a, seterror_rate_icon89a9a}= useContext(TotalContext) as TotalContextProps  
  const {line_chart_groupadc5c, setline_chart_groupadc5c}= useContext(TotalContext) as TotalContextProps  
  const {line_chart_groupadc5cProps, setline_chart_groupadc5cProps}= useContext(TotalContext) as TotalContextProps  
  const {api_call_over_frequency_subscreenb8acc, setapi_call_over_frequency_subscreenb8acc}= useContext(TotalContext) as TotalContextProps  
  const {api_call_over_frequency_subscreenb8accProps, setapi_call_over_frequency_subscreenb8accProps}= useContext(TotalContext) as TotalContextProps  
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7, setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7}= useContext(TotalContext) as TotalContextProps  
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props}= useContext(TotalContext) as TotalContextProps  
  const {api_call_over_hour_group12590, setapi_call_over_hour_group12590}= useContext(TotalContext) as TotalContextProps  
  const {api_call_over_hour_group12590Props, setapi_call_over_hour_group12590Props}= useContext(TotalContext) as TotalContextProps  
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789, setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789}= useContext(TotalContext) as TotalContextProps  
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props}= useContext(TotalContext) as TotalContextProps  
  const {api_call_over_month_groupd1676, setapi_call_over_month_groupd1676}= useContext(TotalContext) as TotalContextProps  
  const {api_call_over_month_groupd1676Props, setapi_call_over_month_groupd1676Props}= useContext(TotalContext) as TotalContextProps  
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3, setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3}= useContext(TotalContext) as TotalContextProps  
  const {ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props}= useContext(TotalContext) as TotalContextProps  
  const {api_call_over_week_group03bb6, setapi_call_over_week_group03bb6}= useContext(TotalContext) as TotalContextProps  
  const {api_call_over_week_group03bb6Props, setapi_call_over_week_group03bb6Props}= useContext(TotalContext) as TotalContextProps  
  const {total_used_api_groupcd37d, settotal_used_api_groupcd37d}= useContext(TotalContext) as TotalContextProps  
  const {total_used_api_groupcd37dProps, settotal_used_api_groupcd37dProps}= useContext(TotalContext) as TotalContextProps  
  const {list_of_register_tpp_groupbe9d5, setlist_of_register_tpp_groupbe9d5}= useContext(TotalContext) as TotalContextProps  
  const {list_of_register_tpp_groupbe9d5Props, setlist_of_register_tpp_groupbe9d5Props}= useContext(TotalContext) as TotalContextProps  
  const {connected_application19ab2, setconnected_application19ab2}= useContext(TotalContext) as TotalContextProps  
  const {connected_application19ab2Props, setconnected_application19ab2Props}= useContext(TotalContext) as TotalContextProps  
  const {api_repo_table162e4, setapi_repo_table162e4}= useContext(TotalContext) as TotalContextProps  
  const {api_repo_table162e4Props, setapi_repo_table162e4Props}= useContext(TotalContext) as TotalContextProps  
  const {api_repositoryb1ab8, setapi_repositoryb1ab8}= useContext(TotalContext) as TotalContextProps  
  const {api_repositoryb1ab8Props, setapi_repositoryb1ab8Props}= useContext(TotalContext) as TotalContextProps  
  const {group1233a04c, setgroup1233a04c}= useContext(TotalContext) as TotalContextProps  
  const {group1233a04cProps, setgroup1233a04cProps}= useContext(TotalContext) as TotalContextProps  
  const {group4549ff98, setgroup4549ff98}= useContext(TotalContext) as TotalContextProps  
  const {group4549ff98Props, setgroup4549ff98Props}= useContext(TotalContext) as TotalContextProps  
  const {group657d5, setgroup657d5}= useContext(TotalContext) as TotalContextProps  
  const {group657d5Props, setgroup657d5Props}= useContext(TotalContext) as TotalContextProps  
  const {group6576622ab, setgroup6576622ab}= useContext(TotalContext) as TotalContextProps  
  const {group6576622abProps, setgroup6576622abProps}= useContext(TotalContext) as TotalContextProps  
  const {group796798bff3, setgroup796798bff3}= useContext(TotalContext) as TotalContextProps  
  const {group796798bff3Props, setgroup796798bff3Props}= useContext(TotalContext) as TotalContextProps  
  //////////////
 
  
  const handleMapperDetails=async():Promise<void>=>{
    try{
    let code:string;
    const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Design:AFVK:v1",  componentId:"e46460169e424963a78d04eee5ec5ce0",controlId:"54043c1682304c12af6d8074e9972497",isTable:false,accessProfile:accessProfile,from:"cardError Rate"},{
      headers: {
        Authorization: `Bearer ${token}`
    }})
    code = orchestrationData?.data?.code;
    if (code != '') {
          let codeStates: Record<string, any> = {}
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
          codeStates['CT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Hour_v1']  = ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7,
          codeStates['setCT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Hour_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7,
          codeStates['api_call_over_hour_group']  = api_call_over_hour_group12590,
          codeStates['setapi_call_over_hour_group'] = setapi_call_over_hour_group12590,
          codeStates['CT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Month_v1']  = ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789,
          codeStates['setCT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Month_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789,
          codeStates['api_call_over_month_group']  = api_call_over_month_groupd1676,
          codeStates['setapi_call_over_month_group'] = setapi_call_over_month_groupd1676,
          codeStates['CT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Week_v1']  = ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3,
          codeStates['setCT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Week_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3,
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
        codeExecution(code,codeStates)
      }
    }catch(err){
      console.log(err)
    }
    try{
      if(Array.isArray(dfd_mongodb_maindashboard_dfd_v1Props)){
      setmost_groupc5ce0((pre:any)=>({...pre,error:dfd_mongodb_maindashboard_dfd_v1Props[0]?.error}));
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
},[error_rate72497?.refresh])

useEffect(() => {
  if(Array.isArray(dfd_mongodb_maindashboard_dfd_v1Props)){
    setmost_groupc5ce0((pre:any)=>({...pre,error:dfd_mongodb_maindashboard_dfd_v1Props[0]?.error}));
  }
},[dfd_mongodb_maindashboard_dfd_v1Props])

  const style = {
    
    display: 'flex',
   // boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)', 
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

  if (error_rate72497?.isHidden) {
    return <></>
  }  
  return (
    <div 
    style={{gridColumn: `7 / 25`,gridRow: `1 / 22`, gap:``, height: `100%`, overflow: 'auto'}} >
      <Card 
      style={style}
      className="!rounded-[10px] p-1 !text-xl !text-white font-bold"   
      theme="normal"
      view="clear"
      label={keyset("Error Rate")}
      disabled= {error_rate72497?.isDisabled ? true : false}
      onClick={handleClick} 
      contentAlign={"center"}
      >
      {most_groupc5ce0?.error?most_groupc5ce0?.error:"0"}
      </Card>
    </div>
  )
}

export default Carderror_rate
