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
import Groupapi_info_group  from "./Groupapi_info_group/Groupapi_info_group";
import Groupinfo_group  from "./Groupinfo_group/Groupinfo_group";
import Groupinfo_summary_group  from "./Groupinfo_summary_group/Groupinfo_summary_group";
import Groupapi_process_log_group  from "./Groupapi_process_log_group/Groupapi_process_log_group";


export default function PageVobApiInfoV1() {
  const { isDark, isHighContrast, bgStyle, textStyle } : { isDark: boolean; isHighContrast: boolean; bgStyle: string; textStyle: string } = useTheme();
  const [initialLoad, setInitialLoad] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const securityData : SecurityData = {
  "TOB Template ": {
    "allowedGroups": [
      "canvas",
      "api_info_group",
      "info_group",
      "info_summary_group",
      "api_process_log_group",
      "api_process_log"
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
  const {vob_api_info_v1Props, setvob_api_info_v1Props} = useContext(TotalContext) as TotalContextProps;
  const [checkapi_info_group,setCheckapi_info_group,]=useState<boolean>(false);
  const [checkinfo_group,setCheckinfo_group,]=useState<boolean>(false);
  const [checkinfo_summary_group,setCheckinfo_summary_group,]=useState<boolean>(false);
  const [checkapi_process_log_group,setCheckapi_process_log_group,]=useState<boolean>(false);
  const [checkapi_process_log,setCheckapi_process_log,]=useState<boolean>(false);
  const {api_info_groupd3ad5, setapi_info_groupd3ad5} = useContext(TotalContext) as TotalContextProps;
  const {info_group5e349, setinfo_group5e349} = useContext(TotalContext) as TotalContextProps;
  const {info_summary_groupa2a0f, setinfo_summary_groupa2a0f} = useContext(TotalContext) as TotalContextProps;
  const {api_process_log_groupff19c, setapi_process_log_groupff19c} = useContext(TotalContext) as TotalContextProps;
  const {api_process_log655a7, setapi_process_log655a7} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_totalcalls_dfd_v1Props, setdfd_mongo_totalcalls_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongo_api_repository_dfd_v1Props, setdfd_mongo_api_repository_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const {dfd_mongodb_api_process_logs_dfd_v1Props, setdfd_mongodb_api_process_logs_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
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
      mongo_totalcalls_dfd_v1:false,
      mongo_api_repository_dfd_v1:false,
      mongodb_api_process_logs_dfd_v1:false,
    });
    async function mongo_totalcalls_dfd_v1(pagination:any): Promise<void>{
        let mongo_totalcalls_dfd_v1Body:te_refreshDto={
          key: "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_TotalCalls_DFD:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mongo_totalcalls_dfd_v1Body["dpdKey"] = encryptionDpd;
          mongo_totalcalls_dfd_v1Body["method"] = encryptionMethod;
        }
        if(vob_api_info_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< vob_api_info_v1Props.length;i++){
            if(vob_api_info_v1Props[i].DFDkey == "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_TotalCalls_DFD:AFVK:v1"){
              delete vob_api_info_v1Props[i].DFDkey;
              filterData.push(vob_api_info_v1Props[i])
            }           
          }
          mongo_totalcalls_dfd_v1Body['filterData'] = filterData;
        }
        const mongo_totalcalls_dfd_v1Data:any=await AxiosService.post("/te/eventEmitter",mongo_totalcalls_dfd_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mongo_totalcalls_dfd_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mongo_totalcalls_dfd_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mongo_totalcalls_dfd_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mongo_totalcalls_dfd_v1Data?.data?.dataset) {
          setdfd_mongo_totalcalls_dfd_v1Props(mongo_totalcalls_dfd_v1Data?.data?.dataset?.data || []);
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
        setdfd_mongo_totalcalls_dfd_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mongo_totalcalls_dfd_v1) {
      mongo_totalcalls_dfd_v1(paginationData)
    }else 
      prevRefreshRef.current.mongo_totalcalls_dfd_v1= true
  },[refetch?.mongo_totalcalls_dfd_v1])
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
        if(vob_api_info_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< vob_api_info_v1Props.length;i++){
            if(vob_api_info_v1Props[i].DFDkey == "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1"){
              delete vob_api_info_v1Props[i].DFDkey;
              filterData.push(vob_api_info_v1Props[i])
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
    async function mongodb_api_process_logs_dfd_v1(pagination:any): Promise<void>{
        let mongodb_api_process_logs_dfd_v1Body:te_refreshDto={
          key: "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_API_Process_Logs_DFD:AFVK:v1"+":",
          refreshFlag: "Y",
          count:parseInt(pagination?.count) || 10,
          page:parseInt(pagination?.page) || 1
        }
        if (encryptionFlagPage) {          
          mongodb_api_process_logs_dfd_v1Body["dpdKey"] = encryptionDpd;
          mongodb_api_process_logs_dfd_v1Body["method"] = encryptionMethod;
        }
        if(vob_api_info_v1Props.length > 0){
          let filterData :any[] =[];
          for(let i=0;i< vob_api_info_v1Props.length;i++){
            if(vob_api_info_v1Props[i].DFDkey == "CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_API_Process_Logs_DFD:AFVK:v1"){
              delete vob_api_info_v1Props[i].DFDkey;
              filterData.push(vob_api_info_v1Props[i])
            }           
          }
          mongodb_api_process_logs_dfd_v1Body['filterData'] = filterData;
        }
        const mongodb_api_process_logs_dfd_v1Data:any=await AxiosService.post("/te/eventEmitter",mongodb_api_process_logs_dfd_v1Body,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let dstKey:string=mongodb_api_process_logs_dfd_v1Body?.key || ""
        dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");
        if(mongodb_api_process_logs_dfd_v1Data?.data?.dataset === 'Bulk Data Processing'){
          setdfd_mongodb_api_process_logs_dfd_v1Props({ hasLogicCenter: false, dstKey: dstKey })
        }else if (mongodb_api_process_logs_dfd_v1Data?.data?.dataset) {
          setdfd_mongodb_api_process_logs_dfd_v1Props(mongodb_api_process_logs_dfd_v1Data?.data?.dataset?.data || []);
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
        setdfd_mongodb_api_process_logs_dfd_v1Props(api_paginationData?.data?.records || []);
        }
      }
  useEffect(()=>{
    if (prevRefreshRef?.current?.mongodb_api_process_logs_dfd_v1) {
      mongodb_api_process_logs_dfd_v1(paginationData)
    }else 
      prevRefreshRef.current.mongodb_api_process_logs_dfd_v1= true
  },[refetch?.mongodb_api_process_logs_dfd_v1])

  async function securityCheck(): Promise<void> {
    const orchestrationData:any = await AxiosService.post("/UF/Orchestration",{key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1",accessProfile:[user],from:"pageVobApiInfoV1"},{
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
              key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1"
            }
          }) 
        }else{
          introspect = await AxiosService.get("/UF/introspect",{
            headers: {
              Authorization: `Bearer ${token}`
             },
            params: {
              key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1"  
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
              key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1"
            }
        }) 
        }else{
          myAccount = await AxiosService.get("/UF/myAccount-for-client",{
           headers: {
             Authorization: `Bearer ${token}`
           },
            params: {
              key:"CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_API_INFO:AFVK:v1"
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
    await mongo_totalcalls_dfd_v1(pagination)
    await mongo_api_repository_dfd_v1(pagination)
    await mongodb_api_process_logs_dfd_v1(pagination)
          if (security == 'AA' || security == 'RA') {
          allowedGroup.map((nodes:AllowedGroupNode)=>{
            if(nodes?.groupName == 'api_info_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckapi_info_group(true)
            }
            if(nodes?.groupName == 'info_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckinfo_group(true)
            }
            if(nodes?.groupName == 'info_summary_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckinfo_summary_group(true)
            }
            if(nodes?.groupName == 'api_process_log_group' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckapi_process_log_group(true)
            }
            if(nodes?.groupName == 'api_process_log' && (nodes?.security== 'AA' || nodes?.security == 'ATO' || nodes?.security == 'RA'))
            {
              setCheckapi_process_log(true)
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
          codeStates['api_info_group'] = api_info_groupd3ad5;
          codeStates['setapi_info_group'] = setapi_info_groupd3ad5;
          codeStates['info_group'] = info_group5e349;
          codeStates['setinfo_group'] = setinfo_group5e349;
          codeStates['info_summary_group'] = info_summary_groupa2a0f;
          codeStates['setinfo_summary_group'] = setinfo_summary_groupa2a0f;
          codeStates['api_process_log_group'] = api_process_log_groupff19c;
          codeStates['setapi_process_log_group'] = setapi_process_log_groupff19c;
          codeStates['api_process_log'] = api_process_log655a7;
          codeStates['setapi_process_log'] = setapi_process_log655a7;
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
    routes.push("/dashboard_v1");
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
        {checkapi_info_group && initialLoad &&<Groupapi_info_group
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
        
        {checkinfo_group && initialLoad &&<Groupinfo_group
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
        
        {checkinfo_summary_group && initialLoad &&<Groupinfo_summary_group
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
        
        {checkapi_process_log_group && initialLoad &&<Groupapi_process_log_group
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
    