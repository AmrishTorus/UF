'use client'



import React, { useState,useContext,useEffect } from 'react'
import { useInfoMsg } from "@/app/components/infoMsgHandler";
import { TotalContext, TotalContextProps } from '@/app/globalContext';
import { Modal } from "@/components/Modal";
import { Text } from "@/components/Text";
import { TextInput } from '@/components/TextInput';
import { uf_getPFDetailsDto,uf_initiatePfDto,te_eventEmitterDto,uf_ifoDto,te_updateDto, te_refreshDto } from '@/app/interfaces/interfaces';
import i18n from '@/app/components/i18n';
import decodeToken from '@/app/components/decodeToken';
import {commonSepareteDataFromTheObject, eventFunction } from '@/app/utils/eventFunction';
import { eventDecisionTable } from '@/app/utils/evaluateDecisionTable';
import { codeExecution } from '@/app/utils/codeExecution';
import { AxiosService } from '@/app/components/axiosService';
import { getCookie } from '@/app/components/cookieMgment';
import { useRouter } from 'next/navigation';
import UOmapperData from '@/context/dfdmapperContolnames.json'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { eventBus } from '@/app/eventBus';
import { getFilterProps,getRouteScreenDetails } from '@/app/utils/assemblerKeys';
import { useHandleDfdRefresh } from '@/context/dfdRefreshContext';
import { DecodedToken,PrimaryTableData,SecurityData,EncryptionFlagPageData,PaginationData,AllowedGroupNode,ActionDetails } from "@/types/global";
import * as v from 'valibot';
///////////////
////////////

