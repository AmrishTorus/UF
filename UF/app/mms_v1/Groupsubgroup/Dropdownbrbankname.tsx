

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
const Dropdownbrbankname = ({lockedData,setLockedData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData}: any) => {
  const token: string = getCookie('token');
  const decodedTokenObj: any = decodeToken(token);
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {dfd_combo_subscreen_db_v1Props, setdfd_combo_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps; 
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
  let getMapperDetailsBody: getMapperDetailsDto;
  const [brbanknameOptions, setbrbanknameOptions] = useState<string[]>([]);
  let category : string
  let bindtranValue:any;
  let code:any;
  let filterColumn:string;
  filterColumn = "";
  category = "";

  const handleMapperValue = async()=>{
    const orchestrationData: any = await AxiosService.post(
      '/UF/Orchestration',
      {
        key: "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",
        componentId: "4ec956e4599e4a4ab60a0db92557f52e",
        controlId: "b7edb537413b478f8ec40b626ddc54c8",
        isTable: false,
        accessProfile:accessProfile,
        from:"dropdown"
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
  }
  const getDropdownData = async(value?:any, page: number = 1)=>{
    let dstKey:string = dfd_combo_subscreen_db_v1Props.dstKey;
    if (!value && "hasLogicCenter" in dfd_combo_subscreen_db_v1Props && !dfd_combo_subscreen_db_v1Props.hasLogicCenter && !dfdFlag) {
    const api_paginationData:any = await AxiosService.post(
      '/UF/pagination',
      {key:dstKey,
      page:page,
      count:PAGE_SIZE},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    )
    if (api_paginationData?.data?.records.length === 0) {
      dfdFlag = true
    }
    if (Array.isArray(dfData)) {
      dfData = [...dfData, ...api_paginationData?.data?.records];
    } else {
      dfData = api_paginationData?.data?.records;
    }
    }else if(!value && !dfdFlag){
    let te_refreshBody:te_refreshDto={
      key: "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:Combo_subscreen_db:AFVK:v1"+":",
      refreshFlag: "Y",
      count: PAGE_SIZE,
      page: page
    }
    if (encryptionFlagCont) {
      te_refreshBody["dpdKey"] = encryptionDpd;
      te_refreshBody["method"] = encryptionMethod;
    }
    const te_refreshData:any=await AxiosService.post("/te/eventEmitter",te_refreshBody,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if(te_refreshData?.data?.error == true){
      toast(te_refreshData?.data?.errorDetails?.message, 'danger')
    }else{
      //setdfd_code_description_dfd_v1Props(te_refreshData?.data?.dataset?.data || [])
    }
      if (te_refreshData?.data?.dataset?.data.length === 0) {
        dfdFlag = true
      }
      dfData = te_refreshData?.data?.dataset?.data ?? [];
    }
    let mapperColumn: string =  `bank_name`
    let mapperText: string =  `bank_name`

  try{
    getMapperDetails = await getDropdownDetailsNew(dfData,mapperColumn,mapperText,category, bindtranValue, code, filterColumn)
    getMapperDetailsValues = await getDropdownDetailsNew(dfData,mapperText,mapperColumn,category, bindtranValue, code, filterColumn)
    if(!bindtranValue){
      getMapperDetails.map((item: any) => {
        getMapperDetailsBindValues[item] = getMapperDetailsValues[getMapperDetails.indexOf(item)];
      })
    }else{
      setsubgroup7f52e((prev: any) => ({ ...prev, brbankname: getMapperDetails }))
    }
    if(!value){
    let temp:any[] = getMapperDetails.filter((item:any, index:any) => getMapperDetails.indexOf(item) === index)
    temp = temp.filter((ele:any)=>ele)
    if (page === 1) {
      setbrbanknameOptions(temp);
    } else {
      setbrbanknameOptions((prev: any[]) => {
        const combined = [...prev, ...temp];
        return combined.filter((item: any, idx: number) => combined.indexOf(item) === idx);
      });
    }
    if (dfData.length < PAGE_SIZE) setHasMore(false);
    }
    } catch (error) {
      console.error("Error fetching mapper details for dropdown:", error);
    }
  }

  const loadMore = async () => {
    if (!hasMore || loadingMoreRef.current) return;
    loadingMoreRef.current = true;
    setIsLoadingMore(true);
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    await getDropdownData(undefined, nextPage);
    setIsLoadingMore(false);
    loadingMoreRef.current = false;
  }

  useEffect(()=>{
    handleMapperValue()
  },[brbanknamec54c8?.refresh])

  useEffect(() => {
    setCurrentPage(currentPage);
    setHasMore(true);
    setIsDropdownDataReady(false);
    getDropdownData(undefined, currentPage).then(() => {
      setIsDropdownDataReady(true);
    });
  },[brbanknamec54c8?.refresh])  

  const handlechange = async(value: any) => {
    isUserSelectionRef.current = true;
    if(value.length>0){
      setsubgroup7f52e((prev: any) => ({ ...prev, brbankname: getMapperDetailsBindValues[value],brbanknamec54c8: value }))
      getDropdownData(value)
      setIsRequredData(false)
    }else{
      let temp:any = subgroup7f52e
      delete temp.brbankname
      delete temp.brbanknamec54c8
      setsubgroup7f52e(temp)
      getDropdownData()
       setIsRequredData(true)
    }
     setError('')
    setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,brbankname:undefined}}));
  };

    const fetchDropdownData = async()=>{
    if(subgroup7f52e.brbankname){
      if(Array.isArray(dfd_combo_subscreen_db_v1Props)){
        if(dfd_combo_subscreen_db_v1Props?.find((item: any) => item.bank_name === subgroup7f52e.brbankname)){
          setdropdownValue([dfd_combo_subscreen_db_v1Props?.find((item: any) => item.bank_name === subgroup7f52e.brbankname)?.brbankname])
        }else{
          setdropdownValue([subgroup7f52e.brbankname])
        }
      }else{
        let dstKey:string = dfd_combo_subscreen_db_v1Props.dstKey;
        const api_paginationData:any = await AxiosService.post(
        '/UF/pagination',
        {
          key:dstKey,
          page:currentPage,
          count:PAGE_SIZE,
          searchFilter:{bank_name:subgroup7f52e.brbankname}
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (api_paginationData?.data?.error == true) {
        toast(api_paginationData?.data?.errorDetails?.message, 'danger')
        return
      }
      if(api_paginationData?.data?.records?.find((item: any) => item.bank_name === subgroup7f52e.brbankname)){
        setdropdownValue([api_paginationData?.data?.records?.find((item: any) => item.bank_name === subgroup7f52e.brbankname)?.bank_name ])
      }else{
        setdropdownValue([subgroup7f52e.brbankname])
      }   
      }
    }
  }

  useEffect(() => {
    if (!isDropdownDataReady) return;
    if (isUserSelectionRef.current) {
      isUserSelectionRef.current = false;
      return;
    }
    fetchDropdownData();
  },[subgroup7f52e.brbankname, isDropdownDataReady])

  useEffect(() => {
    if(Array.isArray(dfd_combo_subscreen_db_v1Props) && dfd_combo_subscreen_db_v1Props?.length == 1){
    // setsubgroup7f52e((pre:any)=>({...pre,brbankname:dfd_combo_subscreen_db_v1Props[0]?.brbankname}))
    }
  },[dfd_combo_subscreen_db_v1Props])

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
      setsubgroup7f52e((prev: any) => ({ ...prev, brbankname: getMapperDetailsBindValues[value]}))
         setIsRequredData(false)
    } else {
       setsubgroup7f52e((prev: any) => ({ ...prev, brbankname: ''}))
        setIsRequredData(true)
    }
    setError('')
    setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,brbankname:undefined}}));
   
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
        codeStates['text'] = textf1c24,
        codeStates['settext'] = settextf1c24,
        codeStates['selected']  = selected,
        codeStates['variable_pay'] = variable_pay68402,
        codeStates['setvariable_pay'] = setvariable_pay68402,
        codeStates['selected']  = selected,
        codeStates['inhouse'] = inhouse0b227,
        codeStates['setinhouse'] = setinhouse0b227,
        codeStates['selected']  = selected,
        codeStates['cr_acc_no'] = cr_acc_no596b0,
        codeStates['setcr_acc_no'] = setcr_acc_no596b0,
        codeStates['selected']  = selected,
        codeStates['cr_acc_name'] = cr_acc_name0589d,
        codeStates['setcr_acc_name'] = setcr_acc_name0589d,
        codeStates['selected']  = selected,
        codeStates['floor_amnt'] = floor_amnt59de7,
        codeStates['setfloor_amnt'] = setfloor_amnt59de7,
        codeStates['selected']  = selected,
        codeStates['ceiling_amnt'] = ceiling_amntc6b28,
        codeStates['setceiling_amnt'] = setceiling_amntc6b28,
        codeStates['selected']  = selected,
        codeStates['brbankname'] = brbanknamec54c8,
        codeStates['setbrbankname'] = setbrbanknamec54c8,
        codeStates['selected']  = selected,
        codeStates['brbranchname'] = brbranchname951ce,
        codeStates['setbrbranchname'] = setbrbranchname951ce,
        codeStates['selected']  = selected,
        codeStates['dr_sort_code'] = dr_sort_code26ce5,
        codeStates['setdr_sort_code'] = setdr_sort_code26ce5,
        codeStates['selected']  = selected,
        codeStates['currency'] = currencye913a,
        codeStates['setcurrency'] = setcurrencye913a,
        codeStates['selected']  = selected,
        codeStates['dr_acnt_no'] = dr_acnt_no61f56,
        codeStates['setdr_acnt_no'] = setdr_acnt_no61f56,
        codeStates['selected']  = selected,
        codeStates['dr_acnt_name'] = dr_acnt_namee2b1e,
        codeStates['setdr_acnt_name'] = setdr_acnt_namee2b1e,
        codeStates['selected']  = selected,
        codeStates['policy_no1'] = policy_no1316f6,
        codeStates['setpolicy_no1'] = setpolicy_no1316f6,
        codeStates['selected']  = selected,
        codeStates['policy_no2'] = policy_no2196cd,
        codeStates['setpolicy_no2'] = setpolicy_no2196cd,
        codeStates['selected']  = selected,
        codeStates['originator_code'] = originator_codee7d60,
        codeStates['setoriginator_code'] = setoriginator_codee7d60,
        codeStates['selected']  = selected,
        codeStates['frequency'] = frequency80676,
        codeStates['setfrequency'] = setfrequency80676,
        codeStates['selected']  = selected,
        codeStates['duedate'] = duedate3cf41,
        codeStates['setduedate'] = setduedate3cf41,
        codeStates['selected']  = selected,
        codeStates['expirydate'] = expirydateee023,
        codeStates['setexpirydate'] = setexpirydateee023,
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
      if(subgroup7f52e?.brbankname == "" || subgroup7f52e?.brbankname == undefined){
      subgroup7f52e.brbankname = "";
      const validate:any = v.safeParse(schema, subgroup7f52e?.brbankname);
        if(!validate.success){
          setError(validate?.issues[0]?.message);
          setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,brbankname:"invalid"}}));
        }
    }else if(subgroup7f52e?.brbankname !== ""){
    const validate:any = v.safeParse(schema, subgroup7f52e?.brbankname);
    if(!validate.success){
      setError(validate?.issues[0]?.message);
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,brbankname:"invalid"}}));
    }
    }
  }

    useEffect(()=>{
        if(!subgroup7f52e?.brbankname)
        { 
          setsubgroup7f52eProps((pre:any)=>({...pre,required:true}))
          setIsRequredData(true)
        }
        if(validateRefetch.init!=0)
          handleBlur()
    },[validateRefetch.value])

  useEffect(() => {
    if(initialCount!=0)
     setsubgroup7f52e((pre:any)=>({...pre,brbankname:""}))
    else
      setInitialCount(1)
  },[brbanknamec54c8?.refresh])

  if (brbanknamec54c8?.isHidden) {
    return <></>
  }

  return (
    <div
      style={{
        gridColumn: `2 / 7`,
        gridRow: `56 / 75`,
        gap:``, 
        height: `100%`,
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column'}} >
      <Dropdown   
        className="!rounded-xl"    
        disabled= {brbanknamec54c8?.isDisabled ? true : false}
        contentAlign={"center"}
        headerPosition='top'
        headerText={
          <>
            Dr Bank Name
            {isRequredData && <span style={{ color: 'red' }}> *</span>}
          </>
        }
        static={true}
        staticProps={brbanknameOptions}
        onLoadMore={loadMore}
        isLoadingMore={isLoadingMore}
        placeholder={keyset("")} 
        filterable={true} 
        hasClear={true} 
        onChange={handlechange} 
        value={subgroup7f52e?.brbanknamec54c8 ? [subgroup7f52e?.brbanknamec54c8] : (subgroup7f52e?.brbankname ? dropdownValue : [])}
        validationState={validate?.Mms_Mandate_Info_v1?.brbankname ? "invalid" : undefined}
        errorMessage={error}
        />
    </div>
  );
};

export default Dropdownbrbankname;
