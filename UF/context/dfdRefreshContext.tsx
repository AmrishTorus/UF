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


    const {dfd_subscreen_db_v1Props,setdfd_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_combo_subscreen_db_v1Props,setdfd_combo_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_mandate_doc_lst_db_v1Props,setdfd_mandate_doc_lst_db_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_mandate_error_lst_db_v1Props,setdfd_mandate_error_lst_db_v1Props} = useContext(TotalContext) as TotalContextProps;
    const {dfd_mandate_list_db_v1Props,setdfd_mandate_list_db_v1Props} = useContext(TotalContext) as TotalContextProps;
    const toast=useInfoMsg();
    const token:string = getCookie('token'); 

    return (nodename:any,page:any=1,count:any=10,dpdEncryption:any) => {
            if("batch_type6befb"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("variable_pay68402"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("inhouse0b227"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("cr_acc_no596b0"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("cr_acc_name0589d"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("floor_amnt59de7"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("ceiling_amntc6b28"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("brbanknamec54c8"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:Combo_subscreen_db:AFVK:v1",setdfd_combo_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("brbranchname951ce"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:Combo_subscreen_db:AFVK:v1",setdfd_combo_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("dr_sort_code26ce5"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("currencye913a"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("dr_acnt_no61f56"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("dr_acnt_namee2b1e"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("policy_no1316f6"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("policy_no2196cd"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("originator_codee7d60"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("frequency80676"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("duedate3cf41"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("expirydateee023"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1",setdfd_subscreen_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("doc_name6a955"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_doc_lst_db:AFVK:v1",setdfd_mandate_doc_lst_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("vld_code5df31"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_error_lst_db:AFVK:v1",setdfd_mandate_error_lst_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("vld_reason0ec55"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_error_lst_db:AFVK:v1",setdfd_mandate_error_lst_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("mandateid05ce4"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("dracntname92ac0"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("dracntno42c4a"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("cracntname9fdc4"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("cracntnoc7b4d"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("ceilingamnt62ee2"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("frequency1a4a6"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("duedate03f9a"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("expirydate3fe80"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
            if("status68b01"==nodename){
                dfdRefreshContext("CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:mandate_list_db:AFVK:v1",setdfd_mandate_list_db_v1Props,page,count,dpdEncryption,toast,token);
            }
    };
}

 