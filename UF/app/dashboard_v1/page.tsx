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
import Groupvob_dashboard_screen  from "./Groupvob_dashboard_screen/Groupvob_dashboard_screen";


export default function PageDashboardV1() {
  const { isDark, isHighContrast, bgStyle, textStyle } : { isDark: boolean; isHighContrast: boolean; bgStyle: string; textStyle: string } = useTheme();
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const securityData : SecurityData = {
  "TOB Template ": {
    "allowedGroups": [
      "canvas",
      "vob_dashboard_screen",
      "most_group",
      "active_group",
      "req_group",
      "error_group",
      "line_chart_group",
      "bar_chart_group",
      "api_repo_table",
      "api_repository",
      "connected_application"
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
  const screenName:string = "dashboard";
  const user : string | undefined = decodedTokenObj?.selectedAccessProfile;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {refetch, setRefetch} = useContext(TotalContext) as TotalContextProps;
  const { encAppFalg,setEncAppFalg}= useContext(TotalContext) as TotalContextProps;
  const {lockedData, setLockedData} = useContext(TotalContext) as TotalContextProps;
  const {paginationDetails, setpaginationDetails} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const { eventEmitterData,setEventEmitterData}= useContext(TotalContext) as TotalContextProps;
  const {vob_dashboard_screen_v1Props, setvob_dashboard_screen_v1Props} = useContext(TotalContext) as TotalContextProps;
  const [checkvob_dashboard_screen,setCheckvob_dashboard_screen,]=useState<boolean>(false);
  const [checkmost_group,setCheckmost_group,]=useState<boolean>(false);
  const [checkactive_group,setCheckactive_group,]=useState<boolean>(false);
  const [checkreq_group,setCheckreq_group,]=useState<boolean>(false);
  const [checkerror_group,setCheckerror_group,]=useState<boolean>(false);
  const [checkline_chart_group,setCheckline_chart_group,]=useState<boolean>(false);
  const [checkbar_chart_group,setCheckbar_chart_group,]=useState<boolean>(false);
  const [checkapi_repo_table,setCheckapi_repo_table,]=useState<boolean>(false);
  const [checkapi_repository,setCheckapi_repository,]=useState<boolean>(false);
  const [checkconnected_application,setCheckconnected_application,]=useState<boolean>(false);
  const {vob_dashboard_screen9ce49, setvob_dashboard_screen9ce49} = useContext(TotalContext) as TotalContextProps;
  const {most_groupc5ce0, setmost_groupc5ce0} = useContext(TotalContext) as TotalContextProps;
  const {active_group31e18, setactive_group31e18} = useContext(TotalContext) as TotalContextProps;
  const {req_groupdf5e7, setreq_groupdf5e7} = useContext(TotalContext) as TotalContextProps;
  const {error_groupcf699, seterror_groupcf699} = useContext(TotalContext) as TotalContextProps;
  const {line_chart_groupadc5c, setline_chart_groupadc5c} = useContext(TotalContext) as TotalContextProps;
  const {bar_chart_group31635, setbar_chart_group31635} = useContext(TotalContext) as TotalContextProps;
  const {api_repo_table162e4, setapi_repo_table162e4} = useContext(TotalContext) as TotalContextProps;
  const {api_repositoryb1ab8, setapi_repositoryb1ab8} = useContext(TotalContext) as TotalContextProps;
  const {connected_application17a5d, setconnected_application17a5d} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongodb_maindashboard_dfd_v1Props, setdfd_mongodb_maindashboard_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_tob_consents_request_dfd_v1Props, setdfd_tob_consents_request_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_api_repository_dfd_v1Props, setdfd_mongo_api_repository_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_barchart_dfd_v1Props, setdfd_mongo_barchart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_linechart_dfd_v1Props, setdfd_mongo_linechart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
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
      mongodb_maindashboard_dfd_v1:false,
      tob_consents_request_dfd_v1:false,
      mongo_api_repository_dfd_v1:false,
      mongo_barchart_dfd_v1:false,
      mongo_linechart_dfd_v1:false,
    });
    async function mongodb_maindashboard_dfd_v1(pagination:any): Promise<void>{
        let mongodb_maindashboard_dfd_v1Body:te_refreshDto={
          key: "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_MainDashboard_DFD:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mongodb_maindashboard_dfd_v1Body["dpdKey"] = encryptionDpd;
          mongodb_maindashboard_dfd_v1Body["method"] = encryptionMethod;
        }
        if(vob_dashboard_screen_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< vob_dashboard_screen_v1Props.length;i++){
            if(vob_dashboard_screen_v1Props[i].DFDkey == "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_MainDashboard_DFD:AFVK:v1"){
              delete vob_dashboard_screen_v1Props[i].DFDkey;
              filterData.push(vob_dashboard_screen_v1Props[i])
            }           
          }
          mongodb_maindashboard_dfd_v1Body['filterData'] = filterData;
        }
        const mongodb_maindashboard_dfd_v1Data:any=await AxiosService.post("/te/eventEmitter",mongodb_maindashboard_dfd_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mongodb_maindashboard_dfd_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mongodb_maindashboard_dfd_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mongodb_maindashboard_dfd_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mongodb_maindashboard_dfd_v1Data?.data?.dataset) {
          setdfd_mongodb_maindashboard_dfd_v1Props(mongodb_maindashboard_dfd_v1Data?.data?.dataset?.data || []);
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
        setdfd_mongodb_maindashboard_dfd_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mongodb_maindashboard_dfd_v1) {
      mongodb_maindashboard_dfd_v1(paginationData)
    }else 
      prevRefreshRef.current.mongodb_maindashboard_dfd_v1= true
  },[refetch?.mongodb_maindashboard_dfd_v1])
    async function tob_consents_request_dfd_v1(pagination:any): Promise<void>{
        let tob_consents_request_dfd_v1Body:te_refreshDto={
          key: "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          tob_consents_request_dfd_v1Body["dpdKey"] = encryptionDpd;
          tob_consents_request_dfd_v1Body["method"] = encryptionMethod;
        }
        if(vob_dashboard_screen_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< vob_dashboard_screen_v1Props.length;i++){
            if(vob_dashboard_screen_v1Props[i].DFDkey == "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1"){
              delete vob_dashboard_screen_v1Props[i].DFDkey;
              filterData.push(vob_dashboard_screen_v1Props[i])
            }           
          }
          tob_consents_request_dfd_v1Body['filterData'] = filterData;
        }
        const tob_consents_request_dfd_v1Data:any=await AxiosService.post("/te/eventEmitter",tob_consents_request_dfd_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=tob_consents_request_dfd_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(tob_consents_request_dfd_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_tob_consents_request_dfd_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (tob_consents_request_dfd_v1Data?.data?.dataset) {
          setdfd_tob_consents_request_dfd_v1Props(tob_consents_request_dfd_v1Data?.data?.dataset?.data || []);
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
        setdfd_tob_consents_request_dfd_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.tob_consents_request_dfd_v1) {
      tob_consents_request_dfd_v1(paginationData)
    }else 
      prevRefreshRef.current.tob_consents_request_dfd_v1= true
  },[refetch?.tob_consents_request_dfd_v1])
    async function mongo_api_repository_dfd_v1(pagination:any): Promise<void>{
        let mongo_api_repository_dfd_v1Body:te_refreshDto={
          key: "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mongo_api_repository_dfd_v1Body["dpdKey"] = encryptionDpd;
          mongo_api_repository_dfd_v1Body["method"] = encryptionMethod;
        }
        if(vob_dashboard_screen_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< vob_dashboard_screen_v1Props.length;i++){
            if(vob_dashboard_screen_v1Props[i].DFDkey == "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1"){
              delete vob_dashboard_screen_v1Props[i].DFDkey;
              filterData.push(vob_dashboard_screen_v1Props[i])
            }           
          }
          mongo_api_repository_dfd_v1Body['filterData'] = filterData;
        }
        const mongo_api_repository_dfd_v1Data:any=await AxiosService.post("/te/eventEmitter",mongo_api_repository_dfd_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mongo_api_repository_dfd_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mongo_api_repository_dfd_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mongo_api_repository_dfd_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mongo_api_repository_dfd_v1Data?.data?.dataset) {
          setdfd_mongo_api_repository_dfd_v1Props(mongo_api_repository_dfd_v1Data?.data?.dataset?.data || []);
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
        setdfd_mongo_api_repository_dfd_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mongo_api_repository_dfd_v1) {
      mongo_api_repository_dfd_v1(paginationData)
    }else 
      prevRefreshRef.current.mongo_api_repository_dfd_v1= true
  },[refetch?.mongo_api_repository_dfd_v1])
    async function mongo_barchart_dfd_v1(pagination:any): Promise<void>{
        let mongo_barchart_dfd_v1Body:te_refreshDto={
          key: "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_BarChart_DFD:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mongo_barchart_dfd_v1Body["dpdKey"] = encryptionDpd;
          mongo_barchart_dfd_v1Body["method"] = encryptionMethod;
        }
        if(vob_dashboard_screen_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< vob_dashboard_screen_v1Props.length;i++){
            if(vob_dashboard_screen_v1Props[i].DFDkey == "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_BarChart_DFD:AFVK:v1"){
              delete vob_dashboard_screen_v1Props[i].DFDkey;
              filterData.push(vob_dashboard_screen_v1Props[i])
            }           
          }
          mongo_barchart_dfd_v1Body['filterData'] = filterData;
        }
        const mongo_barchart_dfd_v1Data:any=await AxiosService.post("/te/eventEmitter",mongo_barchart_dfd_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mongo_barchart_dfd_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mongo_barchart_dfd_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mongo_barchart_dfd_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mongo_barchart_dfd_v1Data?.data?.dataset) {
          setdfd_mongo_barchart_dfd_v1Props(mongo_barchart_dfd_v1Data?.data?.dataset?.data || []);
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
        setdfd_mongo_barchart_dfd_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mongo_barchart_dfd_v1) {
      mongo_barchart_dfd_v1(paginationData)
    }else 
      prevRefreshRef.current.mongo_barchart_dfd_v1= true
  },[refetch?.mongo_barchart_dfd_v1])
    async function mongo_linechart_dfd_v1(pagination:any): Promise<void>{
        let mongo_linechart_dfd_v1Body:te_refreshDto={
          key: "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_LineChart_DFD:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mongo_linechart_dfd_v1Body["dpdKey"] = encryptionDpd;
          mongo_linechart_dfd_v1Body["method"] = encryptionMethod;
        }
        if(vob_dashboard_screen_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< vob_dashboard_screen_v1Props.length;i++){
            if(vob_dashboard_screen_v1Props[i].DFDkey == "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_LineChart_DFD:AFVK:v1"){
              delete vob_dashboard_screen_v1Props[i].DFDkey;
              filterData.push(vob_dashboard_screen_v1Props[i])
            }           
          }
          mongo_linechart_dfd_v1Body['filterData'] = filterData;
        }
        const mongo_linechart_dfd_v1Data:any=await AxiosService.post("/te/eventEmitter",mongo_linechart_dfd_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mongo_linechart_dfd_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mongo_linechart_dfd_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mongo_linechart_dfd_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mongo_linechart_dfd_v1Data?.data?.dataset) {
          setdfd_mongo_linechart_dfd_v1Props(mongo_linechart_dfd_v1Data?.data?.dataset?.data || []);
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
        setdfd_mongo_linechart_dfd_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mongo_linechart_dfd_v1) {
      mongo_linechart_dfd_v1(paginationData)
    }else 
      prevRefreshRef.current.mongo_linechart_dfd_v1= true
  },[refetch?.mongo_linechart_dfd_v1])

  async function securityCheck(): Promise<void> {
    const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Screen:AFVK:v1",accessProfile:[user],from:"pageDashboardV1"},{
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
              key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Screen:AFVK:v1"
            }
          }) 
        }else{
          introspect = await AxiosService.get("/UF/introspect",{
            headers: {
              Authorization: `Bearer ${token}`
             },
            params: {
              key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Screen:AFVK:v1"  
            }
          })          
        }
        if(introspect?.data?.authenticated === false){
        localStorage.clear();
        deleteAllCookies();
        window.location.href = '/ct009/tob001/tob002/v1';
        }
      }catch (err: any) {
        toast("The token is no longer active.", 'danger');
        localStorage.clear();
        deleteAllCookies();
        window.location.href = '/ct009/tob001/tob002/v1';
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
              key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Screen:AFVK:v1"
            }
        }) 
        }else{
          myAccount = await AxiosService.get("/UF/myAccount-for-client",{
           headers: {
             Authorization: `Bearer ${token}`
           },
            params: {
              key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Screen:AFVK:v1"
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
    "count": 2000
  },
  "encryption": {
    "isEnabled": false,
    "selectedDpd": "",
    "encryptionMethod": ""
  },
  "events": {}
};
        try{
    await mongodb_maindashboard_dfd_v1(pagination)
    await tob_consents_request_dfd_v1(pagination)
    await mongo_api_repository_dfd_v1(pagination)
    await mongo_barchart_dfd_v1(pagination)
    await mongo_linechart_dfd_v1(pagination)
          if (security == 'AA' || security == 'RA') {
          allowedGroup.map((nodes:AllowedGroupNode)=>{
            if(nodes?.groupName == 'vob_dashboard_screen' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckvob_dashboard_screen(true)
            }
            if(nodes?.groupName == 'most_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckmost_group(true)
            }
            if(nodes?.groupName == 'active_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckactive_group(true)
            }
            if(nodes?.groupName == 'req_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckreq_group(true)
            }
            if(nodes?.groupName == 'error_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckerror_group(true)
            }
            if(nodes?.groupName == 'line_chart_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckline_chart_group(true)
            }
            if(nodes?.groupName == 'bar_chart_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckbar_chart_group(true)
            }
            if(nodes?.groupName == 'api_repo_table' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckapi_repo_table(true)
            }
            if(nodes?.groupName == 'api_repository' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckapi_repository(true)
            }
            if(nodes?.groupName == 'connected_application' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckconnected_application(true)
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
          codeStates['vob_dashboard_screen'] = vob_dashboard_screen9ce49;
          codeStates['setvob_dashboard_screen'] = setvob_dashboard_screen9ce49;
          codeStates['most_group'] = most_groupc5ce0;
          codeStates['setmost_group'] = setmost_groupc5ce0;
          codeStates['active_group'] = active_group31e18;
          codeStates['setactive_group'] = setactive_group31e18;
          codeStates['req_group'] = req_groupdf5e7;
          codeStates['setreq_group'] = setreq_groupdf5e7;
          codeStates['error_group'] = error_groupcf699;
          codeStates['seterror_group'] = seterror_groupcf699;
          codeStates['line_chart_group'] = line_chart_groupadc5c;
          codeStates['setline_chart_group'] = setline_chart_groupadc5c;
          codeStates['bar_chart_group'] = bar_chart_group31635;
          codeStates['setbar_chart_group'] = setbar_chart_group31635;
          codeStates['api_repo_table'] = api_repo_table162e4;
          codeStates['setapi_repo_table'] = setapi_repo_table162e4;
          codeStates['api_repository'] = api_repositoryb1ab8;
          codeStates['setapi_repository'] = setapi_repositoryb1ab8;
          codeStates['connected_application'] = connected_application17a5d;
          codeStates['setconnected_application'] = setconnected_application17a5d;
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
        {checkvob_dashboard_screen && initialLoad &&<Groupvob_dashboard_screen
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
    