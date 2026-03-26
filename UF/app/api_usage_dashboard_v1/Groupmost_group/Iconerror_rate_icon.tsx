'use client'


import React, { useContext,useEffect } from 'react';
import { Icon } from '@/components/Icon';
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { AxiosService } from "@/app/components/axiosService";
import { codeExecution } from '@/app/utils/codeExecution';
import { deleteAllCookies,getCookie } from '@/app/components/cookieMgment';
const Iconerror_rate_icon = ({encryptionFlagCompData}:any) => {
  const token:string = getCookie('token'); 
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false ;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method
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
  const handleCode=async () => {
    let code:any;
    //get orchestration data for icon
    const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Design:AFVK:v1",  componentId:"e46460169e424963a78d04eee5ec5ce0",controlId:"1dc52406b9c541f881f411ebd5989a9a",isTable:false,accessProfile:accessProfile,from:"Icon"},{
      headers: {
        Authorization: `Bearer ${token}`
    }})
    code=orchestrationData?.data?.code
    if (code == '') {
      //toast(code?.data?.errorDetails?.message, 'danger')
      //return
    }  else if (code != '') {
      let codeStates: any = {}
      codeExecution(code,codeStates)
    }
  }

  useEffect(() => {
    handleCode()
  }, [])

  if (error_rate_icon89a9a?.isHidden) {
    return <></>
  }

return (
  <div 
    style={{gridColumn: `2 / 7`,gridRow: `4 / 18`, gap:``, height: `100%`, overflow: 'auto'
 }} >
    <Icon 
      className="!text-white"
      data="MdReportGmailerrorred"
      contentAlign={"center"}
    />
  </div>
  )
}

export default Iconerror_rate_icon
