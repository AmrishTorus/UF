

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
let dfData:any;
let dfdFlag:boolean = false;
let getMapperDetailsBindValues:Record<string, any> ={} ;
const Dropdownbatch_type = ({lockedData,setLockedData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData}: any) => {
  const token: string = getCookie('token');
  const decodedTokenObj: any = decodeToken(token);
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {dfd_subscreen_db_v1Props, setdfd_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps; 
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
  const loadingMoreRef = useRef<boolean>(false);    
  const isUserSelectionRef = useRef<boolean>(false);
  const [isDropdownDataReady, setIsDropdownDataReady] = useState<boolean>(false);
  let customecode:string="";
  const [allCode,setAllCode]=useState<string>("");
  const [ruleCode,setRuleCode]=useState<string>("");  
  const [dropdownValue, setdropdownValue] = useState<string | string[]>("");
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  let items:any = []
  //showComponentAsPopup || showArtifactAsModal
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
  const {text474c8, settext474c8}= useContext(TotalContext) as TotalContextProps;
  const {batch_type6befb, setbatch_type6befb}= useContext(TotalContext) as TotalContextProps;
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
  //////////////
  const handleStaticValue=(data:any)=>{
    setSelectedItem(data)
  }
  const [selectedItem, setSelectedItem] = useState('');
  items = [
   'Mandate',
   'Amend',
   'Cancel',
  ];

  useEffect(() => {
  if(mndate_common_info3fb9d?.batch_type=="" || mndate_common_info3fb9d?.batch_type==undefined || mndate_common_info3fb9d?.batch_type==null ){
    setSelectedItem("");
  }
  },[mndate_common_info3fb9d?.batch_type])
  const handleMapperValue=async()=>{
    try{
      const orchestrationData: any = await AxiosService.post(
        '/UF/Orchestration',
        {
          key: "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",
          componentId: "7dcbb77d1237433ab29b91ee87e3fb9d",
          controlId: "f689d9ebcb09451995f78de602f6befb",
          isTable: false,
          accessProfile:accessProfile,
          from:"dropdownBatch Type"
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
  },[batch_type6befb?.refresh])

  const selected=useRef({})
  const handleClick=async(value?:any)=>{
    if (value.length > 0) {
      let temp:any=[]
      if(Array.isArray(value)){
        for( let val of value){
          if(Array.isArray(val)){
            temp.push(val)
          }else{
            temp.push(val)
          }        
        }
      }
      setmndate_common_info3fb9d((prev: any) => ({ ...prev, batch_type: value}))
         setIsRequredData(false)
    } else {
       setmndate_common_info3fb9d((prev: any) => ({ ...prev, batch_type: ''}))
        setIsRequredData(true)
    }
    setError('')
    setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,batch_type:undefined}}));
   
    selected.current=value
    customecode = allCode
    if (customecode != '') {
      let codeStates: any = {}      
        codeStates['overallgroup'] = overallgroup00e53,
        codeStates['setoverallgroup'] = setoverallgroup00e53,
        codeStates['selected']  = selected,
        codeStates['overallgroup00e53'] = overallgroup00e53Props,
        codeStates['setoverallgroup00e53'] = setoverallgroup00e53Props,
        codeStates['selected']  = selected,
        codeStates['mandatedtls'] = mandatedtls2cb9f,
        codeStates['setmandatedtls'] = setmandatedtls2cb9f,
        codeStates['selected']  = selected,
        codeStates['mandatedtls2cb9f'] = mandatedtls2cb9fProps,
        codeStates['setmandatedtls2cb9f'] = setmandatedtls2cb9fProps,
        codeStates['selected']  = selected,
        codeStates['mandateinfo'] = mandateinfo1b809,
        codeStates['setmandateinfo'] = setmandateinfo1b809,
        codeStates['selected']  = selected,
        codeStates['mandateinfo1b809'] = mandateinfo1b809Props,
        codeStates['setmandateinfo1b809'] = setmandateinfo1b809Props,
        codeStates['selected']  = selected,
        codeStates['mnssubgroup'] = mnssubgroup3df12,
        codeStates['setmnssubgroup'] = setmnssubgroup3df12,
        codeStates['selected']  = selected,
        codeStates['mnssubgroup3df12'] = mnssubgroup3df12Props,
        codeStates['setmnssubgroup3df12'] = setmnssubgroup3df12Props,
        codeStates['selected']  = selected,
        codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1'] = ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,
        codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,
        codeStates['selected']  = selected,
        codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9'] = ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props,
        codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9Props,
        codeStates['selected']  = selected,
        codeStates['mndate_common_info'] = mndate_common_info3fb9d,
        codeStates['setmndate_common_info'] = setmndate_common_info3fb9d,
        codeStates['selected']  = selected,
        codeStates['mndate_common_info3fb9d'] = mndate_common_info3fb9dProps,
        codeStates['setmndate_common_info3fb9d'] = setmndate_common_info3fb9dProps,
        codeStates['selected']  = selected,
        codeStates['text'] = text474c8,
        codeStates['settext'] = settext474c8,
        codeStates['selected']  = selected,
        codeStates['batch_type'] = batch_type6befb,
        codeStates['setbatch_type'] = setbatch_type6befb,
        codeStates['selected']  = selected,
        codeStates['mndate_basic_sub_screen'] = mndate_basic_sub_screenc9573,
        codeStates['setmndate_basic_sub_screen'] = setmndate_basic_sub_screenc9573,
        codeStates['selected']  = selected,
        codeStates['mndate_basic_sub_screenc9573'] = mndate_basic_sub_screenc9573Props,
        codeStates['setmndate_basic_sub_screenc9573'] = setmndate_basic_sub_screenc9573Props,
        codeStates['selected']  = selected,
        codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen_v1'] = ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,
        codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,
        codeStates['selected']  = selected,
        codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c'] = ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps,
        codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764cProps,
        codeStates['selected']  = selected,
        codeStates['subgroup'] = subgroup7f52e,
        codeStates['setsubgroup'] = setsubgroup7f52e,
        codeStates['selected']  = selected,
        codeStates['subgroup7f52e'] = subgroup7f52eProps,
        codeStates['setsubgroup7f52e'] = setsubgroup7f52eProps,
        codeStates['selected']  = selected,
        codeStates['mandate_data_tab'] = mandate_data_tabb1bce,
        codeStates['setmandate_data_tab'] = setmandate_data_tabb1bce,
        codeStates['selected']  = selected,
        codeStates['mandate_data_tabb1bce'] = mandate_data_tabb1bceProps,
        codeStates['setmandate_data_tabb1bce'] = setmandate_data_tabb1bceProps,
        codeStates['selected']  = selected,
        codeStates['document_lst'] = document_lst2adea,
        codeStates['setdocument_lst'] = setdocument_lst2adea,
        codeStates['selected']  = selected,
        codeStates['document_lst2adea'] = document_lst2adeaProps,
        codeStates['setdocument_lst2adea'] = setdocument_lst2adeaProps,
        codeStates['selected']  = selected,
        codeStates['doc_data_lst'] = doc_data_lst1fd5c,
        codeStates['setdoc_data_lst'] = setdoc_data_lst1fd5c,
        codeStates['selected']  = selected,
        codeStates['doc_data_lst1fd5c'] = doc_data_lst1fd5cProps,
        codeStates['setdoc_data_lst1fd5c'] = setdoc_data_lst1fd5cProps,
        codeStates['selected']  = selected,
        codeStates['validation_lst'] = validation_lst771f5,
        codeStates['setvalidation_lst'] = setvalidation_lst771f5,
        codeStates['selected']  = selected,
        codeStates['validation_lst771f5'] = validation_lst771f5Props,
        codeStates['setvalidation_lst771f5'] = setvalidation_lst771f5Props,
        codeStates['selected']  = selected,
        codeStates['valdtn_data_lst'] = valdtn_data_lst378bc,
        codeStates['setvaldtn_data_lst'] = setvaldtn_data_lst378bc,
        codeStates['selected']  = selected,
        codeStates['valdtn_data_lst378bc'] = valdtn_data_lst378bcProps,
        codeStates['setvaldtn_data_lst378bc'] = setvaldtn_data_lst378bcProps,
        codeStates['selected']  = selected,
        codeStates['comment_lst'] = comment_lst2b2ca,
        codeStates['setcomment_lst'] = setcomment_lst2b2ca,
        codeStates['selected']  = selected,
        codeStates['comment_lst2b2ca'] = comment_lst2b2caProps,
        codeStates['setcomment_lst2b2ca'] = setcomment_lst2b2caProps,
        codeStates['selected']  = selected,
        codeStates['cmnt_data_lst'] = cmnt_data_lste3582,
        codeStates['setcmnt_data_lst'] = setcmnt_data_lste3582,
        codeStates['selected']  = selected,
        codeStates['cmnt_data_lste3582'] = cmnt_data_lste3582Props,
        codeStates['setcmnt_data_lste3582'] = setcmnt_data_lste3582Props,
        codeStates['selected']  = selected,
        codeStates['mandatelst'] = mandatelstc0e2c,
        codeStates['setmandatelst'] = setmandatelstc0e2c,
        codeStates['selected']  = selected,
        codeStates['mandatelstc0e2c'] = mandatelstc0e2cProps,
        codeStates['setmandatelstc0e2c'] = setmandatelstc0e2cProps,
        codeStates['selected']  = selected,
        codeStates['mandatedatalst'] = mandatedatalst46c27,
        codeStates['setmandatedatalst'] = setmandatedatalst46c27,
        codeStates['selected']  = selected,
        codeStates['mandatedatalst46c27'] = mandatedatalst46c27Props,
        codeStates['setmandatedatalst46c27'] = setmandatedatalst46c27Props,
        codeStates['selected']  = selected,
        codeStates['listgroup'] = listgroup6f63e,
        codeStates['setlistgroup'] = setlistgroup6f63e,
        codeStates['selected']  = selected,
        codeStates['listgroup6f63e'] = listgroup6f63eProps,
        codeStates['setlistgroup6f63e'] = setlistgroup6f63eProps,
        codeStates['selected']  = selected,
        codeStates['doclst'] = doclst42d30,
        codeStates['setdoclst'] = setdoclst42d30,
        codeStates['selected']  = selected,
        codeStates['doclst42d30'] = doclst42d30Props,
        codeStates['setdoclst42d30'] = setdoclst42d30Props,
        codeStates['selected']  = selected,
        codeStates['docdatalst'] = docdatalst620a8,
        codeStates['setdocdatalst'] = setdocdatalst620a8,
        codeStates['selected']  = selected,
        codeStates['docdatalst620a8'] = docdatalst620a8Props,
        codeStates['setdocdatalst620a8'] = setdocdatalst620a8Props,
        codeStates['selected']  = selected,
        codeStates['valdtnlst'] = valdtnlst4ad99,
        codeStates['setvaldtnlst'] = setvaldtnlst4ad99,
        codeStates['selected']  = selected,
        codeStates['valdtnlst4ad99'] = valdtnlst4ad99Props,
        codeStates['setvaldtnlst4ad99'] = setvaldtnlst4ad99Props,
        codeStates['selected']  = selected,
        codeStates['valdtndatalst'] = valdtndatalstd58f5,
        codeStates['setvaldtndatalst'] = setvaldtndatalstd58f5,
        codeStates['selected']  = selected,
        codeStates['valdtndatalstd58f5'] = valdtndatalstd58f5Props,
        codeStates['setvaldtndatalstd58f5'] = setvaldtndatalstd58f5Props,
        codeStates['selected']  = selected,
        codeStates['cmntlst'] = cmntlst0f1ad,
        codeStates['setcmntlst'] = setcmntlst0f1ad,
        codeStates['selected']  = selected,
        codeStates['cmntlst0f1ad'] = cmntlst0f1adProps,
        codeStates['setcmntlst0f1ad'] = setcmntlst0f1adProps,
        codeStates['selected']  = selected,
        codeStates['cmntdatalst'] = cmntdatalste4cdc,
        codeStates['setcmntdatalst'] = setcmntdatalste4cdc,
        codeStates['selected']  = selected,
        codeStates['cmntdatalste4cdc'] = cmntdatalste4cdcProps,
        codeStates['setcmntdatalste4cdc'] = setcmntdatalste4cdcProps,
        codeStates['selected']  = selected,
        codeStates['dynamic_group_btns'] = dynamic_group_btns3c327,
        codeStates['setdynamic_group_btns'] = setdynamic_group_btns3c327,
        codeStates['selected']  = selected,
        codeStates['dynamic_group_btns3c327'] = dynamic_group_btns3c327Props,
        codeStates['setdynamic_group_btns3c327'] = setdynamic_group_btns3c327Props,
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


  let schemaArray = [
  "v.string()",
  "v.nonEmpty('This field is required.')"
] ;
    const schema : any  = v.pipe(    v.string(),
    v.nonEmpty('This field is required.'),
)
  const handleBlur = async () => {
    //validation
      if(mndate_common_info3fb9d?.batch_type == "" || mndate_common_info3fb9d?.batch_type == undefined){
      mndate_common_info3fb9d.batch_type = "";
      const validate:any = v.safeParse(schema, mndate_common_info3fb9d?.batch_type);
        if(!validate.success){
          setError(validate?.issues[0]?.message);
          setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,batch_type:"invalid"}}));
        }
    }else if(mndate_common_info3fb9d?.batch_type !== ""){
    const validate:any = v.safeParse(schema, mndate_common_info3fb9d?.batch_type);
    if(!validate.success){
      setError(validate?.issues[0]?.message);
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,batch_type:"invalid"}}));
    }
    }
  }

    useEffect(()=>{
        if(!mndate_common_info3fb9d?.batch_type)
        { 
          setmndate_common_info3fb9dProps((pre:any)=>({...pre,required:true}))
          setIsRequredData(true)
        }
        if(validateRefetch.init!=0)
          handleBlur()
    },[validateRefetch.value])

  useEffect(() => {
    if(initialCount!=0)
     setmndate_common_info3fb9d((pre:any)=>({...pre,batch_type:""}))
    else
      setInitialCount(1)
  },[batch_type6befb?.refresh])

  if (batch_type6befb?.isHidden) {
    return <></>
  }

  return (
    <div
      style={{
        gridColumn: `2 / 7`,
        gridRow: `20 / 38`,
        gap:``, 
        height: `100%`,
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column'}} >
      <Dropdown
        className="!rounded-xl"
        placeholder={keyset("Batch Type")} 
        filterable={true}
        hasClear={true}
        static={true}
        staticProps={items}
        disabled= {batch_type6befb?.isDisabled ? true : false}
        contentAlign={"center"}
        headerPosition='top'
        headerText={
          <>
            Batch Type
            {isRequredData && <span style={{ color: 'red' }}> *</span>}
          </>
        }
        value={mndate_common_info3fb9d?.batch_type ?mndate_common_info3fb9d?.batch_type: []}
        onChange={handleClick} 
        validationState={validate?.Mms_Mandate_Info_v1?.batch_type ? "invalid" : undefined}
        errorMessage={error}
      /> 
    </div>
  );
};

export default Dropdownbatch_type;
