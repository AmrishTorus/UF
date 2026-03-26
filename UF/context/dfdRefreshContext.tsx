// old logic
// "use client"
// import { TotalContext, TotalContextProps } from "../globalContext";
// import { useContext } from "react";

// // Pure function that does the logic
// export function handledfdrefresh(nodename:any, setRefetch:any){
//     let data:any = {
//   name973ca: 'userdfd_v1',
//   agee3b87: 'userdfd_v1',
//   user_ida2a2a: 'usedetailsdfd_v1',
//   phonebc3ea: 'usedetailsdfd_v1',
//   id76e97: 'usedetailsdfd_v1',
//   checkpc644a: 'usedetailsdfd_v1',
//   progress3b6ff: 'userdfd_v1'
// }


//     if(nodename in data)
//     {
//         setRefetch((pre:any)=>({...pre,[data[nodename]]:!pre[data[nodename]]}))
//     }

//     return
// }

// // Hook that uses context - call this from your components
// export function useHandleDfdRefresh(){
//     const {setRefetch} = useContext(TotalContext) as TotalContextProps;

//     return (nodename:any) => {
//         handledfdrefresh(nodename, setRefetch);
//     };
// }
//----------------------------------


"use client"
import { TotalContext, TotalContextProps } from "@/app/globalContext";
import { useContext } from "react";
import { api_paginationDto, te_refreshDto } from "@/app/interfaces/interfaces";
import { AxiosService } from "@/app/components/axiosService";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { getCookie } from "@/app/components/cookieMgment";
let inProgressKeys:any[] = [];

