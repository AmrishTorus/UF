

'use client'
import React, { useState,useContext,useEffect } from 'react'
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import i18n from '@/app/components/i18n';
import { getCookie } from '@/app/components/cookieMgment';
import { codeExecution } from '@/app/utils/codeExecution';
import { AxiosService } from '@/app/components/axiosService';
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { useRouter } from 'next/navigation'
import { DatePicker } from '@/components/DatePicker';
import { Text } from '@/components/Text';
import { Modal } from '@/components/Modal';
import { eventBus } from '@/app/eventBus';
import { getFilterProps, getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { useHandleDfdRefresh } from '@/context/dfdRefreshContext';
import { eventDecisionTable } from '@/app/utils/evaluateDecisionTable';
import decodeToken from '@/app/components/decodeToken';
import * as v from 'valibot';


const DatePickerexpirydate = ({checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData}:any) => {
  const token:string = getCookie('token'); 
  const {validateRefetch , setValidateRefetch} = useContext(TotalContext) as TotalContextProps;
  const {validate , setValidate} = useContext(TotalContext) as TotalContextProps;
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const [isRequiredData,setIsRequiredData]=useState<boolean>(false)
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();
  const decodedTokenObj:any = decodeToken(token);
 
  const keyset:any=i18n.keyset("language");
  const toast:any=useInfoMsg();
  const routes = useRouter();
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false ;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  //showComponentAsPopup || showArtifactAsModal
    
  /////////////
   //another screen
  const {overallgroup00e53, setoverallgroup00e53}= useContext(TotalContext) as TotalContextProps  
  const {overallgroup00e53Props, setoverallgroup00e53Props}= useContext(TotalContext) as TotalContextProps  
  const {mandatedtls2cb9f, setmandatedtls2cb9f}= useContext(TotalContext) as TotalContextProps  
  const {mandatedtls2cb9fProps, setmandatedtls2cb9fProps}= useContext(TotalContext) as TotalContextProps  
  const {mandateinfo1b809, setmandateinfo1b809}= useContext(TotalContext) as TotalContextProps  
  const {mandateinfo1b809Props, setmandateinfo1b809Props}= useContext(TotalContext) as TotalContextProps  
  const {mnssubgroup3df12, setmnssubgroup3df12}= useContext(TotalContext) as TotalContextProps  
  const {mnssubgroup3df12Props, setmnssubgroup3df12Props}= useContext(TotalContext) as TotalContextProps  
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9, setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9}= useContext(TotalContext) as TotalContextProps  
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props, setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props}= useContext(TotalContext) as TotalContextProps  
  const {mndate_common_info3fb9d, setmndate_common_info3fb9d}= useContext(TotalContext) as TotalContextProps  
  const {mndate_common_info3fb9dProps, setmndate_common_info3fb9dProps}= useContext(TotalContext) as TotalContextProps  
  const {mndate_basic_sub_screenc9573, setmndate_basic_sub_screenc9573}= useContext(TotalContext) as TotalContextProps  
  const {mndate_basic_sub_screenc9573Props, setmndate_basic_sub_screenc9573Props}= useContext(TotalContext) as TotalContextProps  
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c, setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c}= useContext(TotalContext) as TotalContextProps  
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps, setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps}= useContext(TotalContext) as TotalContextProps  
  const {subgroup7f52e, setsubgroup7f52e}= useContext(TotalContext) as TotalContextProps  
  const {subgroup7f52eProps, setsubgroup7f52eProps}= useContext(TotalContext) as TotalContextProps  
  const {textf1c24, settextf1c24}= useContext(TotalContext) as TotalContextProps  
  const {variable_pay68402, setvariable_pay68402}= useContext(TotalContext) as TotalContextProps  
  const {inhouse0b227, setinhouse0b227}= useContext(TotalContext) as TotalContextProps  
  const {cr_acc_no596b0, setcr_acc_no596b0}= useContext(TotalContext) as TotalContextProps  
  const {cr_acc_name0589d, setcr_acc_name0589d}= useContext(TotalContext) as TotalContextProps  
  const {floor_amnt59de7, setfloor_amnt59de7}= useContext(TotalContext) as TotalContextProps  
  const {ceiling_amntc6b28, setceiling_amntc6b28}= useContext(TotalContext) as TotalContextProps  
  const {brbanknamec54c8, setbrbanknamec54c8}= useContext(TotalContext) as TotalContextProps  
  const {brbranchname951ce, setbrbranchname951ce}= useContext(TotalContext) as TotalContextProps  
  const {dr_sort_code26ce5, setdr_sort_code26ce5}= useContext(TotalContext) as TotalContextProps  
  const {currencye913a, setcurrencye913a}= useContext(TotalContext) as TotalContextProps  
  const {dr_acnt_no61f56, setdr_acnt_no61f56}= useContext(TotalContext) as TotalContextProps  
  const {dr_acnt_namee2b1e, setdr_acnt_namee2b1e}= useContext(TotalContext) as TotalContextProps  
  const {policy_no1316f6, setpolicy_no1316f6}= useContext(TotalContext) as TotalContextProps  
  const {policy_no2196cd, setpolicy_no2196cd}= useContext(TotalContext) as TotalContextProps  
  const {originator_codee7d60, setoriginator_codee7d60}= useContext(TotalContext) as TotalContextProps  
  const {frequency80676, setfrequency80676}= useContext(TotalContext) as TotalContextProps  
  const {duedate3cf41, setduedate3cf41}= useContext(TotalContext) as TotalContextProps  
  const {expirydateee023, setexpirydateee023}= useContext(TotalContext) as TotalContextProps  
  const {mandate_data_tabb1bce, setmandate_data_tabb1bce}= useContext(TotalContext) as TotalContextProps  
  const {mandate_data_tabb1bceProps, setmandate_data_tabb1bceProps}= useContext(TotalContext) as TotalContextProps  
  const {document_lst2adea, setdocument_lst2adea}= useContext(TotalContext) as TotalContextProps  
  const {document_lst2adeaProps, setdocument_lst2adeaProps}= useContext(TotalContext) as TotalContextProps  
  const {doc_data_lst1fd5c, setdoc_data_lst1fd5c}= useContext(TotalContext) as TotalContextProps  
  const {doc_data_lst1fd5cProps, setdoc_data_lst1fd5cProps}= useContext(TotalContext) as TotalContextProps  
  const {validation_lst771f5, setvalidation_lst771f5}= useContext(TotalContext) as TotalContextProps  
  const {validation_lst771f5Props, setvalidation_lst771f5Props}= useContext(TotalContext) as TotalContextProps  
  const {valdtn_data_lst378bc, setvaldtn_data_lst378bc}= useContext(TotalContext) as TotalContextProps  
  const {valdtn_data_lst378bcProps, setvaldtn_data_lst378bcProps}= useContext(TotalContext) as TotalContextProps  
  const {comment_lst2b2ca, setcomment_lst2b2ca}= useContext(TotalContext) as TotalContextProps  
  const {comment_lst2b2caProps, setcomment_lst2b2caProps}= useContext(TotalContext) as TotalContextProps  
  const {cmnt_data_lste3582, setcmnt_data_lste3582}= useContext(TotalContext) as TotalContextProps  
  const {cmnt_data_lste3582Props, setcmnt_data_lste3582Props}= useContext(TotalContext) as TotalContextProps  
  const {mandatelstc0e2c, setmandatelstc0e2c}= useContext(TotalContext) as TotalContextProps  
  const {mandatelstc0e2cProps, setmandatelstc0e2cProps}= useContext(TotalContext) as TotalContextProps  
  const {mandatedatalst46c27, setmandatedatalst46c27}= useContext(TotalContext) as TotalContextProps  
  const {mandatedatalst46c27Props, setmandatedatalst46c27Props}= useContext(TotalContext) as TotalContextProps  
  const {listgroup6f63e, setlistgroup6f63e}= useContext(TotalContext) as TotalContextProps  
  const {listgroup6f63eProps, setlistgroup6f63eProps}= useContext(TotalContext) as TotalContextProps  
  const {doclst42d30, setdoclst42d30}= useContext(TotalContext) as TotalContextProps  
  const {doclst42d30Props, setdoclst42d30Props}= useContext(TotalContext) as TotalContextProps  
  const {docdatalst620a8, setdocdatalst620a8}= useContext(TotalContext) as TotalContextProps  
  const {docdatalst620a8Props, setdocdatalst620a8Props}= useContext(TotalContext) as TotalContextProps  
  const {valdtnlst4ad99, setvaldtnlst4ad99}= useContext(TotalContext) as TotalContextProps  
  const {valdtnlst4ad99Props, setvaldtnlst4ad99Props}= useContext(TotalContext) as TotalContextProps  
  const {valdtndatalstd58f5, setvaldtndatalstd58f5}= useContext(TotalContext) as TotalContextProps  
  const {valdtndatalstd58f5Props, setvaldtndatalstd58f5Props}= useContext(TotalContext) as TotalContextProps  
  const {cmntlst0f1ad, setcmntlst0f1ad}= useContext(TotalContext) as TotalContextProps  
  const {cmntlst0f1adProps, setcmntlst0f1adProps}= useContext(TotalContext) as TotalContextProps  
  const {cmntdatalste4cdc, setcmntdatalste4cdc}= useContext(TotalContext) as TotalContextProps  
  const {cmntdatalste4cdcProps, setcmntdatalste4cdcProps}= useContext(TotalContext) as TotalContextProps  
  const {dynamic_group_btns3c327, setdynamic_group_btns3c327}= useContext(TotalContext) as TotalContextProps  
  const {dynamic_group_btns3c327Props, setdynamic_group_btns3c327Props}= useContext(TotalContext) as TotalContextProps  
  //////////////


  // Validation
  const [error, setError] = useState<string>('');
  let schemaArray :any =[];



        const today = new Date();
         today.setHours(0, 0, 0, 0); // Set to midnight (start of today)
          const tomorrow = new Date(today);
          tomorrow.setDate(tomorrow.getDate() + 1); // Move to tomorrow
           const schema = v.pipe(v.string(),v.minLength(1, 'Date is required'),v.transform((value) => new Date(value)),v.date(),v.minValue(today, 'Date must be in the future'));
