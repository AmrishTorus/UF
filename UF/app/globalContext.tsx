


"use client"
import React from 'react';
import { getCookie } from './components/cookieMgment';
export interface TotalContextProps {
  currentToken: any 
  setCurrentToken: React.Dispatch<React.SetStateAction<any>>
  matchedAccessProfileData: any;
  setMatchedAccessProfileData: React.Dispatch<React.SetStateAction<any>>
  overallgroup00e53: any 
  setoverallgroup00e53: React.Dispatch<React.SetStateAction<any>>
  overallgroup00e53Props: any 
  setoverallgroup00e53Props: React.Dispatch<React.SetStateAction<any>>
  mandatedtls2cb9f: any 
  setmandatedtls2cb9f: React.Dispatch<React.SetStateAction<any>>
  mandatedtls2cb9fProps: any 
  setmandatedtls2cb9fProps: React.Dispatch<React.SetStateAction<any>>
  mandateinfo1b809: any 
  setmandateinfo1b809: React.Dispatch<React.SetStateAction<any>>
  mandateinfo1b809Props: any 
  setmandateinfo1b809Props: React.Dispatch<React.SetStateAction<any>>
  mnssubgroup3df12: any 
  setmnssubgroup3df12: React.Dispatch<React.SetStateAction<any>>
  mnssubgroup3df12Props: any 
  setmnssubgroup3df12Props: React.Dispatch<React.SetStateAction<any>>
  ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9: any 
  setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9: React.Dispatch<React.SetStateAction<any>>
  ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props: any 
  setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props: React.Dispatch<React.SetStateAction<any>>
  mndate_common_info3fb9d: any 
  setmndate_common_info3fb9d: React.Dispatch<React.SetStateAction<any>>
  mndate_common_info3fb9dProps: any 
  setmndate_common_info3fb9dProps: React.Dispatch<React.SetStateAction<any>>
  mndate_basic_sub_screenc9573: any 
  setmndate_basic_sub_screenc9573: React.Dispatch<React.SetStateAction<any>>
  mndate_basic_sub_screenc9573Props: any 
  setmndate_basic_sub_screenc9573Props: React.Dispatch<React.SetStateAction<any>>
  ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c: any 
  setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c: React.Dispatch<React.SetStateAction<any>>
  ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps: any 
  setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps: React.Dispatch<React.SetStateAction<any>>
  subgroup7f52e: any 
  setsubgroup7f52e: React.Dispatch<React.SetStateAction<any>>
  subgroup7f52eProps: any 
  setsubgroup7f52eProps: React.Dispatch<React.SetStateAction<any>>
  mandate_data_tabb1bce: any 
  setmandate_data_tabb1bce: React.Dispatch<React.SetStateAction<any>>
  mandate_data_tabb1bceProps: any 
  setmandate_data_tabb1bceProps: React.Dispatch<React.SetStateAction<any>>
  document_lst2adea: any 
  setdocument_lst2adea: React.Dispatch<React.SetStateAction<any>>
  document_lst2adeaProps: any 
  setdocument_lst2adeaProps: React.Dispatch<React.SetStateAction<any>>
  doc_data_lst1fd5c: any 
  setdoc_data_lst1fd5c: React.Dispatch<React.SetStateAction<any>>
  doc_data_lst1fd5cProps: any 
  setdoc_data_lst1fd5cProps: React.Dispatch<React.SetStateAction<any>>
  validation_lst771f5: any 
  setvalidation_lst771f5: React.Dispatch<React.SetStateAction<any>>
  validation_lst771f5Props: any 
  setvalidation_lst771f5Props: React.Dispatch<React.SetStateAction<any>>
  valdtn_data_lst378bc: any 
  setvaldtn_data_lst378bc: React.Dispatch<React.SetStateAction<any>>
  valdtn_data_lst378bcProps: any 
  setvaldtn_data_lst378bcProps: React.Dispatch<React.SetStateAction<any>>
  comment_lst2b2ca: any 
  setcomment_lst2b2ca: React.Dispatch<React.SetStateAction<any>>
  comment_lst2b2caProps: any 
  setcomment_lst2b2caProps: React.Dispatch<React.SetStateAction<any>>
  cmnt_data_lste3582: any 
  setcmnt_data_lste3582: React.Dispatch<React.SetStateAction<any>>
  cmnt_data_lste3582Props: any 
  setcmnt_data_lste3582Props: React.Dispatch<React.SetStateAction<any>>
  mandatelstc0e2c: any 
  setmandatelstc0e2c: React.Dispatch<React.SetStateAction<any>>
  mandatelstc0e2cProps: any 
  setmandatelstc0e2cProps: React.Dispatch<React.SetStateAction<any>>
  mandatedatalst46c27: any 
  setmandatedatalst46c27: React.Dispatch<React.SetStateAction<any>>
  mandatedatalst46c27Props: any 
  setmandatedatalst46c27Props: React.Dispatch<React.SetStateAction<any>>
  listgroup6f63e: any 
  setlistgroup6f63e: React.Dispatch<React.SetStateAction<any>>
  listgroup6f63eProps: any 
  setlistgroup6f63eProps: React.Dispatch<React.SetStateAction<any>>
  doclst42d30: any 
  setdoclst42d30: React.Dispatch<React.SetStateAction<any>>
  doclst42d30Props: any 
  setdoclst42d30Props: React.Dispatch<React.SetStateAction<any>>
  docdatalst620a8: any 
  setdocdatalst620a8: React.Dispatch<React.SetStateAction<any>>
  docdatalst620a8Props: any 
  setdocdatalst620a8Props: React.Dispatch<React.SetStateAction<any>>
  valdtnlst4ad99: any 
  setvaldtnlst4ad99: React.Dispatch<React.SetStateAction<any>>
  valdtnlst4ad99Props: any 
  setvaldtnlst4ad99Props: React.Dispatch<React.SetStateAction<any>>
  valdtndatalstd58f5: any 
  setvaldtndatalstd58f5: React.Dispatch<React.SetStateAction<any>>
  valdtndatalstd58f5Props: any 
  setvaldtndatalstd58f5Props: React.Dispatch<React.SetStateAction<any>>
  cmntlst0f1ad: any 
  setcmntlst0f1ad: React.Dispatch<React.SetStateAction<any>>
  cmntlst0f1adProps: any 
  setcmntlst0f1adProps: React.Dispatch<React.SetStateAction<any>>
  cmntdatalste4cdc: any 
  setcmntdatalste4cdc: React.Dispatch<React.SetStateAction<any>>
  cmntdatalste4cdcProps: any 
  setcmntdatalste4cdcProps: React.Dispatch<React.SetStateAction<any>>
  dynamic_group_btns3c327: any 
  setdynamic_group_btns3c327: React.Dispatch<React.SetStateAction<any>>
  dynamic_group_btns3c327Props: any 
  setdynamic_group_btns3c327Props: React.Dispatch<React.SetStateAction<any>>
  text474c8: any,
  settext474c8:React.Dispatch<React.SetStateAction<any>>
  text474c8Props: any 
  settext474c8Props: React.Dispatch<React.SetStateAction<any>>
  batch_type6befb: any,
  setbatch_type6befb:React.Dispatch<React.SetStateAction<any>>
  batch_type6befbProps: any 
  setbatch_type6befbProps: React.Dispatch<React.SetStateAction<any>>
  textf1c24: any,
  settextf1c24:React.Dispatch<React.SetStateAction<any>>
  textf1c24Props: any 
  settextf1c24Props: React.Dispatch<React.SetStateAction<any>>
  variable_pay68402: any,
  setvariable_pay68402:React.Dispatch<React.SetStateAction<any>>
  variable_pay68402Props: any 
  setvariable_pay68402Props: React.Dispatch<React.SetStateAction<any>>
  inhouse0b227: any,
  setinhouse0b227:React.Dispatch<React.SetStateAction<any>>
  inhouse0b227Props: any 
  setinhouse0b227Props: React.Dispatch<React.SetStateAction<any>>
  cr_acc_no596b0: any,
  setcr_acc_no596b0:React.Dispatch<React.SetStateAction<any>>
  cr_acc_no596b0Props: any 
  setcr_acc_no596b0Props: React.Dispatch<React.SetStateAction<any>>
  cr_acc_name0589d: any,
  setcr_acc_name0589d:React.Dispatch<React.SetStateAction<any>>
  cr_acc_name0589dProps: any 
  setcr_acc_name0589dProps: React.Dispatch<React.SetStateAction<any>>
  floor_amnt59de7: any,
  setfloor_amnt59de7:React.Dispatch<React.SetStateAction<any>>
  floor_amnt59de7Props: any 
  setfloor_amnt59de7Props: React.Dispatch<React.SetStateAction<any>>
  ceiling_amntc6b28: any,
  setceiling_amntc6b28:React.Dispatch<React.SetStateAction<any>>
  ceiling_amntc6b28Props: any 
  setceiling_amntc6b28Props: React.Dispatch<React.SetStateAction<any>>
  brbanknamec54c8: any,
  setbrbanknamec54c8:React.Dispatch<React.SetStateAction<any>>
  brbanknamec54c8Props: any 
  setbrbanknamec54c8Props: React.Dispatch<React.SetStateAction<any>>
  brbranchname951ce: any,
  setbrbranchname951ce:React.Dispatch<React.SetStateAction<any>>
  brbranchname951ceProps: any 
  setbrbranchname951ceProps: React.Dispatch<React.SetStateAction<any>>
  dr_sort_code26ce5: any,
  setdr_sort_code26ce5:React.Dispatch<React.SetStateAction<any>>
  dr_sort_code26ce5Props: any 
  setdr_sort_code26ce5Props: React.Dispatch<React.SetStateAction<any>>
  currencye913a: any,
  setcurrencye913a:React.Dispatch<React.SetStateAction<any>>
  currencye913aProps: any 
  setcurrencye913aProps: React.Dispatch<React.SetStateAction<any>>
  dr_acnt_no61f56: any,
  setdr_acnt_no61f56:React.Dispatch<React.SetStateAction<any>>
  dr_acnt_no61f56Props: any 
  setdr_acnt_no61f56Props: React.Dispatch<React.SetStateAction<any>>
  dr_acnt_namee2b1e: any,
  setdr_acnt_namee2b1e:React.Dispatch<React.SetStateAction<any>>
  dr_acnt_namee2b1eProps: any 
  setdr_acnt_namee2b1eProps: React.Dispatch<React.SetStateAction<any>>
  policy_no1316f6: any,
  setpolicy_no1316f6:React.Dispatch<React.SetStateAction<any>>
  policy_no1316f6Props: any 
  setpolicy_no1316f6Props: React.Dispatch<React.SetStateAction<any>>
  policy_no2196cd: any,
  setpolicy_no2196cd:React.Dispatch<React.SetStateAction<any>>
  policy_no2196cdProps: any 
  setpolicy_no2196cdProps: React.Dispatch<React.SetStateAction<any>>
  originator_codee7d60: any,
  setoriginator_codee7d60:React.Dispatch<React.SetStateAction<any>>
  originator_codee7d60Props: any 
  setoriginator_codee7d60Props: React.Dispatch<React.SetStateAction<any>>
  frequency80676: any,
  setfrequency80676:React.Dispatch<React.SetStateAction<any>>
  frequency80676Props: any 
  setfrequency80676Props: React.Dispatch<React.SetStateAction<any>>
  duedate3cf41: any,
  setduedate3cf41:React.Dispatch<React.SetStateAction<any>>
  duedate3cf41Props: any 
  setduedate3cf41Props: React.Dispatch<React.SetStateAction<any>>
  expirydateee023: any,
  setexpirydateee023:React.Dispatch<React.SetStateAction<any>>
  expirydateee023Props: any 
  setexpirydateee023Props: React.Dispatch<React.SetStateAction<any>>
  doc_name6a955: any,
  setdoc_name6a955:React.Dispatch<React.SetStateAction<any>>
  doc_name6a955Props: any 
  setdoc_name6a955Props: React.Dispatch<React.SetStateAction<any>>
  action55349: any,
  setaction55349:React.Dispatch<React.SetStateAction<any>>
  action55349Props: any 
  setaction55349Props: React.Dispatch<React.SetStateAction<any>>
  vld_code5df31: any,
  setvld_code5df31:React.Dispatch<React.SetStateAction<any>>
  vld_code5df31Props: any 
  setvld_code5df31Props: React.Dispatch<React.SetStateAction<any>>
  vld_reason0ec55: any,
  setvld_reason0ec55:React.Dispatch<React.SetStateAction<any>>
  vld_reason0ec55Props: any 
  setvld_reason0ec55Props: React.Dispatch<React.SetStateAction<any>>
  cmnts86495: any,
  setcmnts86495:React.Dispatch<React.SetStateAction<any>>
  cmnts86495Props: any 
  setcmnts86495Props: React.Dispatch<React.SetStateAction<any>>
  action53022: any,
  setaction53022:React.Dispatch<React.SetStateAction<any>>
  action53022Props: any 
  setaction53022Props: React.Dispatch<React.SetStateAction<any>>
  mandateid05ce4: any,
  setmandateid05ce4:React.Dispatch<React.SetStateAction<any>>
  mandateid05ce4Props: any 
  setmandateid05ce4Props: React.Dispatch<React.SetStateAction<any>>
  dracntname92ac0: any,
  setdracntname92ac0:React.Dispatch<React.SetStateAction<any>>
  dracntname92ac0Props: any 
  setdracntname92ac0Props: React.Dispatch<React.SetStateAction<any>>
  dracntno42c4a: any,
  setdracntno42c4a:React.Dispatch<React.SetStateAction<any>>
  dracntno42c4aProps: any 
  setdracntno42c4aProps: React.Dispatch<React.SetStateAction<any>>
  cracntname9fdc4: any,
  setcracntname9fdc4:React.Dispatch<React.SetStateAction<any>>
  cracntname9fdc4Props: any 
  setcracntname9fdc4Props: React.Dispatch<React.SetStateAction<any>>
  cracntnoc7b4d: any,
  setcracntnoc7b4d:React.Dispatch<React.SetStateAction<any>>
  cracntnoc7b4dProps: any 
  setcracntnoc7b4dProps: React.Dispatch<React.SetStateAction<any>>
  ceilingamnt62ee2: any,
  setceilingamnt62ee2:React.Dispatch<React.SetStateAction<any>>
  ceilingamnt62ee2Props: any 
  setceilingamnt62ee2Props: React.Dispatch<React.SetStateAction<any>>
  frequency1a4a6: any,
  setfrequency1a4a6:React.Dispatch<React.SetStateAction<any>>
  frequency1a4a6Props: any 
  setfrequency1a4a6Props: React.Dispatch<React.SetStateAction<any>>
  duedate03f9a: any,
  setduedate03f9a:React.Dispatch<React.SetStateAction<any>>
  duedate03f9aProps: any 
  setduedate03f9aProps: React.Dispatch<React.SetStateAction<any>>
  expirydate3fe80: any,
  setexpirydate3fe80:React.Dispatch<React.SetStateAction<any>>
  expirydate3fe80Props: any 
  setexpirydate3fe80Props: React.Dispatch<React.SetStateAction<any>>
  status68b01: any,
  setstatus68b01:React.Dispatch<React.SetStateAction<any>>
  status68b01Props: any 
  setstatus68b01Props: React.Dispatch<React.SetStateAction<any>>
  docnamefb324: any,
  setdocnamefb324:React.Dispatch<React.SetStateAction<any>>
  docnamefb324Props: any 
  setdocnamefb324Props: React.Dispatch<React.SetStateAction<any>>
  deleted70e2: any,
  setdeleted70e2:React.Dispatch<React.SetStateAction<any>>
  deleted70e2Props: any 
  setdeleted70e2Props: React.Dispatch<React.SetStateAction<any>>
  vldcode7ab9e: any,
  setvldcode7ab9e:React.Dispatch<React.SetStateAction<any>>
  vldcode7ab9eProps: any 
  setvldcode7ab9eProps: React.Dispatch<React.SetStateAction<any>>
  vldreason6b5dc: any,
  setvldreason6b5dc:React.Dispatch<React.SetStateAction<any>>
  vldreason6b5dcProps: any 
  setvldreason6b5dcProps: React.Dispatch<React.SetStateAction<any>>
  cmnts2d060: any,
  setcmnts2d060:React.Dispatch<React.SetStateAction<any>>
  cmnts2d060Props: any 
  setcmnts2d060Props: React.Dispatch<React.SetStateAction<any>>
  scanbttn5a0f8: any,
  setscanbttn5a0f8:React.Dispatch<React.SetStateAction<any>>
  scanbttn5a0f8Props: any 
  setscanbttn5a0f8Props: React.Dispatch<React.SetStateAction<any>>
  foldescanbtn9632b: any,
  setfoldescanbtn9632b:React.Dispatch<React.SetStateAction<any>>
  foldescanbtn9632bProps: any 
  setfoldescanbtn9632bProps: React.Dispatch<React.SetStateAction<any>>
  savebuttn2c3e8: any,
  setsavebuttn2c3e8:React.Dispatch<React.SetStateAction<any>>
  savebuttn2c3e8Props: any 
  setsavebuttn2c3e8Props: React.Dispatch<React.SetStateAction<any>>
  cancelbtn74e6a: any,
  setcancelbtn74e6a:React.Dispatch<React.SetStateAction<any>>
  cancelbtn74e6aProps: any 
  setcancelbtn74e6aProps: React.Dispatch<React.SetStateAction<any>>
  update5d670: any,
  setupdate5d670:React.Dispatch<React.SetStateAction<any>>
  update5d670Props: any 
  setupdate5d670Props: React.Dispatch<React.SetStateAction<any>>
  deletebtn81d63: any,
  setdeletebtn81d63:React.Dispatch<React.SetStateAction<any>>
  deletebtn81d63Props: any 
  setdeletebtn81d63Props: React.Dispatch<React.SetStateAction<any>>
  docviewer4f7f9: any,
  setdocviewer4f7f9:React.Dispatch<React.SetStateAction<any>>
  docviewer4f7f9Props: any 
  setdocviewer4f7f9Props: React.Dispatch<React.SetStateAction<any>>

////// screen states 
  mms_mandate_info_v1Props: any 
  setmms_mandate_info_v1Props: React.Dispatch<React.SetStateAction<any>>

///////// dfd
  dfd_subscreen_db_v1Props: any 
  setdfd_subscreen_db_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_combo_subscreen_db_v1Props: any 
  setdfd_combo_subscreen_db_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mandate_error_lst_db_v1Props: any 
  setdfd_mandate_error_lst_db_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mandate_doc_lst_db_v1Props: any 
  setdfd_mandate_doc_lst_db_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mandate_list_db_v1Props: any 
  setdfd_mandate_list_db_v1Props: React.Dispatch<React.SetStateAction<any>>