export async function dfdRefreshContext(dfdkey:any,setState:any,page:any,count:any,dpdEncryption:any,toast:any,token:any){
  if (inProgressKeys.includes(dfdkey)) {
    return; 
  }
  inProgressKeys.push(dfdkey)
  
  try{
    let usedetailsdfd_v1Body:te_refreshDto={
          key: dfdkey+":",
          refreshFlag: "Y",
          count:parseInt(count) || 10,
          page:parseInt(page) || 1
    }
    if (dpdEncryption?.encryptionFlagPage) {          
      usedetailsdfd_v1Body["dpdKey"] = dpdEncryption?.encryptionDpd;
      usedetailsdfd_v1Body["method"] = dpdEncryption?.encryptionMethod;
    }
    // if(parentchildindivitualsave_v1Props.length > 0){
    //   let filterData :any[] =[];
    //   for(let i=0;i< parentchildindivitualsave_v1Props.length;i++){
    //     if(parentchildindivitualsave_v1Props[i].DFDkey == dfdkey){
    //       delete parentchildindivitualsave_v1Props[i].DFDkey;
    //       filterData.push(parentchildindivitualsave_v1Props[i])
    //     }           
    //   }
    //   usedetailsdfd_v1Body['filterData'] = filterData;
    // }
    const usedetailsdfd_v1Data:any=await AxiosService.post("/te/eventEmitter",usedetailsdfd_v1Body,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (usedetailsdfd_v1Data?.data?.dataset) {
      setState(usedetailsdfd_v1Data?.data?.dataset?.data || []);
    }else{
      //////////////
    let dstKey:any=usedetailsdfd_v1Body?.key || ""
    dstKey=dstKey.replace(":AFC:",":AFCP:").replace(":AF:",":AFP:").replace(":DF-DFD:",":DF-DST:");

    const api_paginationBody: api_paginationDto = {
      key: dstKey,
      count:parseInt(count) || 10,
      page:parseInt(page) || 1
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
    setState(api_paginationData?.data?.records || []);
    }
    return
  }catch(err){
    console.log(err)
  }
  finally{
     const index = inProgressKeys.indexOf(dfdkey);
      if (index > -1) {
        inProgressKeys.splice(index, 1);
      }
  }
}



export function useHandleDfdRefresh(){


    const {dfd_mongodb_maindashboard_dfd_v1Props,setdfd_mongodb_maindashboard_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_mongo_linechart_dfd_v1Props,setdfd_mongo_linechart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_mongo_barchart_dfd_v1Props,setdfd_mongo_barchart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_mongo_api_repository_dfd_v1Props,setdfd_mongo_api_repository_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_tob_consents_request_dfd_v1Props,setdfd_tob_consents_request_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_mongo_totalcalls_dfd_v1Props,setdfd_mongo_totalcalls_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_mongodb_api_process_logs_dfd_v1Props,setdfd_mongodb_api_process_logs_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_tob_consent_request_ca_dfd_v1Props,setdfd_tob_consent_request_ca_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_tob_total_used_api_dfd_v1Props,setdfd_tob_total_used_api_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
    const toast=useInfoMsg();
    const token:string = getCookie('token'); 

    return (nodename:any,page:any=1,count:any=10,dpdEncryption:any) => {
            if("most_used_apis72497"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_MainDashboard_DFD:AFVK:v1",setdfd_mongodb_maindashboard_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("active_apisac162"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_MainDashboard_DFD:AFVK:v1",setdfd_mongodb_maindashboard_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("total_requests06c5a"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_MainDashboard_DFD:AFVK:v1",setdfd_mongodb_maindashboard_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("error3d67b"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_MainDashboard_DFD:AFVK:v1",setdfd_mongodb_maindashboard_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("line_chart0fe1c"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_LineChart_DFD:AFVK:v1",setdfd_mongo_linechart_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("barchart46476"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_BarChart_DFD:AFVK:v1",setdfd_mongo_barchart_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("apinamecccc2"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("version33b3f"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("statuscd1e6"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("api_category0905e"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("release_date1939f"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("app_name800b4"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1",setdfd_tob_consents_request_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("tppname5329d"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1",setdfd_tob_consents_request_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("typeb4599"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1",setdfd_tob_consents_request_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("status_value35b5d"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1",setdfd_tob_consents_request_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("apiname45fa8"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("versiona736c"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("statusddf07"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("api_category95348"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("release_dateb41fc"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("api_resourcepath88fa9"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_API_Repository_DFD:AFVK:v1",setdfd_mongo_api_repository_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("total_calls5c0ea"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_TotalCalls_DFD:AFVK:v1",setdfd_mongo_totalcalls_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("success_rateee58b"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_TotalCalls_DFD:AFVK:v1",setdfd_mongo_totalcalls_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("error_rate960d3"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_TotalCalls_DFD:AFVK:v1",setdfd_mongo_totalcalls_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("trs_created_date93619"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_API_Process_Logs_DFD:AFVK:v1",setdfd_mongodb_api_process_logs_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("requestdata1d4f4"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_API_Process_Logs_DFD:AFVK:v1",setdfd_mongodb_api_process_logs_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("responsedata35a3f"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_API_Process_Logs_DFD:AFVK:v1",setdfd_mongodb_api_process_logs_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("tob_consent_requestid80eee"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_API_Process_Logs_DFD:AFVK:v1",setdfd_mongodb_api_process_logs_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("request_consent_baseconsentid4221e"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consent_Request_CA_DFD:AFVK:v1",setdfd_tob_consent_request_ca_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("interactionid5cd91"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consent_Request_CA_DFD:AFVK:v1",setdfd_tob_consent_request_ca_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("request_consent_permissions1448d"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consent_Request_CA_DFD:AFVK:v1",setdfd_tob_consent_request_ca_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("consentbody_data_revokedby6ede9"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consent_Request_CA_DFD:AFVK:v1",setdfd_tob_consent_request_ca_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("request_consent_expiratriondatetime3ba51"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consent_Request_CA_DFD:AFVK:v1",setdfd_tob_consent_request_ca_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("status61386"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consent_Request_CA_DFD:AFVK:v1",setdfd_tob_consent_request_ca_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("most_used_apis2686b"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_MainDashboard_DFD:AFVK:v1",setdfd_mongodb_maindashboard_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("error_rate72497"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:MongoDB_MainDashboard_DFD:AFVK:v1",setdfd_mongodb_maindashboard_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("api_call_over_hour_linechart38cfd"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_LineChart_DFD:AFVK:v1",setdfd_mongo_linechart_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("api_call_over_month_linechartcc886"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_LineChart_DFD:AFVK:v1",setdfd_mongo_linechart_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("week_linechart709e7"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:Mongo_LineChart_DFD:AFVK:v1",setdfd_mongo_linechart_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("get_acc_progressf3140"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Total_Used_API_DFD:AFVK:v1",setdfd_tob_total_used_api_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("get_acc_id_progress564cc"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Total_Used_API_DFD:AFVK:v1",setdfd_tob_total_used_api_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("get_balance_progressa0d54"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Total_Used_API_DFD:AFVK:v1",setdfd_tob_total_used_api_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("get_direct_debits_progress04032"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Total_Used_API_DFD:AFVK:v1",setdfd_tob_total_used_api_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("app_namedc4c5"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1",setdfd_tob_consents_request_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("tppname5b032"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1",setdfd_tob_consents_request_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("typed4eac"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1",setdfd_tob_consents_request_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("status_value3beb3"==nodename){
                dfdRefreshContext("CK:CT009:FNGK:AF:FNK:DF-DFD:CATK:TOB001:AFGK:TOB002:AFK:TOB_Consents_Request_DFD:AFVK:v1",setdfd_tob_consents_request_dfd_v1Props,page,count,dpdEncryption,toast,token);
            }
    };
}

 