const handleUpdate = async(date: any) => {
   if(date == "" || date == null || date == undefined) {
    setError('Date is required')
    setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,expiry_date: "invalid"}}))
    setsubgroup7f52e((prev: any) => ({ ...prev, expiry_date: "" }))
    return;
  }
  setError('')
  setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,expiry_date:undefined}}));
  if (!date) {
    setsubgroup7f52e((prev: any) => ({ ...prev, expiry_date: null }));
    return;
  }
  const selectedDate = new Date(date);
  const IST_OFFSET = 5.5 * 60 * 60 * 1000; 
  const indiaTime = new Date(selectedDate.getTime() + IST_OFFSET);
  const isoDate = indiaTime.toISOString();
  setsubgroup7f52e((prev: any) => ({ ...prev, expiry_date: isoDate }))
}



const handleBlur=async () => {
    //validation
    if(subgroup7f52e?.expiry_date == "" || subgroup7f52e?.expiry_date == undefined){
    subgroup7f52e.expiry_date = "";
    const validate:any = v.safeParse(schema, subgroup7f52e?.expiry_date);
    if(!validate.success){
      setError(validate?.issues[0]?.message);
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,expiry_date:"invalid"}}))
    }else{
    setError('')
    setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,expiry_date:undefined}  }))
    }
    }else if(subgroup7f52e?.expiry_date !== ""){
      const validate:any = v.safeParse(schema, subgroup7f52e?.expiry_date);  
      if(!validate.success){
        setError(validate?.issues[0]?.message);
        setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,expiry_date: "invalid"}}));
      }
    }
    let code:any;
    const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",  componentId:"4ec956e4599e4a4ab60a0db92557f52e",controlId:"28e533983cce43c48d9b5db63afee023",isTable:false,accessProfile:accessProfile,from:"datePicker"},{
      headers: {
        Authorization: `Bearer ${token}`
    }})
    code=orchestrationData?.data?.code
    if (code != '') {
    let codeStates: any = {};
      codeStates['overallgroup']  = overallgroup00e53;
      codeStates['setoverallgroup'] = setoverallgroup00e53;
      codeStates['mnssubgroup']  = mnssubgroup3df12;
      codeStates['setmnssubgroup'] = setmnssubgroup3df12;
      codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1']  = ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9;
      codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9;
      codeStates['mndate_common_info']  = mndate_common_info3fb9d;
      codeStates['setmndate_common_info'] = setmndate_common_info3fb9d;
      codeStates['mndate_basic_sub_screen']  = mndate_basic_sub_screenc9573;
      codeStates['setmndate_basic_sub_screen'] = setmndate_basic_sub_screenc9573;
      codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen_v1']  = ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c;
      codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c;
      codeStates['subgroup']  = subgroup7f52e;
      codeStates['setsubgroup'] = setsubgroup7f52e;
      codeStates['doc_data_lst']  = doc_data_lst1fd5c;
      codeStates['setdoc_data_lst'] = setdoc_data_lst1fd5c;
      codeStates['valdtn_data_lst']  = valdtn_data_lst378bc;
      codeStates['setvaldtn_data_lst'] = setvaldtn_data_lst378bc;
      codeStates['cmnt_data_lst']  = cmnt_data_lste3582;
      codeStates['setcmnt_data_lst'] = setcmnt_data_lste3582;
      codeStates['mandatedatalst']  = mandatedatalst46c27;
      codeStates['setmandatedatalst'] = setmandatedatalst46c27;
      codeStates['docdatalst']  = docdatalst620a8;
      codeStates['setdocdatalst'] = setdocdatalst620a8;
      codeStates['valdtndatalst']  = valdtndatalstd58f5;
      codeStates['setvaldtndatalst'] = setvaldtndatalstd58f5;
      codeStates['cmntdatalst']  = cmntdatalste4cdc;
      codeStates['setcmntdatalst'] = setcmntdatalste4cdc;
      codeStates['dynamic_group_btns']  = dynamic_group_btns3c327;
      codeStates['setdynamic_group_btns'] = setdynamic_group_btns3c327;
  codeExecution(code,codeStates);
  }
}

