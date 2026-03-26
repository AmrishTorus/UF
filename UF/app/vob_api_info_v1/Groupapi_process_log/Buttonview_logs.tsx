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
import PageVobConsentsLogpage2 from '@/app/vob_consents_log_v1/vob_consents_log_v1page';



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

const Buttonview_logs = ({mainData,setRefetch,encryptionFlagCompData}:any) => {
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
  const [showProfileAsModalOpen2, setShowProfileAsModalOpen2] = React.useState<boolean>(false);
   /////////////
   //another screen
  const {api_info_groupd3ad5, setapi_info_groupd3ad5}= useContext(TotalContext) as TotalContextProps;
  const {api_info_groupd3ad5Props, setapi_info_groupd3ad5Props}= useContext(TotalContext) as TotalContextProps;
  const {info_group5e349, setinfo_group5e349}= useContext(TotalContext) as TotalContextProps;
  const {info_group5e349Props, setinfo_group5e349Props}= useContext(TotalContext) as TotalContextProps;
  const {info_summary_groupa2a0f, setinfo_summary_groupa2a0f}= useContext(TotalContext) as TotalContextProps;
  const {info_summary_groupa2a0fProps, setinfo_summary_groupa2a0fProps}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log_groupff19c, setapi_process_log_groupff19c}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log_groupff19cProps, setapi_process_log_groupff19cProps}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log655a7, setapi_process_log655a7}= useContext(TotalContext) as TotalContextProps;
  const {api_process_log655a7Props, setapi_process_log655a7Props}= useContext(TotalContext) as TotalContextProps;
  const {trs_created_date93619, settrs_created_date93619}= useContext(TotalContext) as TotalContextProps;
  const {requestdata1d4f4, setrequestdata1d4f4}= useContext(TotalContext) as TotalContextProps;
  const {responsedata35a3f, setresponsedata35a3f}= useContext(TotalContext) as TotalContextProps;
  const {tob_consent_requestid80eee, settob_consent_requestid80eee}= useContext(TotalContext) as TotalContextProps;
  const {view_logs3bb2b, setview_logs3bb2b}= useContext(TotalContext) as TotalContextProps;
  const {vob_consents_log_v1Props, setvob_consents_log_v1Props}= useContext(TotalContext) as TotalContextProps;
  const {consent_logs53635, setconsent_logs53635}= useContext(TotalContext) as TotalContextProps;
  const {consent_logs53635Props, setconsent_logs53635Props}= useContext(TotalContext) as TotalContextProps;
  //////////////

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  let customCode:any;
  const handleCustomCode=async () => {
    let code :any = allCode;
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
      customCode = codeExecution(code,codeStates);
      return customCode;
    }
  }
  const handleMapper=async () => {
    try{
      const orchestrationData: any = await AxiosService.post(
        '/UF/Orchestration',
        {
          key: "CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1",
          componentId: "f03de6a188a541fa9d2984ed872655a7",
          controlId: "3ac34faa1e5f466688590c331bd3bb2b",
          isTable: false,
          from:"ButtonConsent Log",
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
        customCode = codeExecution(code,codeStates);
        return customCode;
      }
    }catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    eventBus.on("triggerButton", (id:any) => {
      if (id === "view_logs3bb2b") {
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
    if(api_process_log655a7Props?.validation==true && api_process_log655a7Props?.required==true || api_process_log655a7Props?.required==true)
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
    // showArtifactAsModal
    let filterProps2:any =  [
  {
    "key": "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consent_Request_CA_DFD:AFVK:v1",
    "nodeBasedData": [
      {
        "nodeId": "9aecfcd6592d4ba4a2e98a245a336a85",
        "object": {
          "responses.200.content.application/json.schema.items.properties.id": "87fedf00d9ab4aaaa9de452b8ca80eee"
        }
      }
    ]
  }
];
    let filterData2 = await getFilterProps(filterProps2,mainData);
    setvob_consents_log_v1Props([...filterData2 ]);
    setShowProfileAsModalOpen2(true);
      // copyFormData
      // for particular controller
      setconsent_logs53635((pre:any)=>({...pre,...mainData}));
      setconsent_logs53635Props({...consent_logs53635Props,presetValues:mainData});
    }catch (err: any) {
      toast(err?.response?.data?.errorDetails?.message, 'danger');
      setLoading(false);
    }
  }
  async function handleConfirmOnClick(){
  } 


 if (view_logs3bb2b?.isHidden) {
    return <></>
  }
  
  return (
    <div 
>
      <Modal 
        open={showProfileAsModalOpen2} 
        onClose={() => setShowProfileAsModalOpen2(false)}
        showOverlay = {true}
        position = {"center"}
        modalName='vobconsentslog'
        className='w-[] h-[] bg-gray-50 overflow-auto'
      >
        <PageVobConsentsLogpage2/>
      </Modal>
      <Button 
        ref={buttonRef}
        className=""
        onClick={handleClick}
        view='action'
        disabled= {view_logs3bb2b?.isDisabled ? true : false}
        pin='circle-circle'
      >
        {keyset("Consent Log")}
      </Button>
    </div>
  )
}

export default Buttonview_logs