const TextInputcr_acc_no = ({checkToAdd,setCheckToAdd,refetch,setRefetch,encryptionFlagCompData}:any) => {  
  const token: string = getCookie('token');
  const {globalState , setGlobalState} = useContext(TotalContext) as TotalContextProps;
  const {validateRefetch , setValidateRefetch} = useContext(TotalContext) as TotalContextProps;
  const {validate , setValidate} = useContext(TotalContext) as TotalContextProps;
  const {accessProfile, setAccessProfile} = useContext(TotalContext) as TotalContextProps;
  const {memoryVariables, setMemoryVariables} = useContext(TotalContext) as TotalContextProps;
  const {refresh, setRefresh} = useContext(TotalContext) as TotalContextProps;
  const handleDfdRefresh = useHandleDfdRefresh();
  const actionDetails : any = {
  "action": {
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
      "count": "10"
    },
    "encryption": {
      "isEnabled": false,
      "selectedDpd": "",
      "encryptionMethod": ""
    },
    "events": {}
  },
  "code": "",
  "rule": {},
  "events": {
    "NDS": [
      {
        "id": "01d0493b62ba459287ea85227ab596b0",
        "type": "controlNode",
        "position": {
          "x": -113.8228697323586,
          "y": 26.44501643504563
        },
        "data": {
          "nodeId": "01d0493b62ba459287ea85227ab596b0",
          "nodeName": "cr_acc_no",
          "nodeType": "textinput",
          "events": [
            {
              "name": "onChange",
              "rise": [
                {
                  "key": "getValueFromMemory",
                  "label": "getValueFromMemory",
                  "listenerType": "type1"
                },
                {
                  "key": "hasDataHandler",
                  "label": "hasDataHandler",
                  "listenerType": "type1"
                },
                {
                  "key": "refreshScreen",
                  "label": "refreshScreen",
                  "listenerType": "type1"
                },
                {
                  "key": "setValueToMemory",
                  "label": "setValueToMemory",
                  "listenerType": "type1"
                },
                {
                  "key": "confirmMsg",
                  "label": "confirmMsg",
                  "listenerType": "type1"
                },
                {
                  "key": "refreshElement",
                  "label": "refreshElement",
                  "listenerType": "type2"
                },
                {
                  "key": "clearHandler",
                  "label": "clearHandler",
                  "listenerType": "type1"
                },
                {
                  "key": "infoMsg",
                  "label": "infoMsg",
                  "listenerType": "type1"
                }
              ],
              "riseListen": [
                {
                  "key": "triggerButtonClick",
                  "label": "triggerButtonClick",
                  "listenerType": "type1"
                },
                {
                  "key": "showComponentAsPopup",
                  "label": "showComponentAsPopup",
                  "listenerType": "type2"
                },
                {
                  "key": "selectFirstRecord",
                  "label": "selectFirstRecord",
                  "listenerType": "type1"
                },
                {
                  "key": "resetSelection",
                  "label": "resetSelection",
                  "listenerType": "type1"
                },
                {
                  "key": "hideElement",
                  "label": "hideElement",
                  "listenerType": "type2"
                },
                {
                  "key": "showElement",
                  "label": "showElement",
                  "listenerType": "type2"
                },
                {
                  "key": "refreshElement",
                  "label": "refreshElement",
                  "listenerType": "type2"
                },
                {
                  "key": "disableElement",
                  "label": "disableElement",
                  "listenerType": "type2"
                },
                {
                  "key": "enableElement",
                  "label": "enableElement",
                  "listenerType": "type2"
                },
                {
                  "key": "clearHandler",
                  "label": "clearHandler",
                  "listenerType": "type1"
                },
                {
                  "key": "showArtifactAsModal",
                  "label": "showArtifactAsModal",
                  "listenerType": "type2"
                },
                {
                  "key": "showArtifact",
                  "label": "showArtifact",
                  "listenerType": "type2"
                }
              ],
              "self": [],
              "enabled": true
            },
            {
              "name": "onBlur",
              "rise": [
                {
                  "key": "getValueFromMemory",
                  "label": "getValueFromMemory",
                  "listenerType": "type1"
                },
                {
                  "key": "hasDataHandler",
                  "label": "hasDataHandler",
                  "listenerType": "type1"
                },
                {
                  "key": "eventEmitter",
                  "label": "eventEmitter",
                  "listenerType": "type1"
                },
                {
                  "key": "refreshScreen",
                  "label": "refreshScreen",
                  "listenerType": "type1"
                },
                {
                  "key": "setValueToMemory",
                  "label": "setValueToMemory",
                  "listenerType": "type1"
                },
                {
                  "key": "confirmMsg",
                  "label": "confirmMsg",
                  "listenerType": "type1"
                },
                {
                  "key": "refreshElement",
                  "label": "refreshElement",
                  "listenerType": "type2"
                },
                {
                  "key": "clearHandler",
                  "label": "clearHandler",
                  "listenerType": "type1"
                },
                {
                  "key": "infoMsg",
                  "label": "infoMsg",
                  "listenerType": "type1"
                }
              ],
              "riseListen": [
                {
                  "key": "triggerButtonClick",
                  "label": "triggerButtonClick",
                  "listenerType": "type1"
                },
                {
                  "key": "copyFormData",
                  "label": "copyFormData",
                  "listenerType": "type2"
                },
                {
                  "key": "showComponentAsPopup",
                  "label": "showComponentAsPopup",
                  "listenerType": "type2"
                },
                {
                  "key": "selectFirstRecord",
                  "label": "selectFirstRecord",
                  "listenerType": "type1"
                },
                {
                  "key": "resetSelection",
                  "label": "resetSelection",
                  "listenerType": "type1"
                },
                {
                  "key": "hideElement",
                  "label": "hideElement",
                  "listenerType": "type2"
                },
                {
                  "key": "showElement",
                  "label": "showElement",
                  "listenerType": "type2"
                },
                {
                  "key": "refreshElement",
                  "label": "refreshElement",
                  "listenerType": "type2"
                },
                {
                  "key": "disableElement",
                  "label": "disableElement",
                  "listenerType": "type2"
                },
                {
                  "key": "enableElement",
                  "label": "enableElement",
                  "listenerType": "type2"
                },
                {
                  "key": "clearHandler",
                  "label": "clearHandler",
                  "listenerType": "type1"
                },
                {
                  "key": "showArtifactAsModal",
                  "label": "showArtifactAsModal",
                  "listenerType": "type2"
                },
                {
                  "key": "showArtifact",
                  "label": "showArtifact",
                  "listenerType": "type2"
                }
              ],
              "self": [],
              "enabled": true
            }
          ],
          "label": "cr_acc_no",
          "children": [
            "01d0493b62ba459287ea85227ab596b0.1.1"
          ],
          "sequence": 1,
          "nodeProperty": {}
        },
        "width": 55,
        "height": 29,
        "positionAbsolute": {
          "x": -113.82282129803166,
          "y": 26.44516248693709
        },
        "selected": false,
        "dragging": false
      },
      {
        "id": "01d0493b62ba459287ea85227ab596b0.1.1",
        "type": "eventNode",
        "position": {
          "x": -88.46846620251563,
          "y": -89.28650656230495
        },
        "data": {
          "label": "onBlur",
          "sequence": "1.1",
          "parent": "01d0493b62ba459287ea85227ab596b0",
          "children": [
            "01d0493b62ba459287ea85227ab596b0.1.1.1"
          ],
          "nodeProperty": {}
        },
        "className": "_node_1qffi_1",
        "width": 100,
        "height": 100,
        "positionAbsolute": {
          "x": -88.46865915148392,
          "y": -89.28624873349075
        },
        "selected": false,
        "dragging": false
      },
      {
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1",
        "type": "handlerNode",
        "label": "eventEmitter",
        "eventContext": "rise",
        "position": {
          "x": 25.987647828041418,
          "y": -113.0603375645904
        },
        "data": {
          "label": "eventEmitter",
          "eventContext": "rise",
          "value": "",
          "sequence": "1.1.1",
          "parentId": "01d0493b62ba459287ea85227ab596b0.1.1",
          "children": [
            "01d0493b62ba459287ea85227ab596b0.1.1.1.1"
          ],
          "nodeProperty": {
            "nodeId": "01d0493b62ba459287ea85227ab596b0.1.1.1",
            "nodeName": "eventEmitter",
            "nodeType": "handlerNode",
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
            }
          }
        },
        "positionAbsolute": {
          "x": 25.987332966658755,
          "y": -113.06042999486226
        },
        "width": 54,
        "height": 45,
        "selected": false,
        "dragging": false
      },
      {
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
        "type": "handlerNode",
        "eventContext": "riseListen",
        "label": "copyFormData",
        "position": {
          "x": -27.006760459673664,
          "y": 94.91033366017518
        },
        "data": {
          "label": "copyFormData",
          "eventContext": "riseListen",
          "parentId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
          "value": "",
          "sequence": "1.1.1.1.1",
          "children": [
            "4ec956e4599e4a4ab60a0db92557f52e|08d4656a82244579b512cdc5ba40589d.1.1.1.1.1.1"
          ],
          "nodeProperty": {
            "nodeId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
            "nodeName": "copyFormData",
            "nodeType": "handlerNode",
            "hlr": {
              "params": [
                {
                  "name": "parentTable",
                  "_type": "text",
                  "value": "",
                  "enabled": true
                },
                {
                  "name": "primaryKey",
                  "_type": "text",
                  "value": "",
                  "enabled": true
                },
                {
                  "name": "path",
                  "_type": "text",
                  "value": "data.CUSTOMERS[0].FIRSTNAME",
                  "enabled": true
                },
                {
                  "name": "setValue",
                  "_type": "array",
                  "items": [
                    {
                      "source": "",
                      "target": ""
                    }
                  ],
                  "value": "",
                  "enabled": true
                }
              ]
            }
          }
        },
        "width": 60,
        "height": 45,
        "positionAbsolute": {
          "x": -27.00662161787395,
          "y": 94.91020973055537
        }
      },
      {
        "id": "4ec956e4599e4a4ab60a0db92557f52e|08d4656a82244579b512cdc5ba40589d.1.1.1.1.1.1",
        "type": "controlNode",
        "position": {
          "x": 91.58006922850178,
          "y": -20.0876471548866
        },
        "name": "Mms_Mandate_Info|subgroup|cr_acc_name",
        "elementType": "textinput",
        "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|cr_acc_name",
        "data": {
          "id": "4ec956e4599e4a4ab60a0db92557f52e|08d4656a82244579b512cdc5ba40589d.1.1.1.1.1.1",
          "sequence": "1.1.1.1.1.1",
          "parentId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
          "nodeName": "cr_acc_name",
          "name": "cr_acc_name",
          "nodeId": "08d4656a82244579b512cdc5ba40589d",
          "elementType": "textinput",
          "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|cr_acc_name",
          "nodeType": "textinput",
          "children": []
        },
        "width": 55,
        "height": 29,
        "positionAbsolute": {
          "x": 91.58002891718512,
          "y": -20.087796869954374
        }
      },
      {
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
        "type": "handlerNode",
        "label": "hasDataHandler",
        "eventContext": "rise",
        "position": {
          "x": -29.246441160386997,
          "y": -25.923937651598365
        },
        "data": {
          "label": "hasDataHandler",
          "eventContext": "rise",
          "value": "",
          "sequence": "1.1.1.1",
          "parentId": "01d0493b62ba459287ea85227ab596b0.1.1.1",
          "children": [
            "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
            "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2"
          ],
          "nodeProperty": {
            "nodeId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
            "nodeName": "hasDataHandler",
            "nodeType": "handlerNode",
            "hlr": {
              "params": [
                {
                  "name": "path",
                  "_label": "Path",
                  "_type": "text",
                  "value": "data",
                  "enabled": true
                }
              ]
            }
          }
        },
        "width": 63,
        "height": 45,
        "positionAbsolute": {
          "x": -29.24629801309937,
          "y": -25.92390256753546
        }
      },
      {
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.1",
        "type": "handlerNode",
        "eventContext": "rise",
        "position": {
          "x": 98.1659265139488,
          "y": 92.52910970548956
        },
        "label": "infoMsg",
        "data": {
          "label": "infoMsg",
          "eventContext": "rise",
          "sequence": "1.1.1.1.2.1",
          "value": "",
          "parentId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2",
          "children": [],
          "nodeProperty": {
            "nodeId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.1",
            "nodeName": "infoMsg",
            "nodeType": "handlerNode",
            "hlr": {
              "params": [
                {
                  "name": "message",
                  "_type": "text",
                  "value": "renga bro not happy",
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
        },
        "width": 45,
        "height": 45,
        "positionAbsolute": {
          "x": 98.1658827702828,
          "y": 92.52922227855684
        }
      },
      {
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2",
        "type": "responseNode",
        "position": {
          "x": 33.56927810376132,
          "y": 37.39826872775274
        },
        "data": {
          "label": "fail",
          "responseType": "fail",
          "parentId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
          "sequence": "1.1.1.1.2",
          "children": [
            "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.1"
          ]
        },
        "width": 45,
        "height": 45,
        "positionAbsolute": {
          "x": 33.56952844384127,
          "y": 37.39818452712823
        }
      }
    ],
    "NDE": [
      {
        "style": {
          "stroke": "#a9a9a9"
        },
        "id": "01d0493b62ba459287ea85227ab596b0->01d0493b62ba459287ea85227ab596b0.1.1",
        "source": "01d0493b62ba459287ea85227ab596b0",
        "type": "straight",
        "target": "01d0493b62ba459287ea85227ab596b0.1.1",
        "animated": true
      },
      {
        "style": {
          "stroke": "#a9a9a9"
        },
        "id": "01d0493b62ba459287ea85227ab596b0.1.1->01d0493b62ba459287ea85227ab596b0.1.1.1",
        "source": "01d0493b62ba459287ea85227ab596b0.1.1",
        "type": "straight",
        "target": "01d0493b62ba459287ea85227ab596b0.1.1.1",
        "animated": true
      },
      {
        "style": {
          "stroke": "#a9a9a9"
        },
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1->01d0493b62ba459287ea85227ab596b0.1.1.1.1",
        "source": "01d0493b62ba459287ea85227ab596b0.1.1.1",
        "type": "straight",
        "target": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
        "animated": true
      },
      {
        "style": {
          "stroke": "#a9a9a9"
        },
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1->4ec956e4599e4a4ab60a0db92557f52e|08d4656a82244579b512cdc5ba40589d.1.1.1.1.1.1",
        "source": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
        "type": "straight",
        "target": "4ec956e4599e4a4ab60a0db92557f52e|08d4656a82244579b512cdc5ba40589d.1.1.1.1.1.1",
        "animated": true
      },
      {
        "style": {
          "stroke": "#a9a9a9"
        },
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1->01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
        "source": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
        "type": "straight",
        "target": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
        "animated": true
      },
      {
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2->01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.2",
        "source": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2",
        "type": "straight",
        "target": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.1"
      },
      {
        "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1->01d0493b62ba459287ea85227ab596b0.1.1.1.1.2",
        "source": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
        "type": "straight",
        "target": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2"
      }
    ],
    "NDP": {
      "01d0493b62ba459287ea85227ab596b0.1.1.1": {
        "nodeId": "01d0493b62ba459287ea85227ab596b0.1.1.1",
        "nodeName": "eventEmitter",
        "nodeType": "handlerNode",
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
        }
      },
      "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1": {
        "nodeId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
        "nodeName": "copyFormData",
        "nodeType": "handlerNode",
        "hlr": {
          "params": [
            {
              "name": "parentTable",
              "_type": "text",
              "value": "",
              "enabled": true
            },
            {
              "name": "primaryKey",
              "_type": "text",
              "value": "",
              "enabled": true
            },
            {
              "name": "path",
              "_type": "text",
              "value": "data.CUSTOMERS[0].FIRSTNAME",
              "enabled": true
            },
            {
              "name": "setValue",
              "_type": "array",
              "items": [
                {
                  "source": "",
                  "target": ""
                }
              ],
              "value": "",
              "enabled": true
            }
          ]
        }
      },
      "01d0493b62ba459287ea85227ab596b0.1.1.1.1": {
        "nodeId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
        "nodeName": "hasDataHandler",
        "nodeType": "handlerNode",
        "hlr": {
          "params": [
            {
              "name": "path",
              "_label": "Path",
              "_type": "text",
              "value": "data",
              "enabled": true
            }
          ]
        }
      },
      "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.1": {
        "nodeId": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.1",
        "nodeName": "infoMsg",
        "nodeType": "handlerNode",
        "hlr": {
          "params": [
            {
              "name": "message",
              "_type": "text",
              "value": "renga bro not happy",
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
    },
    "eventSummary": {
      "id": "01d0493b62ba459287ea85227ab596b0",
      "type": "textinput",
      "name": "cr_acc_no",
      "sequence": 1,
      "children": [
        {
          "id": "01d0493b62ba459287ea85227ab596b0.1.1",
          "type": "eventNode",
          "name": "onBlur",
          "sequence": "1.1",
          "children": [
            {
              "id": "01d0493b62ba459287ea85227ab596b0.1.1.1",
              "eventContext": "rise",
              "value": "",
              "type": "handlerNode",
              "name": "eventEmitter",
              "sequence": "1.1.1",
              "children": [
                {
                  "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
                  "eventContext": "rise",
                  "value": "",
                  "type": "handlerNode",
                  "name": "hasDataHandler",
                  "sequence": "1.1.1.1",
                  "children": [
                    {
                      "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
                      "eventContext": "riseListen",
                      "value": "",
                      "type": "handlerNode",
                      "name": "copyFormData",
                      "sequence": "1.1.1.1.1",
                      "children": [
                        {
                          "id": "4ec956e4599e4a4ab60a0db92557f52e|08d4656a82244579b512cdc5ba40589d.1.1.1.1.1.1",
                          "type": "textinput",
                          "name": "Mms_Mandate_Info|subgroup|cr_acc_name",
                          "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|cr_acc_name",
                          "elementType": "textinput",
                          "sequence": "1.1.1.1.1.1",
                          "children": []
                        }
                      ],
                      "hlr": {
                        "params": [
                          {
                            "name": "parentTable",
                            "_type": "text",
                            "value": "",
                            "enabled": true
                          },
                          {
                            "name": "primaryKey",
                            "_type": "text",
                            "value": "",
                            "enabled": true
                          },
                          {
                            "name": "path",
                            "_type": "text",
                            "value": "data.CUSTOMERS[0].FIRSTNAME",
                            "enabled": true
                          },
                          {
                            "name": "setValue",
                            "_type": "array",
                            "items": [
                              {
                                "source": "",
                                "target": ""
                              }
                            ],
                            "value": "",
                            "enabled": true
                          }
                        ]
                      }
                    },
                    {
                      "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2",
                      "type": "responseNode",
                      "name": "fail",
                      "sequence": "1.1.1.1.2",
                      "children": [
                        {
                          "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.1",
                          "eventContext": "rise",
                          "value": "",
                          "type": "handlerNode",
                          "name": "infoMsg",
                          "sequence": "1.1.1.1.2.1",
                          "children": [],
                          "hlr": {
                            "params": [
                              {
                                "name": "message",
                                "_type": "text",
                                "value": "renga bro not happy",
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
                    }
                  ],
                  "hlr": {
                    "params": [
                      {
                        "name": "path",
                        "_label": "Path",
                        "_type": "text",
                        "value": "data",
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
                "CK:CT005:FNGK:AF:FNK:PF-PFD:CATK:V001:AFGK:MMS:AFK:Mms_Core_Banking_Api:AFVK:v1|1b1c2e0f05214aea89d61ea9721c84f0"
              ]
            }
          ]
        }
      ]
    }
  },
  "mapper": [
    {
      "sourceKey": [
        "CK:CT005:FNGK:AF:FNK:DF-DFD:CATK:V001:AFGK:MMS:AFK:subscreen_db:AFVK:v1|0a399637910841a79c8f605d784233ee|properties.cr_account"
      ],
      "targetKey": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|4ec956e4599e4a4ab60a0db92557f52e|01d0493b62ba459287ea85227ab596b0"
    }
  ],
  "schemaData": {
    "type": "string"
  },
  "dataType": "string"
}
  const decodedTokenObj:any = decodeToken(token);
  const {dfd_subscreen_db_v1Props, setdfd_subscreen_db_v1Props} = useContext(TotalContext) as TotalContextProps; 
  const [isRequredData,setIsRequredData]=useState<boolean>(false)
  const toast : Function = useInfoMsg()
  const keyset : Function = i18n.keyset("language");
  const [allCode,setAllCode]=useState<string>("");
  let schemaArray :string[] =[];
  const [dynamicStateandType,setDynamicStateandType]=useState<Record<string, any>>({name:'cr_account',type:"text"})
  const routes: AppRouterInstance = useRouter()
  const [showProfileAsModalOpen, setShowProfileAsModalOpen] = React.useState<boolean>(false);
  const [showElementAsPopupOpen, setShowElementAsPopupOpen] = React.useState<boolean>(false);
  const encryptionFlagCont: boolean = encryptionFlagCompData?.flag || false;

  function formatNumberWithCommas(value: any): string | any {
    if (value === null || value === undefined || value === '') return value;
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num) || !isFinite(num)) return value;
    if (typeof value === 'string' && !/^-?\d+(\.\d+)?$/.test(value.trim())) return value;
    return num.toLocaleString('en-US');
  }

  function parseFormattedNumber(value: string): number {
    const cleanedValue = value.replace(/,/g, '');
    return parseFloat(cleanedValue) || 0;
  }

  let encryptionDpd: string = "";
  encryptionDpd = encryptionDpd !=='' ? encryptionDpd: encryptionFlagCompData?.dpd;
  let encryptionMethod: string = "";
  encryptionMethod  = encryptionMethod !=='' ? encryptionMethod: encryptionFlagCompData?.method;
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
  

  // Validation  
    const [error, setError] = useState<string>('');

  schemaArray = [
  "v.string()",
  "v.nonEmpty('This field is required.')",
  "v.regex(/^\\d+$/, 'Only digits are allowed.')"
] ;
    const schema : any  = v.pipe(    v.string(),
    v.nonEmpty('This field is required.'),
    v.regex(/^\d+$/, 'Only digits are allowed.'),
)
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
  const handleChange = async(e: any) => {
    if(e.target.value=="")
    {
      setIsRequredData(true)
    }else{
      setIsRequredData(false)
    }
      let validate:any;    
      setError('');
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,cr_account:undefined}}));
    if(dynamicStateandType.type=="number"){
      const inputValue = e.target.value.replace(/,/g, '');
      if(inputValue !== '' && isNaN(Number(inputValue))){
        toast("Please enter numbers only", "danger");
        return;
      }
    setsubgroup7f52e((prev: any) => ({ ...prev, cr_account: +e.target.value }));
    }
    else{
    setsubgroup7f52e((prev: any) => ({ ...prev, cr_account: e.target.value }));
    }
    const newInputValue = dynamicStateandType.type=="number" ? +e.target.value.replace(/,/g, '') : e.target.value;
    let code:string=allCode;
     if (code != '') {
      let codeStates: any = {};
      codeStates['overallgroup']  = {...overallgroup00e53,cr_account:newInputValue},
      codeStates['setoverallgroup'] = setoverallgroup00e53,
      codeStates['mnssubgroup']  = {...mnssubgroup3df12,cr_account:newInputValue},
      codeStates['setmnssubgroup'] = setmnssubgroup3df12,
      codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1']  = {...ct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,cr_account:newInputValue},
      codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen2_v1a54b9,
      codeStates['mndate_common_info']  = {...mndate_common_info3fb9d,cr_account:newInputValue},
      codeStates['setmndate_common_info'] = setmndate_common_info3fb9d,
      codeStates['mndate_basic_sub_screen']  = {...mndate_basic_sub_screenc9573,cr_account:newInputValue},
      codeStates['setmndate_basic_sub_screen'] = setmndate_basic_sub_screenc9573,
      codeStates['ct005_af_uf_ufws_v001_mms_mandate_subscreen_v1']  = {...ct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,cr_account:newInputValue},
      codeStates['setct005_af_uf_ufws_v001_mms_mandate_subscreen_v1'] = setct005_af_uf_ufws_v001_mms_mandate_subscreen_v12764c,
      codeStates['subgroup']  = {...subgroup7f52e,cr_account:newInputValue},
      codeStates['setsubgroup'] = setsubgroup7f52e,
      codeStates['doc_data_lst']  = {...doc_data_lst1fd5c,cr_account:newInputValue},
      codeStates['setdoc_data_lst'] = setdoc_data_lst1fd5c,
      codeStates['valdtn_data_lst']  = {...valdtn_data_lst378bc,cr_account:newInputValue},
      codeStates['setvaldtn_data_lst'] = setvaldtn_data_lst378bc,
      codeStates['cmnt_data_lst']  = {...cmnt_data_lste3582,cr_account:newInputValue},
      codeStates['setcmnt_data_lst'] = setcmnt_data_lste3582,
      codeStates['mandatedatalst']  = {...mandatedatalst46c27,cr_account:newInputValue},
      codeStates['setmandatedatalst'] = setmandatedatalst46c27,
      codeStates['docdatalst']  = {...docdatalst620a8,cr_account:newInputValue},
      codeStates['setdocdatalst'] = setdocdatalst620a8,
      codeStates['valdtndatalst']  = {...valdtndatalstd58f5,cr_account:newInputValue},
      codeStates['setvaldtndatalst'] = setvaldtndatalstd58f5,
      codeStates['cmntdatalst']  = {...cmntdatalste4cdc,cr_account:newInputValue},
      codeStates['setcmntdatalst'] = setcmntdatalste4cdc,
      codeStates['dynamic_group_btns']  = {...dynamic_group_btns3c327,cr_account:newInputValue},
      codeStates['setdynamic_group_btns'] = setdynamic_group_btns3c327,
    codeExecution(code,codeStates);
    }  
     try{
        let copyFormhandlerData :any = {}

    }catch(err:any){
      console.error(err);
    }
  }
  const handleBlur=async () => {
      let validate:any
      if(subgroup7f52e?.cr_account == "" || subgroup7f52e?.cr_account == undefined){
      subgroup7f52e.cr_account = "";
     if(dynamicStateandType.type=="number"){
          validate = v.safeParse(schema, NaN);
        }
        else{
          validate = v.safeParse(schema, subgroup7f52e?.cr_account);
        }
        if(!validate.success){
          setError(validate?.issues[0]?.message);
          setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,cr_account:"invalid"}}));
        }
    }else if(subgroup7f52e?.cr_account !== ""){
   if(dynamicStateandType.type=="number"){
          validate = v.safeParse(schema, +subgroup7f52e?.cr_account);
        }
        else{
          validate = v.safeParse(schema, subgroup7f52e?.cr_account);
        }
    if(!validate.success){
      setError(validate?.issues[0]?.message);
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,cr_account:"invalid"}}));
    }else{
      setError('');
      setValidate((pre:any)=>({...pre,Mms_Mandate_Info_v1:{...pre?.Mms_Mandate_Info_v1,cr_account:undefined}}));
    }
    }
    if(!validate?.success){
      return
    }
     try{
        let copyFormhandlerData :any = {}

      // eventEmitter        
      let mainData:any=structuredClone(subgroup7f52e);
      let uf_initiatePf:any;
      let te_eventEmitterBody:te_eventEmitterDto={
        dpdKey: '',
        method: '',
        event: '',
        sourceId: '',
        key: '',
        data: {},
        lock: {}
      }
      let uf_getPFDetails:any={
        key: ""
      };
      let uf_ifo:any;
      if(!mainData || Object.keys(mainData)?.length == 0 ){
         throw 'Please give proper data';
      }
      let eventProperty :any = {
  "id": "01d0493b62ba459287ea85227ab596b0",
  "type": "textinput",
  "name": "cr_acc_no",
  "sequence": 1,
  "children": [
    {
      "id": "01d0493b62ba459287ea85227ab596b0.1.1",
      "type": "eventNode",
      "name": "onBlur",
      "sequence": "1.1",
      "children": [
        {
          "id": "01d0493b62ba459287ea85227ab596b0.1.1.1",
          "eventContext": "rise",
          "value": "",
          "type": "handlerNode",
          "name": "eventEmitter",
          "sequence": "1.1.1",
          "children": [
            {
              "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1",
              "eventContext": "rise",
              "value": "",
              "type": "handlerNode",
              "name": "hasDataHandler",
              "sequence": "1.1.1.1",
              "children": [
                {
                  "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.1",
                  "eventContext": "riseListen",
                  "value": "",
                  "type": "handlerNode",
                  "name": "copyFormData",
                  "sequence": "1.1.1.1.1",
                  "children": [
                    {
                      "id": "4ec956e4599e4a4ab60a0db92557f52e|08d4656a82244579b512cdc5ba40589d.1.1.1.1.1.1",
                      "type": "textinput",
                      "name": "Mms_Mandate_Info|subgroup|cr_acc_name",
                      "key": "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1|cr_acc_name",
                      "elementType": "textinput",
                      "sequence": "1.1.1.1.1.1",
                      "children": []
                    }
                  ],
                  "hlr": {
                    "params": [
                      {
                        "name": "parentTable",
                        "_type": "text",
                        "value": "",
                        "enabled": true
                      },
                      {
                        "name": "primaryKey",
                        "_type": "text",
                        "value": "",
                        "enabled": true
                      },
                      {
                        "name": "path",
                        "_type": "text",
                        "value": "data.CUSTOMERS[0].FIRSTNAME",
                        "enabled": true
                      },
                      {
                        "name": "setValue",
                        "_type": "array",
                        "items": [
                          {
                            "source": "",
                            "target": ""
                          }
                        ],
                        "value": "",
                        "enabled": true
                      }
                    ]
                  }
                },
                {
                  "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2",
                  "type": "responseNode",
                  "name": "fail",
                  "sequence": "1.1.1.1.2",
                  "children": [
                    {
                      "id": "01d0493b62ba459287ea85227ab596b0.1.1.1.1.2.1",
                      "eventContext": "rise",
                      "value": "",
                      "type": "handlerNode",
                      "name": "infoMsg",
                      "sequence": "1.1.1.1.2.1",
                      "children": [],
                      "hlr": {
                        "params": [
                          {
                            "name": "message",
                            "_type": "text",
                            "value": "renga bro not happy",
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
                }
              ],
              "hlr": {
                "params": [
                  {
                    "name": "path",
                    "_label": "Path",
                    "_type": "text",
                    "value": "data",
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
            "CK:CT005:FNGK:AF:FNK:PF-PFD:CATK:V001:AFGK:MMS:AFK:Mms_Core_Banking_Api:AFVK:v1|1b1c2e0f05214aea89d61ea9721c84f0"
          ]
        }
      ]
    }
  ]
};
      let eventDetails : any = await eventFunction(eventProperty);
      let eventDetailsArray = eventDetails[0];
      let sourceId : string = "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1";
      sourceId+= "|"+"4ec956e4599e4a4ab60a0db92557f52e";
      let pathIds = SourceIdFilter(eventProperty,"1.1.1");
      let sourceIdNewPath : string = "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1"+"|"+"4ec956e4599e4a4ab60a0db92557f52e"+"|"+eventProperty.id;
      pathIds.map((ele:any,id:number)=>{
        if(id!=pathIds.length-1)
        {
          sourceIdNewPath=sourceIdNewPath+"|"+ele
        }
      })
      for (let k = 0; k < eventDetailsArray.length; k++) {
        if (
          eventDetailsArray[k].type === 'handlerNode' &&
          eventDetailsArray[k].name === 'eventEmitter'
        ) {
          if (
            eventDetailsArray[k].targetKey &&
            eventDetailsArray[k].targetKey.length > 0
          ) {
            uf_getPFDetails= {
             key:eventDetailsArray[k].targetKey[0],
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
    
      if (uf_getPFDetails.key == undefined) {
         toast('Please check PF', 'danger')
         return
      }
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
      

      //eventEmitter
      te_eventEmitterBody = {
        ...uf_initiatePf.data.nodeProperty,
        data:mainData||{},
        event : uf_initiatePf.data.eventProperty?.source?.status,
        sourceId : uf_initiatePf.data.eventProperty?.sourceId
      }
        let formData:any={};
        let ifoResponse:any[]=[];
          formData=mainData
          const uf_ifoBody:uf_ifoDto={
            formData:formData,
            key:uf_getPFDetails.key,
            groupId:"4ec956e4599e4a4ab60a0db92557f52e",
            controlId:"01d0493b62ba459287ea85227ab596b0"
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
            te_eventEmitterBody.data= [{...uf_ifo?.data}];
    //eventEmitter
    if (encryptionFlagCont) {
      te_eventEmitterBody["dpdKey"] = encryptionDpd;
      te_eventEmitterBody["method"] = encryptionMethod;
    } 
      te_eventEmitterBody["ssKey"] = ['CT005:AF:UF-UFWS:V001:MMS:Mandate_Subscreen:v1']; 
    const te_eventEmitter=await AxiosService.post("/te/eventEmitter",te_eventEmitterBody,
      { headers: {Authorization: `Bearer ${token}`}})
            // validation

              if(commonSepareteDataFromTheObject("data",te_eventEmitter?.data)){

  
            // copyFormData for controller
            //copyFormhandlerData variable store state and its value
            //UOmapperData have all node mapper source and targerv.and  its which we can use for dynamic node name  , going to store Mms_Mandate_Info|subgroup|cr_acc_name
               copyFormhandlerData["setsubgroup7f52e"]={...copyFormhandlerData["setsubgroup7f52e"],[UOmapperData['08d4656a82244579b512cdc5ba40589d']['source']]:commonSepareteDataFromTheObject("data.CUSTOMERS[0].FIRSTNAME",te_eventEmitter?.data)}

              }else
              {

  
              //infoMsg
      toast('renga bro not happy', 'danger')

              }
            if("setsubgroup7f52e" in copyFormhandlerData){
        setsubgroup7f52e((pre:any)=>({...pre,...copyFormhandlerData["setsubgroup7f52e"]}) )
      }

    }catch(err:any){
      console.error(err);
    }
  }
  const handleMapperValue=async()=>{
    try{
      const orchestrationData: any = await AxiosService.post(
        '/UF/Orchestration',
        {
          key: "CK:CT005:FNGK:AF:FNK:UF-UFW:CATK:V001:AFGK:MMS:AFK:Mms_Mandate_Info:AFVK:v1",
          componentId: "4ec956e4599e4a4ab60a0db92557f52e",
          controlId: "01d0493b62ba459287ea85227ab596b0",
          isTable: false,
          from:"TextInputcr_acc_no",
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
      if (orchestrationData?.data?.dataType ==='integer' || orchestrationData?.data?.dataType ==='number') {
        setDynamicStateandType({name:'cr_account', type: 'number'});
      }
      // if(orchestrationData?.data?.schemaData?.at(0)?.nodeType=='apinode'){
      // if(orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties){
      //   let type:any={name:'cr_account',type:'text'};
      //   type={
      //     name:'cr_account',
      //     type: orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.cr_account.type == 'string' ? 'text' : orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.cr_account.type =='integer' ? 'number' : orchestrationData?.data?.schemaData?.at(0)?.schema.responses["200"].content["application/json"].schema.items.properties.cr_account.type
      //   }
      //   setDynamicStateandType(type);
      // }
      // }else if(orchestrationData?.data?.schemaData?.at(0)?.nodeType=='dbnode'){
      //   if(orchestrationData?.data?.schemaData?.at(0)?.schema.properties){
      //   let type:any={name:'cr_account',type:'text'};
      //   type={
      //     name:'cr_account',
      //     type: orchestrationData?.data?.schemaData?.at(0)?.schema.properties.cr_account.type == 'string' ? 'text' : orchestrationData?.data?.schemaData?.at(0)?.schema.properties.cr_account.type =='integer' ? 'number' : orchestrationData?.data?.schemaData?.at(0)?.schema.properties.cr_account.type
      //   }
      //   setDynamicStateandType(type);
      // }
      // }
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(()=>{
      handleMapperValue();
      if(!subgroup7f52e?.cr_account)
      { 
        setsubgroup7f52eProps((pre:any)=>({...pre,required:true}));
        setIsRequredData(true);
      }
      if(validateRefetch.init!=0)
        handleBlur();
  },[validateRefetch.value])
  useEffect(() => {
  if(dfd_subscreen_db_v1Props?.setSearchFilters && dfd_subscreen_db_v1Props?.data)
  {
    if(Array.isArray(dfd_subscreen_db_v1Props.data) && dfd_subscreen_db_v1Props.data.length > 0){
      setsubgroup7f52e((pre:any)=>({...pre,cr_account:dfd_subscreen_db_v1Props.data[0]?.cr_account}));
    }
  }
  },[dfd_subscreen_db_v1Props?.setSearchFilters])
  if (cr_acc_no596b0?.isHidden) {
    return <></>
  }
  return (   
    <div  
      style={{gridColumn: `2 / 7`,gridRow: `28 / 46`, gap:``, height: `100%`, overflow: 'auto', display: 'flex', flexDirection: 'column'}} >
      <div style={{ flex: 1, minHeight: 0 }}>
      <TextInput
        require={isRequredData}
        className="!rounded-xl"
        label={keyset("Cr Account Number")}
        onChange= {handleChange}
        onBlur={handleBlur}
        type= {dynamicStateandType.type === "number" ? "text" : dynamicStateandType.type}
        value= {dynamicStateandType.type === "number" ? formatNumberWithCommas(subgroup7f52e?.cr_account) || "" : subgroup7f52e?.cr_account|| ""}
         disabled= {cr_acc_no596b0?.isDisabled ? true : false}
        pin='brick-brick'     
        view='normal'
        contentAlign={"left"}
        headerPosition='top'
        headerText="Cr Account Number"
      errorMessage={error}
        validationState={validate?.Mms_Mandate_Info_v1?.cr_account ? "invalid" : undefined}
      />
      </div>
    </div> 
  )
}

export default TextInputcr_acc_no