useEffect(()=>{
  setsubgroup7f52eProps((pre:any)=>({...pre,validation:true,required:true}))
 },[expirydateee023?.refresh])

useEffect(()=>{
  if(!subgroup7f52e?.expiry_date){ 
    setsubgroup7f52eProps((pre:any)=>({...pre,required:true}));
    setIsRequiredData(true);
  }
  if(validateRefetch.init!=0)
    handleBlur();
},[validateRefetch.value])

if (expirydateee023?.isHidden) {
  return <></>
}
return (
  <div 
  style={{gridColumn: `20 / 25`,gridRow: `113 / 132`, gap:``, height: `100%`, overflow: 'auto'}} >
    <DatePicker
      className="!rounded-xl"
      //label={keyset("")}
      value={subgroup7f52e?.expiry_date}
      onUpdate= {handleUpdate}
      onBlur= {()=>handleBlur()} 
      required={ true }
      readOnly=  {expirydateee023?.isDisabled ? true : false}
      disabled= {expirydateee023?.isDisabled ? true : false}
      contentAlign={"center"}
      headerPosition='top'
      headerText="Expiry Date"
      validationState={validate?.Mms_Mandate_Info_v1?.expiry_date ? "invalid" : undefined}
      errorMessage={error}
      />
  </div>
  )
}

export default DatePickerexpirydate
