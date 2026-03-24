'use client'
import { useLanguage } from "../components/languageContext";
import React,{ useContext,useEffect,useState,useRef } from "react";
import { AxiosService } from '@/app/components/axiosService';
import { uf_authorizationCheckDto,te_refreshDto,te_dfDto,api_paginationDto } from '@/app/interfaces/interfaces';
import { codeExecution } from "../utils/codeExecution";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { deleteAllCookies,getCookie } from '@/app/components/cookieMgment';
import { TotalContext, TotalContextProps } from "../globalContext";
import decodeToken from "../components/decodeToken";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";
import { useRouter } from 'next/navigation';
import { useTheme } from '@/hooks/useTheme';
import { DecodedToken,PrimaryTableData,SecurityData,EncryptionFlagPageData,PaginationData,AllowedGroupNode,ActionDetails } from "@/types/global";
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import clsx from "clsx";
import Groupoverallgroup  from "./Groupoverallgroup/Groupoverallgroup";


export default function PageMmsV1() {
  const { isDark, isHighContrast, bgStyle, textStyle } : { isDark: boolean; isHighContrast: boolean; bgStyle: string; textStyle: string } = useTheme();
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const securityData : SecurityData = {
  "Operation Team": {
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
    ]
  }
};
  let code : string = "";
  //const language=useLanguage();
  const routes : AppRouterInstance = useRouter();
  const toast : Function = useInfoMsg();
  const [primaryTableData, setPrimaryTableData] = useState<PrimaryTableData>({primaryKey:"",value:"",compName:""});
  const [checkToAdd, setCheckToAdd] = useState<Record<string, any>>({});
  const token:string = getCookie('token'); 
  const decodedTokenObj: DecodedToken = decodeToken(token);
  const screenName:string = "mms";
  const user : string | undefined = decodedTokenObj?.selectedAccessProfile;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {refetch, setRefetch} = useContext(TotalContext) as TotalContextProps;
  const { encAppFalg,setEncAppFalg}= useContext(TotalContext) as TotalContextProps;
  const {lockedData, setLockedData} = useContext(TotalContext) as TotalContextProps;
  const {paginationDetails, setpaginationDetails} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const { eventEmitterData,setEventEmitterData}= useContext(TotalContext) as TotalContextProps;
  const {mms_mandate_info_v1Props, setmms_mandate_info_v1Props} = useContext(TotalContext) as TotalContextProps;
  const [checkoverallgroup,setCheckoverallgroup,]=useState<boolean>(false);
  const [checkmnssubgroup,setCheckmnssubgroup,]=useState<boolean>(false);
  const [checkct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1,setCheckct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1,]=useState<boolean>(false);
  const [checkmndate_common_info,setCheckmndate_common_info,]=useState<boolean>(false);
  const [checkmndate_basic_sub_screen,setCheckmndate_basic_sub_screen,]=useState<boolean>(false);
  const [checkct005_af_uf_ufws_v001_mms_mandate_subscreen_v1,setCheckct005_af_uf_ufws_v001_mms_mandate_subscreen_v1,]=useState<boolean>(false);
  const [checksubgroup,setChecksubgroup,]=useState<boolean>(false);
  const [checkdoc_data_lst,setCheckdoc_data_lst,]=useState<boolean>(false);
  const [checkvaldtn_data_lst,setCheckvaldtn_data_lst,]=useState<boolean>(false);
  const [checkcmnt_data_lst,setCheckcmnt_data_lst,]=useState<boolean>(false);
  const [checkmandatedatalst,setCheckmandatedatalst,]=useState<boolean>(false);
  const [checkdocdatalst,setCheckdocdatalst,]=useState<boolean>(false);
  const [checkvaldtndatalst,setCheckvaldtndatalst,]=useState<boolean>(false);
  const [checkcmntdatalst,setCheckcmntdatalst,]=useState<boolean>(false);
  const [checkdynamic_group_btns,setCheckdynamic_group_btns,]=useState<boolean>(false);
  const {overallgroup00e53, setoverallgroup00e53} = useContext(TotalContext) as TotalContextProps;
  const {mnssubgroup3df12, setmnssubgroup3df12} = useContext(TotalContext) as TotalContextProps;
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9, setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9} = useContext(TotalContext) as TotalContextProps;
  const {mndate_common_info3fb9d, setmndate_common_info3fb9d} = useContext(TotalContext) as TotalContextProps;
  const {mndate_basic_sub_screenc9573, setmndate_basic_sub_screenc9573} = useContext(TotalContext) as TotalContextProps;
  const {ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c, setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c} = useContext(TotalContext) as TotalContextProps;
  const {subgroup7f52e, setsubgroup7f52e} = useContext(TotalContext) as TotalContextProps;
  const {doc_data_lst1fd5c, setdoc_data_lst1fd5c} = useContext(TotalContext) as TotalContextProps;
  const {valdtn_data_lst378bc, setvaldtn_data_lst378bc} = useContext(TotalContext) as TotalContextProps;
  const {cmnt_data_lste3582, setcmnt_data_lste3582} = useContext(TotalContext) as TotalContextProps;
  const {mandatedatalst46c27, setmandatedatalst46c27} = useContext(TotalContext) as TotalContextProps;
  const {docdatalst620a8, setdocdatalst620a8} = useContext(TotalContext) as TotalContextProps;
  const {valdtndatalstd58f5, setvaldtndatalstd58f5} = useContext(TotalContext) as TotalContextProps;
  const {cmntdatalste4cdc, setcmntdatalste4cdc} = useContext(TotalContext) as TotalContextProps;
  const {dynamic_group_btns3c327, setdynamic_group_btns3c327} = useContext(TotalContext) as TotalContextProps;
  const {dfd_subscreen_db_v1Props, setdfd_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_combo_subscreen_db_v1Props, setdfd_combo_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mandate_error_lst_db_v1Props, setdfd_mandate_error_lst_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mandate_doc_lst_db_v1Props, setdfd_mandate_doc_lst_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mandate_list_db_v1Props, setdfd_mandate_list_db_v1Props} = useContext(TotalContext) as TotalContextProps;
  const encryptionFlagPage: boolean = false|| encAppFalg.flag;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encAppFalg.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encAppFalg.method;
  let encryptionFlagPageData : EncryptionFlagPageData ={
    "flag":encryptionFlagPage,
    "dpd":encryptionDpd,
    "method":encryptionMethod
  }
  const [paginationData,setPaginationData]=useState<PaginationData>({count:10,page:1})
    const prevRefreshRef = useRef<any>({
      subscreen_db_v1:false,
      combo_subscreen_db_v1:false,
      mandate_error_lst_db_v1:false,
      mandate_doc_lst_db_v1:false,
      mandate_list_db_v1:false,
    });
    async function subscreen_db_v1(pagination:any): Promise<void>{
        let subscreen_db_v1Body:te_refreshDto={
          key: "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          subscreen_db_v1Body["dpdKey"] = encryptionDpd;
          subscreen_db_v1Body["method"] = encryptionMethod;
        }
        if(mms_mandate_info_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< mms_mandate_info_v1Props.length;i++){
            if(mms_mandate_info_v1Props[i].DFDkey == "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1"){
              delete mms_mandate_info_v1Props[i].DFDkey;
              filterData.push(mms_mandate_info_v1Props[i])
            }           
          }
          subscreen_db_v1Body['filterData'] = filterData;
        }
        const subscreen_db_v1Data:any=await AxiosService.post("/te/eventEmitter",subscreen_db_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=subscreen_db_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(subscreen_db_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_subscreen_db_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (subscreen_db_v1Data?.data?.dataset) {
          setdfd_subscreen_db_v1Props(subscreen_db_v1Data?.data?.dataset?.data || []);
        }else{
         //////////////
        

        const api_paginationBody: api_paginationDto = {
          key: dstKey,
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        // if(encryptionFlagCont) {
        // api_paginationBody["dpdKey"] = encryptionDpd
        // api_paginationBody["method"] = encryptionMethod
        // }
        const api_paginationData:any = await AxiosService.post(
          '/UF/pagination',
          api_paginationBody,
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
        setdfd_subscreen_db_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.subscreen_db_v1) {
      subscreen_db_v1(paginationData)
    }else 
      prevRefreshRef.current.subscreen_db_v1= true
  },[refetch?.subscreen_db_v1])
    async function combo_subscreen_db_v1(pagination:any): Promise<void>{
        let combo_subscreen_db_v1Body:te_refreshDto={
          key: "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:Combo_subscreen_db:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          combo_subscreen_db_v1Body["dpdKey"] = encryptionDpd;
          combo_subscreen_db_v1Body["method"] = encryptionMethod;
        }
        if(mms_mandate_info_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< mms_mandate_info_v1Props.length;i++){
            if(mms_mandate_info_v1Props[i].DFDkey == "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:Combo_subscreen_db:AFVK:v1"){
              delete mms_mandate_info_v1Props[i].DFDkey;
              filterData.push(mms_mandate_info_v1Props[i])
            }           
          }
          combo_subscreen_db_v1Body['filterData'] = filterData;
        }
        const combo_subscreen_db_v1Data:any=await AxiosService.post("/te/eventEmitter",combo_subscreen_db_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=combo_subscreen_db_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(combo_subscreen_db_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_combo_subscreen_db_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (combo_subscreen_db_v1Data?.data?.dataset) {
          setdfd_combo_subscreen_db_v1Props(combo_subscreen_db_v1Data?.data?.dataset?.data || []);
        }else{
         //////////////
        

        const api_paginationBody: api_paginationDto = {
          key: dstKey,
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        // if(encryptionFlagCont) {
        // api_paginationBody["dpdKey"] = encryptionDpd
        // api_paginationBody["method"] = encryptionMethod
        // }
        const api_paginationData:any = await AxiosService.post(
          '/UF/pagination',
          api_paginationBody,
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
        setdfd_combo_subscreen_db_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.combo_subscreen_db_v1) {
      combo_subscreen_db_v1(paginationData)
    }else 
      prevRefreshRef.current.combo_subscreen_db_v1= true
  },[refetch?.combo_subscreen_db_v1])
    async function mandate_error_lst_db_v1(pagination:any): Promise<void>{
        let mandate_error_lst_db_v1Body:te_refreshDto={
          key: "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_error_lst_db:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mandate_error_lst_db_v1Body["dpdKey"] = encryptionDpd;
          mandate_error_lst_db_v1Body["method"] = encryptionMethod;
        }
        if(mms_mandate_info_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< mms_mandate_info_v1Props.length;i++){
            if(mms_mandate_info_v1Props[i].DFDkey == "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_error_lst_db:AFVK:v1"){
              delete mms_mandate_info_v1Props[i].DFDkey;
              filterData.push(mms_mandate_info_v1Props[i])
            }           
          }
          mandate_error_lst_db_v1Body['filterData'] = filterData;
        }
        const mandate_error_lst_db_v1Data:any=await AxiosService.post("/te/eventEmitter",mandate_error_lst_db_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mandate_error_lst_db_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mandate_error_lst_db_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mandate_error_lst_db_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mandate_error_lst_db_v1Data?.data?.dataset) {
          setdfd_mandate_error_lst_db_v1Props(mandate_error_lst_db_v1Data?.data?.dataset?.data || []);
        }else{
         //////////////
        

        const api_paginationBody: api_paginationDto = {
          key: dstKey,
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        // if(encryptionFlagCont) {
        // api_paginationBody["dpdKey"] = encryptionDpd
        // api_paginationBody["method"] = encryptionMethod
        // }
        const api_paginationData:any = await AxiosService.post(
          '/UF/pagination',
          api_paginationBody,
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
        setdfd_mandate_error_lst_db_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mandate_error_lst_db_v1) {
      mandate_error_lst_db_v1(paginationData)
    }else 
      prevRefreshRef.current.mandate_error_lst_db_v1= true
  },[refetch?.mandate_error_lst_db_v1])
    async function mandate_doc_lst_db_v1(pagination:any): Promise<void>{
        let mandate_doc_lst_db_v1Body:te_refreshDto={
          key: "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_doc_lst_db:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mandate_doc_lst_db_v1Body["dpdKey"] = encryptionDpd;
          mandate_doc_lst_db_v1Body["method"] = encryptionMethod;
        }
        if(mms_mandate_info_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< mms_mandate_info_v1Props.length;i++){
            if(mms_mandate_info_v1Props[i].DFDkey == "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_doc_lst_db:AFVK:v1"){
              delete mms_mandate_info_v1Props[i].DFDkey;
              filterData.push(mms_mandate_info_v1Props[i])
            }           
          }
          mandate_doc_lst_db_v1Body['filterData'] = filterData;
        }
        const mandate_doc_lst_db_v1Data:any=await AxiosService.post("/te/eventEmitter",mandate_doc_lst_db_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mandate_doc_lst_db_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mandate_doc_lst_db_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mandate_doc_lst_db_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mandate_doc_lst_db_v1Data?.data?.dataset) {
          setdfd_mandate_doc_lst_db_v1Props(mandate_doc_lst_db_v1Data?.data?.dataset?.data || []);
        }else{
         //////////////
        

        const api_paginationBody: api_paginationDto = {
          key: dstKey,
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        // if(encryptionFlagCont) {
        // api_paginationBody["dpdKey"] = encryptionDpd
        // api_paginationBody["method"] = encryptionMethod
        // }
        const api_paginationData:any = await AxiosService.post(
          '/UF/pagination',
          api_paginationBody,
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
        setdfd_mandate_doc_lst_db_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mandate_doc_lst_db_v1) {
      mandate_doc_lst_db_v1(paginationData)
    }else 
      prevRefreshRef.current.mandate_doc_lst_db_v1= true
  },[refetch?.mandate_doc_lst_db_v1])
    async function mandate_list_db_v1(pagination:any): Promise<void>{
        let mandate_list_db_v1Body:te_refreshDto={
          key: "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mandate_list_db_v1Body["dpdKey"] = encryptionDpd;
          mandate_list_db_v1Body["method"] = encryptionMethod;
        }
        if(mms_mandate_info_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< mms_mandate_info_v1Props.length;i++){
            if(mms_mandate_info_v1Props[i].DFDkey == "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1"){
              delete mms_mandate_info_v1Props[i].DFDkey;
              filterData.push(mms_mandate_info_v1Props[i])
            }           
          }
          mandate_list_db_v1Body['filterData'] = filterData;
        }
        const mandate_list_db_v1Data:any=await AxiosService.post("/te/eventEmitter",mandate_list_db_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mandate_list_db_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mandate_list_db_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mandate_list_db_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mandate_list_db_v1Data?.data?.dataset) {
          setdfd_mandate_list_db_v1Props(mandate_list_db_v1Data?.data?.dataset?.data || []);
        }else{
         //////////////
        

        const api_paginationBody: api_paginationDto = {
          key: dstKey,
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        // if(encryptionFlagCont) {
        // api_paginationBody["dpdKey"] = encryptionDpd
        // api_paginationBody["method"] = encryptionMethod
        // }
        const api_paginationData:any = await AxiosService.post(
          '/UF/pagination',
          api_paginationBody,
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
        setdfd_mandate_list_db_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mandate_list_db_v1) {
      mandate_list_db_v1(paginationData)
    }else 
      prevRefreshRef.current.mandate_list_db_v1= true
  },[refetch?.mandate_list_db_v1])

  async function securityCheck(): Promise<void> {
    const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",accessProfile:[user],from:"pageMmsV1"},{
      headers: {
        Authorization: `Bearer ${token}`
      }});
    const uf_dfKey:string[] = orchestrationData?.data?.DFkeys;
    const security:string = orchestrationData?.data?.security; 
    const allowedGroup: AllowedGroupNode[] = orchestrationData?.data?.allowedGroup||[];
    code = orchestrationData?.data?.code;
    const pagination:any = orchestrationData?.data?.action?.pagination;
    setpaginationDetails({
      page: +orchestrationData?.data?.action?.pagination?.page || 0,
      pageSize: +orchestrationData?.data?.action?.pagination?.count || 0
    })
    if (token) {
      try {
        let introspect:any;
        if(encryptionFlagPage){
           introspect = await AxiosService.get("/UF/introspect",{
            headers: {
              Authorization: `Bearer ${token}`
            },
            params: {
              dpdKey: encryptionDpd,
              method: encryptionMethod,
              key:"CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1"
            }
          }) 
        }else{
          introspect = await AxiosService.get("/UF/introspect",{
            headers: {
              Authorization: `Bearer ${token}`
             },
            params: {
              key:"CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1"  
            }
          })          
        }
        if(introspect?.data?.authenticated === false){
        localStorage.clear();
        deleteAllCookies();
        window.location.href = '/ct005/v001/mms/v1';
        }
      }catch (err: any) {
        toast("The token is no longer active.", 'danger');
        localStorage.clear();
        deleteAllCookies();
        window.location.href = '/ct005/v001/mms/v1';
      }
      try {
        let myAccount:any;
        if(encryptionFlagPage){
         myAccount = await AxiosService.get("/UF/myAccount-for-client",{
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
              dpdKey: encryptionDpd,
              method: encryptionMethod,
              key:"CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1"
            }
        }) 
        }else{
          myAccount = await AxiosService.get("/UF/myAccount-for-client",{
           headers: {
             Authorization: `Bearer ${token}`
           },
            params: {
              key:"CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1"
            }
         })          
        }
        if( user != "" && user != null){
          setAccessProfile([user]);
        }
        let actionDetails:ActionDetails = {
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
    "count": 1000
  },
  "encryption": {
    "isEnabled": false,
    "selectedDpd": "",
    "encryptionMethod": ""
  },
  "events": {}
};
        try{
    await subscreen_db_v1(pagination)
    await combo_subscreen_db_v1(pagination)
    await mandate_error_lst_db_v1(pagination)
    await mandate_doc_lst_db_v1(pagination)
    await mandate_list_db_v1(pagination)
          if (security == 'AA' || security == 'RA') {
          allowedGroup.map((nodes:AllowedGroupNode)=>{
            if(nodes?.groupName == 'overallgroup' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckoverallgroup(true)
            }
            if(nodes?.groupName == 'mnssubgroup' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckmnssubgroup(true)
            }
            if(nodes?.groupName == 'CT005_AF_UF_UFWS_V001_MMS_Mandate_subscreen2_v1' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1(true)
            }
            if(nodes?.groupName == 'mndate_common_info' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckmndate_common_info(true)
            }
            if(nodes?.groupName == 'mndate_basic_sub_screen' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckmndate_basic_sub_screen(true)
            }
            if(nodes?.groupName == 'CT005_AF_UF_UFWS_V001_MMS_Mandate_Subscreen_v1' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckct005_af_uf_ufws_v001_mms_mandate_subscreen_v1(true)
            }
            if(nodes?.groupName == 'subgroup' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setChecksubgroup(true)
            }
            if(nodes?.groupName == 'doc_data_lst' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckdoc_data_lst(true)
            }
            if(nodes?.groupName == 'valdtn_data_lst' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckvaldtn_data_lst(true)
            }
            if(nodes?.groupName == 'cmnt_data_lst' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckcmnt_data_lst(true)
            }
            if(nodes?.groupName == 'mandatedatalst' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckmandatedatalst(true)
            }
            if(nodes?.groupName == 'docdatalst' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckdocdatalst(true)
            }
            if(nodes?.groupName == 'valdtndatalst' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckvaldtndatalst(true)
            }
            if(nodes?.groupName == 'cmntdatalst' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckcmntdatalst(true)
            }
            if(nodes?.groupName == 'dynamic_group_btns' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckdynamic_group_btns(true)
            }
          })
          }
           }catch(err:any)
          {
            if( typeof err =='string')
              toast(err, 'danger');
            else
              toast(err?.response?.data?.message, 'danger');
          }
        /////////
        //Code Execution
        if (code !="" ) {
          let codeStates: Record<string, any> = {}
          codeStates['overallgroup'] = overallgroup00e53;
          codeStates['setoverallgroup'] = setoverallgroup00e53;
          codeStates['mnssubgroup'] = mnssubgroup3df12;
          codeStates['setmnssubgroup'] = setmnssubgroup3df12;
          codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1'] = ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9;
          codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9;
          codeStates['mndate_common_info'] = mndate_common_info3fb9d;
          codeStates['setmndate_common_info'] = setmndate_common_info3fb9d;
          codeStates['mndate_basic_sub_screen'] = mndate_basic_sub_screenc9573;
          codeStates['setmndate_basic_sub_screen'] = setmndate_basic_sub_screenc9573;
          codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen_v1'] = ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c;
          codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c;
          codeStates['subgroup'] = subgroup7f52e;
          codeStates['setsubgroup'] = setsubgroup7f52e;
          codeStates['doc_data_lst'] = doc_data_lst1fd5c;
          codeStates['setdoc_data_lst'] = setdoc_data_lst1fd5c;
          codeStates['valdtn_data_lst'] = valdtn_data_lst378bc;
          codeStates['setvaldtn_data_lst'] = setvaldtn_data_lst378bc;
          codeStates['cmnt_data_lst'] = cmnt_data_lste3582;
          codeStates['setcmnt_data_lst'] = setcmnt_data_lste3582;
          codeStates['mandatedatalst'] = mandatedatalst46c27;
          codeStates['setmandatedatalst'] = setmandatedatalst46c27;
          codeStates['docdatalst'] = docdatalst620a8;
          codeStates['setdocdatalst'] = setdocdatalst620a8;
          codeStates['valdtndatalst'] = valdtndatalstd58f5;
          codeStates['setvaldtndatalst'] = setvaldtndatalstd58f5;
          codeStates['cmntdatalst'] = cmntdatalste4cdc;
          codeStates['setcmntdatalst'] = setcmntdatalste4cdc;
          codeStates['dynamic_group_btns'] = dynamic_group_btns3c327;
          codeStates['setdynamic_group_btns'] = setdynamic_group_btns3c327;
          codeExecution(code,codeStates);
        }   
        setInitialLoad(true);        
      } catch (err: any) {
        toast(err?.message, 'danger');
      }
    
    }else{
      toast('token not found','danger');
    }    
  }
  const handleClick = (): void => {
    routes.push("/");
  }
  const handleOnload = (): void => {
  }

  useEffect(() => {    
    setMemoryVariables((prev: Record<string, string>) => ({
      ...prev,
      screenName: screenName,    
    }))
    securityCheck();
    handleOnload();
  }, [])
  return (
    <>

     <div className={clsx("",
        "w-full",
        isDark ? 'text-white' : 'text-black',
        isProcessing && "pointer-events-none select-none"
      )}
     style={{
        gridColumn: '',
        gridRow: '',
        gridAutoRows: '4px',
        columnGap: '0px',
        rowGap: '0px',
        display: "grid",
        gridTemplateColumns: 'repeat(24, 1fr)',
        gridTemplateRows: '',
        height: '',
        overflow: '',
        backgroundColor:bgStyle,
        backgroundImage:'',
        backgroundPosition: '',
        backgroundSize: '',
        backgroundRepeat: '',
        backgroundAttachment: '',
        backgroundClip: '',
        backgroundBlendMode: '',
        color: textStyle,
       // minHeight: '100vh',
        ...(isHighContrast && {
          fontWeight: '500',
          borderWidth: '2px'
      })
      }}>
      {isProcessing && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="flex items-center gap-3 rounded-xl bg-neutral-900/80 px-6 py-4 text-sm text-white shadow-lg backdrop-blur">
            {/* Spinner */}
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

            {/* Text */}
            <span className="font-medium tracking-wide">
              Processing, please wait…
            </span>
          </div>
        </div>
      )}
        {checkoverallgroup && initialLoad &&<Groupoverallgroup
          lockedData={lockedData} 
          setLockedData={setLockedData} 
          primaryTableData={primaryTableData}
          setPrimaryTableData={setPrimaryTableData}
          checkToAdd={checkToAdd} 
          setCheckToAdd={setCheckToAdd}  
          refetch={refetch}
          setRefetch={setRefetch}
          encryptionFlagPageData={encryptionFlagPageData}
          paginationDetails={paginationDetails}
          setIsProcessing={setIsProcessing}        />}
        
      </div> 
    </>
  )
}
    