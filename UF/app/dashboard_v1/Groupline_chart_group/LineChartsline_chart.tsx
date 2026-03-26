
'use client'
import { useContext, useEffect, useState, useRef } from 'react';
import { codeExecution } from '@/app/utils/codeExecution';
import { getCookie } from '@/app/components/cookieMgment';
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { AxiosService } from '@/app/components/axiosService';
import { te_refreshDto } from "@/app/interfaces/interfaces";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { useGlobal } from '@/context/GlobalContext'
import { Tooltip } from '@/components/Tooltip'
import { HeaderPosition, TooltipProps as TooltipPropsType } from "@/types/global";
import { LineChart } from '@/components/LineChart';
import { Text } from "@/components/Text";
import { Card } from '@/components/Card';

type ContentAlign = "left" | "center" | "right";

interface LineChartslineChartCompProps {
  encryptionFlagCompData: any;
}

export default function LineChartsline_chart({ 
  encryptionFlagCompData,
}: LineChartslineChartCompProps) {
  const token: string = getCookie('token');
  const { globalState, setGlobalState } = useContext(TotalContext) as TotalContextProps;
  const { accessProfile, setAccessProfile } = useContext(TotalContext) as TotalContextProps;
  const [data,setData] = useState<any>([]);
  const {dfd_mongo_linechart_dfd_v1Props, setdfd_mongo_linechart_dfd_v1Props} = useContext(TotalContext) as TotalContextProps;
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false ;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  const prevRefreshRef = useRef(false);
  const toast:any=useInfoMsg();
  /////////////
   //another screen
  const {vob_dashboard_screen9ce49, setvob_dashboard_screen9ce49}= useContext(TotalContext) as TotalContextProps;  
  const {vob_dashboard_screen9ce49Props, setvob_dashboard_screen9ce49Props}= useContext(TotalContext) as TotalContextProps;  
  const {most_groupc5ce0, setmost_groupc5ce0}= useContext(TotalContext) as TotalContextProps;  
  const {most_groupc5ce0Props, setmost_groupc5ce0Props}= useContext(TotalContext) as TotalContextProps;  
  const {active_group31e18, setactive_group31e18}= useContext(TotalContext) as TotalContextProps;  
  const {active_group31e18Props, setactive_group31e18Props}= useContext(TotalContext) as TotalContextProps;  
  const {req_groupdf5e7, setreq_groupdf5e7}= useContext(TotalContext) as TotalContextProps;  
  const {req_groupdf5e7Props, setreq_groupdf5e7Props}= useContext(TotalContext) as TotalContextProps;  
  const {error_groupcf699, seterror_groupcf699}= useContext(TotalContext) as TotalContextProps;  
  const {error_groupcf699Props, seterror_groupcf699Props}= useContext(TotalContext) as TotalContextProps;  
  const {line_chart_groupadc5c, setline_chart_groupadc5c}= useContext(TotalContext) as TotalContextProps;  
  const {line_chart_groupadc5cProps, setline_chart_groupadc5cProps}= useContext(TotalContext) as TotalContextProps;  
  const {line_chart0fe1c, setline_chart0fe1c}= useContext(TotalContext) as TotalContextProps;  
  const {bar_chart_group31635, setbar_chart_group31635}= useContext(TotalContext) as TotalContextProps;  
  const {bar_chart_group31635Props, setbar_chart_group31635Props}= useContext(TotalContext) as TotalContextProps;  
  const {api_repo_table162e4, setapi_repo_table162e4}= useContext(TotalContext) as TotalContextProps;  
  const {api_repo_table162e4Props, setapi_repo_table162e4Props}= useContext(TotalContext) as TotalContextProps;  
  const {api_repositoryb1ab8, setapi_repositoryb1ab8}= useContext(TotalContext) as TotalContextProps;  
  const {api_repositoryb1ab8Props, setapi_repositoryb1ab8Props}= useContext(TotalContext) as TotalContextProps;  
  const {connected_application17a5d, setconnected_application17a5d}= useContext(TotalContext) as TotalContextProps;  
  const {connected_application17a5dProps, setconnected_application17a5dProps}= useContext(TotalContext) as TotalContextProps;  
  //////////////
  const handleMapperDetails=async()=>{
    try{
      //orchestration api call
      const orchestrationData: any = await AxiosService.post(
      '/UF/Orchestration',
      {
        key: "CK:CT009:FNGK:AF:FNK:UF-UFW:CATK:TOB001:AFGK:TOB002:AFK:VOB_Dashboard_Screen:AFVK:v1",
        componentId: "2150f24b9f8d42f4be5c49f18b9adc5c",
        controlId: "afca1741497448afbd4d2519a8e0fe1c",
        isTable: false,
        accessProfile:accessProfile,
        from:"checkbox"
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    let code:any= orchestrationData?.data?.code ;
    if (code == '') {
      //toast(code?.data?.errorDetails?.message, 'danger')
      //return
    } else if (code != '') {
        let codeStates: any = {}
        codeStates['vob_dashboard_screen']  = vob_dashboard_screen9ce49,
        codeStates['setvob_dashboard_screen'] = setvob_dashboard_screen9ce49,
        codeStates['most_group']  = most_groupc5ce0,
        codeStates['setmost_group'] = setmost_groupc5ce0,
        codeStates['active_group']  = active_group31e18,
        codeStates['setactive_group'] = setactive_group31e18,
        codeStates['req_group']  = req_groupdf5e7,
        codeStates['setreq_group'] = setreq_groupdf5e7,
        codeStates['error_group']  = error_groupcf699,
        codeStates['seterror_group'] = seterror_groupcf699,
        codeStates['line_chart_group']  = line_chart_groupadc5c,
        codeStates['setline_chart_group'] = setline_chart_groupadc5c,
        codeStates['bar_chart_group']  = bar_chart_group31635,
        codeStates['setbar_chart_group'] = setbar_chart_group31635,
        codeStates['api_repo_table']  = api_repo_table162e4,
        codeStates['setapi_repo_table'] = setapi_repo_table162e4,
        codeStates['api_repository']  = api_repositoryb1ab8,
        codeStates['setapi_repository'] = setapi_repositoryb1ab8,
        codeStates['connected_application']  = connected_application17a5d,
        codeStates['setconnected_application'] = setconnected_application17a5d,
      codeExecution(code,codeStates)
    }
      if(Array.isArray(dfd_mongo_linechart_dfd_v1Props) && dfd_mongo_linechart_dfd_v1Props?.length > 0){
    setData(dfd_mongo_linechart_dfd_v1Props)
    setline_chart_groupadc5c((pre:any)=>({...pre,name:dfd_mongo_linechart_dfd_v1Props[0]?.name}))
  }
    if(Array.isArray(dfd_mongo_linechart_dfd_v1Props)){
      return
    }
    }catch(err){
      console.log(err)
    }
  }
useEffect(() => {
  if (prevRefreshRef.current) {
    handleMapperDetails()
  }else 
  prevRefreshRef.current= true
},[line_chart0fe1c?.refresh])

useEffect(() => {
  if(Array.isArray(dfd_mongo_linechart_dfd_v1Props) && dfd_mongo_linechart_dfd_v1Props?.length > 0){
    setData(dfd_mongo_linechart_dfd_v1Props)
    setline_chart_groupadc5c((pre:any)=>({...pre,name:dfd_mongo_linechart_dfd_v1Props[0]?.name}))
  }
},[dfd_mongo_linechart_dfd_v1Props])

  if (line_chart0fe1c?.isHidden) {
    return <></>
  }
  return (
    <div
      className="w-full h-full"
      style={{gridColumn: `1 / 25`,gridRow: `1 / 98`, gap:``, height: `100%`}}
    >
      <LineChart
        data={data}
        showCurrencySign = "₹"
        title  = "API Calls Over Week"
        fillContainer={true}
        className = ""
        contentAlign="left"
      />
    </div>
  );
}
