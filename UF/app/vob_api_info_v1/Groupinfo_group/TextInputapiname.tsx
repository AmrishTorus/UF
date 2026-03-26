'use client'



import React, { useState,useContext,useEffect } from 'react'
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { Modal } from "@/components/Modal";
import { Text } from "@/components/Text";
import { TextInput } from '@/components/TextInput';
import { uf_getPFDetailsDto,uf_initiatePfDto,te_eventEmitterDto,uf_ifoDto,te_updateDto, te_refreshDto } from '@/app/interfaces/interfaces';
import i18n from '@/app/components/i18n';
import decodeToken from '@/app/components/decodeToken';
import {commonSepareteDataFromTheObject, eventFunction } from '@/app/utils/eventFunction';
import { eventDecisionTable } from '@/app/utils/evaluateDecisionTable';
import { codeExecution } from '@/app/utils/codeExecution';
import { AxiosService } from '@/app/components/axiosService';
import { getCookie } from '@/app/components/cookieMgment';
import { useRouter } from 'next/navigation';
import UOmapperData from '@/context/dfdmapperContolnames.json'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { eventBus } from '@/app/eventBus';
import { getFilterProps,getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { useHandleDfdRefresh } from '@/context/dfdRefreshContext';
import { DecodedToken,PrimaryTableData,SecurityData,EncryptionFlagPageData,PaginationData,AllowedGroupNode,ActionDetails } from "@/types/global";
import * as v from 'valibot';
///////////////
////////////

const TextInputapiname = ({checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData}:any) => {  
  const token: string = getCookie('token');
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {validateRefetch , setValidateRefetch} = useContext(TotalContext) as TotalContextProps;
  const {validate , setValidate} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();
  const actionDetails : any = {
  "action": {
    "lock": {
      "lockMode": "",
      "name": "",
      "ttl": ""
    },
    "stateTransition": {
      "sourceQueue": "",
      "sourceStatus": "",
      "targetQueue": "",
      "targetStatus": ""
    },
    "pagination": {
      "page": "1",
      "count": "10"
    },
    "encryption": {
      "isEnabled": false,
      "selectedDpd": "",
      "encryptionMethod": ""
    },
    "events": {}
  },
  "code": "",
  "rule": {},
  "events": {},
  "mapper": [
    {
      "sourceKey": [
        "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1|fcdd4a9059f84161990c20c300139cd7|properties.apiname"
      ],
      "targetKey": "CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1|f0167144898c456bb433c00a9b75e349|296cb4ccf7e040ee8357543b15745fa8"
    }
  ],
  "schemaData": {
    "type": "string"
  },
  "dataType": "string"
}
  const decodedTokenObj:any = decodeToken(token);
  const {dfd_mongo_api_repository_dfd_v1Props, setdfd_mongo_api_repository_dfd_v1Props} = useContext(TotalContext) as TotalContextProps; 
  const [isRequredData,setIsRequredData]=useState<boolean>(false)
  const toast : Function = useInfoMsg()
  const keyset : Function = i18n.keyset("language");
  const [allCode,setAllCode]=useState<string>("");
  let schemaArray :string[] =[];
  const [dynamicStateandType,setDynamicStateandType]=useState<Record<string, any>>({name:'apiname',type:"text"})
  const routes: AppRouterInstance = useRouter()
  const [showProfileAsModalOpen, setShowProfileAsModalOpen] = React.useState<boolean>(false);
  const [showElementAsPopupOpen, setShowElementAsPopupOpen] = React.useState<boolean>(false);
  const encryptionFlagCont: boolean = encryptionFlagCompData?.flag || false;

  function formatNumberWithCommas(value: any): string | any {
    if (value === null || value === undefined || value === '') return value;
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num) || !isFinite(num)) return value;
    if (typeof value === 'string' && !/^-?\d+(\.\d+)?$/.test(value.trim())) return value;
    return num.toLocaleString('en-US');
  }

  function parseFormattedNumber(value: string): number {
    const cleanedValue = value.replace(/,/g, '');
    return parseFloat(cleanedValue) || 0;
  }

  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData?.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData?.method;
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
  

  // Validation  
    const [error, setError] = useState<string>('');
  schemaArray = [] ;
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
  const handleChange = async(e: any) => {
      let validate:any;    
      setError('');
      setValidate((pre:any)=>({...pre,VOB_API_INFO_v1:{...pre?.VOB_API_INFO_v1,apiname:undefined}}));
    if(dynamicStateandType.type=="number"){
      const inputValue = e.target.value.replace(/,/g, '');
      if(inputValue !== '' && isNaN(Number(inputValue))){
        toast("Please enter numbers only", "danger");
        return;
      }
    setinfo_group5e349((prev: any) => ({ ...prev, apiname: +e.target.value }));
    }
    else{
    setinfo_group5e349((prev: any) => ({ ...prev, apiname: e.target.value }));
    }
    const newInputValue = dynamicStateandType.type=="number" ? +e.target.value.replace(/,/g, '') : e.target.value;
    let code:string=allCode;
     if (code != '') {
      let codeStates: any = {};
      codeStates['api_info_group']  = {...api_info_groupd3ad5,apiname:newInputValue},
      codeStates['setapi_info_group'] = setapi_info_groupd3ad5,
      codeStates['info_group']  = {...info_group5e349,apiname:newInputValue},
      codeStates['setinfo_group'] = setinfo_group5e349,
      codeStates['info_summary_group']  = {...info_summary_groupa2a0f,apiname:newInputValue},
      codeStates['setinfo_summary_group'] = setinfo_summary_groupa2a0f,
      codeStates['api_process_log_group']  = {...api_process_log_groupff19c,apiname:newInputValue},
      codeStates['setapi_process_log_group'] = setapi_process_log_groupff19c,
      codeStates['api_process_log']  = {...api_process_log655a7,apiname:newInputValue},
      codeStates['setapi_process_log'] = setapi_process_log655a7,
    codeExecution(code,codeStates);
    }  
     try{
        let copyFormhandlerData :any = {}

    }catch(err:any){
      console.error(err);
    }
  }
  const handleBlur=async () => {
      let validate:any
     try{
        let copyFormhandlerData :any = {}

    }catch(err:any){
      console.error(err);
    }
  }
  const handleMapperValue=async()=>{
    try{
      const orchestrationData: any = await AxiosService.post(
        '/UF/Orchestration',
        {
          key: "CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1",
          componentId: "f0167144898c456bb433c00a9b75e349",
          controlId: "296cb4ccf7e040ee8357543b15745fa8",
          isTable: false,
          from:"TextInputapiname",
          accessProfile:accessProfile
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if(orchestrationData?.data?.error == true){
       
        return
      }
      setAllCode(orchestrationData?.data?.code);
      if (orchestrationData?.data?.dataType ==='integer' || orchestrationData?.data?.dataType ==='number') {
        setDynamicStateandType({name:'apiname', type: 'number'});
      }
      // if(orchestrationData?.data?.schemaData?.at(0)?.nodeType=='apinode'){
      // if(orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties){
      //   let type:any={name:'apiname',type:'text'};
      //   type={
      //     name:'apiname',
      //     type: orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.apiname.type == 'string' ? 'text' : orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.apiname.type =='integer' ? 'number' : orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.apiname.type
      //   }
      //   setDynamicStateandType(type);
      // }
      // }else if(orchestrationData?.data?.schemaData?.at(0)?.nodeType=='dbnode'){
      //   if(orchestrationData?.data?.schemaData?.at(0)?.schema.properties){
      //   let type:any={name:'apiname',type:'text'};
      //   type={
      //     name:'apiname',
      //     type: orchestrationData?.data?.schemaData?.at(0)?.schema.properties.apiname.type == 'string' ? 'text' : orchestrationData?.data?.schemaData?.at(0)?.schema.properties.apiname.type =='integer' ? 'number' : orchestrationData?.data?.schemaData?.at(0)?.schema.properties.apiname.type
      //   }
      //   setDynamicStateandType(type);
      // }
      // }
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(()=>{
      handleMapperValue();
      handleBlur();
  },[validateRefetch.value])
  useEffect(() => {
  if(dfd_mongo_api_repository_dfd_v1Props?.setSearchFilters && dfd_mongo_api_repository_dfd_v1Props?.data)
  {
    if(Array.isArray(dfd_mongo_api_repository_dfd_v1Props.data) && dfd_mongo_api_repository_dfd_v1Props.data.length > 0){
      setinfo_group5e349((pre:any)=>({...pre,apiname:dfd_mongo_api_repository_dfd_v1Props.data[0]?.apiname}));
    }
  }
  },[dfd_mongo_api_repository_dfd_v1Props?.setSearchFilters])
  if (apiname45fa8?.isHidden) {
    return <></>
  }
  return (   
    <div  
      style={{gridColumn: `1 / 5`,gridRow: `13 / 23`, gap:``, height: `100%`, overflow: 'auto', display: 'flex', flexDirection: 'column'}} >
        {isRequredData && <span style={{ color: 'red' }}>*</span>}
      <div style={{ flex: 1, minHeight: 0 }}>
      <TextInput
        require={isRequredData}
        className=""
        label={keyset("")}
        onChange= {handleChange}
        onBlur={handleBlur}
        type= {dynamicStateandType.type === "number" ? "text" : dynamicStateandType.type}
        value= {dynamicStateandType.type === "number" ? formatNumberWithCommas(info_group5e349?.apiname) || "" : info_group5e349?.apiname|| ""}
         disabled= {apiname45fa8?.isDisabled ? true : false}
        pin='brick-brick'     
        placeholder='type here....'      
        view='normal'
        contentAlign={"left"}
      errorMessage={error}
        validationState={validate?.VOB_API_INFO_v1?.apiname ? "invalid" : undefined}
      />
      </div>
    </div> 
  )
}

export default TextInputapiname
