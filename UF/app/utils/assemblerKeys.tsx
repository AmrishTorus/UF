export function getRouteScreenDetails(key: string, artfactName: string): string {
  let assemblerKeys: any = [
  {
    "screenName": "mms",
    "screensName": "mms-v1",
    "ufKey": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1"
  }
]

  let routeScreen: string = artfactName

  assemblerKeys.forEach((item: any) => {
    if (item.ufKey == key) {
      routeScreen = item.screensName.replace('-v','_v')
    }
  })

  return routeScreen
}

export function getFilterProps(filterProps:any=[],mainData:any={}) {
  let result:any = [];  
  filterProps?.map((dfdData:any)=>{
    dfdData?.nodeBasedData?.map((nodes:any)=>{
      let filterObj=nodes?.object||{}
      Object.keys(nodes?.object).map((keys:any)=>{
        let keysSplit = keys.split('.').at(-1) ?? keys  // "properties.cr_currency" → "cr_currency"
        filterObj[keys] = mainData[keysSplit] || ""
      })
      result.push({
      DFDkey:dfdData.key,
      nodeId:nodes.nodeId,
      ...filterObj
    })
    }) 
  })
  return result;
}

