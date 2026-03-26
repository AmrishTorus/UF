
'use client'
import { useContext, useEffect, useState, useRef } from 'react';
import { codeExecution } from '@/app/utils/codeExecution';
import { getCookie } from '@/app/components/cookieMgment';
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { AxiosService } from '@/app/components/axiosService';
import { te_refreshDto } from "@/app/interfaces/interfaces";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { useGlobal } from '@/context/GlobalContext'
import { Tooltip } from '@/components/Tooltip'
import { HeaderPosition, TooltipProps as TooltipPropsType } from "@/types/global";
import { LineChart } from '@/components/LineChart';
import { Text } from "@/components/Text";
import { Card } from '@/components/Card';

type ContentAlign = "left" | "center" | "right";

interface LineChartslineChartCompProps {
  encryptionFlagCompData: any;
}

export default function LineChartsweek_linechart({ 
  encryptionFlagCompData,
}: LineChartslineChartCompProps) {
  const token: string = getCookie('token');
  const { globalState, setGlobalState } = useContext(TotalContext) as TotalContextProps;
  const { accessProfile, setAccessProfile } = useContext(TotalContext) as TotalContextProps;
  const [data,setData] = useState<any>([]);
  const {dfd_mongo_linechart_dfd_v1Props, setdfd_mongo_linechart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false ;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  const prevRefreshRef = useRef(false);
  const toast:any=useInfoMsg();
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
  const {week_linechart709e7, setweek_linechart709e7}= useContext(TotalContext) as TotalContextProps;  
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
  const handleMapperDetails=async()=>{
    try{
      //orchestration api call
      const orchestrationData: any = await AxiosService.post(
      '/UF/Orchestration',
      {
        key: "CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Design:AFVK:v1",
        componentId: "292a4c6b74654e069a6d91cf69f03bb6",
        controlId: "0ef95cd449c44c35851a43f4a2c709e7",
        isTable: false,
        accessProfile:accessProfile,
        from:"checkbox"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    let code:any= orchestrationData?.data?.code ;
    if (code == '') {
      //toast(code?.data?.errorDetails?.message, 'danger')
      //return
    } else if (code != '') {
        let codeStates: any = {}
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
      codeExecution(code,codeStates)
    }
      if(Array.isArray(dfd_mongo_linechart_dfd_v1Props) && dfd_mongo_linechart_dfd_v1Props?.length > 0){
    setData(dfd_mongo_linechart_dfd_v1Props)
    setapi_call_over_week_group03bb6((pre:any)=>({...pre,name:dfd_mongo_linechart_dfd_v1Props[0]?.name}))
  }
    if(Array.isArray(dfd_mongo_linechart_dfd_v1Props)){
      return
    }
    }catch(err){
      console.log(err)
    }
  }
useEffect(() => {
  if (prevRefreshRef.current) {
    handleMapperDetails()
  }else 
  prevRefreshRef.current= true
},[week_linechart709e7?.refresh])

useEffect(() => {
  if(Array.isArray(dfd_mongo_linechart_dfd_v1Props) && dfd_mongo_linechart_dfd_v1Props?.length > 0){
    setData(dfd_mongo_linechart_dfd_v1Props)
    setapi_call_over_week_group03bb6((pre:any)=>({...pre,name:dfd_mongo_linechart_dfd_v1Props[0]?.name}))
  }
},[dfd_mongo_linechart_dfd_v1Props])

  if (week_linechart709e7?.isHidden) {
    return <></>
  }
  return (
    <div
      className="w-full h-full"
      style={{gridColumn: `1 / 25`,gridRow: `1 / 53`, gap:``, height: `100%`}}
    >
      <LineChart
        data={data}
        showCurrencySign = "₹"
        title  = "API Calls Over Week"
        fillContainer={true}
        className = ""
        contentAlign="left"
      />
    </div>
  );
}
