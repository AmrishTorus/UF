




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
import Texttext  from "./Texttext";
import Checkboxvariable_pay  from "./Checkboxvariable_pay";
import Checkboxinhouse  from "./Checkboxinhouse";
import TextInputcr_acc_no  from "./TextInputcr_acc_no";
import TextInputcr_acc_name  from "./TextInputcr_acc_name";
import TextInputfloor_amnt  from "./TextInputfloor_amnt";
import TextInputceiling_amnt  from "./TextInputceiling_amnt";
import Dropdownbrbankname  from "./Dropdownbrbankname";
import Dropdownbrbranchname  from "./Dropdownbrbranchname";
import TextInputdr_sort_code  from "./TextInputdr_sort_code";
import TextInputcurrency  from "./TextInputcurrency";
import TextInputdr_acnt_no  from "./TextInputdr_acnt_no";
import TextInputdr_acnt_name  from "./TextInputdr_acnt_name";
import TextInputpolicy_no1  from "./TextInputpolicy_no1";
import TextInputpolicy_no2  from "./TextInputpolicy_no2";
import TextInputoriginator_code  from "./TextInputoriginator_code";
import Dropdownfrequency  from "./Dropdownfrequency";
import DatePickerduedate  from "./DatePickerduedate";
import DatePickerexpirydate  from "./DatePickerexpirydate";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { getCookie } from "@/app/components/cookieMgment";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { useTheme } from '@/hooks/useTheme';