  refetch: any,
  setRefetch: React.Dispatch<React.SetStateAction<any>>
  searchParam: string,
  setSearchParam: React.Dispatch<React.SetStateAction<string>>
  disableParam: Record<string, boolean>,
  setDisableParam: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
  globalState: Record<string, any>,
  setGlobalState: React.Dispatch<React.SetStateAction<Record<string, any>>>
  // for all textInput validation
  validate: Record<string, any>,
  setValidate: React.Dispatch<React.SetStateAction<Record<string, any>>>

  //its used for validate once again on button click
  validateRefetch: { value: boolean; init: number },
  setValidateRefetch: React.Dispatch<React.SetStateAction<{ value: boolean; init: number }>>
  accessProfile:any,
  setAccessProfile: React.Dispatch<React.SetStateAction<any>>
  memoryVariables: Record<string, string>
  setMemoryVariables: React.Dispatch<React.SetStateAction<Record<string, string>>>
  property: Record<string, any>
  setProperty: React.Dispatch<React.SetStateAction<Record<string, any>>>
  refresh: Record<string, boolean>,
  setRefresh: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
  lockedData: Record<string, any>,
  setLockedData: React.Dispatch<React.SetStateAction<Record<string, any>>>
  paginationDetails: Record<string, any>,
  setpaginationDetails: React.Dispatch<React.SetStateAction<Record<string, any>>>
  eventEmitterData: any,
  setEventEmitterData: React.Dispatch<React.SetStateAction<any>>
  userDetails: Record<string, any>,
  setUserDetails: React.Dispatch<React.SetStateAction<Record<string, any>>>
  encAppFalg: Record<string, any>,
  setEncAppFalg: React.Dispatch<React.SetStateAction<Record<string, any>>>
}

