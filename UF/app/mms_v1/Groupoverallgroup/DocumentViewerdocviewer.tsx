


'use client'
import React, { useContext, useEffect, useState } from "react";
import i18n from "@/app/components/i18n";
import {Text} from "@/components/Text";
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { TotalContext, TotalContextProps } from "@/app/globalContext";
import DocViewer, { FileItem } from "@/components/DocumentViewer";
import { AxiosService } from "@/app/components/axiosService";
import { deleteAllCookies,getCookie } from '@/app/components/cookieMgment';
import { codeExecution } from "@/app/utils/codeExecution";
import imageNotFound from '@/app/assets/imageNotFound.png';

const DocumentViewerdocviewer = ({checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData}:any) => {
  const token:string = getCookie('token'); 
  const {disableParam, setDisableParam} = useContext(TotalContext) as TotalContextProps;
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const [allCode,setAllCode]=useState<any>("");
  let customCode:any;
  const handleCustomCode=async () => {
    let code:any=allCode||''
    if (code != '') {
      let codeStates: any = {};
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
      customCode = codeExecution(code,codeStates);
    }
  }

   const handleMapper=async () => {
    try{     
      const orchestrationData: any = await AxiosService.post(
        '/UF/Orchestration',
        {
          key: "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",
          componentId: "7512ba7a87c2441a9c7e365031a00e53",
          controlId: "3c1d94fae5d64e60b344a7b32ed4f7f9",
          isTable: false,
          from:"Button",
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
    }catch(err){
        console.log(err);
    }
  }
  useEffect(()=>{
    handleMapper();
  },[])
  const keyset:any=i18n.keyset("language");
  const toast:any=useInfoMsg();
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [urlFormDataMap, setUrlFormDataMap] = useState<Record<string, any>>({});
  const encryptionFlagCont: boolean = encryptionFlagCompData.flag || false;
  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData.method;
  /////////////
   //another screen
  const {overallgroup00e53, setoverallgroup00e53}= useContext(TotalContext) as TotalContextProps; 
  const {overallgroup00e53Props, setoverallgroup00e53Props}= useContext(TotalContext) as TotalContextProps; 
  const {mandatedtls2cb9f, setmandatedtls2cb9f}= useContext(TotalContext) as TotalContextProps; 
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
  const {docviewer4f7f9, setdocviewer4f7f9}= useContext(TotalContext) as TotalContextProps; 
  //////////////
  const BUCKET = process.env.NEXT_PUBLIC_DFS_BUCKETNAME;
  const DFS_PATH = process.env.NEXT_PUBLIC_DFS_PATH;
  const FULL_PATH = `${BUCKET}/${DFS_PATH}`;
  const isExternalUrl = (u: string) =>
    u.startsWith('http://') || u.startsWith('https://')

  const triggerDownload = (href: string, fileName: string) => {
    const a = document.createElement('a')
    a.href = href
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  
  const handleDownload = async (file: FileItem) => {
    const { originalId, fileName, url } = file
    const downloadId = originalId || url


    try {
      if (!isExternalUrl(downloadId)) {
        // Non-external (DFS path): blob already fetched and cached in blobUrlMap
        triggerDownload(url,fileName)
        return
      }

      // External URL or no cached blob: proxy through backend to bypass CORS + force attachment
      const { data } = await AxiosService.post(
        '/UF/download',
        { id: downloadId },
        { responseType: 'blob' }
      )

      const blobUrl = URL.createObjectURL(new Blob([data]))
      triggerDownload(blobUrl, fileName)
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100)
    } catch (err) {
      console.error('Download failed', err)
    }
  }

  const extractFileName = (headers: Record<string, string>): string => {
    // Priority 1: file-name header
    if (headers['file-name']) return headers['file-name']
    // Priority 2: content-disposition
    const disposition = headers['content-disposition']
    if (disposition) {
      const match = disposition.match(/filename[*]?=(?:UTF-8'')?["']?([^"';\n]+)["']?/i)
      if (match) return decodeURIComponent(match[1])
    }
    return 'Document'
  }
  // Helper to extract filename from URL
  const extractFileNameFromUrl = (url: string): string => {
    try {
      const pathname = new URL(url).pathname
      const name = pathname.split('/').pop()
      return name ? decodeURIComponent(name) : 'Document'
    } catch {
      return url.split('/').pop() || 'Document'
    }
  }
  const fetchData = async () => {
    // Check if scanurl is an array or a single value
    const scanurl: string = overallgroup00e53?.docviewer;
    const scanUrls: string[] = Array.isArray(scanurl) ? scanurl : scanurl ? [scanurl] : [];

    // Filter out null, undefined, and non-string values
    const validScanUrls = scanUrls.filter(
      (item: any) => item && typeof item === 'string' && item.trim() !== ''
    )

    if (validScanUrls.length === 0) {
      setFiles([])
      return
    }

    try {
      setLoading(true);

      const fileItems = await Promise.all(
        validScanUrls.map(async (singleUrl: string): Promise<FileItem | null> => {
          // If this individual URL is external, return it directly
          if (isExternalUrl(singleUrl)) {
            return {
              url: singleUrl,
              fileName: extractFileNameFromUrl(singleUrl),
              fileType: '', // Will be detected by extension in DocViewer
              originalId: singleUrl
            }
          }
      try{
        let downloadFileBody :any =  { id: singleUrl,context:"docviewer",enableEncryption:false };
        if (encryptionFlagCont) {
            downloadFileBody["dpdKey"] = encryptionDpd;
            downloadFileBody["method"] = encryptionMethod;
        } 
        let response : any;
        
        let getUrl : any =  await AxiosService.post('/UF/getUrlByVgphstdmId',{ id: downloadFileBody?.id })
        downloadFileBody["id"] = getUrl?.data

        if(downloadFileBody?.id?.includes(FULL_PATH) ){
          //download from DFS-getDFS
          response = await AxiosService.post(
            '/UF/getDFS',downloadFileBody,
            {
              responseType: 'blob',
              headers: { 'Content-Type': 'application/json' }
            }
          )
        }else{
          //Download from UF-downloadFile
          response = await AxiosService.post(
            'UF/gridfs',
            downloadFileBody,
            {
              responseType: 'blob',
              headers: { 'Content-Type': 'application/json' }
            }
          )
        }

        const contentType = response.headers['content-type'] || response.data.type || ''
        const blob = new Blob([response.data], { type: contentType })
        const blobUrl = window.URL.createObjectURL(blob)
        return {
          url: blobUrl,
          fileName: extractFileName(response.headers),
          fileType: contentType,
          originalId: singleUrl
        }
      } catch (err) {
        console.error(`Failed to fetch file: ${singleUrl}`, err)
        return null
      }
      })
    )
      // Filter out null values (failed requests)
      const validFiles = fileItems.filter((f): f is FileItem => f !== null)
      setFiles(validFiles)
    } catch (err) {
      setFiles([]);
    } finally {
      setLoading(false);
    }
    handleCustomCode()
  }

  useEffect(() => {
    fetchData();
  }, [overallgroup00e53?.docviewer])
  
  if (docviewer4f7f9?.isHidden) {
    return <></>
  }
  if (loading) {
    return (
      <div style={{gridColumn: `15 / 25`,gridRow: `1 / 331`, gap:``}}>
        Loading...
      </div>
    )
  }


  return (
    <div style={{gridColumn: `15 / 25`,gridRow: `1 / 331`, gap:``, height: `100%`}} >  
      <DocViewer 
        files={files}
        className="!rounded-md mx-[10px] "
        onDownload={handleDownload}
        toolbarPosition ={ "top" }
        toolbarAlignment={ "center" }
      />
    </div>
  );
}

export default DocumentViewerdocviewer
