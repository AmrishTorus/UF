'use client'




import React, { useState,useEffect,useContext, useRef } from 'react';
import axios from 'axios';
import i18n from '@/app/components/i18n';
import { codeExecution } from '@/app/utils/codeExecution';
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { uf_getPFDetailsDto,uf_initiatePfDto,te_eventEmitterDto,uf_ifoDto,te_updateDto, te_refreshDto } from '@/app/interfaces/interfaces';
import { AxiosService } from '@/app/components/axiosService';
import { getCookie } from '@/app/components/cookieMgment';
import { nullFilter } from '@/app/utils/nullDataFilter';
import {commonSepareteDataFromTheObject, eventFunction } from '@/app/utils/eventFunction';
import { useRouter } from 'next/navigation';
import { eventBus } from '@/app/eventBus';
import {Modal} from '@/components/Modal';
import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { Icon } from '@/components/Icon';
import UOmapperData from '@/context/dfdmapperContolnames.json';
import { DecodedToken,PrimaryTableData,SecurityData,EncryptionFlagPageData,PaginationData,AllowedGroupNode,ActionDetails } from "@/types/global";
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { getFilterProps,getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { useHandleDfdRefresh } from '@/context/dfdRefreshContext';
import evaluateDecisionTable  from '@/app/utils/evaluateDecisionTable';
import { eventDecisionTable } from '@/app/utils/evaluateDecisionTable';
import decodeToken from '@/app/components/decodeToken';
import { getGridPositionFromOrder } from '@/app/utils/getGridPositionFromOrder';
import { Scan } from '@/app/utils/scanService';
import { XMLParser } from 'fast-xml-parser'

    

function objectToQueryString(obj: any) {
  return Object.keys(obj)
    .map(key => {
      // Determine the modifier based on the type of the value
      const value = obj[key];
      let modifiedKey = key;

      if (typeof value === 'string') {
        modifiedKey += '-contains';  // Append '-contains' if value is a string
      } else if (typeof value === 'number') {
        modifiedKey += '-equals';    // Append '-equals' if value is a number
      }

      // Return the key-value pair with the modified key
      return `${encodeURIComponent(modifiedKey)}=${encodeURIComponent(value)}`;
    })
    .join('&');
}
 

const Buttonupdate = ({ lockedData,setLockedData,primaryTableData, setPrimaryTableData,checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData,setIsProcessing}: { lockedData:any,setLockedData:any,checkToAdd:any,setCheckToAdd:any,refetch:any,setRefetch:any,primaryTableData:any,setPrimaryTableData:any,encryptionFlagCompData:any,setIsProcessing:any}) => {
  const token:string = getCookie('token');
  const {currentToken, setCurrentToken} = useContext(TotalContext) as TotalContextProps;
  const decodedTokenObj:any = decodeToken(token);
  const createdBy : string = decodedTokenObj.users;
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {validate , setValidate} = useContext(TotalContext) as TotalContextProps;
  const {validateRefetch , setValidateRefetch} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const { eventEmitterData,setEventEmitterData}= useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();

  let code:string = "";
  const prevRefreshRef = useRef(false);
  const [ruleData,setRulseData]=useState<any>([])
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [paginationData, setPaginationData] = React.useState({
    page: 0,
    pageSize: 0,
    total: 0,
  })
  const savedData=useRef<Record<string, any>>({})
  const keyset:any=i18n.keyset("language");
  const confirmMsgFlag: boolean = false; 
  const toast : Function=useInfoMsg();
  let dfKey: string | any;
  const [showFlag, setShowFlag] = React.useState<boolean>(true);
  const lockMode:any = lockedData.lockMode;
  const [loading, setLoading] = useState<boolean>(false);
  const routes : AppRouterInstance = useRouter();
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  let actionLockData : any = {"lockMode":"","name":"","ttl":""}
  const [allCode,setAllCode]=useState<string>("");
  const [gridPosition, setGridPosition] = useState<any>({ gridColumn: '1 / 3', gridRow: '1 / 12' });
  ////showComponentAsPopup || showArtifactAsModal
    
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


  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  let customCode:any;
  const handleCustomCode=async () => {
    code = allCode ||""
    if (code != '') {
      let codeStates: Record<string, any> = {};
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
      codeStates['response']  = savedData.current;
      customCode = codeExecution(code,codeStates);
      return customCode;
    }
  }
  const handleMapper=async (data?:any) => {
    try{     
      const orchestrationData: any = await AxiosService.post(
        '/UF/Orchestration',
        {
          key: "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",
          componentId: "df31aefec0584f19bea3825e5af3c327",
          controlId: "35bbbff9845d4a268ef55f788405d670",
          isTable: false,
          from:"ButtonUpdate",
          accessProfile:accessProfile
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if(orchestrationData?.data?.error == true){
        return
      }
      setAllCode(orchestrationData?.data?.code);
      setPaginationData((pre: any) => ({
      ...pre,
          page: +orchestrationData?.data?.action?.pagination?.page || 1,
          pageSize: +orchestrationData?.data?.action?.pagination?.count || 1000
    }))
    if(orchestrationData?.data?.rule?.nodes?.length > 0){
      setRulseData(orchestrationData?.data?.rule.nodes)
      let schemaFlag:any = evaluateDecisionTable(orchestrationData?.data?.rule.nodes,{},{...decodedTokenObj,...data});
      // schemaFlag =schemaFlag.output;
      let order:number = Number(schemaFlag.order);

      // Update grid position based on order number
      if (order && typeof order === 'number') {
        const position : any = getGridPositionFromOrder(order);
        setGridPosition(position);
      } 

      if (schemaFlag.output !== "true") {
        setShowFlag(false);
      }else{
        setShowFlag(true)
      }
    }
    }catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    handleMapper();
    eventBus.on("triggerButton", (id:any) => {
      if (id === "update5d670") {
        handleClick();
      }
    });
  },[update5d670?.refresh,currentToken])

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

  async function handleSave70_1_1_1_2(){

    setValidateRefetch((pre: any) => ({ ...pre, value: !pre.value, init: pre.init + 1 }));
    await delay(1000);
     
    let currentValidate: any = null;
    await new Promise<void>((resolve) => {
      setValidate((prev: any) => {
        currentValidate = prev;
        return prev;
      });
      resolve();
    });

    // Check if any field is invalid using .some() with null safety
    const hasInvalidField = Object.values(currentValidate?.Mms_Mandate_Info_v1 || {}).some(
      (value) => value === 'invalid'
    );

    if (hasInvalidField) {
      toast('Please verify the data', 'danger');
      return;
    }
    try{
      let mainData:any=structuredClone(dynamic_group_btns3c327);
      let uf_initiatePf:any;
      let te_eventEmitterBody:te_eventEmitterDto={
        dpdKey: '',
        method: '',
        event: '',
        sourceId: '',
        key: '',
        ssKey: [],
        data: {},
        lock: {}
      }
      let tagetKey:string="CK:CT005:FNGK:AF:FNK:PF-PFD:CATK:V001:AFGK:MMS:AFK:mandate_scan_save:AFVK:v1|84cad112b306402ebd68c452959a7f9f"
      let uf_getPFDetails:any={
        key: "CK:CT005:FNGK:AF:FNK:PF-PFD:CATK:V001:AFGK:MMS:AFK:mandate_scan_save:AFVK:v1|84cad112b306402ebd68c452959a7f9f"
      };
      let uf_ifo:any;
      let lockedKeysLength:number;
      //eventEmitter
      if(dynamic_group_btns3c327?.upId === "" && (!lockedData?.data || Object.keys(lockedData?.data)?.length == 0)){
         throw 'Please give proper data';
      }
      let eventProperty :any = {
  "id": "35bbbff9845d4a268ef55f788405d670",
  "type": "button",
  "name": "update",
  "sequence": 1,
  "children": [
    {
      "id": "35bbbff9845d4a268ef55f788405d670.1.1",
      "type": "eventNode",
      "name": "onClick",
      "sequence": "1.1",
      "children": [
        {
          "id": "35bbbff9845d4a268ef55f788405d670.1.1.1",
          "eventContext": "riseListen",
          "value": "",
          "type": "handlerNode",
          "name": "getFormData",
          "sequence": "1.1.1",
          "children": [
            {
              "id": "b309b712559a435bb2b678d4cf32cb9f.1.1.1.1",
              "type": "tab_group",
              "name": "Mms_Mandate_Info|mandatedtls",
              "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|mandatedtls",
              "elementType": "tab_group",
              "sequence": "1.1.1.1",
              "children": []
            },
            {
              "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2",
              "eventContext": "rise",
              "value": "",
              "type": "handlerNode",
              "name": "eventEmitter",
              "sequence": "1.1.1.2",
              "children": [
                {
                  "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1",
                  "eventContext": "rise",
                  "value": "",
                  "type": "handlerNode",
                  "name": "hasDataHandler",
                  "sequence": "1.1.1.2.1",
                  "children": [
                    {
                      "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.1",
                      "type": "responseNode",
                      "name": "success",
                      "sequence": "1.1.1.2.1.1",
                      "children": [
                        {
                          "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.1.1",
                          "eventContext": "rise",
                          "value": "",
                          "type": "handlerNode",
                          "name": "infoMsg",
                          "sequence": "1.1.1.2.1.1.1",
                          "children": [],
                          "hlr": {
                            "params": [
                              {
                                "name": "message",
                                "_type": "text",
                                "value": "Validation Error Occured",
                                "enabled": true
                              },
                              {
                                "name": "type",
                                "_type": "select",
                                "selectionList": [
                                  "none",
                                  "info",
                                  "success",
                                  "warning",
                                  "danger",
                                  "utility"
                                ],
                                "value": "danger",
                                "enabled": true
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.2",
                      "type": "responseNode",
                      "name": "fail",
                      "sequence": "1.1.1.2.1.2",
                      "children": [
                        {
                          "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.2.1",
                          "eventContext": "rise",
                          "value": "",
                          "type": "handlerNode",
                          "name": "infoMsg",
                          "sequence": "1.1.1.2.1.2.1",
                          "children": [
                            {
                              "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.2.1.1",
                              "eventContext": "rise",
                              "value": "",
                              "type": "handlerNode",
                              "name": "clearHandler",
                              "sequence": "1.1.1.2.1.2.1.1",
                              "children": []
                            },
                            {
                              "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.2.1.2",
                              "eventContext": "riseListen",
                              "value": "",
                              "type": "handlerNode",
                              "name": "clearHandler",
                              "sequence": "1.1.1.2.1.2.1.2",
                              "children": [
                                {
                                  "id": "7512ba7a87c2441a9c7e365031a00e53|3c1d94fae5d64e60b344a7b32ed4f7f9.1.1.1.2.1.2.1.2.1",
                                  "type": "documentviewer",
                                  "name": "Mms_Mandate_Info|overallgroup|docviewer",
                                  "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|docviewer",
                                  "elementType": "documentviewer",
                                  "groupType": "group|documentviewer",
                                  "sequence": "1.1.1.2.1.2.1.2.1",
                                  "children": []
                                }
                              ]
                            },
                            {
                              "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.2.1.3",
                              "eventContext": "riseListen",
                              "value": "",
                              "type": "handlerNode",
                              "name": "clearHandler",
                              "sequence": "1.1.1.2.1.2.1.3",
                              "children": [
                                {
                                  "id": "7dcbb77d1237433ab29b91ee87e3fb9d.1.1.1.2.1.2.1.3.1",
                                  "type": "group",
                                  "name": "Mms_Mandate_Info|mndate_common_info",
                                  "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|mndate_common_info",
                                  "elementType": "group",
                                  "groupType": "group",
                                  "sequence": "1.1.1.2.1.2.1.3.1",
                                  "children": []
                                }
                              ]
                            },
                            {
                              "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.2.1.4",
                              "eventContext": "riseListen",
                              "value": "",
                              "type": "handlerNode",
                              "name": "clearHandler",
                              "sequence": "1.1.1.2.1.2.1.4",
                              "children": [
                                {
                                  "id": "4ec956e4599e4a4ab60a0db92557f52e.1.1.1.2.1.2.1.4.1",
                                  "type": "group",
                                  "name": "Mms_Mandate_Info|subgroup",
                                  "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|subgroup",
                                  "elementType": "group",
                                  "groupType": "group",
                                  "sequence": "1.1.1.2.1.2.1.4.1",
                                  "children": []
                                }
                              ]
                            },
                            {
                              "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.2.1.7",
                              "eventContext": "riseListen",
                              "value": "",
                              "type": "handlerNode",
                              "name": "refreshElement",
                              "sequence": "1.1.1.2.1.2.1.7",
                              "children": [
                                {
                                  "id": "0cd3582385e945bd94ae4cf9864378bc.1.1.1.2.1.2.1.7.1",
                                  "value": "",
                                  "type": "screen",
                                  "name": "Mms_Mandate_Info.v1|valdtn_data_lst",
                                  "label": "",
                                  "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|valdtn_data_lst",
                                  "elementType": "group",
                                  "groupType": "table",
                                  "sequence": "1.1.1.2.1.2.1.7.1",
                                  "children": []
                                }
                              ]
                            },
                            {
                              "id": "35bbbff9845d4a268ef55f788405d670.1.1.1.2.1.2.1.9",
                              "eventContext": "riseListen",
                              "value": "",
                              "type": "handlerNode",
                              "name": "clearHandler",
                              "sequence": "1.1.1.2.1.2.1.9",
                              "children": [
                                {
                                  "id": "bb11e327ece246e9ac30eb202011fd5c.1.1.1.2.1.2.1.9.1",
                                  "type": "group",
                                  "name": "Mms_Mandate_Info|doc_data_lst",
                                  "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|doc_data_lst",
                                  "elementType": "table",
                                  "groupType": "table",
                                  "sequence": "1.1.1.2.1.2.1.9.1",
                                  "children": []
                                }
                              ]
                            }
                          ],
                          "hlr": {
                            "params": [
                              {
                                "name": "message",
                                "_type": "text",
                                "value": "Data  saved Successfully",
                                "enabled": true
                              },
                              {
                                "name": "type",
                                "_type": "select",
                                "selectionList": [
                                  "none",
                                  "info",
                                  "success",
                                  "warning",
                                  "danger",
                                  "utility"
                                ],
                                "value": "success",
                                "enabled": true
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "hlr": {
                    "params": [
                      {
                        "name": "path",
                        "_label": "Path",
                        "_type": "text",
                        "value": "data[0]",
                        "enabled": true
                      }
                    ]
                  }
                }
              ],
              "hlr": {
                "params": [
                  {
                    "name": "status",
                    "_type": "text",
                    "value": "",
                    "enabled": true
                  },
                  {
                    "name": "needClearValue",
                    "_type": "boolean",
                    "value": false,
                    "enabled": true
                  }
                ]
              },
              "targetKey": [
                "CK:CT005:FNGK:AF:FNK:PF-PFD:CATK:V001:AFGK:MMS:AFK:mandate_scan_save:AFVK:v1|84cad112b306402ebd68c452959a7f9f"
              ]
            }
          ],
          "hlr": {
            "params": [
              {
                "name": "parentTable",
                "_type": "string",
                "selectionList": [],
                "value": "",
                "enabled": true
              },
              {
                "name": "primaryKey",
                "_type": "string",
                "selectionList": [],
                "value": "",
                "enabled": true
              }
            ]
          }
        }
      ]
    }
  ]
};
      let eventDetails : any = await eventFunction(eventProperty);
      let eventDetailsArray = eventDetails[0];
      let sourceId : string = "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1";
      sourceId+= "|"+"df31aefec0584f19bea3825e5af3c327";
      let pathIds = SourceIdFilter(eventProperty,"1.1.1.2");
      let sourceIdNewPath : string = "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1"+"|"+"df31aefec0584f19bea3825e5af3c327"+"|"+eventProperty.id;
      pathIds.map((ele:any,id:number)=>{
        if(id!=pathIds.length-1)
        {
          sourceIdNewPath=sourceIdNewPath+"|"+ele
        }
      })
      for (let k = 0; k < eventDetailsArray.length; k++) {
        if (
          eventDetailsArray[k].type === 'handlerNode' &&
          eventDetailsArray[k].name === 'saveHandler'
        ) {
          if (
            eventDetailsArray[k].targetKey &&
            eventDetailsArray[k].targetKey.length > 0
          ) {
            uf_getPFDetails= {
              key:tagetKey,
              sourceId:sourceIdNewPath
            };
          } else if (!eventDetailsArray[k].targetKey) {
            uf_getPFDetails= {
              sourceId:sourceIdNewPath
            };
          }
        } else if (
          eventDetailsArray[k].type === 'handlerNode' &&
          eventDetailsArray[k].name === 'eventEmitter'
        ) {
          if (
            eventDetailsArray[k].targetKey &&
            eventDetailsArray[k].targetKey.length > 0
          ) {
            uf_getPFDetails= {
              key:tagetKey,
              status: eventDetailsArray[k]?.status,
              sourceId:sourceIdNewPath
            };
          } else if (!eventDetailsArray[k].targetKey) {
            uf_getPFDetails= {
              status: eventDetailsArray[k]?.status,
              sourceId:sourceIdNewPath
            };
          }
        }
      }
    
      if (uf_getPFDetails.key != undefined) {
        const uf_initiatePfBody:uf_initiatePfDto={
          key:uf_getPFDetails.key,
          sourceId:sourceIdNewPath
        };
        if (encryptionFlagCont) {
          uf_initiatePfBody["dpdKey"] = encryptionDpd;
          uf_initiatePfBody["method"] = encryptionMethod;
        }
            uf_initiatePf = await AxiosService.post("/UF/InitiatePF",uf_initiatePfBody,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              }
            })
              if(uf_initiatePf?.data?.error == true){
                toast(uf_initiatePf?.data?.errorDetails?.message, 'danger')
                return
              }
      
      } else {
        throw 'Please check PF'
      }
      //eventEmitter
      te_eventEmitterBody = {
        ...uf_initiatePf.data.nodeProperty,
        data:{"trs_event_process_status":uf_getPFDetails.status},
        upId : dynamic_group_btns3c327?.upId? [dynamic_group_btns3c327?.upId ] : lockedData.processIds,
        event : uf_initiatePf.data.eventProperty?.source?.status,
        sourceId : uf_initiatePf.data.eventProperty?.sourceId
      }

  // saveHandler
    let te_save:any;
    let te_saveBody:te_eventEmitterDto ={
      ...uf_initiatePf?.data?.nodeProperty
    }
    let eventData:any = {trs_event_process_status:uf_initiatePf?.data?.eventProperty?.source?.status,
      created_by:createdBy,
      modified_by:createdBy
    }
    let reworkedObject:any=nullFilter(dynamic_group_btns3c327);
    let reworkKeys:any[]=[];
      if(typeof reworkedObject === 'object' && reworkedObject !== null) {
      Object.keys(reworkedObject).map((item: any) => {
        if (
          typeof dynamic_group_btns3c327[item] === 'object' && 
          Array.isArray(dynamic_group_btns3c327[item]) && 
          dynamic_group_btns3c327[item].length > 0 && 
          typeof dynamic_group_btns3c327[item][0] !== "string"
        ) {
          const hasUrlProperty = dynamic_group_btns3c327[item][0]?.url !== undefined;
          const hasFileProperty = dynamic_group_btns3c327[item][0]?.file !== undefined;
          const hasSelectedFlag = Object.keys(dynamic_group_btns3c327[item][0]).includes('_isSelected_');
          
          if (hasFileProperty || (hasUrlProperty && !hasSelectedFlag)) {
            reworkKeys.push(item);
          }
        }
      }); 
    } else if (Array.isArray(reworkedObject)) {
      Object.keys(dynamic_group_btns3c327).map((item: any) => {
        if (
          typeof dynamic_group_btns3c327[item] === 'object' && 
          Array.isArray(dynamic_group_btns3c327[item]) && 
          dynamic_group_btns3c327[item].length > 0 && 
          typeof dynamic_group_btns3c327[item][0] !== "string"
        ) {
          const hasUrlProperty = dynamic_group_btns3c327[item][0]?.url !== undefined;
          const hasFileProperty = dynamic_group_btns3c327[item][0]?.file !== undefined;
          const hasSelectedFlag = Object.keys(dynamic_group_btns3c327[item][0]).includes('_isSelected_');
          
          if (hasFileProperty || (hasUrlProperty && !hasSelectedFlag)) {
            reworkKeys.push(item);
          }
        }
      });
    }
      if(reworkKeys.length)
      {
        for(let i=0;i<reworkKeys.length;i++){
          let fileBody:any = dynamic_group_btns3c327[reworkKeys[i]].map((item:any) => item?.file)
          const formData = new FormData();
          fileBody.forEach((file:File) => {
            formData.append("file", file);
          });
          formData.append('context', reworkKeys[i]);
          formData.append("enableEncryption", fileBody[0]?.enableEncryption);
          formData.append("returnType", fileBody[0]?.returnType || 'string');
          if (encryptionFlagCont) {
            formData.append("dpdKey" ,encryptionDpd);
            formData.append("method" ,encryptionMethod);
          }
          if (fileBody[0]?.DbType == 'mongodb') {
          const res : any = await AxiosService.post("/UF/upload", formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              }
            });
            reworkedObject[reworkKeys[i]] = res.data.fileId;
          } else if (fileBody[0]?.DbType == 'dfs') {
            const basePath : string = process.env.NEXT_PUBLIC_DFS_PATH || "dfs-uploads";
            const bucketFolderame : string = process.env.NEXT_PUBLIC_DFS_BUCKETNAME || 'uploadfile';
            formData.append('bucketFolderame', bucketFolderame.toLowerCase());
            formData.append('folderPath', basePath);

            const res : any = await AxiosService.post(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/UF/uploadimg`,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                }
              }
            );
            reworkedObject[reworkKeys[i]] = res.data.imageUrl;
          }
        }
      }
      ///////  for pivottable data preparation
      Object.keys(reworkedObject).map((item:any)=>{
        if(typeof dynamic_group_btns3c327[item]=='object')
        {
          if( dynamic_group_btns3c327[item].length>0 &&Object.keys(dynamic_group_btns3c327[item][0]).includes('_isSelected_'))
          {
            reworkedObject[item]=reworkedObject[item].filter((data:any)=>data?._isSelected_== true)
            for(let i=0;i<reworkedObject[item].length;i++)
            {
              reworkedObject[item][i] = nullFilter(reworkedObject[item][i])
              delete reworkedObject[item][i]._isSelected_
            }

          }
           
        }
      })

      if ("childTables" in dynamic_group_btns3c327) {
        te_saveBody.childTables = dynamic_group_btns3c327.childTables
      }  

      if (uf_getPFDetails.key != undefined) {
        let formData:any={};
        let ifoResponse:any[]=[];
        if(Array.isArray(dynamic_group_btns3c327))
        {
          formData=lockedData?.data || dynamic_group_btns3c327 || {};
          for( const dataList of formData )
          {
            
            const uf_ifoBody:uf_ifoDto={
              formData:dataList,
              key:uf_getPFDetails.key,
              groupId:"df31aefec0584f19bea3825e5af3c327",
              controlId:"35bbbff9845d4a268ef55f788405d670"
            };
            if (encryptionFlagCont) {
            uf_ifoBody["dpdKey"] = encryptionDpd;
            uf_ifoBody["method"] = encryptionMethod;
          } 
            uf_ifo = await AxiosService.post(
            "/UF/ifo",
              uf_ifoBody,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`
                }
              }
            )
            
            if(uf_ifo?.data?.error == true){
              toast(uf_ifo?.data?.errorDetails?.message, 'danger');
              return
            }
            //eventEmitter
            ifoResponse?.push({...uf_ifo?.data,...te_eventEmitterBody?.data});
          }
          //eventEmitter
          te_eventEmitterBody.data= ifoResponse;
        } 
        else{
          formData=reworkedObject
          const uf_ifoBody:uf_ifoDto={
            formData:formData,
            key:uf_getPFDetails.key,
            groupId:"df31aefec0584f19bea3825e5af3c327",
            controlId:"35bbbff9845d4a268ef55f788405d670"
          };
          if (encryptionFlagCont) {
            uf_ifoBody["dpdKey"] = encryptionDpd;
            uf_ifoBody["method"] = encryptionMethod;
          } 
          uf_ifo = await AxiosService.post(
          "/UF/ifo",
            uf_ifoBody,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              }
            }
          )
          
          if(uf_ifo?.data?.error == true){
            toast(uf_ifo?.data?.errorDetails?.message, 'danger');
            return
          }
            //eventEmitter
            te_eventEmitterBody.data= [{...uf_ifo?.data,...te_eventEmitterBody?.data}];
        }
      }
    //eventEmitter
    if (dynamic_group_btns3c327Props.ssKey !== '' && dynamic_group_btns3c327Props.ssKey !== undefined) {
    te_eventEmitterBody["ssKey"] = dynamic_group_btns3c327Props.ssKey;          
    }
    te_eventEmitterBody["lock"] = actionLockData;
    if (encryptionFlagCont) {
      te_eventEmitterBody["dpdKey"] = encryptionDpd;
      te_eventEmitterBody["method"] = encryptionMethod;
    } 
    const te_eventEmitter=await AxiosService.post("/te/eventEmitter",te_eventEmitterBody,
      { headers: {Authorization: `Bearer ${token}`}})
    if(te_eventEmitter?.data?.error == true){
      toast(te_eventEmitter?.data?.errorDetails?.message, 'danger')
      throw te_eventEmitter?.data?.errorDetails?.message
    }
    lockedKeysLength = lockedData?.primaryKeys?.length;
    ///////////////////////

            // hasDataHandler
            if(commonSepareteDataFromTheObject("data[0]",te_eventEmitter?.data)){

  
              //infoMsg
      toast('Validation Error Occured', 'danger')
              }else
              {

  
              //infoMsg
      toast('Data  saved Successfully', 'success')
      // clearHandler rise
      // for group
      Object.keys(dynamic_group_btns3c327).map((keys:any)=>{  
        dynamic_group_btns3c327[keys]="";
      })
      setdynamic_group_btns3c327({...dynamic_group_btns3c327});
      // clearHandler riseListen
      // for controller
        setoverallgroup00e53((pre:any)=>({...pre,docviewer:""}));
      // clearHandler riseListen
      // for group
      Object.keys(mndate_common_info3fb9d).map((keys:any)=>{         
        mndate_common_info3fb9d[keys]="";
      })
      setmndate_common_info3fb9d({...mndate_common_info3fb9d});
      // clearHandler riseListen
      // for group
      Object.keys(subgroup7f52e).map((keys:any)=>{         
        subgroup7f52e[keys]="";
      })
      setsubgroup7f52e({...subgroup7f52e});
    // refreshElement
// for group
 setvaldtn_data_lst378bcProps((pre:any)=>({...pre,refresh:!pre?.refresh}))
  setLockedData({}) //Clears lockedData and resets it in subsequent screens.
  lockedData={} //Clears lockedData; clicking the button again without a selection returns no value.
      // clearHandler riseListen
      // for table
      setdoc_data_lst1fd5c([]);
      setdoc_data_lst1fd5cProps((pre:any) => ({
        ...pre,
        clearData: true,  // Flag to clear allDataObject without re-fetching
        selectedIds: [],
         presetValues: {}
      }));                
              }
    }
    catch(err:any)
    {
      savedData.current = {};
      if( typeof err =='string')
        toast(err, 'danger');
      else
        toast(err?.response?.data?.message, 'danger');


      return
    }
  }
  const handleClick=async()=>{
    try{  
      setIsProcessing(true);
        //onClick

    // getFormData
    //riseListen
    // for group
    setdynamic_group_btns3c327((pre:any)=>({...pre,...mandatedtls2cb9f}));
    //eventEmitter
    await handleSave70_1_1_1_2();
      await handleCustomCode();
    }catch (err: any) {
      setIsProcessing(false);
      if(typeof err == 'string')
        toast(err, 'danger');
      else
        toast(err?.response?.data?.errorDetails?.message, 'danger');
      setLoading(false);
    }finally{
      setIsProcessing(false);
    }
  }
    async function handleConfirmOnClick(){
      try{
        //confirmMsg
      }catch(err){
        toast(err, 'danger');
      }
    } 


    async function handleConfirmOnCancel(){
      try{
        //confirmMsg
      }catch(err){
        toast(err, 'danger');
      }
    }

    useEffect(() => {
    let forGetFormDataPointedData = {
        //for group element
        ...mandatedtls2cb9f,

      };
      handleMapper(forGetFormDataPointedData);

  }, [mandatedtls2cb9f])

 if (update5d670?.isHidden) {
    return <></>
  }
 
  return (
    <div
      style={{gridColumn: gridPosition.gridColumn, gridRow: gridPosition.gridRow, gap:`12px`, height: `100%`, overflow: 'auto'}}
      >
        {showFlag && <Button 
          ref={buttonRef}
          className="   !bg-[#E6EEF7] !text-blue-600 !rounded-md"
          onClick={handleClick}
          view='action'
          disabled= {update5d670?.isDisabled ? true : false}
          pin='circle-circle'
          contentAlign={"center"}
          icon="MdOutlineSystemUpdateAlt"
          iconDisplay='Start with Icon'
        >
          {keyset("Update")}
        </Button>}
      </div>
    
  )
}

export default Buttonupdate