export const TotalContext = React.createContext<TotalContextProps | {}>({})

const GlobalContext = ({children} : {children: React.ReactNode}) => {
    const [currentToken, setCurrentToken ] = React.useState<any>({})
    const [matchedAccessProfileData, setMatchedAccessProfileData] =
    React.useState<any>({})
      //////////
        const [overallgroup00e53, setoverallgroup00e53 ] = React.useState<any>({}) 
    const [overallgroup00e53Props, setoverallgroup00e53Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [mandatedtls2cb9f, setmandatedtls2cb9f ] = React.useState<any>({}) 
    const [mandatedtls2cb9fProps, setmandatedtls2cb9fProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [mandateinfo1b809, setmandateinfo1b809 ] = React.useState<any>({}) 
    const [mandateinfo1b809Props, setmandateinfo1b809Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [mnssubgroup3df12, setmnssubgroup3df12 ] = React.useState<any>({}) 
    const [mnssubgroup3df12Props, setmnssubgroup3df12Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9, setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9 ] = React.useState<any>({}) 
    const [ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props, setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [mndate_common_info3fb9d, setmndate_common_info3fb9d ] = React.useState<any>({}) 
    const [mndate_common_info3fb9dProps, setmndate_common_info3fb9dProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [mndate_basic_sub_screenc9573, setmndate_basic_sub_screenc9573 ] = React.useState<any>({}) 
    const [mndate_basic_sub_screenc9573Props, setmndate_basic_sub_screenc9573Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c, setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c ] = React.useState<any>({}) 
    const [ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps, setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [subgroup7f52e, setsubgroup7f52e ] = React.useState<any>({}) 
    const [subgroup7f52eProps, setsubgroup7f52eProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [mandate_data_tabb1bce, setmandate_data_tabb1bce ] = React.useState<any>({}) 
    const [mandate_data_tabb1bceProps, setmandate_data_tabb1bceProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [document_lst2adea, setdocument_lst2adea ] = React.useState<any>({}) 
    const [document_lst2adeaProps, setdocument_lst2adeaProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [doc_data_lst1fd5c, setdoc_data_lst1fd5c ] = React.useState<any>([]) 
    const [doc_data_lst1fd5cProps, setdoc_data_lst1fd5cProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [validation_lst771f5, setvalidation_lst771f5 ] = React.useState<any>({}) 
    const [validation_lst771f5Props, setvalidation_lst771f5Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [valdtn_data_lst378bc, setvaldtn_data_lst378bc ] = React.useState<any>([]) 
    const [valdtn_data_lst378bcProps, setvaldtn_data_lst378bcProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [comment_lst2b2ca, setcomment_lst2b2ca ] = React.useState<any>({}) 
    const [comment_lst2b2caProps, setcomment_lst2b2caProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [cmnt_data_lste3582, setcmnt_data_lste3582 ] = React.useState<any>([]) 
    const [cmnt_data_lste3582Props, setcmnt_data_lste3582Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [mandatelstc0e2c, setmandatelstc0e2c ] = React.useState<any>({}) 
    const [mandatelstc0e2cProps, setmandatelstc0e2cProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [mandatedatalst46c27, setmandatedatalst46c27 ] = React.useState<any>([]) 
    const [mandatedatalst46c27Props, setmandatedatalst46c27Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [listgroup6f63e, setlistgroup6f63e ] = React.useState<any>({}) 
    const [listgroup6f63eProps, setlistgroup6f63eProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [doclst42d30, setdoclst42d30 ] = React.useState<any>({}) 
    const [doclst42d30Props, setdoclst42d30Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [docdatalst620a8, setdocdatalst620a8 ] = React.useState<any>([]) 
    const [docdatalst620a8Props, setdocdatalst620a8Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [valdtnlst4ad99, setvaldtnlst4ad99 ] = React.useState<any>({}) 
    const [valdtnlst4ad99Props, setvaldtnlst4ad99Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [valdtndatalstd58f5, setvaldtndatalstd58f5 ] = React.useState<any>([]) 
    const [valdtndatalstd58f5Props, setvaldtndatalstd58f5Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [cmntlst0f1ad, setcmntlst0f1ad ] = React.useState<any>({}) 
    const [cmntlst0f1adProps, setcmntlst0f1adProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [cmntdatalste4cdc, setcmntdatalste4cdc ] = React.useState<any>([]) 
    const [cmntdatalste4cdcProps, setcmntdatalste4cdcProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [dynamic_group_btns3c327, setdynamic_group_btns3c327 ] = React.useState<any>({}) 
    const [dynamic_group_btns3c327Props, setdynamic_group_btns3c327Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
   const [text474c8,settext474c8] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [batch_type6befb,setbatch_type6befb] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [textf1c24,settextf1c24] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [variable_pay68402,setvariable_pay68402] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [inhouse0b227,setinhouse0b227] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [cr_acc_no596b0,setcr_acc_no596b0] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [cr_acc_name0589d,setcr_acc_name0589d] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [floor_amnt59de7,setfloor_amnt59de7] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [ceiling_amntc6b28,setceiling_amntc6b28] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [brbanknamec54c8,setbrbanknamec54c8] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [brbranchname951ce,setbrbranchname951ce] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [dr_sort_code26ce5,setdr_sort_code26ce5] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [currencye913a,setcurrencye913a] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [dr_acnt_no61f56,setdr_acnt_no61f56] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [dr_acnt_namee2b1e,setdr_acnt_namee2b1e] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [policy_no1316f6,setpolicy_no1316f6] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [policy_no2196cd,setpolicy_no2196cd] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [originator_codee7d60,setoriginator_codee7d60] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [frequency80676,setfrequency80676] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [duedate3cf41,setduedate3cf41] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [expirydateee023,setexpirydateee023] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [doc_name6a955,setdoc_name6a955] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [action55349,setaction55349] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [vld_code5df31,setvld_code5df31] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [vld_reason0ec55,setvld_reason0ec55] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [cmnts86495,setcmnts86495] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [action53022,setaction53022] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [mandateid05ce4,setmandateid05ce4] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [dracntname92ac0,setdracntname92ac0] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [dracntno42c4a,setdracntno42c4a] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [cracntname9fdc4,setcracntname9fdc4] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [cracntnoc7b4d,setcracntnoc7b4d] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [ceilingamnt62ee2,setceilingamnt62ee2] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [frequency1a4a6,setfrequency1a4a6] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [duedate03f9a,setduedate03f9a] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [expirydate3fe80,setexpirydate3fe80] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [status68b01,setstatus68b01] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [docnamefb324,setdocnamefb324] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [deleted70e2,setdeleted70e2] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [vldcode7ab9e,setvldcode7ab9e] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [vldreason6b5dc,setvldreason6b5dc] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [cmnts2d060,setcmnts2d060] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [scanbttn5a0f8,setscanbttn5a0f8] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [foldescanbtn9632b,setfoldescanbtn9632b] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [savebuttn2c3e8,setsavebuttn2c3e8] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [cancelbtn74e6a,setcancelbtn74e6a] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [update5d670,setupdate5d670] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [deletebtn81d63,setdeletebtn81d63] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [docviewer4f7f9,setdocviewer4f7f9] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
    ///////////
    const [refresh, setRefresh] = React.useState<Record<string, boolean>>({       texttext474c8:false,
       dropdownbatch_type6befb:false,
       texttextf1c24:false,
       checkboxvariable_pay68402:false,
       checkboxinhouse0b227:false,
       textinputcr_acc_no596b0:false,
       textinputcr_acc_name0589d:false,
       textinputfloor_amnt59de7:false,
       textinputceiling_amntc6b28:false,
       dropdownbrbanknamec54c8:false,
       dropdownbrbranchname951ce:false,
       textinputdr_sort_code26ce5:false,
       textinputcurrencye913a:false,
       textinputdr_acnt_no61f56:false,
       textinputdr_acnt_namee2b1e:false,
       textinputpolicy_no1316f6:false,
       textinputpolicy_no2196cd:false,
       textinputoriginator_codee7d60:false,
       dropdownfrequency80676:false,
       datepickerduedate3cf41:false,
       datepickerexpirydateee023:false,
       columndoc_name6a955:false,
       buttonaction55349:false,
       columnvld_code5df31:false,
       columnvld_reason0ec55:false,
       columncmnts86495:false,
       buttonaction53022:false,
       columnmandateid05ce4:false,
       columndracntname92ac0:false,
       columndracntno42c4a:false,
       columncracntname9fdc4:false,
       columncracntnoc7b4d:false,
       columnceilingamnt62ee2:false,
       columnfrequency1a4a6:false,
       columnduedate03f9a:false,
       columnexpirydate3fe80:false,
       columnstatus68b01:false,
       columndocnamefb324:false,
       buttondeleted70e2:false,
       columnvldcode7ab9e:false,
       columnvldreason6b5dc:false,
       columncmnts2d060:false,
       buttonscanbttn5a0f8:false,
       buttonfoldescanbtn9632b:false,
       buttonsavebuttn2c3e8:false,
       buttoncancelbtn74e6a:false,
       buttonupdate5d670:false,
       buttondeletebtn81d63:false,
       documentviewerdocviewer4f7f9:false,
       groupoverallgroup00e53:false,
       groupmandatedtls2cb9f:false,
       groupmandateinfo1b809:false,
       groupmnssubgroup3df12:false,
       groupCT005_AF_UF_UFWS_V001_MMS_Mandate_subscreen2_v1a54b9:false,
       groupmndate_common_info3fb9d:false,
       groupmndate_basic_sub_screenc9573:false,
       groupCT005_AF_UF_UFWS_V001_MMS_Mandate_Subscreen_v12764c:false,
       groupsubgroup7f52e:false,
       groupmandate_data_tabb1bce:false,
       groupdocument_lst2adea:false,
       tabledoc_data_lst1fd5c:false,
       groupvalidation_lst771f5:false,
       tablevaldtn_data_lst378bc:false,
       groupcomment_lst2b2ca:false,
       tablecmnt_data_lste3582:false,
       groupmandatelstc0e2c:false,
       tablemandatedatalst46c27:false,
       grouplistgroup6f63e:false,
       groupdoclst42d30:false,
       tabledocdatalst620a8:false,
       groupvaldtnlst4ad99:false,
       tablevaldtndatalstd58f5:false,
       groupcmntlst0f1ad:false,
       tablecmntdatalste4cdc:false,
       groupdynamic_group_btns3c327:false,
      })

  ////// screen states 
   const [mms_mandate_info_v1Props,setmms_mandate_info_v1Props] = React.useState<any>([])

///////// dfd
  const [dfd_subscreen_db_v1Props,setdfd_subscreen_db_v1Props] = React.useState<any>([])
  const [dfd_combo_subscreen_db_v1Props,setdfd_combo_subscreen_db_v1Props] = React.useState<any>([])
  const [dfd_mandate_error_lst_db_v1Props,setdfd_mandate_error_lst_db_v1Props] = React.useState<any>([])
  const [dfd_mandate_doc_lst_db_v1Props,setdfd_mandate_doc_lst_db_v1Props] = React.useState<any>([])
  const [dfd_mandate_list_db_v1Props,setdfd_mandate_list_db_v1Props] = React.useState<any>([])
    const [searchParam , setSearchParam] = React.useState<string>("")
    const [disableParam , setDisableParam] = React.useState<Record<string, boolean>>({})
    const [globalState , setGlobalState] = React.useState<Record<string, any>>({})
    const [refetch, setRefetch] = React.useState<any>(false)
    const [validate, setValidate] = React.useState<Record<string, any>>({});
    const [validateRefetch, setValidateRefetch] = React.useState<{ value: boolean; init: number }>({
      value:false,
      init:0
    })
    const [accessProfile, setAccessProfile] = React.useState<any>([])
    const [property, setProperty] = React.useState<any>({})
    const [memoryVariables, setMemoryVariables] = React.useState<any>({})
    const [lockedData, setLockedData] = React.useState<any>({})
    const [paginationDetails, setpaginationDetails] = React.useState<any>({})

    const [eventEmitterData,setEventEmitterData] = React.useState<any>([])
    const [userDetails , setUserDetails] = React.useState<any>({})
    const [encAppFalg , setEncAppFalg] = React.useState<any>({})
    const theme = getCookie('cfg_theme')
    
    
  return (
    <TotalContext.Provider 
      value={
      {
      //
        currentToken,
        setCurrentToken,
        matchedAccessProfileData,
        setMatchedAccessProfileData,
        overallgroup00e53, 
        setoverallgroup00e53,
        overallgroup00e53Props, 
        setoverallgroup00e53Props,
        mandatedtls2cb9f, 
        setmandatedtls2cb9f,
        mandatedtls2cb9fProps, 
        setmandatedtls2cb9fProps,
        mandateinfo1b809, 
        setmandateinfo1b809,
        mandateinfo1b809Props, 
        setmandateinfo1b809Props,
        mnssubgroup3df12, 
        setmnssubgroup3df12,
        mnssubgroup3df12Props, 
        setmnssubgroup3df12Props,
        ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9, 
        setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,
        ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props, 
        setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props,
        mndate_common_info3fb9d, 
        setmndate_common_info3fb9d,
        mndate_common_info3fb9dProps, 
        setmndate_common_info3fb9dProps,
        mndate_basic_sub_screenc9573, 
        setmndate_basic_sub_screenc9573,
        mndate_basic_sub_screenc9573Props, 
        setmndate_basic_sub_screenc9573Props,
        ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c, 
        setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,
        ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps, 
        setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps,
        subgroup7f52e, 
        setsubgroup7f52e,
        subgroup7f52eProps, 
        setsubgroup7f52eProps,
        mandate_data_tabb1bce, 
        setmandate_data_tabb1bce,
        mandate_data_tabb1bceProps, 
        setmandate_data_tabb1bceProps,
        document_lst2adea, 
        setdocument_lst2adea,
        document_lst2adeaProps, 
        setdocument_lst2adeaProps,
        doc_data_lst1fd5c, 
        setdoc_data_lst1fd5c,
        doc_data_lst1fd5cProps, 
        setdoc_data_lst1fd5cProps,
        validation_lst771f5, 
        setvalidation_lst771f5,
        validation_lst771f5Props, 
        setvalidation_lst771f5Props,
        valdtn_data_lst378bc, 
        setvaldtn_data_lst378bc,
        valdtn_data_lst378bcProps, 
        setvaldtn_data_lst378bcProps,
        comment_lst2b2ca, 
        setcomment_lst2b2ca,
        comment_lst2b2caProps, 
        setcomment_lst2b2caProps,
        cmnt_data_lste3582, 
        setcmnt_data_lste3582,
        cmnt_data_lste3582Props, 
        setcmnt_data_lste3582Props,
        mandatelstc0e2c, 
        setmandatelstc0e2c,
        mandatelstc0e2cProps, 
        setmandatelstc0e2cProps,
        mandatedatalst46c27, 
        setmandatedatalst46c27,
        mandatedatalst46c27Props, 
        setmandatedatalst46c27Props,
        listgroup6f63e, 
        setlistgroup6f63e,
        listgroup6f63eProps, 
        setlistgroup6f63eProps,
        doclst42d30, 
        setdoclst42d30,
        doclst42d30Props, 
        setdoclst42d30Props,
        docdatalst620a8, 
        setdocdatalst620a8,
        docdatalst620a8Props, 
        setdocdatalst620a8Props,
        valdtnlst4ad99, 
        setvaldtnlst4ad99,
        valdtnlst4ad99Props, 
        setvaldtnlst4ad99Props,
        valdtndatalstd58f5, 
        setvaldtndatalstd58f5,
        valdtndatalstd58f5Props, 
        setvaldtndatalstd58f5Props,
        cmntlst0f1ad, 
        setcmntlst0f1ad,
        cmntlst0f1adProps, 
        setcmntlst0f1adProps,
        cmntdatalste4cdc, 
        setcmntdatalste4cdc,
        cmntdatalste4cdcProps, 
        setcmntdatalste4cdcProps,
        dynamic_group_btns3c327, 
        setdynamic_group_btns3c327,
        dynamic_group_btns3c327Props, 
        setdynamic_group_btns3c327Props,
        text474c8,
        settext474c8, 
        batch_type6befb,
        setbatch_type6befb, 
        textf1c24,
        settextf1c24, 
        variable_pay68402,
        setvariable_pay68402, 
        inhouse0b227,
        setinhouse0b227, 
        cr_acc_no596b0,
        setcr_acc_no596b0, 
        cr_acc_name0589d,
        setcr_acc_name0589d, 
        floor_amnt59de7,
        setfloor_amnt59de7, 
        ceiling_amntc6b28,
        setceiling_amntc6b28, 
        brbanknamec54c8,
        setbrbanknamec54c8, 
        brbranchname951ce,
        setbrbranchname951ce, 
        dr_sort_code26ce5,
        setdr_sort_code26ce5, 
        currencye913a,
        setcurrencye913a, 
        dr_acnt_no61f56,
        setdr_acnt_no61f56, 
        dr_acnt_namee2b1e,
        setdr_acnt_namee2b1e, 
        policy_no1316f6,
        setpolicy_no1316f6, 
        policy_no2196cd,
        setpolicy_no2196cd, 
        originator_codee7d60,
        setoriginator_codee7d60, 
        frequency80676,
        setfrequency80676, 
        duedate3cf41,
        setduedate3cf41, 
        expirydateee023,
        setexpirydateee023, 
        doc_name6a955,
        setdoc_name6a955, 
        action55349,
        setaction55349, 
        vld_code5df31,
        setvld_code5df31, 
        vld_reason0ec55,
        setvld_reason0ec55, 
        cmnts86495,
        setcmnts86495, 
        action53022,
        setaction53022, 
        mandateid05ce4,
        setmandateid05ce4, 
        dracntname92ac0,
        setdracntname92ac0, 
        dracntno42c4a,
        setdracntno42c4a, 
        cracntname9fdc4,
        setcracntname9fdc4, 
        cracntnoc7b4d,
        setcracntnoc7b4d, 
        ceilingamnt62ee2,
        setceilingamnt62ee2, 
        frequency1a4a6,
        setfrequency1a4a6, 
        duedate03f9a,
        setduedate03f9a, 
        expirydate3fe80,
        setexpirydate3fe80, 
        status68b01,
        setstatus68b01, 
        docnamefb324,
        setdocnamefb324, 
        deleted70e2,
        setdeleted70e2, 
        vldcode7ab9e,
        setvldcode7ab9e, 
        vldreason6b5dc,
        setvldreason6b5dc, 
        cmnts2d060,
        setcmnts2d060, 
        scanbttn5a0f8,
        setscanbttn5a0f8, 
        foldescanbtn9632b,
        setfoldescanbtn9632b, 
        savebuttn2c3e8,
        setsavebuttn2c3e8, 
        cancelbtn74e6a,
        setcancelbtn74e6a, 
        update5d670,
        setupdate5d670, 
        deletebtn81d63,
        setdeletebtn81d63, 
        docviewer4f7f9,
        setdocviewer4f7f9, 
        ////// screen states 
          mms_mandate_info_v1Props,
          setmms_mandate_info_v1Props,
        //////////

        ///////// dfd
        dfd_subscreen_db_v1Props,
        setdfd_subscreen_db_v1Props,
        dfd_combo_subscreen_db_v1Props,
        setdfd_combo_subscreen_db_v1Props,
        dfd_mandate_error_lst_db_v1Props,
        setdfd_mandate_error_lst_db_v1Props,
        dfd_mandate_doc_lst_db_v1Props,
        setdfd_mandate_doc_lst_db_v1Props,
        dfd_mandate_list_db_v1Props,
        setdfd_mandate_list_db_v1Props,
        refetch,
        setRefetch,
        searchParam,
        setSearchParam,
        disableParam,
        setDisableParam,
        globalState,
        setGlobalState,
        validate,
        setValidate,
        validateRefetch,
        setValidateRefetch,
        accessProfile,
        setAccessProfile,
        property,
        setProperty,
        setRefresh,
        refresh,
        memoryVariables,
        setMemoryVariables,
        lockedData,
        setLockedData,
        paginationDetails,
        setpaginationDetails,
        eventEmitterData,
        setEventEmitterData,
        userDetails,
        setUserDetails,
        encAppFalg,
        setEncAppFalg
        }}
      >
      {children}
    </TotalContext.Provider>
  )
}

export default GlobalContext