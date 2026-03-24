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

const TextInputfloor_amnt = ({checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData}:any) => {  
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
        "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1|0a399637910841a79c8f605d784233ee|properties.floor_amount"
      ],
      "targetKey": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|4ec956e4599e4a4ab60a0db92557f52e|32fd1194c93a4c32b5b19520f7359de7"
    }
  ],
  "schemaData": {
    "type": "string"
  },
  "dataType": "string"
}
  const decodedTokenObj:any = decodeToken(token);
  const {dfd_subscreen_db_v1Props, setdfd_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps; 
  const [isRequredData,setIsRequredData]=useState<boolean>(false)
  const toast : Function = useInfoMsg()
  const keyset : Function = i18n.keyset("language");
  const [allCode,setAllCode]=useState<string>("");
  let schemaArray :string[] =[];
  const [dynamicStateandType,setDynamicStateandType]=useState<Record<string, any>>({name:'floor_amount',type:"text"})
  const routes: AppRouterInstance = useRouter()
  const [showProfileAsModalOpen, setShowProfileAsModalOpen] = React.useState<boolean>(false);
  const [showElementAsPopupOpen, setShowElementAsPopupOpen] = React.useState<boolean>(false);
  const encryptionFlagCont: boolean = encryptionFlagCompData?.flag || false;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData?.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData?.method;
   //another screen
  const {overallgroup00e53, setoverallgroup00e53}= useContext(TotalContext) as TotalContextProps;
  const {overallgroup00e53Props, setoverallgroup00e53Props}= useContext(TotalContext) as TotalContextProps;
  const {mandatedtls2cb9f, setmandatedtls2cb9f}= useContext(TotalContext) as TotalContextProps;
  const {mandatedtls2cb9fProps, setmandatedtls2cb9fProps}= useContext(TotalContext) as TotalContextProps;
  const {mandateinfo1b809, setmandateinfo1b809}= useContext(TotalContext) as TotalContextProps;
  const {mandateinfo1b809Props, setmandateinfo1b809Props}= useContext(TotalContext) as TotalContextProps;
  const {mnssubgroup3df12, setmnssubgroup3df12}= useContext(TotalContext) as TotalContextProps;
  const {mnssubgroup3df12Props, setmnssubgroup3df12Props}= useContext(TotalContext) as TotalContextProps;
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9, setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9}= useContext(TotalContext) as TotalContextProps;
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props, setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props}= useContext(TotalContext) as TotalContextProps;
  const {mndate_common_info3fb9d, setmndate_common_info3fb9d}= useContext(TotalContext) as TotalContextProps;
  const {mndate_common_info3fb9dProps, setmndate_common_info3fb9dProps}= useContext(TotalContext) as TotalContextProps;
  const {mndate_basic_sub_screenc9573, setmndate_basic_sub_screenc9573}= useContext(TotalContext) as TotalContextProps;
  const {mndate_basic_sub_screenc9573Props, setmndate_basic_sub_screenc9573Props}= useContext(TotalContext) as TotalContextProps;
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c, setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c}= useContext(TotalContext) as TotalContextProps;
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps, setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps}= useContext(TotalContext) as TotalContextProps;
  const {subgroup7f52e, setsubgroup7f52e}= useContext(TotalContext) as TotalContextProps;
  const {subgroup7f52eProps, setsubgroup7f52eProps}= useContext(TotalContext) as TotalContextProps;
  const {textf1c24, settextf1c24}= useContext(TotalContext) as TotalContextProps;
  const {variable_pay68402, setvariable_pay68402}= useContext(TotalContext) as TotalContextProps;
  const {inhouse0b227, setinhouse0b227}= useContext(TotalContext) as TotalContextProps;
  const {cr_acc_no596b0, setcr_acc_no596b0}= useContext(TotalContext) as TotalContextProps;
  const {cr_acc_name0589d, setcr_acc_name0589d}= useContext(TotalContext) as TotalContextProps;
  const {floor_amnt59de7, setfloor_amnt59de7}= useContext(TotalContext) as TotalContextProps;
  const {ceiling_amntc6b28, setceiling_amntc6b28}= useContext(TotalContext) as TotalContextProps;
  const {brbanknamec54c8, setbrbanknamec54c8}= useContext(TotalContext) as TotalContextProps;
  const {brbranchname951ce, setbrbranchname951ce}= useContext(TotalContext) as TotalContextProps;
  const {dr_sort_code26ce5, setdr_sort_code26ce5}= useContext(TotalContext) as TotalContextProps;
  const {currencye913a, setcurrencye913a}= useContext(TotalContext) as TotalContextProps;
  const {dr_acnt_no61f56, setdr_acnt_no61f56}= useContext(TotalContext) as TotalContextProps;
  const {dr_acnt_namee2b1e, setdr_acnt_namee2b1e}= useContext(TotalContext) as TotalContextProps;
  const {policy_no1316f6, setpolicy_no1316f6}= useContext(TotalContext) as TotalContextProps;
  const {policy_no2196cd, setpolicy_no2196cd}= useContext(TotalContext) as TotalContextProps;
  const {originator_codee7d60, setoriginator_codee7d60}= useContext(TotalContext) as TotalContextProps;
  const {frequency80676, setfrequency80676}= useContext(TotalContext) as TotalContextProps;
  const {duedate3cf41, setduedate3cf41}= useContext(TotalContext) as TotalContextProps;
  const {expirydateee023, setexpirydateee023}= useContext(TotalContext) as TotalContextProps;
  const {mandate_data_tabb1bce, setmandate_data_tabb1bce}= useContext(TotalContext) as TotalContextProps;
  const {mandate_data_tabb1bceProps, setmandate_data_tabb1bceProps}= useContext(TotalContext) as TotalContextProps;
  const {document_lst2adea, setdocument_lst2adea}= useContext(TotalContext) as TotalContextProps;
  const {document_lst2adeaProps, setdocument_lst2adeaProps}= useContext(TotalContext) as TotalContextProps;
  const {doc_data_lst1fd5c, setdoc_data_lst1fd5c}= useContext(TotalContext) as TotalContextProps;
  const {doc_data_lst1fd5cProps, setdoc_data_lst1fd5cProps}= useContext(TotalContext) as TotalContextProps;
  const {validation_lst771f5, setvalidation_lst771f5}= useContext(TotalContext) as TotalContextProps;
  const {validation_lst771f5Props, setvalidation_lst771f5Props}= useContext(TotalContext) as TotalContextProps;
  const {valdtn_data_lst378bc, setvaldtn_data_lst378bc}= useContext(TotalContext) as TotalContextProps;
  const {valdtn_data_lst378bcProps, setvaldtn_data_lst378bcProps}= useContext(TotalContext) as TotalContextProps;
  const {comment_lst2b2ca, setcomment_lst2b2ca}= useContext(TotalContext) as TotalContextProps;
  const {comment_lst2b2caProps, setcomment_lst2b2caProps}= useContext(TotalContext) as TotalContextProps;
  const {cmnt_data_lste3582, setcmnt_data_lste3582}= useContext(TotalContext) as TotalContextProps;
  const {cmnt_data_lste3582Props, setcmnt_data_lste3582Props}= useContext(TotalContext) as TotalContextProps;
  const {mandatelstc0e2c, setmandatelstc0e2c}= useContext(TotalContext) as TotalContextProps;
  const {mandatelstc0e2cProps, setmandatelstc0e2cProps}= useContext(TotalContext) as TotalContextProps;
  const {mandatedatalst46c27, setmandatedatalst46c27}= useContext(TotalContext) as TotalContextProps;
  const {mandatedatalst46c27Props, setmandatedatalst46c27Props}= useContext(TotalContext) as TotalContextProps;
  const {listgroup6f63e, setlistgroup6f63e}= useContext(TotalContext) as TotalContextProps;
  const {listgroup6f63eProps, setlistgroup6f63eProps}= useContext(TotalContext) as TotalContextProps;
  const {doclst42d30, setdoclst42d30}= useContext(TotalContext) as TotalContextProps;
  const {doclst42d30Props, setdoclst42d30Props}= useContext(TotalContext) as TotalContextProps;
  const {docdatalst620a8, setdocdatalst620a8}= useContext(TotalContext) as TotalContextProps;
  const {docdatalst620a8Props, setdocdatalst620a8Props}= useContext(TotalContext) as TotalContextProps;
  const {valdtnlst4ad99, setvaldtnlst4ad99}= useContext(TotalContext) as TotalContextProps;
  const {valdtnlst4ad99Props, setvaldtnlst4ad99Props}= useContext(TotalContext) as TotalContextProps;
  const {valdtndatalstd58f5, setvaldtndatalstd58f5}= useContext(TotalContext) as TotalContextProps;
  const {valdtndatalstd58f5Props, setvaldtndatalstd58f5Props}= useContext(TotalContext) as TotalContextProps;
  const {cmntlst0f1ad, setcmntlst0f1ad}= useContext(TotalContext) as TotalContextProps;
  const {cmntlst0f1adProps, setcmntlst0f1adProps}= useContext(TotalContext) as TotalContextProps;
  const {cmntdatalste4cdc, setcmntdatalste4cdc}= useContext(TotalContext) as TotalContextProps;
  const {cmntdatalste4cdcProps, setcmntdatalste4cdcProps}= useContext(TotalContext) as TotalContextProps;
  const {dynamic_group_btns3c327, setdynamic_group_btns3c327}= useContext(TotalContext) as TotalContextProps;
  const {dynamic_group_btns3c327Props, setdynamic_group_btns3c327Props}= useContext(TotalContext) as TotalContextProps;
  

  // Validation  
    const [error, setError] = useState<string>('');

  schemaArray = [
  "v.string()",
  "v.nonEmpty('This field is required.')",
  "v.any()",
  "v.regex(/^\\d+(\\.\\d{1,2})?$/, 'Enter Valid Amount')"
] ;
    const schema : any  = v.pipe(    v.string(),
    v.nonEmpty('This field is required.'),
    v.any(),
    v.regex(/^\d+(\.\d{1,2})?$/, 'Enter Valid Amount'),
)
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
    if(e.target.value=="")
    {
      setIsRequredData(true)
    }else{
      setIsRequredData(false)
    }
      let validate:any;    
      setError('');
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,floor_amount:undefined}}));
    if(dynamicStateandType.type=="number"){
    setsubgroup7f52e((prev: any) => ({ ...prev, floor_amount: +e.target.value }));
    }
    else{
    setsubgroup7f52e((prev: any) => ({ ...prev, floor_amount: e.target.value }));
    }
    const newInputValue = dynamicStateandType.type=="number" ? +e.target.value : e.target.value;
    let code:string=allCode;
     if (code != '') {
      let codeStates: any = {};
      codeStates['overallgroup']  = {...overallgroup00e53,floor_amount:newInputValue},
      codeStates['setoverallgroup'] = setoverallgroup00e53,
      codeStates['mnssubgroup']  = {...mnssubgroup3df12,floor_amount:newInputValue},
      codeStates['setmnssubgroup'] = setmnssubgroup3df12,
      codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1']  = {...ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,floor_amount:newInputValue},
      codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,
      codeStates['mndate_common_info']  = {...mndate_common_info3fb9d,floor_amount:newInputValue},
      codeStates['setmndate_common_info'] = setmndate_common_info3fb9d,
      codeStates['mndate_basic_sub_screen']  = {...mndate_basic_sub_screenc9573,floor_amount:newInputValue},
      codeStates['setmndate_basic_sub_screen'] = setmndate_basic_sub_screenc9573,
      codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen_v1']  = {...ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,floor_amount:newInputValue},
      codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,
      codeStates['subgroup']  = {...subgroup7f52e,floor_amount:newInputValue},
      codeStates['setsubgroup'] = setsubgroup7f52e,
      codeStates['doc_data_lst']  = {...doc_data_lst1fd5c,floor_amount:newInputValue},
      codeStates['setdoc_data_lst'] = setdoc_data_lst1fd5c,
      codeStates['valdtn_data_lst']  = {...valdtn_data_lst378bc,floor_amount:newInputValue},
      codeStates['setvaldtn_data_lst'] = setvaldtn_data_lst378bc,
      codeStates['cmnt_data_lst']  = {...cmnt_data_lste3582,floor_amount:newInputValue},
      codeStates['setcmnt_data_lst'] = setcmnt_data_lste3582,
      codeStates['mandatedatalst']  = {...mandatedatalst46c27,floor_amount:newInputValue},
      codeStates['setmandatedatalst'] = setmandatedatalst46c27,
      codeStates['docdatalst']  = {...docdatalst620a8,floor_amount:newInputValue},
      codeStates['setdocdatalst'] = setdocdatalst620a8,
      codeStates['valdtndatalst']  = {...valdtndatalstd58f5,floor_amount:newInputValue},
      codeStates['setvaldtndatalst'] = setvaldtndatalstd58f5,
      codeStates['cmntdatalst']  = {...cmntdatalste4cdc,floor_amount:newInputValue},
      codeStates['setcmntdatalst'] = setcmntdatalste4cdc,
      codeStates['dynamic_group_btns']  = {...dynamic_group_btns3c327,floor_amount:newInputValue},
      codeStates['setdynamic_group_btns'] = setdynamic_group_btns3c327,
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
      if(subgroup7f52e?.floor_amount == "" || subgroup7f52e?.floor_amount == undefined){
      subgroup7f52e.floor_amount = "";
     if(dynamicStateandType.type=="number"){
          validate = v.safeParse(schema, NaN);
        }
        else{
          validate = v.safeParse(schema, subgroup7f52e?.floor_amount);
        }
        if(!validate.success){
          setError(validate?.issues[0]?.message);
          setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,floor_amount:"invalid"}}));
        }
    }else if(subgroup7f52e?.floor_amount !== ""){
   if(dynamicStateandType.type=="number"){
          validate = v.safeParse(schema, +subgroup7f52e?.floor_amount);
        }
        else{
          validate = v.safeParse(schema, subgroup7f52e?.floor_amount);
        }
    if(!validate.success){
      setError(validate?.issues[0]?.message);
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,floor_amount:"invalid"}}));
    }else{
      setError('');
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,floor_amount:undefined}}));
    }
    }
    if(!validate?.success){
      return
    }
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
          key: "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",
          componentId: "4ec956e4599e4a4ab60a0db92557f52e",
          controlId: "32fd1194c93a4c32b5b19520f7359de7",
          isTable: false,
          from:"TextInputfloor_amnt",
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
        setDynamicStateandType({name:'floor_amount', type: 'number'});
      }
      // if(orchestrationData?.data?.schemaData?.at(0)?.nodeType=='apinode'){
      // if(orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties){
      //   let type:any={name:'floor_amount',type:'text'};
      //   type={
      //     name:'floor_amount',
      //     type: orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.floor_amount.type == 'string' ? 'text' : orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.floor_amount.type =='integer' ? 'number' : orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.floor_amount.type
      //   }
      //   setDynamicStateandType(type);
      // }
      // }else if(orchestrationData?.data?.schemaData?.at(0)?.nodeType=='dbnode'){
      //   if(orchestrationData?.data?.schemaData?.at(0)?.schema.properties){
      //   let type:any={name:'floor_amount',type:'text'};
      //   type={
      //     name:'floor_amount',
      //     type: orchestrationData?.data?.schemaData?.at(0)?.schema.properties.floor_amount.type == 'string' ? 'text' : orchestrationData?.data?.schemaData?.at(0)?.schema.properties.floor_amount.type =='integer' ? 'number' : orchestrationData?.data?.schemaData?.at(0)?.schema.properties.floor_amount.type
      //   }
      //   setDynamicStateandType(type);
      // }
      // }
      if(Array.isArray(orchestrationData?.data?.dstData))
      {
        return
      }else{
      //  if(Object.keys(orchestrationData?.data?.dstData).length>0) 
       // setsubgroup7f52e((pre:any)=>({...pre,floor_amount:orchestrationData?.data?.dstData}))
      }
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(()=>{
      handleMapperValue();
      if(!subgroup7f52e?.floor_amount)
      { 
        setsubgroup7f52eProps((pre:any)=>({...pre,required:true}));
        setIsRequredData(true);
      }
      if(validateRefetch.init!=0)
        handleBlur();
  },[validateRefetch.value])
  useEffect(() => {
  if(dfd_subscreen_db_v1Props?.setSearchFilters && dfd_subscreen_db_v1Props?.data)
  {
    if(Array.isArray(dfd_subscreen_db_v1Props.data) && dfd_subscreen_db_v1Props.data.length > 0){
      setsubgroup7f52e((pre:any)=>({...pre,floor_amount:dfd_subscreen_db_v1Props.data[0]?.floor_amount}));
    }
  }
  },[dfd_subscreen_db_v1Props?.setSearchFilters])
  if (floor_amnt59de7?.isHidden) {
    return <></>
  }
  return (   
    <div  
      style={{gridColumn: `14 / 19`,gridRow: `28 / 46`, gap:``, height: `100%`, overflow: 'auto', display: 'flex', flexDirection: 'column'}} >
      <div style={{ flex: 1, minHeight: 0 }}>
      <TextInput
        require={isRequredData}
        className="!rounded-xl"
        label={keyset("")}
        onChange= {handleChange}
        onBlur={handleBlur}
        type={dynamicStateandType.type}
        value={subgroup7f52e?.floor_amount||""}
         disabled= {floor_amnt59de7?.isDisabled ? true : false}
        pin='brick-brick'     
        view='normal'
        contentAlign={"left"}
        headerPosition='top'
        headerText="Floor Amount"
      errorMessage={error}
        validationState={validate?.Mms_Mandate_Info_v1?.floor_amount ? "invalid" : undefined}
      />
      </div>
    </div> 
  )
}

export default TextInputfloor_amnt
