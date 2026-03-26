

'use client'
import React, { useState,useContext,useEffect,useRef } from 'react'
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import i18n from '@/app/components/i18n';
import { AxiosService } from "@/app/components/axiosService";
import { useInfoMsg } from '@/app/components/infoMsgHandler';
import { useRouter } from 'next/navigation';
import UOmapperData from '@/context/dfdmapperContolnames.json'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { getCookie } from '@/app/components/cookieMgment';
import { getDropdownDetailsNew } from '@/app/utils/getMapperDetails';
import { codeExecution } from '@/app/utils/codeExecution';
import { eventBus } from '@/app/eventBus';
import { Dropdown } from '@/components/Dropdown';
import { Text } from '@/components/Text';
import {Modal} from '@/components/Modal';
import { Icon } from '@/components/Icon';
import { getFilterProps,getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { getMapperDetailsDto,uf_getPFDetailsDto,uf_initiatePfDto,te_eventEmitterDto,uf_ifoDto,te_updateDto, te_refreshDto } from '@/app/interfaces/interfaces';
import * as v from 'valibot';
import {commonSepareteDataFromTheObject, eventFunction } from '@/app/utils/eventFunction';
import evaluateDecisionTable from '@/app/utils/evaluateDecisionTable';
import decodeToken from '@/app/components/decodeToken';
import { eventDecisionTable } from '@/app/utils/evaluateDecisionTable';
import { DecodedToken,PrimaryTableData,SecurityData,EncryptionFlagPageData,PaginationData,AllowedGroupNode,ActionDetails } from "@/types/global";
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
let getMapperDetailsBindValues:Record<string, any> ={} ;
const Dropdownapi_call_hours_dropdown = ({lockedData,setLockedData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData}: any) => {
  const token: string = getCookie('token');
  const decodedTokenObj: any = decodeToken(token);
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const { validate, setValidate } = useContext(
    TotalContext
  ) as TotalContextProps
  const [isRequredData,setIsRequredData]=useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const keyset:Function=i18n.keyset("language");
  const [initialCount,setInitialCount]=useState<number>(0)
  let getMapperDetails:string[];
  let getMapperDetailsValues:string[];
  const toast:Function=useInfoMsg();
  const routes: AppRouterInstance = useRouter();
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false ;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  const prevRefreshRef = useRef<any>(false);
  let customecode:string="";
  const [allCode,setAllCode]=useState<string>("");
  const [ruleCode,setRuleCode]=useState<string>("");
  let items:any = [];
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
  const {api_call_hours6d062, setapi_call_hours6d062}= useContext(TotalContext) as TotalContextProps;
  const {api_call_hours_dropdown5f803, setapi_call_hours_dropdown5f803}= useContext(TotalContext) as TotalContextProps;
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
  const handleStaticValue=(data:any)=>{
    setSelectedItem(data)
  }
  const [selectedItem, setSelectedItem] = useState('');
  items = [
    'Hour',
    'Week',
    'Month',
  ];

  useEffect(() => {
  if(line_chart_groupadc5c?.api_call_hours_dropdown=="" || line_chart_groupadc5c?.api_call_hours_dropdown==undefined || line_chart_groupadc5c?.api_call_hours_dropdown==null ){
    setSelectedItem("");
  }
  },[line_chart_groupadc5c?.api_call_hours_dropdown])
  const handleMapperValue=async()=>{
    try{
      const orchestrationData: any = await AxiosService.post(
        '/UF/Orchestration',
        {
          key: "CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Design:AFVK:v1",
          componentId: "2150f24b9f8d42f4be5c49f18b9adc5c",
          controlId: "3afc9777e24c4b56851941fa42a5f803",
          isTable: false,
          accessProfile:accessProfile,
          from:"dropdownSelect"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if(orchestrationData?.data?.code)
      {
        setAllCode(orchestrationData?.data?.code)
      }
      if(orchestrationData?.data?.rule?.nodes?.length>0){
        setRuleCode(orchestrationData?.data?.rule)        
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    handleMapperValue()
  },[api_call_hours_dropdown5f803?.refresh])

  const selected=useRef({})
  const handleClick=async(value?:any)=>{
    if (value.length > 0) {
      let temp:any=[];
      let staticTextValue:string = '';
      let staticValueProps : any[] = [
  {
    "text": {
      "name": "text",
      "_label": "Value to Save",
      "_type": "text",
      "value": "Hour",
      "enabled": true
    },
    "value": {
      "name": "value",
      "_label": "Text to Display",
      "_type": "text",
      "value": "Hour",
      "enabled": true
    }
  },
  {
    "text": {
      "name": "text",
      "_label": "Value to Save",
      "_type": "text",
      "value": "Week",
      "enabled": true
    },
    "value": {
      "name": "value",
      "_label": "Text to Display",
      "_type": "text",
      "value": "Week",
      "enabled": true
    }
  },
  {
    "text": {
      "name": "text",
      "_label": "Value to Save",
      "_type": "text",
      "value": "Month",
      "enabled": true
    },
    "value": {
      "name": "value",
      "_label": "Text to Display",
      "_type": "text",
      "value": "Month",
      "enabled": true
    }
  }
];
      for (let i = 0; i < staticValueProps.length; i++) {
        if(staticValueProps[i]?.value?.name === "value"){ 
          if(staticValueProps[i]?.value?.value === value){
            staticTextValue = staticValueProps[i].text.value;
          }
        }
      }
      if(Array.isArray(value)){
        for( let val of value){
          if(Array.isArray(val)){
            temp.push(val)
          }else{
            temp.push(val)
          }        
        }
      }
      setline_chart_groupadc5c((prev: any) => ({ ...prev, api_call_hours_dropdown: staticTextValue, api_call_hours_dropdown5f803: value}))
         setIsRequredData(false)
    } else {
       setline_chart_groupadc5c((prev: any) => ({ ...prev, api_call_hours_dropdown: '', api_call_hours_dropdown5f803: '' }))
        setIsRequredData(true)
    }
    setError('')
    setValidate((pre:any)=>({...pre,api_call_hours_dropdown:undefined}))
   
    selected.current=value
    customecode = allCode
    if (customecode != '') {
      let codeStates: any = {}      
        codeStates['vob_dashboard_screen'] = vob_dashboard_screen9ce49,
        codeStates['setvob_dashboard_screen'] = setvob_dashboard_screen9ce49,
        codeStates['selected']  = selected,
        codeStates['vob_dashboard_screen9ce49'] = vob_dashboard_screen9ce49Props,
        codeStates['setvob_dashboard_screen9ce49'] = setvob_dashboard_screen9ce49Props,
        codeStates['selected']  = selected,
        codeStates['api_usage_group'] = api_usage_group868b4,
        codeStates['setapi_usage_group'] = setapi_usage_group868b4,
        codeStates['selected']  = selected,
        codeStates['api_usage_group868b4'] = api_usage_group868b4Props,
        codeStates['setapi_usage_group868b4'] = setapi_usage_group868b4Props,
        codeStates['selected']  = selected,
        codeStates['req_group'] = req_groupdf5e7,
        codeStates['setreq_group'] = setreq_groupdf5e7,
        codeStates['selected']  = selected,
        codeStates['req_groupdf5e7'] = req_groupdf5e7Props,
        codeStates['setreq_groupdf5e7'] = setreq_groupdf5e7Props,
        codeStates['selected']  = selected,
        codeStates['active_group'] = active_group31e18,
        codeStates['setactive_group'] = setactive_group31e18,
        codeStates['selected']  = selected,
        codeStates['active_group31e18'] = active_group31e18Props,
        codeStates['setactive_group31e18'] = setactive_group31e18Props,
        codeStates['selected']  = selected,
        codeStates['total_api_calls_group'] = total_api_calls_groupd4dee,
        codeStates['settotal_api_calls_group'] = settotal_api_calls_groupd4dee,
        codeStates['selected']  = selected,
        codeStates['total_api_calls_groupd4dee'] = total_api_calls_groupd4deeProps,
        codeStates['settotal_api_calls_groupd4dee'] = settotal_api_calls_groupd4deeProps,
        codeStates['selected']  = selected,
        codeStates['most_group'] = most_groupc5ce0,
        codeStates['setmost_group'] = setmost_groupc5ce0,
        codeStates['selected']  = selected,
        codeStates['most_groupc5ce0'] = most_groupc5ce0Props,
        codeStates['setmost_groupc5ce0'] = setmost_groupc5ce0Props,
        codeStates['selected']  = selected,
        codeStates['line_chart_group'] = line_chart_groupadc5c,
        codeStates['setline_chart_group'] = setline_chart_groupadc5c,
        codeStates['selected']  = selected,
        codeStates['line_chart_groupadc5c'] = line_chart_groupadc5cProps,
        codeStates['setline_chart_groupadc5c'] = setline_chart_groupadc5cProps,
        codeStates['selected']  = selected,
        codeStates['api_call_hours'] = api_call_hours6d062,
        codeStates['setapi_call_hours'] = setapi_call_hours6d062,
        codeStates['selected']  = selected,
        codeStates['api_call_hours_dropdown'] = api_call_hours_dropdown5f803,
        codeStates['setapi_call_hours_dropdown'] = setapi_call_hours_dropdown5f803,
        codeStates['selected']  = selected,
        codeStates['api_call_over_frequency_subscreen'] = api_call_over_frequency_subscreenb8acc,
        codeStates['setapi_call_over_frequency_subscreen'] = setapi_call_over_frequency_subscreenb8acc,
        codeStates['selected']  = selected,
        codeStates['api_call_over_frequency_subscreenb8acc'] = api_call_over_frequency_subscreenb8accProps,
        codeStates['setapi_call_over_frequency_subscreenb8acc'] = setapi_call_over_frequency_subscreenb8accProps,
        codeStates['selected']  = selected,
        codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1'] = ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7,
        codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7,
        codeStates['selected']  = selected,
        codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7'] = ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props,
        codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props,
        codeStates['selected']  = selected,
        codeStates['api_call_over_hour_group'] = api_call_over_hour_group12590,
        codeStates['setapi_call_over_hour_group'] = setapi_call_over_hour_group12590,
        codeStates['selected']  = selected,
        codeStates['api_call_over_hour_group12590'] = api_call_over_hour_group12590Props,
        codeStates['setapi_call_over_hour_group12590'] = setapi_call_over_hour_group12590Props,
        codeStates['selected']  = selected,
        codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1'] = ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789,
        codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789,
        codeStates['selected']  = selected,
        codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789'] = ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props,
        codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props,
        codeStates['selected']  = selected,
        codeStates['api_call_over_month_group'] = api_call_over_month_groupd1676,
        codeStates['setapi_call_over_month_group'] = setapi_call_over_month_groupd1676,
        codeStates['selected']  = selected,
        codeStates['api_call_over_month_groupd1676'] = api_call_over_month_groupd1676Props,
        codeStates['setapi_call_over_month_groupd1676'] = setapi_call_over_month_groupd1676Props,
        codeStates['selected']  = selected,
        codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1'] = ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3,
        codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3,
        codeStates['selected']  = selected,
        codeStates['ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3'] = ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props,
        codeStates['setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3'] = setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props,
        codeStates['selected']  = selected,
        codeStates['api_call_over_week_group'] = api_call_over_week_group03bb6,
        codeStates['setapi_call_over_week_group'] = setapi_call_over_week_group03bb6,
        codeStates['selected']  = selected,
        codeStates['api_call_over_week_group03bb6'] = api_call_over_week_group03bb6Props,
        codeStates['setapi_call_over_week_group03bb6'] = setapi_call_over_week_group03bb6Props,
        codeStates['selected']  = selected,
        codeStates['total_used_api_group'] = total_used_api_groupcd37d,
        codeStates['settotal_used_api_group'] = settotal_used_api_groupcd37d,
        codeStates['selected']  = selected,
        codeStates['total_used_api_groupcd37d'] = total_used_api_groupcd37dProps,
        codeStates['settotal_used_api_groupcd37d'] = settotal_used_api_groupcd37dProps,
        codeStates['selected']  = selected,
        codeStates['list_of_register_tpp_group'] = list_of_register_tpp_groupbe9d5,
        codeStates['setlist_of_register_tpp_group'] = setlist_of_register_tpp_groupbe9d5,
        codeStates['selected']  = selected,
        codeStates['list_of_register_tpp_groupbe9d5'] = list_of_register_tpp_groupbe9d5Props,
        codeStates['setlist_of_register_tpp_groupbe9d5'] = setlist_of_register_tpp_groupbe9d5Props,
        codeStates['selected']  = selected,
        codeStates['connected_application'] = connected_application19ab2,
        codeStates['setconnected_application'] = setconnected_application19ab2,
        codeStates['selected']  = selected,
        codeStates['connected_application19ab2'] = connected_application19ab2Props,
        codeStates['setconnected_application19ab2'] = setconnected_application19ab2Props,
        codeStates['selected']  = selected,
        codeStates['api_repo_table'] = api_repo_table162e4,
        codeStates['setapi_repo_table'] = setapi_repo_table162e4,
        codeStates['selected']  = selected,
        codeStates['api_repo_table162e4'] = api_repo_table162e4Props,
        codeStates['setapi_repo_table162e4'] = setapi_repo_table162e4Props,
        codeStates['selected']  = selected,
        codeStates['api_repository'] = api_repositoryb1ab8,
        codeStates['setapi_repository'] = setapi_repositoryb1ab8,
        codeStates['selected']  = selected,
        codeStates['api_repositoryb1ab8'] = api_repositoryb1ab8Props,
        codeStates['setapi_repositoryb1ab8'] = setapi_repositoryb1ab8Props,
        codeStates['selected']  = selected,
        codeStates['group123'] = group1233a04c,
        codeStates['setgroup123'] = setgroup1233a04c,
        codeStates['selected']  = selected,
        codeStates['group1233a04c'] = group1233a04cProps,
        codeStates['setgroup1233a04c'] = setgroup1233a04cProps,
        codeStates['selected']  = selected,
        codeStates['group454'] = group4549ff98,
        codeStates['setgroup454'] = setgroup4549ff98,
        codeStates['selected']  = selected,
        codeStates['group4549ff98'] = group4549ff98Props,
        codeStates['setgroup4549ff98'] = setgroup4549ff98Props,
        codeStates['selected']  = selected,
        codeStates['group'] = group657d5,
        codeStates['setgroup'] = setgroup657d5,
        codeStates['selected']  = selected,
        codeStates['group657d5'] = group657d5Props,
        codeStates['setgroup657d5'] = setgroup657d5Props,
        codeStates['selected']  = selected,
        codeStates['group6576'] = group6576622ab,
        codeStates['setgroup6576'] = setgroup6576622ab,
        codeStates['selected']  = selected,
        codeStates['group6576622ab'] = group6576622abProps,
        codeStates['setgroup6576622ab'] = setgroup6576622abProps,
        codeStates['selected']  = selected,
        codeStates['group79679'] = group796798bff3,
        codeStates['setgroup79679'] = setgroup796798bff3,
        codeStates['selected']  = selected,
        codeStates['group796798bff3'] = group796798bff3Props,
        codeStates['setgroup796798bff3'] = setgroup796798bff3Props,
        codeStates['selected']  = selected,
    codeExecution(customecode,codeStates)
    }
    if(value.length==0){ 
      return
    }
    try{
    let copyFormhandlerData :any = {}
    }catch(err){
      console.log(err)
    }
  }
   
  const { validateRefetch, setValidateRefetch } = useContext(
    TotalContext
  ) as TotalContextProps
  //validation
  let schemaArray = [] ;
  const handleBlur = async () => {
    //validation
  }
    useEffect(()=>{
        handleBlur()
    },[validateRefetch.value])

  useEffect(() => {
    if(initialCount!=0)
     setline_chart_groupadc5c((pre:any)=>({...pre,api_call_hours_dropdown:""}))
    else
      setInitialCount(1)
  },[api_call_hours_dropdown5f803?.refresh])

  if (api_call_hours_dropdown5f803?.isHidden) {
    return <></>
  }

  return (
    <div
      style={{
        gridColumn: `20 / 25`,
        gridRow: `1 / 12`,
        gap:``, 
        height: `100%`,
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column'}} >
      <Dropdown
        className=""
        placeholder={keyset("Select")} 
        filterable={true}
        hasClear={true}
        static={true}
        staticProps={items}
        disabled= {api_call_hours_dropdown5f803?.isDisabled ? true : false}
        contentAlign={"center"}
        value={
            line_chart_groupadc5c?.api_call_hours_dropdown5f803 ? [line_chart_groupadc5c?.api_call_hours_dropdown5f803] :
                [items[0]]
            }
        onChange={handleClick} 
      /> 
    </div>
  );
};

export default Dropdownapi_call_hours_dropdown;
