'use client'

import React, { useState,useEffect,useContext, useRef } from 'react';
import axios from 'axios';
import i18n from '@/app/components/i18n';
import { codeExecution } from '@/app/utils/codeExecution';
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { uf_getPFDetailsDto,uf_initiatePfDto,te_eventEmitterDto,uf_ifoDto,te_updateDto } from '@/app/interfaces/interfaces';
import {commonSepareteDataFromTheObject } from '@/app/utils/eventFunction';
import { AxiosService } from '@/app/components/axiosService';
import { getCookie } from '@/app/components/cookieMgment';
import { nullFilter } from '@/app/utils/nullDataFilter';
import { eventFunction } from '@/app/utils/eventFunction';
import { useRouter } from 'next/navigation';
import { eventBus } from '@/app/eventBus';
import {Modal} from '@/components/Modal';
import { Button } from '@/components/Button';
import UOmapperData from '@/context/dfdmapperContolnames.json';
import { Text } from '@/components/Text';
import { Icon } from '@/components/Icon';
import { getFilterProps,getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { useHandleDfdRefresh } from '@/context/dfdRefreshContext';
import { eventDecisionTable } from '@/app/utils/evaluateDecisionTable';
import decodeToken from '@/app/components/decodeToken';



function objectToQueryString(obj: any) {
  return Object.keys(obj)
    .map(key => {
      // Determine the modifier based on the type of the value
      const value = obj[key];
      let modifiedKey = key;

      if (typeof value === 'string') {
        modifiedKey += '-contains';  // Append '-contains' if value is a string
      } else if (typeof value === 'number') {
        modifiedKey += '-equals';    // Append '-equals' if value is a number
      }

      // Return the key-value pair with the modified key
      return `${encodeURIComponent(modifiedKey)}=${encodeURIComponent(value)}`;
    })
    .join('&');
} 

const Buttonview_log = ({mainData,setRefetch,encryptionFlagCompData}:any) => {
  const token:string = getCookie('token');
  const decodedTokenObj:any = decodeToken(token);
  const createdBy:string =decodedTokenObj.users;
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {validate , setValidate} = useContext(TotalContext) as TotalContextProps;
  const {validateRefetch , setValidateRefetch} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const { eventEmitterData,setEventEmitterData}= useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false ;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const keyset:any=i18n.keyset("language");
  const confirmMsgFlag: boolean = false;
  const toast:any=useInfoMsg();
  const [allCode,setAllCode]=useState<any>("");
  let dfKey: string | any;
  const [loading, setLoading] = useState(false);
  const routes = useRouter();
  //showComponentAsPopup || showArtifactAsModal
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
  const {list_of_register_tpp_groupbe9d5, setlist_of_register_tpp_groupbe9d5}= useContext(TotalContext) as TotalContextProps;
  const {list_of_register_tpp_groupbe9d5Props, setlist_of_register_tpp_groupbe9d5Props}= useContext(TotalContext) as TotalContextProps;
  const {connected_application19ab2, setconnected_application19ab2}= useContext(TotalContext) as TotalContextProps;
  const {connected_application19ab2Props, setconnected_application19ab2Props}= useContext(TotalContext) as TotalContextProps;
  const {api_repo_table162e4, setapi_repo_table162e4}= useContext(TotalContext) as TotalContextProps;
  const {api_repo_table162e4Props, setapi_repo_table162e4Props}= useContext(TotalContext) as TotalContextProps;
  const {api_repositoryb1ab8, setapi_repositoryb1ab8}= useContext(TotalContext) as TotalContextProps;
  const {api_repositoryb1ab8Props, setapi_repositoryb1ab8Props}= useContext(TotalContext) as TotalContextProps;
  const {apinamecccc2, setapinamecccc2}= useContext(TotalContext) as TotalContextProps;
  const {version33b3f, setversion33b3f}= useContext(TotalContext) as TotalContextProps;
  const {statuscd1e6, setstatuscd1e6}= useContext(TotalContext) as TotalContextProps;
  const {api_category0905e, setapi_category0905e}= useContext(TotalContext) as TotalContextProps;
  const {release_date1939f, setrelease_date1939f}= useContext(TotalContext) as TotalContextProps;
  const {view_log82d2f, setview_log82d2f}= useContext(TotalContext) as TotalContextProps;
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
  const {info_group5e349, setinfo_group5e349}= useContext(TotalContext) as TotalContextProps;
  const {info_group5e349Props, setinfo_group5e349Props}= useContext(TotalContext) as TotalContextProps;
  const {vob_api_info_v1Props, setvob_api_info_v1Props}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log655a7, setapi_process_log655a7}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log655a7Props, setapi_process_log655a7Props}= useContext(TotalContext) as TotalContextProps;
  //////////////

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  let customCode:any;
  const handleCustomCode=async () => {
    let code :any = allCode;
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
      customCode = codeExecution(code,codeStates);
      return customCode;
    }
  }
  const handleMapper=async () => {
    try{
      const orchestrationData: any = await AxiosService.post(
        '/UF/Orchestration',
        {
          key: "CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Design:AFVK:v1",
          componentId: "82ecab6738f749949432f786075b1ab8",
          controlId: "746d2ff743b547f1b3bd0574e1682d2f",
          isTable: false,
          from:"ButtonView Log",
          accessProfile:accessProfile
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if(orchestrationData?.data?.error == true){
        return;
      }
      setAllCode(orchestrationData?.data?.code);
      let code :any = orchestrationData?.data?.code;
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
        customCode = codeExecution(code,codeStates);
        return customCode;
      }
    }catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    eventBus.on("triggerButton", (id:any) => {
      if (id === "view_log82d2f") {
        buttonRef.current?.click();
      }
    });
  },[])

  function SourceIdFilter(eventProperty:any,matchingSequence?:string){
    let ans : any[] = [];
    let id : string = "";
    if(eventProperty.name=='saveHandler' && eventProperty.sequence == matchingSequence)
    {
      return [eventProperty.id]
    }
    if(eventProperty.name=='eventEmitter' && eventProperty.sequence == matchingSequence)
    {
      return [eventProperty.id]
    }
    for(let i=0;i<eventProperty?.children?.length;i++)
    {
      let temp:any=SourceIdFilter(eventProperty?.children[i],matchingSequence)
      if(temp.length)
      {
        ans.push(eventProperty?.children[i].id)
        id=id+"|"+eventProperty?.children[i].id
        ans.push(...temp)
      }
    }
    return ans
  }


  const handleClick=async()=>{
    if(api_repositoryb1ab8Props?.validation==true && api_repositoryb1ab8Props?.required==true || api_repositoryb1ab8Props?.required==true)
    {
      if(validateRefetch.init==0)
      {
        setValidateRefetch((pre:any)=>({...pre,value:!pre.value,init:pre.init+1}));
        return;
      }
      setValidateRefetch((pre:any)=>({...pre,value:!pre.value,init:pre.init+1}));
    } 
    await handleMapper();
    let saveCheck=false;
    Object.keys(validate).map((item)=>{
      if(validate[item] == 'invalid'){
        saveCheck=true;
    }});
    if (saveCheck) {   
      toast('Please verify the data', 'danger');
      return;
    }
    try{  
      // copyFormData
      // for particular controller
      setinfo_group5e349((pre:any)=>({...pre,...mainData}));
      setinfo_group5e349Props({...info_group5e349Props,presetValues:mainData});
    // showArtifact 
    let filterProps4:any =  [
  {
    "key": "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_TotalCalls_DFD:AFVK:v1",
    "nodeBasedData": [
      {
        "nodeId": "9d8e3276724947c2912f87ea49574067",
        "object": {
          "properties.apiname": "746ab2f3b9074ff497518233b4ccccc2"
        }
      }
    ]
  },
  {
    "key": "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_API_Process_Logs_DFD:AFVK:v1",
    "nodeBasedData": [
      {
        "nodeId": "7f2ec8b8c5214c2194a8f1e0a48dad16",
        "object": {}
      }
    ]
  }
]; 
    let filterData4 = await getFilterProps(filterProps4,mainData);
    setvob_api_info_v1Props([...filterData4 ]);
    routes.push(getRouteScreenDetails('CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1', 'vob_api_info_v1'));
      // bindTran
      // for particular controller
      setapi_process_log655a7(mainData);
      setapi_process_log655a7Props({...api_process_log655a7Props,presetValues:mainData});
    }catch (err: any) {
      toast(err?.response?.data?.errorDetails?.message, 'danger');
      setLoading(false);
    }
  }
  async function handleConfirmOnClick(){
  } 


 if (view_log82d2f?.isHidden) {
    return <></>
  }
  
  return (
    <div 
>
      <Button 
        ref={buttonRef}
        className=""
        onClick={handleClick}
        view='action'
        disabled= {view_log82d2f?.isDisabled ? true : false}
        pin='circle-circle'
      >
        {keyset("View Log")}
      </Button>
    </div>
  )
}

export default Buttonview_log