const Groupsubgroup = ({lockedData={},setLockedData,primaryTableData={}, setPrimaryTableData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagPageData, nodeData, setNodeData,paginationDetails,isFormOpen=false,setIsProcessing}:any)=> {
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
  const {dfd_subscreen_db_v1Props, setdfd_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_combo_subscreen_db_v1Props, setdfd_combo_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mandate_error_lst_db_v1Props, setdfd_mandate_error_lst_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mandate_doc_lst_db_v1Props, setdfd_mandate_doc_lst_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mandate_list_db_v1Props, setdfd_mandate_list_db_v1Props} = useContext(TotalContext) as TotalContextProps;
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
  "Operation Team": {
    "allowedControls": [
      "text",
      "variable_pay",
      "inhouse",
      "cr_acc_no",
      "cr_acc_name",
      "floor_amnt",
      "ceiling_amnt",
      "brbankname",
      "brbranchname",
      "dr_sort_code",
      "currency",
      "dr_acnt_no",
      "dr_acnt_name",
      "policy_no1",
      "policy_no2",
      "originator_code",
      "frequency",
      "duedate",
      "expirydate"
    ],
    "allowedGroups": [
      "canvas",
      "overallgroup",
      "mandatedtls",
      "mandateinfo",
      "mnssubgroup",
      "ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1",
      "mndate_common_info",
      "mndate_basic_sub_screen",
      "ct005_af_uf_ufws_v001_mms_mandate_subscreen_v1",
      "subgroup",
      "mandate_data_tab",
      "document_lst",
      "doc_data_lst",
      "validation_lst",
      "valdtn_data_lst",
      "comment_lst",
      "cmnt_data_lst",
      "mandatelst",
      "mandatedatalst",
      "listgroup",
      "doclst",
      "docdatalst",
      "valdtnlst",
      "valdtndatalst",
      "cmntlst",
      "cmntdatalst",
      "dynamic_group_btns"
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
  //////////////
  const [open, setOpen] = React.useState(false);
  async function securityCheck() {
  const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",componentId:"4ec956e4599e4a4ab60a0db92557f52e",from:"GroupSubgroup",accessProfile:accessProfile},{
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
    if(orchestrationData?.data?.readableControls.includes("text")){
      settextf1c24({...textf1c24,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("variable_pay")){
      setvariable_pay68402({...variable_pay68402,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("inhouse")){
      setinhouse0b227({...inhouse0b227,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("cr_acc_no")){
      setcr_acc_no596b0({...cr_acc_no596b0,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("cr_acc_name")){
      setcr_acc_name0589d({...cr_acc_name0589d,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("floor_amnt")){
      setfloor_amnt59de7({...floor_amnt59de7,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("ceiling_amnt")){
      setceiling_amntc6b28({...ceiling_amntc6b28,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("brbankname")){
      setbrbanknamec54c8({...brbanknamec54c8,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("brbranchname")){
      setbrbranchname951ce({...brbranchname951ce,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("dr_sort_code")){
      setdr_sort_code26ce5({...dr_sort_code26ce5,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("currency")){
      setcurrencye913a({...currencye913a,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("dr_acnt_no")){
      setdr_acnt_no61f56({...dr_acnt_no61f56,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("dr_acnt_name")){
      setdr_acnt_namee2b1e({...dr_acnt_namee2b1e,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("policy_no1")){
      setpolicy_no1316f6({...policy_no1316f6,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("policy_no2")){
      setpolicy_no2196cd({...policy_no2196cd,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("originator_code")){
      setoriginator_codee7d60({...originator_codee7d60,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("frequency")){
      setfrequency80676({...frequency80676,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("duedate")){
      setduedate3cf41({...duedate3cf41,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("expirydate")){
      setexpirydateee023({...expirydateee023,isDisabled:true});
    }
  //////////////
    if (code != '') {
      let codeStates: any = {};
      codeStates['overallgroup']  = overallgroup00e53,
      codeStates['setoverallgroup'] = setoverallgroup00e53,
      codeStates['mnssubgroup']  = mnssubgroup3df12,
      codeStates['setmnssubgroup'] = setmnssubgroup3df12,
      codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1']  = ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,
      codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,
      codeStates['mndate_common_info']  = mndate_common_info3fb9d,
      codeStates['setmndate_common_info'] = setmndate_common_info3fb9d,
      codeStates['mndate_basic_sub_screen']  = mndate_basic_sub_screenc9573,
      codeStates['setmndate_basic_sub_screen'] = setmndate_basic_sub_screenc9573,
      codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen_v1']  = ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,
      codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,
      codeStates['subgroup']  = subgroup7f52e,
      codeStates['setsubgroup'] = setsubgroup7f52e,
      codeStates['doc_data_lst']  = doc_data_lst1fd5c,
      codeStates['setdoc_data_lst'] = setdoc_data_lst1fd5c,
      codeStates['valdtn_data_lst']  = valdtn_data_lst378bc,
      codeStates['setvaldtn_data_lst'] = setvaldtn_data_lst378bc,
      codeStates['cmnt_data_lst']  = cmnt_data_lste3582,
      codeStates['setcmnt_data_lst'] = setcmnt_data_lste3582,
      codeStates['mandatedatalst']  = mandatedatalst46c27,
      codeStates['setmandatedatalst'] = setmandatedatalst46c27,
      codeStates['docdatalst']  = docdatalst620a8,
      codeStates['setdocdatalst'] = setdocdatalst620a8,
      codeStates['valdtndatalst']  = valdtndatalstd58f5,
      codeStates['setvaldtndatalst'] = setvaldtndatalstd58f5,
      codeStates['cmntdatalst']  = cmntdatalste4cdc,
      codeStates['setcmntdatalst'] = setcmntdatalste4cdc,
      codeStates['dynamic_group_btns']  = dynamic_group_btns3c327,
      codeStates['setdynamic_group_btns'] = setdynamic_group_btns3c327,

    codeExecution(code,codeStates);
    } 
  }

  function handleConfirmOnLoad(){
  }

    const handleOnload=()=>{
      // copyFormData for group
      setdynamic_group_btns3c327Props((prev:any) => {
        const newKey = 'CT005:AF:UF-UFWS:V001:MMS:Mandate_Subscreen:v1';
        return {
          ...prev,
          ssKey: prev?.ssKey?.includes(newKey)
            ? prev.ssKey
            : [...(prev?.ssKey || []), newKey]
        };
        });
      setdynamic_group_btns3c327((prev:any) => ({ ...prev, ...subgroup7f52e }));
  }
  const handleOnChange=()=>{

  }
  const subgroup7f52eRef = useRef<any>(null);
  const handleClearSearch = () => {
    subgroup7f52eRef.current?.setSearchParams();
    subgroup7f52eRef.current?.handleSearch({});
  };

  useEffect(() => {    
    securityCheck()   
    handleOnload()
    if (prevRefreshRef.current) {
      if(!Array.isArray(subgroup7f52e) && Object.keys(subgroup7f52e)?.length>0)
      {
        setsubgroup7f52e({})
      }
    }else 
      prevRefreshRef.current= true
  }, [subgroup7f52eProps?.refresh,token])

  useEffect(() => {    
    securityCheck()   
    handleOnload()
    handleOnChange()
  }, [subgroup7f52e])

  const renderBUttons=()=>{
    return (
      <></>
    )
  }
  return (
    <div 
      style={{          
        gridColumn: '1 / 25',
        gridRow: '1 / 144',
      
        //rowGap: '0px',
        display: 'grid',
        gridTemplateColumns: 'repeat(24, 1fr)',
        gridTemplateRows: 'repeat(auto-fill, minmax(4px, 1fr))',
        height: '100%',
        overflow: 'auto',
        gridAutoRows: '4px',
        columnGap: '0px',
        backgroundColor:'',
        backgroundImage:"url('')",
        backgroundPosition: '',
        backgroundSize: '',
        backgroundRepeat: '',
        backgroundAttachment: '',
        backgroundClip: '',
        backgroundBlendMode: ''
      }}
      className={`flex flex-col overflow-auto rounded-md  ${isDark ? 'text-white' : 'text-black'}`}
    >
          {allowedControls.includes("text") ?<Texttext   /* f1c24 */ isDynamic={false } index={idx} item={item} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("variable_pay") ?<Checkboxvariable_pay   /* 68402 */checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("inhouse") ?<Checkboxinhouse   /* 0b227 */checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("cr_acc_no") ?<TextInputcr_acc_no   /* 596b0 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("cr_acc_name") ?<TextInputcr_acc_name   /* 0589d */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("floor_amnt") ?<TextInputfloor_amnt   /* 59de7 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("ceiling_amnt") ?<TextInputceiling_amnt   /* c6b28 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("brbankname") ?<Dropdownbrbankname   /* c54c8 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} lockedData ={lockedData} setLockedData={setLockedData} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("brbranchname") ?<Dropdownbrbranchname   /* 951ce */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} lockedData ={lockedData} setLockedData={setLockedData} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("dr_sort_code") ?<TextInputdr_sort_code   /* 26ce5 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("currency") ?<TextInputcurrency   /* e913a */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("dr_acnt_no") ?<TextInputdr_acnt_no   /* 61f56 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("dr_acnt_name") ?<TextInputdr_acnt_name   /* e2b1e */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("policy_no1") ?<TextInputpolicy_no1   /* 316f6 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("policy_no2") ?<TextInputpolicy_no2   /* 196cd */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("originator_code") ?<TextInputoriginator_code   /* e7d60 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("frequency") ?<Dropdownfrequency   /* 80676 */ checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} lockedData ={lockedData} setLockedData={setLockedData} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("duedate") ?<DatePickerduedate   /* 3cf41 */checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
        {allowedControls.includes("expirydate") ?<DatePickerexpirydate   /* ee023 */checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} encryptionFlagCompData={encryptionFlagCompData} />: <div></div>}
    </div>
 )
}

export default Groupsubgroup
