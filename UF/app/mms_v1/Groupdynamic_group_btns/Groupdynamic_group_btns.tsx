




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
import Buttonscanbttn  from "./Buttonscanbttn";
import Buttonfoldescanbtn  from "./Buttonfoldescanbtn";
import Buttonsavebuttn  from "./Buttonsavebuttn";
import Buttoncancelbtn  from "./Buttoncancelbtn";
import Buttonupdate  from "./Buttonupdate";
import Buttondeletebtn  from "./Buttondeletebtn";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { getCookie } from "@/app/components/cookieMgment";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { useTheme } from '@/hooks/useTheme';


const Groupdynamic_group_btns = ({lockedData={},setLockedData,primaryTableData={}, setPrimaryTableData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagPageData, nodeData, setNodeData,paginationDetails,isFormOpen=false,setIsProcessing}:any)=> {
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
      "scanbttn",
      "foldescanbtn",
      "savebuttn",
      "cancelbtn",
      "update",
      "deletebtn"
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
  const {scanbttn5a0f8, setscanbttn5a0f8}= useContext(TotalContext) as TotalContextProps;
  const {foldescanbtn9632b, setfoldescanbtn9632b}= useContext(TotalContext) as TotalContextProps;
  const {savebuttn2c3e8, setsavebuttn2c3e8}= useContext(TotalContext) as TotalContextProps;
  const {cancelbtn74e6a, setcancelbtn74e6a}= useContext(TotalContext) as TotalContextProps;
  const {update5d670, setupdate5d670}= useContext(TotalContext) as TotalContextProps;
  const {deletebtn81d63, setdeletebtn81d63}= useContext(TotalContext) as TotalContextProps;
  //////////////
  const [open, setOpen] = React.useState(false);
  async function securityCheck() {
  const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",componentId:"df31aefec0584f19bea3825e5af3c327",from:"GroupDynamicGroupBtns",accessProfile:accessProfile},{
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
    if(orchestrationData?.data?.readableControls.includes("scanbttn")){
      setscanbttn5a0f8({...scanbttn5a0f8,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("foldescanbtn")){
      setfoldescanbtn9632b({...foldescanbtn9632b,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("savebuttn")){
      setsavebuttn2c3e8({...savebuttn2c3e8,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("cancelbtn")){
      setcancelbtn74e6a({...cancelbtn74e6a,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("update")){
      setupdate5d670({...update5d670,isDisabled:true});
    }
    if(orchestrationData?.data?.readableControls.includes("deletebtn")){
      setdeletebtn81d63({...deletebtn81d63,isDisabled:true});
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


    const handleOnload=()=>{
  }
  const handleOnChange=()=>{

  }
  const dynamic_group_btns3c327Ref = useRef<any>(null);
  const handleClearSearch = () => {
    dynamic_group_btns3c327Ref.current?.setSearchParams();
    dynamic_group_btns3c327Ref.current?.handleSearch({});
  };

  useEffect(() => {    
    securityCheck()   
    handleOnload()
    if (prevRefreshRef.current) {
      if(!Array.isArray(dynamic_group_btns3c327) && Object.keys(dynamic_group_btns3c327)?.length>0)
      {
        setdynamic_group_btns3c327({})
      }
    }else 
      prevRefreshRef.current= true
  }, [dynamic_group_btns3c327Props?.refresh,token])


  const renderBUttons=()=>{
    return (
      <></>
    )
  }
  return (
    <div 
      style={{          
        gridColumn: '2 / 24',
        gridRow: '1 / 17',
      
        //rowGap: '',
        display: 'grid',
        gridTemplateColumns: 'repeat(24, 1fr)',
        gridTemplateRows: 'repeat(auto-fill, minmax(50px, 1fr))',
        height: '100%',
        overflow: 'auto',
        gridAutoRows: '',
        columnGap: '',
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
        {        (("scanbttn" in ButtonGoRuleData)?ButtonGoRuleData["scanbttn"]:true) && 
          allowedControls.includes("scanbttn")  ?            <Buttonscanbttn lockedData={lockedData} setLockedData={setLockedData} primaryTableData={primaryTableData} setPrimaryTableData={setPrimaryTableData} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} setIsProcessing={setIsProcessing}/>: <div></div>} 
        {        (("foldescanbtn" in ButtonGoRuleData)?ButtonGoRuleData["foldescanbtn"]:true) && 
          allowedControls.includes("foldescanbtn")  ?            <Buttonfoldescanbtn lockedData={lockedData} setLockedData={setLockedData} primaryTableData={primaryTableData} setPrimaryTableData={setPrimaryTableData} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} setIsProcessing={setIsProcessing}/>: <div></div>} 
        {        (("savebuttn" in ButtonGoRuleData)?ButtonGoRuleData["savebuttn"]:true) && 
          allowedControls.includes("savebuttn")  ?            <Buttonsavebuttn lockedData={lockedData} setLockedData={setLockedData} primaryTableData={primaryTableData} setPrimaryTableData={setPrimaryTableData} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} setIsProcessing={setIsProcessing}/>: <div></div>} 
        {        (("cancelbtn" in ButtonGoRuleData)?ButtonGoRuleData["cancelbtn"]:true) && 
          allowedControls.includes("cancelbtn")  ?            <Buttoncancelbtn lockedData={lockedData} setLockedData={setLockedData} primaryTableData={primaryTableData} setPrimaryTableData={setPrimaryTableData} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} setIsProcessing={setIsProcessing}/>: <div></div>} 
        {        (("update" in ButtonGoRuleData)?ButtonGoRuleData["update"]:true) && 
          allowedControls.includes("update")  ?            <Buttonupdate lockedData={lockedData} setLockedData={setLockedData} primaryTableData={primaryTableData} setPrimaryTableData={setPrimaryTableData} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} setIsProcessing={setIsProcessing}/>: <div></div>} 
        {        (("deletebtn" in ButtonGoRuleData)?ButtonGoRuleData["deletebtn"]:true) && 
          allowedControls.includes("deletebtn")  ?            <Buttondeletebtn lockedData={lockedData} setLockedData={setLockedData} primaryTableData={primaryTableData} setPrimaryTableData={setPrimaryTableData} checkToAdd={checkToAdd} setCheckToAdd={setCheckToAdd} refetch={refetch} setRefetch={setRefetch} encryptionFlagCompData={encryptionFlagCompData} setIsProcessing={setIsProcessing}/>: <div></div>} 
    </div>
 )
}

export default Groupdynamic_group_btns
