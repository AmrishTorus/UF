


"use client"
import React from 'react';
import { getCookie } from './components/cookieMgment';
export interface TotalContextProps {
  currentToken: any 
  setCurrentToken: React.Dispatch<React.SetStateAction<any>>
  matchedAccessProfileData: any;
  setMatchedAccessProfileData: React.Dispatch<React.SetStateAction<any>>
  vob_dashboard_screen9ce49: any 
  setvob_dashboard_screen9ce49: React.Dispatch<React.SetStateAction<any>>
  vob_dashboard_screen9ce49Props: any 
  setvob_dashboard_screen9ce49Props: React.Dispatch<React.SetStateAction<any>>
  most_groupc5ce0: any 
  setmost_groupc5ce0: React.Dispatch<React.SetStateAction<any>>
  most_groupc5ce0Props: any 
  setmost_groupc5ce0Props: React.Dispatch<React.SetStateAction<any>>
  active_group31e18: any 
  setactive_group31e18: React.Dispatch<React.SetStateAction<any>>
  active_group31e18Props: any 
  setactive_group31e18Props: React.Dispatch<React.SetStateAction<any>>
  req_groupdf5e7: any 
  setreq_groupdf5e7: React.Dispatch<React.SetStateAction<any>>
  req_groupdf5e7Props: any 
  setreq_groupdf5e7Props: React.Dispatch<React.SetStateAction<any>>
  error_groupcf699: any 
  seterror_groupcf699: React.Dispatch<React.SetStateAction<any>>
  error_groupcf699Props: any 
  seterror_groupcf699Props: React.Dispatch<React.SetStateAction<any>>
  line_chart_groupadc5c: any 
  setline_chart_groupadc5c: React.Dispatch<React.SetStateAction<any>>
  line_chart_groupadc5cProps: any 
  setline_chart_groupadc5cProps: React.Dispatch<React.SetStateAction<any>>
  bar_chart_group31635: any 
  setbar_chart_group31635: React.Dispatch<React.SetStateAction<any>>
  bar_chart_group31635Props: any 
  setbar_chart_group31635Props: React.Dispatch<React.SetStateAction<any>>
  api_repo_table162e4: any 
  setapi_repo_table162e4: React.Dispatch<React.SetStateAction<any>>
  api_repo_table162e4Props: any 
  setapi_repo_table162e4Props: React.Dispatch<React.SetStateAction<any>>
  api_repositoryb1ab8: any 
  setapi_repositoryb1ab8: React.Dispatch<React.SetStateAction<any>>
  api_repositoryb1ab8Props: any 
  setapi_repositoryb1ab8Props: React.Dispatch<React.SetStateAction<any>>
  connected_application17a5d: any 
  setconnected_application17a5d: React.Dispatch<React.SetStateAction<any>>
  connected_application17a5dProps: any 
  setconnected_application17a5dProps: React.Dispatch<React.SetStateAction<any>>
  api_info_groupd3ad5: any 
  setapi_info_groupd3ad5: React.Dispatch<React.SetStateAction<any>>
  api_info_groupd3ad5Props: any 
  setapi_info_groupd3ad5Props: React.Dispatch<React.SetStateAction<any>>
  info_group5e349: any 
  setinfo_group5e349: React.Dispatch<React.SetStateAction<any>>
  info_group5e349Props: any 
  setinfo_group5e349Props: React.Dispatch<React.SetStateAction<any>>
  info_summary_groupa2a0f: any 
  setinfo_summary_groupa2a0f: React.Dispatch<React.SetStateAction<any>>
  info_summary_groupa2a0fProps: any 
  setinfo_summary_groupa2a0fProps: React.Dispatch<React.SetStateAction<any>>
  api_process_log_groupff19c: any 
  setapi_process_log_groupff19c: React.Dispatch<React.SetStateAction<any>>
  api_process_log_groupff19cProps: any 
  setapi_process_log_groupff19cProps: React.Dispatch<React.SetStateAction<any>>
  api_process_log655a7: any 
  setapi_process_log655a7: React.Dispatch<React.SetStateAction<any>>
  api_process_log655a7Props: any 
  setapi_process_log655a7Props: React.Dispatch<React.SetStateAction<any>>
  consent_logs_group3070a: any 
  setconsent_logs_group3070a: React.Dispatch<React.SetStateAction<any>>
  consent_logs_group3070aProps: any 
  setconsent_logs_group3070aProps: React.Dispatch<React.SetStateAction<any>>
  consent_logs53635: any 
  setconsent_logs53635: React.Dispatch<React.SetStateAction<any>>
  consent_logs53635Props: any 
  setconsent_logs53635Props: React.Dispatch<React.SetStateAction<any>>
  api_usage_group868b4: any 
  setapi_usage_group868b4: React.Dispatch<React.SetStateAction<any>>
  api_usage_group868b4Props: any 
  setapi_usage_group868b4Props: React.Dispatch<React.SetStateAction<any>>
  total_api_calls_groupd4dee: any 
  settotal_api_calls_groupd4dee: React.Dispatch<React.SetStateAction<any>>
  total_api_calls_groupd4deeProps: any 
  settotal_api_calls_groupd4deeProps: React.Dispatch<React.SetStateAction<any>>
  api_call_over_frequency_subscreenb8acc: any 
  setapi_call_over_frequency_subscreenb8acc: React.Dispatch<React.SetStateAction<any>>
  api_call_over_frequency_subscreenb8accProps: any 
  setapi_call_over_frequency_subscreenb8accProps: React.Dispatch<React.SetStateAction<any>>
  ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7: any 
  setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7: React.Dispatch<React.SetStateAction<any>>
  ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props: any 
  setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props: React.Dispatch<React.SetStateAction<any>>
  api_call_over_hour_group12590: any 
  setapi_call_over_hour_group12590: React.Dispatch<React.SetStateAction<any>>
  api_call_over_hour_group12590Props: any 
  setapi_call_over_hour_group12590Props: React.Dispatch<React.SetStateAction<any>>
  ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789: any 
  setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789: React.Dispatch<React.SetStateAction<any>>
  ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props: any 
  setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props: React.Dispatch<React.SetStateAction<any>>
  api_call_over_month_groupd1676: any 
  setapi_call_over_month_groupd1676: React.Dispatch<React.SetStateAction<any>>
  api_call_over_month_groupd1676Props: any 
  setapi_call_over_month_groupd1676Props: React.Dispatch<React.SetStateAction<any>>
  ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3: any 
  setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3: React.Dispatch<React.SetStateAction<any>>
  ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props: any 
  setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props: React.Dispatch<React.SetStateAction<any>>
  api_call_over_week_group03bb6: any 
  setapi_call_over_week_group03bb6: React.Dispatch<React.SetStateAction<any>>
  api_call_over_week_group03bb6Props: any 
  setapi_call_over_week_group03bb6Props: React.Dispatch<React.SetStateAction<any>>
  total_used_api_groupcd37d: any 
  settotal_used_api_groupcd37d: React.Dispatch<React.SetStateAction<any>>
  total_used_api_groupcd37dProps: any 
  settotal_used_api_groupcd37dProps: React.Dispatch<React.SetStateAction<any>>
  list_of_register_tpp_groupbe9d5: any 
  setlist_of_register_tpp_groupbe9d5: React.Dispatch<React.SetStateAction<any>>
  list_of_register_tpp_groupbe9d5Props: any 
  setlist_of_register_tpp_groupbe9d5Props: React.Dispatch<React.SetStateAction<any>>
  connected_application19ab2: any 
  setconnected_application19ab2: React.Dispatch<React.SetStateAction<any>>
  connected_application19ab2Props: any 
  setconnected_application19ab2Props: React.Dispatch<React.SetStateAction<any>>
  group1233a04c: any 
  setgroup1233a04c: React.Dispatch<React.SetStateAction<any>>
  group1233a04cProps: any 
  setgroup1233a04cProps: React.Dispatch<React.SetStateAction<any>>
  group4549ff98: any 
  setgroup4549ff98: React.Dispatch<React.SetStateAction<any>>
  group4549ff98Props: any 
  setgroup4549ff98Props: React.Dispatch<React.SetStateAction<any>>
  group657d5: any 
  setgroup657d5: React.Dispatch<React.SetStateAction<any>>
  group657d5Props: any 
  setgroup657d5Props: React.Dispatch<React.SetStateAction<any>>
  group6576622ab: any 
  setgroup6576622ab: React.Dispatch<React.SetStateAction<any>>
  group6576622abProps: any 
  setgroup6576622abProps: React.Dispatch<React.SetStateAction<any>>
  group796798bff3: any 
  setgroup796798bff3: React.Dispatch<React.SetStateAction<any>>
  group796798bff3Props: any 
  setgroup796798bff3Props: React.Dispatch<React.SetStateAction<any>>
  most_used_apis72497: any,
  setmost_used_apis72497:React.Dispatch<React.SetStateAction<any>>
  most_used_apis72497Props: any 
  setmost_used_apis72497Props: React.Dispatch<React.SetStateAction<any>>
  active_apisac162: any,
  setactive_apisac162:React.Dispatch<React.SetStateAction<any>>
  active_apisac162Props: any 
  setactive_apisac162Props: React.Dispatch<React.SetStateAction<any>>
  total_requests06c5a: any,
  settotal_requests06c5a:React.Dispatch<React.SetStateAction<any>>
  total_requests06c5aProps: any 
  settotal_requests06c5aProps: React.Dispatch<React.SetStateAction<any>>
  error3d67b: any,
  seterror3d67b:React.Dispatch<React.SetStateAction<any>>
  error3d67bProps: any 
  seterror3d67bProps: React.Dispatch<React.SetStateAction<any>>
  line_chart0fe1c: any,
  setline_chart0fe1c:React.Dispatch<React.SetStateAction<any>>
  line_chart0fe1cProps: any 
  setline_chart0fe1cProps: React.Dispatch<React.SetStateAction<any>>
  barchart46476: any,
  setbarchart46476:React.Dispatch<React.SetStateAction<any>>
  barchart46476Props: any 
  setbarchart46476Props: React.Dispatch<React.SetStateAction<any>>
  apinamecccc2: any,
  setapinamecccc2:React.Dispatch<React.SetStateAction<any>>
  apinamecccc2Props: any 
  setapinamecccc2Props: React.Dispatch<React.SetStateAction<any>>
  version33b3f: any,
  setversion33b3f:React.Dispatch<React.SetStateAction<any>>
  version33b3fProps: any 
  setversion33b3fProps: React.Dispatch<React.SetStateAction<any>>
  statuscd1e6: any,
  setstatuscd1e6:React.Dispatch<React.SetStateAction<any>>
  statuscd1e6Props: any 
  setstatuscd1e6Props: React.Dispatch<React.SetStateAction<any>>
  api_category0905e: any,
  setapi_category0905e:React.Dispatch<React.SetStateAction<any>>
  api_category0905eProps: any 
  setapi_category0905eProps: React.Dispatch<React.SetStateAction<any>>
  release_date1939f: any,
  setrelease_date1939f:React.Dispatch<React.SetStateAction<any>>
  release_date1939fProps: any 
  setrelease_date1939fProps: React.Dispatch<React.SetStateAction<any>>
  view_log82d2f: any,
  setview_log82d2f:React.Dispatch<React.SetStateAction<any>>
  view_log82d2fProps: any 
  setview_log82d2fProps: React.Dispatch<React.SetStateAction<any>>
  app_name800b4: any,
  setapp_name800b4:React.Dispatch<React.SetStateAction<any>>
  app_name800b4Props: any 
  setapp_name800b4Props: React.Dispatch<React.SetStateAction<any>>
  tppname5329d: any,
  settppname5329d:React.Dispatch<React.SetStateAction<any>>
  tppname5329dProps: any 
  settppname5329dProps: React.Dispatch<React.SetStateAction<any>>
  typeb4599: any,
  settypeb4599:React.Dispatch<React.SetStateAction<any>>
  typeb4599Props: any 
  settypeb4599Props: React.Dispatch<React.SetStateAction<any>>
  status_value35b5d: any,
  setstatus_value35b5d:React.Dispatch<React.SetStateAction<any>>
  status_value35b5dProps: any 
  setstatus_value35b5dProps: React.Dispatch<React.SetStateAction<any>>
  api_info_labelc7e57: any,
  setapi_info_labelc7e57:React.Dispatch<React.SetStateAction<any>>
  api_info_labelc7e57Props: any 
  setapi_info_labelc7e57Props: React.Dispatch<React.SetStateAction<any>>
  back_button1c484: any,
  setback_button1c484:React.Dispatch<React.SetStateAction<any>>
  back_button1c484Props: any 
  setback_button1c484Props: React.Dispatch<React.SetStateAction<any>>
  global_bank33cbf: any,
  setglobal_bank33cbf:React.Dispatch<React.SetStateAction<any>>
  global_bank33cbfProps: any 
  setglobal_bank33cbfProps: React.Dispatch<React.SetStateAction<any>>
  apinamesf3b7f: any,
  setapinamesf3b7f:React.Dispatch<React.SetStateAction<any>>
  apinamesf3b7fProps: any 
  setapinamesf3b7fProps: React.Dispatch<React.SetStateAction<any>>
  versions69477: any,
  setversions69477:React.Dispatch<React.SetStateAction<any>>
  versions69477Props: any 
  setversions69477Props: React.Dispatch<React.SetStateAction<any>>
  statuss6320b: any,
  setstatuss6320b:React.Dispatch<React.SetStateAction<any>>
  statuss6320bProps: any 
  setstatuss6320bProps: React.Dispatch<React.SetStateAction<any>>
  api_categorys43935: any,
  setapi_categorys43935:React.Dispatch<React.SetStateAction<any>>
  api_categorys43935Props: any 
  setapi_categorys43935Props: React.Dispatch<React.SetStateAction<any>>
  release_datesd97a1: any,
  setrelease_datesd97a1:React.Dispatch<React.SetStateAction<any>>
  release_datesd97a1Props: any 
  setrelease_datesd97a1Props: React.Dispatch<React.SetStateAction<any>>
  api_resource_paths6c67f: any,
  setapi_resource_paths6c67f:React.Dispatch<React.SetStateAction<any>>
  api_resource_paths6c67fProps: any 
  setapi_resource_paths6c67fProps: React.Dispatch<React.SetStateAction<any>>
  apiname45fa8: any,
  setapiname45fa8:React.Dispatch<React.SetStateAction<any>>
  apiname45fa8Props: any 
  setapiname45fa8Props: React.Dispatch<React.SetStateAction<any>>
  versiona736c: any,
  setversiona736c:React.Dispatch<React.SetStateAction<any>>
  versiona736cProps: any 
  setversiona736cProps: React.Dispatch<React.SetStateAction<any>>
  statusddf07: any,
  setstatusddf07:React.Dispatch<React.SetStateAction<any>>
  statusddf07Props: any 
  setstatusddf07Props: React.Dispatch<React.SetStateAction<any>>
  api_category95348: any,
  setapi_category95348:React.Dispatch<React.SetStateAction<any>>
  api_category95348Props: any 
  setapi_category95348Props: React.Dispatch<React.SetStateAction<any>>
  release_dateb41fc: any,
  setrelease_dateb41fc:React.Dispatch<React.SetStateAction<any>>
  release_dateb41fcProps: any 
  setrelease_dateb41fcProps: React.Dispatch<React.SetStateAction<any>>
  api_resourcepath88fa9: any,
  setapi_resourcepath88fa9:React.Dispatch<React.SetStateAction<any>>
  api_resourcepath88fa9Props: any 
  setapi_resourcepath88fa9Props: React.Dispatch<React.SetStateAction<any>>
  total_calls5c0ea: any,
  settotal_calls5c0ea:React.Dispatch<React.SetStateAction<any>>
  total_calls5c0eaProps: any 
  settotal_calls5c0eaProps: React.Dispatch<React.SetStateAction<any>>
  success_rateee58b: any,
  setsuccess_rateee58b:React.Dispatch<React.SetStateAction<any>>
  success_rateee58bProps: any 
  setsuccess_rateee58bProps: React.Dispatch<React.SetStateAction<any>>
  error_rate960d3: any,
  seterror_rate960d3:React.Dispatch<React.SetStateAction<any>>
  error_rate960d3Props: any 
  seterror_rate960d3Props: React.Dispatch<React.SetStateAction<any>>
  text1bd13: any,
  settext1bd13:React.Dispatch<React.SetStateAction<any>>
  text1bd13Props: any 
  settext1bd13Props: React.Dispatch<React.SetStateAction<any>>
  trs_created_date93619: any,
  settrs_created_date93619:React.Dispatch<React.SetStateAction<any>>
  trs_created_date93619Props: any 
  settrs_created_date93619Props: React.Dispatch<React.SetStateAction<any>>
  requestdata1d4f4: any,
  setrequestdata1d4f4:React.Dispatch<React.SetStateAction<any>>
  requestdata1d4f4Props: any 
  setrequestdata1d4f4Props: React.Dispatch<React.SetStateAction<any>>
  responsedata35a3f: any,
  setresponsedata35a3f:React.Dispatch<React.SetStateAction<any>>
  responsedata35a3fProps: any 
  setresponsedata35a3fProps: React.Dispatch<React.SetStateAction<any>>
  tob_consent_requestid80eee: any,
  settob_consent_requestid80eee:React.Dispatch<React.SetStateAction<any>>
  tob_consent_requestid80eeeProps: any 
  settob_consent_requestid80eeeProps: React.Dispatch<React.SetStateAction<any>>
  view_logs3bb2b: any,
  setview_logs3bb2b:React.Dispatch<React.SetStateAction<any>>
  view_logs3bb2bProps: any 
  setview_logs3bb2bProps: React.Dispatch<React.SetStateAction<any>>
  textfe486: any,
  settextfe486:React.Dispatch<React.SetStateAction<any>>
  textfe486Props: any 
  settextfe486Props: React.Dispatch<React.SetStateAction<any>>
  request_consent_baseconsentid4221e: any,
  setrequest_consent_baseconsentid4221e:React.Dispatch<React.SetStateAction<any>>
  request_consent_baseconsentid4221eProps: any 
  setrequest_consent_baseconsentid4221eProps: React.Dispatch<React.SetStateAction<any>>
  interactionid5cd91: any,
  setinteractionid5cd91:React.Dispatch<React.SetStateAction<any>>
  interactionid5cd91Props: any 
  setinteractionid5cd91Props: React.Dispatch<React.SetStateAction<any>>
  request_consent_permissions1448d: any,
  setrequest_consent_permissions1448d:React.Dispatch<React.SetStateAction<any>>
  request_consent_permissions1448dProps: any 
  setrequest_consent_permissions1448dProps: React.Dispatch<React.SetStateAction<any>>
  consentbody_data_revokedby6ede9: any,
  setconsentbody_data_revokedby6ede9:React.Dispatch<React.SetStateAction<any>>
  consentbody_data_revokedby6ede9Props: any 
  setconsentbody_data_revokedby6ede9Props: React.Dispatch<React.SetStateAction<any>>
  request_consent_expiratriondatetime3ba51: any,
  setrequest_consent_expiratriondatetime3ba51:React.Dispatch<React.SetStateAction<any>>
  request_consent_expiratriondatetime3ba51Props: any 
  setrequest_consent_expiratriondatetime3ba51Props: React.Dispatch<React.SetStateAction<any>>
  status61386: any,
  setstatus61386:React.Dispatch<React.SetStateAction<any>>
  status61386Props: any 
  setstatus61386Props: React.Dispatch<React.SetStateAction<any>>
  api_usage_overviewecc9e: any,
  setapi_usage_overviewecc9e:React.Dispatch<React.SetStateAction<any>>
  api_usage_overviewecc9eProps: any 
  setapi_usage_overviewecc9eProps: React.Dispatch<React.SetStateAction<any>>
  tot_req_icon1fa8f: any,
  settot_req_icon1fa8f:React.Dispatch<React.SetStateAction<any>>
  tot_req_icon1fa8fProps: any 
  settot_req_icon1fa8fProps: React.Dispatch<React.SetStateAction<any>>
  active_icon42af9: any,
  setactive_icon42af9:React.Dispatch<React.SetStateAction<any>>
  active_icon42af9Props: any 
  setactive_icon42af9Props: React.Dispatch<React.SetStateAction<any>>
  most_used_apis2686b: any,
  setmost_used_apis2686b:React.Dispatch<React.SetStateAction<any>>
  most_used_apis2686bProps: any 
  setmost_used_apis2686bProps: React.Dispatch<React.SetStateAction<any>>
  most_used_api_icon6560d: any,
  setmost_used_api_icon6560d:React.Dispatch<React.SetStateAction<any>>
  most_used_api_icon6560dProps: any 
  setmost_used_api_icon6560dProps: React.Dispatch<React.SetStateAction<any>>
  error_rate72497: any,
  seterror_rate72497:React.Dispatch<React.SetStateAction<any>>
  error_rate72497Props: any 
  seterror_rate72497Props: React.Dispatch<React.SetStateAction<any>>
  error_rate_icon89a9a: any,
  seterror_rate_icon89a9a:React.Dispatch<React.SetStateAction<any>>
  error_rate_icon89a9aProps: any 
  seterror_rate_icon89a9aProps: React.Dispatch<React.SetStateAction<any>>
  api_call_hours6d062: any,
  setapi_call_hours6d062:React.Dispatch<React.SetStateAction<any>>
  api_call_hours6d062Props: any 
  setapi_call_hours6d062Props: React.Dispatch<React.SetStateAction<any>>
  api_call_hours_dropdown5f803: any,
  setapi_call_hours_dropdown5f803:React.Dispatch<React.SetStateAction<any>>
  api_call_hours_dropdown5f803Props: any 
  setapi_call_hours_dropdown5f803Props: React.Dispatch<React.SetStateAction<any>>
  api_call_over_hour_linechart38cfd: any,
  setapi_call_over_hour_linechart38cfd:React.Dispatch<React.SetStateAction<any>>
  api_call_over_hour_linechart38cfdProps: any 
  setapi_call_over_hour_linechart38cfdProps: React.Dispatch<React.SetStateAction<any>>
  api_call_over_month_linechartcc886: any,
  setapi_call_over_month_linechartcc886:React.Dispatch<React.SetStateAction<any>>
  api_call_over_month_linechartcc886Props: any 
  setapi_call_over_month_linechartcc886Props: React.Dispatch<React.SetStateAction<any>>
  week_linechart709e7: any,
  setweek_linechart709e7:React.Dispatch<React.SetStateAction<any>>
  week_linechart709e7Props: any 
  setweek_linechart709e7Props: React.Dispatch<React.SetStateAction<any>>
  total_used_api_text0681a: any,
  settotal_used_api_text0681a:React.Dispatch<React.SetStateAction<any>>
  total_used_api_text0681aProps: any 
  settotal_used_api_text0681aProps: React.Dispatch<React.SetStateAction<any>>
  get_accounts_textded93: any,
  setget_accounts_textded93:React.Dispatch<React.SetStateAction<any>>
  get_accounts_textded93Props: any 
  setget_accounts_textded93Props: React.Dispatch<React.SetStateAction<any>>
  get_acc_progressf3140: any,
  setget_acc_progressf3140:React.Dispatch<React.SetStateAction<any>>
  get_acc_progressf3140Props: any 
  setget_acc_progressf3140Props: React.Dispatch<React.SetStateAction<any>>
  get_account_id_textcfcd9: any,
  setget_account_id_textcfcd9:React.Dispatch<React.SetStateAction<any>>
  get_account_id_textcfcd9Props: any 
  setget_account_id_textcfcd9Props: React.Dispatch<React.SetStateAction<any>>
  get_acc_id_progress564cc: any,
  setget_acc_id_progress564cc:React.Dispatch<React.SetStateAction<any>>
  get_acc_id_progress564ccProps: any 
  setget_acc_id_progress564ccProps: React.Dispatch<React.SetStateAction<any>>
  get_balance_textc22b2: any,
  setget_balance_textc22b2:React.Dispatch<React.SetStateAction<any>>
  get_balance_textc22b2Props: any 
  setget_balance_textc22b2Props: React.Dispatch<React.SetStateAction<any>>
  get_balance_progressa0d54: any,
  setget_balance_progressa0d54:React.Dispatch<React.SetStateAction<any>>
  get_balance_progressa0d54Props: any 
  setget_balance_progressa0d54Props: React.Dispatch<React.SetStateAction<any>>
  get_direct_debits_text067ca: any,
  setget_direct_debits_text067ca:React.Dispatch<React.SetStateAction<any>>
  get_direct_debits_text067caProps: any 
  setget_direct_debits_text067caProps: React.Dispatch<React.SetStateAction<any>>
  get_direct_debits_progress04032: any,
  setget_direct_debits_progress04032:React.Dispatch<React.SetStateAction<any>>
  get_direct_debits_progress04032Props: any 
  setget_direct_debits_progress04032Props: React.Dispatch<React.SetStateAction<any>>
  products_textc39eb: any,
  setproducts_textc39eb:React.Dispatch<React.SetStateAction<any>>
  products_textc39ebProps: any 
  setproducts_textc39ebProps: React.Dispatch<React.SetStateAction<any>>
  product_progressee376: any,
  setproduct_progressee376:React.Dispatch<React.SetStateAction<any>>
  product_progressee376Props: any 
  setproduct_progressee376Props: React.Dispatch<React.SetStateAction<any>>
  app_namedc4c5: any,
  setapp_namedc4c5:React.Dispatch<React.SetStateAction<any>>
  app_namedc4c5Props: any 
  setapp_namedc4c5Props: React.Dispatch<React.SetStateAction<any>>
  tppname5b032: any,
  settppname5b032:React.Dispatch<React.SetStateAction<any>>
  tppname5b032Props: any 
  settppname5b032Props: React.Dispatch<React.SetStateAction<any>>
  typed4eac: any,
  settyped4eac:React.Dispatch<React.SetStateAction<any>>
  typed4eacProps: any 
  settyped4eacProps: React.Dispatch<React.SetStateAction<any>>
  status_value3beb3: any,
  setstatus_value3beb3:React.Dispatch<React.SetStateAction<any>>
  status_value3beb3Props: any 
  setstatus_value3beb3Props: React.Dispatch<React.SetStateAction<any>>
  consent_lifecycles11691: any,
  setconsent_lifecycles11691:React.Dispatch<React.SetStateAction<any>>
  consent_lifecycles11691Props: any 
  setconsent_lifecycles11691Props: React.Dispatch<React.SetStateAction<any>>
  text45645c95a7: any,
  settext45645c95a7:React.Dispatch<React.SetStateAction<any>>
  text45645c95a7Props: any 
  settext45645c95a7Props: React.Dispatch<React.SetStateAction<any>>
  icon56454d73c: any,
  seticon56454d73c:React.Dispatch<React.SetStateAction<any>>
  icon56454d73cProps: any 
  seticon56454d73cProps: React.Dispatch<React.SetStateAction<any>>
  text23523e7140: any,
  settext23523e7140:React.Dispatch<React.SetStateAction<any>>
  text23523e7140Props: any 
  settext23523e7140Props: React.Dispatch<React.SetStateAction<any>>
  text454513feb: any,
  settext454513feb:React.Dispatch<React.SetStateAction<any>>
  text454513febProps: any 
  settext454513febProps: React.Dispatch<React.SetStateAction<any>>
  icon5675ee8ba: any,
  seticon5675ee8ba:React.Dispatch<React.SetStateAction<any>>
  icon5675ee8baProps: any 
  seticon5675ee8baProps: React.Dispatch<React.SetStateAction<any>>
  text4564580602: any,
  settext4564580602:React.Dispatch<React.SetStateAction<any>>
  text4564580602Props: any 
  settext4564580602Props: React.Dispatch<React.SetStateAction<any>>
  textwrwer0e4e1: any,
  settextwrwer0e4e1:React.Dispatch<React.SetStateAction<any>>
  textwrwer0e4e1Props: any 
  settextwrwer0e4e1Props: React.Dispatch<React.SetStateAction<any>>
  icon234234e2c9a: any,
  seticon234234e2c9a:React.Dispatch<React.SetStateAction<any>>
  icon234234e2c9aProps: any 
  seticon234234e2c9aProps: React.Dispatch<React.SetStateAction<any>>
  textwerweraf6e8: any,
  settextwerweraf6e8:React.Dispatch<React.SetStateAction<any>>
  textwerweraf6e8Props: any 
  settextwerweraf6e8Props: React.Dispatch<React.SetStateAction<any>>
  text3457254757f70: any,
  settext3457254757f70:React.Dispatch<React.SetStateAction<any>>
  text3457254757f70Props: any 
  settext3457254757f70Props: React.Dispatch<React.SetStateAction<any>>
  icon86986b1a3: any,
  seticon86986b1a3:React.Dispatch<React.SetStateAction<any>>
  icon86986b1a3Props: any 
  seticon86986b1a3Props: React.Dispatch<React.SetStateAction<any>>
  text2668f: any,
  settext2668f:React.Dispatch<React.SetStateAction<any>>
  text2668fProps: any 
  settext2668fProps: React.Dispatch<React.SetStateAction<any>>

////// screen states 
  vob_dashboard_screen_v1Props: any 
  setvob_dashboard_screen_v1Props: React.Dispatch<React.SetStateAction<any>>
  vob_api_info_v1Props: any 
  setvob_api_info_v1Props: React.Dispatch<React.SetStateAction<any>>
  vob_consents_log_v1Props: any 
  setvob_consents_log_v1Props: React.Dispatch<React.SetStateAction<any>>
  vob_dashboard_design_v1Props: any 
  setvob_dashboard_design_v1Props: React.Dispatch<React.SetStateAction<any>>

///////// dfd
  dfd_tob_consent_request_ca_dfd_v1Props: any 
  setdfd_tob_consent_request_ca_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mongo_totalcalls_dfd_v1Props: any 
  setdfd_mongo_totalcalls_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mongo_api_repository_dfd_v1Props: any 
  setdfd_mongo_api_repository_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mongodb_api_process_logs_dfd_v1Props: any 
  setdfd_mongodb_api_process_logs_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mongodb_maindashboard_dfd_v1Props: any 
  setdfd_mongodb_maindashboard_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_tob_consents_request_dfd_v1Props: any 
  setdfd_tob_consents_request_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mongo_barchart_dfd_v1Props: any 
  setdfd_mongo_barchart_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_mongo_linechart_dfd_v1Props: any 
  setdfd_mongo_linechart_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>
  dfd_tob_total_used_api_dfd_v1Props: any 
  setdfd_tob_total_used_api_dfd_v1Props: React.Dispatch<React.SetStateAction<any>>

  refetch: any,
  setRefetch: React.Dispatch<React.SetStateAction<any>>
  searchParam: string,
  setSearchParam: React.Dispatch<React.SetStateAction<string>>
  disableParam: Record<string, boolean>,
  setDisableParam: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
  globalState: Record<string, any>,
  setGlobalState: React.Dispatch<React.SetStateAction<Record<string, any>>>
  // for all textInput validation
  validate: Record<string, any>,
  setValidate: React.Dispatch<React.SetStateAction<Record<string, any>>>

  //its used for validate once again on button click
  validateRefetch: { value: boolean; init: number },
  setValidateRefetch: React.Dispatch<React.SetStateAction<{ value: boolean; init: number }>>
  accessProfile:any,
  setAccessProfile: React.Dispatch<React.SetStateAction<any>>
  memoryVariables: Record<string, string>
  setMemoryVariables: React.Dispatch<React.SetStateAction<Record<string, string>>>
  property: Record<string, any>
  setProperty: React.Dispatch<React.SetStateAction<Record<string, any>>>
  refresh: Record<string, boolean>,
  setRefresh: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
  lockedData: Record<string, any>,
  setLockedData: React.Dispatch<React.SetStateAction<Record<string, any>>>
  paginationDetails: Record<string, any>,
  setpaginationDetails: React.Dispatch<React.SetStateAction<Record<string, any>>>
  eventEmitterData: any,
  setEventEmitterData: React.Dispatch<React.SetStateAction<any>>
  userDetails: Record<string, any>,
  setUserDetails: React.Dispatch<React.SetStateAction<Record<string, any>>>
  encAppFalg: Record<string, any>,
  setEncAppFalg: React.Dispatch<React.SetStateAction<Record<string, any>>>
}

export const TotalContext = React.createContext<TotalContextProps | {}>({})

const GlobalContext = ({children} : {children: React.ReactNode}) => {
    const [currentToken, setCurrentToken ] = React.useState<any>({})
    const [matchedAccessProfileData, setMatchedAccessProfileData] =
    React.useState<any>({})
      //////////
        const [vob_dashboard_screen9ce49, setvob_dashboard_screen9ce49 ] = React.useState<any>({}) 
    const [vob_dashboard_screen9ce49Props, setvob_dashboard_screen9ce49Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [most_groupc5ce0, setmost_groupc5ce0 ] = React.useState<any>({}) 
    const [most_groupc5ce0Props, setmost_groupc5ce0Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [active_group31e18, setactive_group31e18 ] = React.useState<any>({}) 
    const [active_group31e18Props, setactive_group31e18Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [req_groupdf5e7, setreq_groupdf5e7 ] = React.useState<any>({}) 
    const [req_groupdf5e7Props, setreq_groupdf5e7Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [error_groupcf699, seterror_groupcf699 ] = React.useState<any>({}) 
    const [error_groupcf699Props, seterror_groupcf699Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [line_chart_groupadc5c, setline_chart_groupadc5c ] = React.useState<any>({}) 
    const [line_chart_groupadc5cProps, setline_chart_groupadc5cProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [bar_chart_group31635, setbar_chart_group31635 ] = React.useState<any>({}) 
    const [bar_chart_group31635Props, setbar_chart_group31635Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [api_repo_table162e4, setapi_repo_table162e4 ] = React.useState<any>({}) 
    const [api_repo_table162e4Props, setapi_repo_table162e4Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [api_repositoryb1ab8, setapi_repositoryb1ab8 ] = React.useState<any>([]) 
    const [api_repositoryb1ab8Props, setapi_repositoryb1ab8Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
    
    const [connected_application17a5d, setconnected_application17a5d ] = React.useState<any>([]) 
    const [connected_application17a5dProps, setconnected_application17a5dProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [api_info_groupd3ad5, setapi_info_groupd3ad5 ] = React.useState<any>({}) 
    const [api_info_groupd3ad5Props, setapi_info_groupd3ad5Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [info_group5e349, setinfo_group5e349 ] = React.useState<any>({}) 
    const [info_group5e349Props, setinfo_group5e349Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [info_summary_groupa2a0f, setinfo_summary_groupa2a0f ] = React.useState<any>({}) 
    const [info_summary_groupa2a0fProps, setinfo_summary_groupa2a0fProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [api_process_log_groupff19c, setapi_process_log_groupff19c ] = React.useState<any>({}) 
    const [api_process_log_groupff19cProps, setapi_process_log_groupff19cProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [api_process_log655a7, setapi_process_log655a7 ] = React.useState<any>([]) 
    const [api_process_log655a7Props, setapi_process_log655a7Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [consent_logs_group3070a, setconsent_logs_group3070a ] = React.useState<any>({}) 
    const [consent_logs_group3070aProps, setconsent_logs_group3070aProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [consent_logs53635, setconsent_logs53635 ] = React.useState<any>([]) 
    const [consent_logs53635Props, setconsent_logs53635Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [api_usage_group868b4, setapi_usage_group868b4 ] = React.useState<any>({}) 
    const [api_usage_group868b4Props, setapi_usage_group868b4Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [total_api_calls_groupd4dee, settotal_api_calls_groupd4dee ] = React.useState<any>({}) 
    const [total_api_calls_groupd4deeProps, settotal_api_calls_groupd4deeProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [api_call_over_frequency_subscreenb8acc, setapi_call_over_frequency_subscreenb8acc ] = React.useState<any>({}) 
    const [api_call_over_frequency_subscreenb8accProps, setapi_call_over_frequency_subscreenb8accProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7, setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7 ] = React.useState<any>({}) 
    const [ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [api_call_over_hour_group12590, setapi_call_over_hour_group12590 ] = React.useState<any>({}) 
    const [api_call_over_hour_group12590Props, setapi_call_over_hour_group12590Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789, setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789 ] = React.useState<any>({}) 
    const [ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [api_call_over_month_groupd1676, setapi_call_over_month_groupd1676 ] = React.useState<any>({}) 
    const [api_call_over_month_groupd1676Props, setapi_call_over_month_groupd1676Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3, setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3 ] = React.useState<any>({}) 
    const [ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props, setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [api_call_over_week_group03bb6, setapi_call_over_week_group03bb6 ] = React.useState<any>({}) 
    const [api_call_over_week_group03bb6Props, setapi_call_over_week_group03bb6Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [total_used_api_groupcd37d, settotal_used_api_groupcd37d ] = React.useState<any>({}) 
    const [total_used_api_groupcd37dProps, settotal_used_api_groupcd37dProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [list_of_register_tpp_groupbe9d5, setlist_of_register_tpp_groupbe9d5 ] = React.useState<any>({}) 
    const [list_of_register_tpp_groupbe9d5Props, setlist_of_register_tpp_groupbe9d5Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
    
    const [connected_application19ab2, setconnected_application19ab2 ] = React.useState<any>([]) 
    const [connected_application19ab2Props, setconnected_application19ab2Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[],
      refresh:false,
      }) 
        const [group1233a04c, setgroup1233a04c ] = React.useState<any>({}) 
    const [group1233a04cProps, setgroup1233a04cProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [group4549ff98, setgroup4549ff98 ] = React.useState<any>({}) 
    const [group4549ff98Props, setgroup4549ff98Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [group657d5, setgroup657d5 ] = React.useState<any>({}) 
    const [group657d5Props, setgroup657d5Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [group6576622ab, setgroup6576622ab ] = React.useState<any>({}) 
    const [group6576622abProps, setgroup6576622abProps ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
        const [group796798bff3, setgroup796798bff3 ] = React.useState<any>({}) 
    const [group796798bff3Props, setgroup796798bff3Props ] = React.useState<any>({
      validation:false,
      required:false,
      refetch:false,
      refresh:false,
      isDisabled: false,
      presetValues: '',
      isHidden: false,
      selectedIds:[]
      }) 
   const [most_used_apis72497,setmost_used_apis72497] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [active_apisac162,setactive_apisac162] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [total_requests06c5a,settotal_requests06c5a] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [error3d67b,seterror3d67b] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [line_chart0fe1c,setline_chart0fe1c] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [barchart46476,setbarchart46476] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [apinamecccc2,setapinamecccc2] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [version33b3f,setversion33b3f] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [statuscd1e6,setstatuscd1e6] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_category0905e,setapi_category0905e] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [release_date1939f,setrelease_date1939f] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [view_log82d2f,setview_log82d2f] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [app_name800b4,setapp_name800b4] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [tppname5329d,settppname5329d] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [typeb4599,settypeb4599] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [status_value35b5d,setstatus_value35b5d] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_info_labelc7e57,setapi_info_labelc7e57] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [back_button1c484,setback_button1c484] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [global_bank33cbf,setglobal_bank33cbf] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [apinamesf3b7f,setapinamesf3b7f] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [versions69477,setversions69477] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [statuss6320b,setstatuss6320b] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_categorys43935,setapi_categorys43935] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [release_datesd97a1,setrelease_datesd97a1] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_resource_paths6c67f,setapi_resource_paths6c67f] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [apiname45fa8,setapiname45fa8] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [versiona736c,setversiona736c] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [statusddf07,setstatusddf07] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_category95348,setapi_category95348] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [release_dateb41fc,setrelease_dateb41fc] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_resourcepath88fa9,setapi_resourcepath88fa9] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [total_calls5c0ea,settotal_calls5c0ea] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [success_rateee58b,setsuccess_rateee58b] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [error_rate960d3,seterror_rate960d3] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [text1bd13,settext1bd13] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [trs_created_date93619,settrs_created_date93619] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [requestdata1d4f4,setrequestdata1d4f4] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [responsedata35a3f,setresponsedata35a3f] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [tob_consent_requestid80eee,settob_consent_requestid80eee] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [view_logs3bb2b,setview_logs3bb2b] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [textfe486,settextfe486] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [request_consent_baseconsentid4221e,setrequest_consent_baseconsentid4221e] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [interactionid5cd91,setinteractionid5cd91] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [request_consent_permissions1448d,setrequest_consent_permissions1448d] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [consentbody_data_revokedby6ede9,setconsentbody_data_revokedby6ede9] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [request_consent_expiratriondatetime3ba51,setrequest_consent_expiratriondatetime3ba51] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [status61386,setstatus61386] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_usage_overviewecc9e,setapi_usage_overviewecc9e] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [tot_req_icon1fa8f,settot_req_icon1fa8f] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [active_icon42af9,setactive_icon42af9] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [most_used_apis2686b,setmost_used_apis2686b] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [most_used_api_icon6560d,setmost_used_api_icon6560d] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [error_rate72497,seterror_rate72497] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [error_rate_icon89a9a,seterror_rate_icon89a9a] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_call_hours6d062,setapi_call_hours6d062] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_call_hours_dropdown5f803,setapi_call_hours_dropdown5f803] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_call_over_hour_linechart38cfd,setapi_call_over_hour_linechart38cfd] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [api_call_over_month_linechartcc886,setapi_call_over_month_linechartcc886] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [week_linechart709e7,setweek_linechart709e7] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [total_used_api_text0681a,settotal_used_api_text0681a] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [get_accounts_textded93,setget_accounts_textded93] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [get_acc_progressf3140,setget_acc_progressf3140] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [get_account_id_textcfcd9,setget_account_id_textcfcd9] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [get_acc_id_progress564cc,setget_acc_id_progress564cc] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [get_balance_textc22b2,setget_balance_textc22b2] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [get_balance_progressa0d54,setget_balance_progressa0d54] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [get_direct_debits_text067ca,setget_direct_debits_text067ca] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [get_direct_debits_progress04032,setget_direct_debits_progress04032] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [products_textc39eb,setproducts_textc39eb] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [product_progressee376,setproduct_progressee376] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [app_namedc4c5,setapp_namedc4c5] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [tppname5b032,settppname5b032] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [typed4eac,settyped4eac] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [status_value3beb3,setstatus_value3beb3] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [consent_lifecycles11691,setconsent_lifecycles11691] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [text45645c95a7,settext45645c95a7] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [icon56454d73c,seticon56454d73c] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [text23523e7140,settext23523e7140] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [text454513feb,settext454513feb] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [icon5675ee8ba,seticon5675ee8ba] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [text4564580602,settext4564580602] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [textwrwer0e4e1,settextwrwer0e4e1] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [icon234234e2c9a,seticon234234e2c9a] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [textwerweraf6e8,settextwerweraf6e8] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [text3457254757f70,settext3457254757f70] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [icon86986b1a3,seticon86986b1a3] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
   const [text2668f,settext2668f] = React.useState<any>({
    isDisabled: false,
    presetValues: '',
    isHidden: false,
    refetch:false,
    refresh:false,
    }) 
    ///////////
    const [refresh, setRefresh] = React.useState<Record<string, boolean>>({       cardmost_used_apis72497:false,
       cardactive_apisac162:false,
       cardtotal_requests06c5a:false,
       carderror3d67b:false,
       linechartline_chart0fe1c:false,
       barchartbarchart46476:false,
       columnapinamecccc2:false,
       columnversion33b3f:false,
       columnstatuscd1e6:false,
       columnapi_category0905e:false,
       columnrelease_date1939f:false,
       buttonview_log82d2f:false,
       columnapp_name800b4:false,
       columntppname5329d:false,
       columntypeb4599:false,
       columnstatus_value35b5d:false,
       textapi_info_labelc7e57:false,
       buttonback_button1c484:false,
       textglobal_bank33cbf:false,
       labelapinamesf3b7f:false,
       labelversions69477:false,
       labelstatuss6320b:false,
       labelapi_categorys43935:false,
       labelrelease_datesd97a1:false,
       labelapi_resource_paths6c67f:false,
       textinputapiname45fa8:false,
       textinputversiona736c:false,
       textinputstatusddf07:false,
       textinputapi_category95348:false,
       textinputrelease_dateb41fc:false,
       textinputapi_resourcepath88fa9:false,
       cardtotal_calls5c0ea:false,
       cardsuccess_rateee58b:false,
       carderror_rate960d3:false,
       texttext1bd13:false,
       columntrs_created_date93619:false,
       columnrequestdata1d4f4:false,
       columnresponsedata35a3f:false,
       columntob_consent_requestid80eee:false,
       buttonview_logs3bb2b:false,
       texttextfe486:false,
       columnrequest_consent_baseconsentid4221e:false,
       columninteractionid5cd91:false,
       columnrequest_consent_permissions1448d:false,
       columnconsentbody_data_revokedby6ede9:false,
       columnrequest_consent_expiratriondatetime3ba51:false,
       columnstatus61386:false,
       textapi_usage_overviewecc9e:false,
       icontot_req_icon1fa8f:false,
       iconactive_icon42af9:false,
       cardmost_used_apis2686b:false,
       iconmost_used_api_icon6560d:false,
       carderror_rate72497:false,
       iconerror_rate_icon89a9a:false,
       textapi_call_hours6d062:false,
       dropdownapi_call_hours_dropdown5f803:false,
       linechartapi_call_over_hour_linechart38cfd:false,
       linechartapi_call_over_month_linechartcc886:false,
       linechartweek_linechart709e7:false,
       texttotal_used_api_text0681a:false,
       textget_accounts_textded93:false,
       progressget_acc_progressf3140:false,
       textget_account_id_textcfcd9:false,
       progressget_acc_id_progress564cc:false,
       textget_balance_textc22b2:false,
       progressget_balance_progressa0d54:false,
       textget_direct_debits_text067ca:false,
       progressget_direct_debits_progress04032:false,
       textproducts_textc39eb:false,
       progressproduct_progressee376:false,
       columnapp_namedc4c5:false,
       columntppname5b032:false,
       columntyped4eac:false,
       columnstatus_value3beb3:false,
       textconsent_lifecycles11691:false,
       texttext45645c95a7:false,
       iconicon56454d73c:false,
       texttext23523e7140:false,
       texttext454513feb:false,
       iconicon5675ee8ba:false,
       texttext4564580602:false,
       texttextwrwer0e4e1:false,
       iconicon234234e2c9a:false,
       texttextwerweraf6e8:false,
       texttext3457254757f70:false,
       iconicon86986b1a3:false,
       texttext2668f:false,
       groupvob_dashboard_screen9ce49:false,
       groupmost_groupc5ce0:false,
       groupactive_group31e18:false,
       groupreq_groupdf5e7:false,
       grouperror_groupcf699:false,
       groupline_chart_groupadc5c:false,
       groupbar_chart_group31635:false,
       groupapi_repo_table162e4:false,
       tableapi_repositoryb1ab8:false,
       tableconnected_application17a5d:false,
       groupapi_info_groupd3ad5:false,
       groupinfo_group5e349:false,
       groupinfo_summary_groupa2a0f:false,
       groupapi_process_log_groupff19c:false,
       tableapi_process_log655a7:false,
       groupconsent_logs_group3070a:false,
       tableconsent_logs53635:false,
       groupapi_usage_group868b4:false,
       grouptotal_api_calls_groupd4dee:false,
       groupapi_call_over_frequency_subscreenb8acc:false,
       groupCT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Hour_v1e9bb7:false,
       groupapi_call_over_hour_group12590:false,
       groupCT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Month_v1bb789:false,
       groupapi_call_over_month_groupd1676:false,
       groupCT009_AF_UF_UFWS_TOB001_TOB002_API_Call_Over_Week_v1ce1f3:false,
       groupapi_call_over_week_group03bb6:false,
       grouptotal_used_api_groupcd37d:false,
       grouplist_of_register_tpp_groupbe9d5:false,
       tableconnected_application19ab2:false,
       groupgroup1233a04c:false,
       groupgroup4549ff98:false,
       groupgroup657d5:false,
       groupgroup6576622ab:false,
       groupgroup796798bff3:false,
      })

  ////// screen states 
   const [vob_dashboard_screen_v1Props,setvob_dashboard_screen_v1Props] = React.useState<any>([])
   const [vob_api_info_v1Props,setvob_api_info_v1Props] = React.useState<any>([])
   const [vob_consents_log_v1Props,setvob_consents_log_v1Props] = React.useState<any>([])
   const [vob_dashboard_design_v1Props,setvob_dashboard_design_v1Props] = React.useState<any>([])

///////// dfd
  const [dfd_tob_consent_request_ca_dfd_v1Props,setdfd_tob_consent_request_ca_dfd_v1Props] = React.useState<any>([])
  const [dfd_mongo_totalcalls_dfd_v1Props,setdfd_mongo_totalcalls_dfd_v1Props] = React.useState<any>([])
  const [dfd_mongo_api_repository_dfd_v1Props,setdfd_mongo_api_repository_dfd_v1Props] = React.useState<any>([])
  const [dfd_mongodb_api_process_logs_dfd_v1Props,setdfd_mongodb_api_process_logs_dfd_v1Props] = React.useState<any>([])
  const [dfd_mongodb_maindashboard_dfd_v1Props,setdfd_mongodb_maindashboard_dfd_v1Props] = React.useState<any>([])
  const [dfd_tob_consents_request_dfd_v1Props,setdfd_tob_consents_request_dfd_v1Props] = React.useState<any>([])
  const [dfd_mongo_barchart_dfd_v1Props,setdfd_mongo_barchart_dfd_v1Props] = React.useState<any>([])
  const [dfd_mongo_linechart_dfd_v1Props,setdfd_mongo_linechart_dfd_v1Props] = React.useState<any>([])
  const [dfd_tob_total_used_api_dfd_v1Props,setdfd_tob_total_used_api_dfd_v1Props] = React.useState<any>([])
    const [searchParam , setSearchParam] = React.useState<string>("")
    const [disableParam , setDisableParam] = React.useState<Record<string, boolean>>({})
    const [globalState , setGlobalState] = React.useState<Record<string, any>>({})
    const [refetch, setRefetch] = React.useState<any>(false)
    const [validate, setValidate] = React.useState<Record<string, any>>({});
    const [validateRefetch, setValidateRefetch] = React.useState<{ value: boolean; init: number }>({
      value:false,
      init:0
    })
    const [accessProfile, setAccessProfile] = React.useState<any>([])
    const [property, setProperty] = React.useState<any>({})
    const [memoryVariables, setMemoryVariables] = React.useState<any>({})
    const [lockedData, setLockedData] = React.useState<any>({})
    const [paginationDetails, setpaginationDetails] = React.useState<any>({})

    const [eventEmitterData,setEventEmitterData] = React.useState<any>([])
    const [userDetails , setUserDetails] = React.useState<any>({})
    const [encAppFalg , setEncAppFalg] = React.useState<any>({})
    const theme = getCookie('cfg_theme')
    
    
  return (
    <TotalContext.Provider 
      value={
      {
      //
        currentToken,
        setCurrentToken,
        matchedAccessProfileData,
        setMatchedAccessProfileData,
        vob_dashboard_screen9ce49, 
        setvob_dashboard_screen9ce49,
        vob_dashboard_screen9ce49Props, 
        setvob_dashboard_screen9ce49Props,
        most_groupc5ce0, 
        setmost_groupc5ce0,
        most_groupc5ce0Props, 
        setmost_groupc5ce0Props,
        active_group31e18, 
        setactive_group31e18,
        active_group31e18Props, 
        setactive_group31e18Props,
        req_groupdf5e7, 
        setreq_groupdf5e7,
        req_groupdf5e7Props, 
        setreq_groupdf5e7Props,
        error_groupcf699, 
        seterror_groupcf699,
        error_groupcf699Props, 
        seterror_groupcf699Props,
        line_chart_groupadc5c, 
        setline_chart_groupadc5c,
        line_chart_groupadc5cProps, 
        setline_chart_groupadc5cProps,
        bar_chart_group31635, 
        setbar_chart_group31635,
        bar_chart_group31635Props, 
        setbar_chart_group31635Props,
        api_repo_table162e4, 
        setapi_repo_table162e4,
        api_repo_table162e4Props, 
        setapi_repo_table162e4Props,
        api_repositoryb1ab8, 
        setapi_repositoryb1ab8,
        api_repositoryb1ab8Props, 
        setapi_repositoryb1ab8Props,
        connected_application17a5d, 
        setconnected_application17a5d,
        connected_application17a5dProps, 
        setconnected_application17a5dProps,
        api_info_groupd3ad5, 
        setapi_info_groupd3ad5,
        api_info_groupd3ad5Props, 
        setapi_info_groupd3ad5Props,
        info_group5e349, 
        setinfo_group5e349,
        info_group5e349Props, 
        setinfo_group5e349Props,
        info_summary_groupa2a0f, 
        setinfo_summary_groupa2a0f,
        info_summary_groupa2a0fProps, 
        setinfo_summary_groupa2a0fProps,
        api_process_log_groupff19c, 
        setapi_process_log_groupff19c,
        api_process_log_groupff19cProps, 
        setapi_process_log_groupff19cProps,
        api_process_log655a7, 
        setapi_process_log655a7,
        api_process_log655a7Props, 
        setapi_process_log655a7Props,
        consent_logs_group3070a, 
        setconsent_logs_group3070a,
        consent_logs_group3070aProps, 
        setconsent_logs_group3070aProps,
        consent_logs53635, 
        setconsent_logs53635,
        consent_logs53635Props, 
        setconsent_logs53635Props,
        api_usage_group868b4, 
        setapi_usage_group868b4,
        api_usage_group868b4Props, 
        setapi_usage_group868b4Props,
        total_api_calls_groupd4dee, 
        settotal_api_calls_groupd4dee,
        total_api_calls_groupd4deeProps, 
        settotal_api_calls_groupd4deeProps,
        api_call_over_frequency_subscreenb8acc, 
        setapi_call_over_frequency_subscreenb8acc,
        api_call_over_frequency_subscreenb8accProps, 
        setapi_call_over_frequency_subscreenb8accProps,
        ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7, 
        setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7,
        ct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props, 
        setct009_af_uf_ufws_tob001_tob002_api_call_over_hour_v1e9bb7Props,
        api_call_over_hour_group12590, 
        setapi_call_over_hour_group12590,
        api_call_over_hour_group12590Props, 
        setapi_call_over_hour_group12590Props,
        ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789, 
        setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789,
        ct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props, 
        setct009_af_uf_ufws_tob001_tob002_api_call_over_month_v1bb789Props,
        api_call_over_month_groupd1676, 
        setapi_call_over_month_groupd1676,
        api_call_over_month_groupd1676Props, 
        setapi_call_over_month_groupd1676Props,
        ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3, 
        setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3,
        ct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props, 
        setct009_af_uf_ufws_tob001_tob002_api_call_over_week_v1ce1f3Props,
        api_call_over_week_group03bb6, 
        setapi_call_over_week_group03bb6,
        api_call_over_week_group03bb6Props, 
        setapi_call_over_week_group03bb6Props,
        total_used_api_groupcd37d, 
        settotal_used_api_groupcd37d,
        total_used_api_groupcd37dProps, 
        settotal_used_api_groupcd37dProps,
        list_of_register_tpp_groupbe9d5, 
        setlist_of_register_tpp_groupbe9d5,
        list_of_register_tpp_groupbe9d5Props, 
        setlist_of_register_tpp_groupbe9d5Props,
        connected_application19ab2, 
        setconnected_application19ab2,
        connected_application19ab2Props, 
        setconnected_application19ab2Props,
        group1233a04c, 
        setgroup1233a04c,
        group1233a04cProps, 
        setgroup1233a04cProps,
        group4549ff98, 
        setgroup4549ff98,
        group4549ff98Props, 
        setgroup4549ff98Props,
        group657d5, 
        setgroup657d5,
        group657d5Props, 
        setgroup657d5Props,
        group6576622ab, 
        setgroup6576622ab,
        group6576622abProps, 
        setgroup6576622abProps,
        group796798bff3, 
        setgroup796798bff3,
        group796798bff3Props, 
        setgroup796798bff3Props,
        most_used_apis72497,
        setmost_used_apis72497, 
        active_apisac162,
        setactive_apisac162, 
        total_requests06c5a,
        settotal_requests06c5a, 
        error3d67b,
        seterror3d67b, 
        line_chart0fe1c,
        setline_chart0fe1c, 
        barchart46476,
        setbarchart46476, 
        apinamecccc2,
        setapinamecccc2, 
        version33b3f,
        setversion33b3f, 
        statuscd1e6,
        setstatuscd1e6, 
        api_category0905e,
        setapi_category0905e, 
        release_date1939f,
        setrelease_date1939f, 
        view_log82d2f,
        setview_log82d2f, 
        app_name800b4,
        setapp_name800b4, 
        tppname5329d,
        settppname5329d, 
        typeb4599,
        settypeb4599, 
        status_value35b5d,
        setstatus_value35b5d, 
        api_info_labelc7e57,
        setapi_info_labelc7e57, 
        back_button1c484,
        setback_button1c484, 
        global_bank33cbf,
        setglobal_bank33cbf, 
        apinamesf3b7f,
        setapinamesf3b7f, 
        versions69477,
        setversions69477, 
        statuss6320b,
        setstatuss6320b, 
        api_categorys43935,
        setapi_categorys43935, 
        release_datesd97a1,
        setrelease_datesd97a1, 
        api_resource_paths6c67f,
        setapi_resource_paths6c67f, 
        apiname45fa8,
        setapiname45fa8, 
        versiona736c,
        setversiona736c, 
        statusddf07,
        setstatusddf07, 
        api_category95348,
        setapi_category95348, 
        release_dateb41fc,
        setrelease_dateb41fc, 
        api_resourcepath88fa9,
        setapi_resourcepath88fa9, 
        total_calls5c0ea,
        settotal_calls5c0ea, 
        success_rateee58b,
        setsuccess_rateee58b, 
        error_rate960d3,
        seterror_rate960d3, 
        text1bd13,
        settext1bd13, 
        trs_created_date93619,
        settrs_created_date93619, 
        requestdata1d4f4,
        setrequestdata1d4f4, 
        responsedata35a3f,
        setresponsedata35a3f, 
        tob_consent_requestid80eee,
        settob_consent_requestid80eee, 
        view_logs3bb2b,
        setview_logs3bb2b, 
        textfe486,
        settextfe486, 
        request_consent_baseconsentid4221e,
        setrequest_consent_baseconsentid4221e, 
        interactionid5cd91,
        setinteractionid5cd91, 
        request_consent_permissions1448d,
        setrequest_consent_permissions1448d, 
        consentbody_data_revokedby6ede9,
        setconsentbody_data_revokedby6ede9, 
        request_consent_expiratriondatetime3ba51,
        setrequest_consent_expiratriondatetime3ba51, 
        status61386,
        setstatus61386, 
        api_usage_overviewecc9e,
        setapi_usage_overviewecc9e, 
        tot_req_icon1fa8f,
        settot_req_icon1fa8f, 
        active_icon42af9,
        setactive_icon42af9, 
        most_used_apis2686b,
        setmost_used_apis2686b, 
        most_used_api_icon6560d,
        setmost_used_api_icon6560d, 
        error_rate72497,
        seterror_rate72497, 
        error_rate_icon89a9a,
        seterror_rate_icon89a9a, 
        api_call_hours6d062,
        setapi_call_hours6d062, 
        api_call_hours_dropdown5f803,
        setapi_call_hours_dropdown5f803, 
        api_call_over_hour_linechart38cfd,
        setapi_call_over_hour_linechart38cfd, 
        api_call_over_month_linechartcc886,
        setapi_call_over_month_linechartcc886, 
        week_linechart709e7,
        setweek_linechart709e7, 
        total_used_api_text0681a,
        settotal_used_api_text0681a, 
        get_accounts_textded93,
        setget_accounts_textded93, 
        get_acc_progressf3140,
        setget_acc_progressf3140, 
        get_account_id_textcfcd9,
        setget_account_id_textcfcd9, 
        get_acc_id_progress564cc,
        setget_acc_id_progress564cc, 
        get_balance_textc22b2,
        setget_balance_textc22b2, 
        get_balance_progressa0d54,
        setget_balance_progressa0d54, 
        get_direct_debits_text067ca,
        setget_direct_debits_text067ca, 
        get_direct_debits_progress04032,
        setget_direct_debits_progress04032, 
        products_textc39eb,
        setproducts_textc39eb, 
        product_progressee376,
        setproduct_progressee376, 
        app_namedc4c5,
        setapp_namedc4c5, 
        tppname5b032,
        settppname5b032, 
        typed4eac,
        settyped4eac, 
        status_value3beb3,
        setstatus_value3beb3, 
        consent_lifecycles11691,
        setconsent_lifecycles11691, 
        text45645c95a7,
        settext45645c95a7, 
        icon56454d73c,
        seticon56454d73c, 
        text23523e7140,
        settext23523e7140, 
        text454513feb,
        settext454513feb, 
        icon5675ee8ba,
        seticon5675ee8ba, 
        text4564580602,
        settext4564580602, 
        textwrwer0e4e1,
        settextwrwer0e4e1, 
        icon234234e2c9a,
        seticon234234e2c9a, 
        textwerweraf6e8,
        settextwerweraf6e8, 
        text3457254757f70,
        settext3457254757f70, 
        icon86986b1a3,
        seticon86986b1a3, 
        text2668f,
        settext2668f, 
        ////// screen states 
          vob_dashboard_screen_v1Props,
          setvob_dashboard_screen_v1Props,
          vob_api_info_v1Props,
          setvob_api_info_v1Props,
          vob_consents_log_v1Props,
          setvob_consents_log_v1Props,
          vob_dashboard_design_v1Props,
          setvob_dashboard_design_v1Props,
        //////////

        ///////// dfd
        dfd_tob_consent_request_ca_dfd_v1Props,
        setdfd_tob_consent_request_ca_dfd_v1Props,
        dfd_mongo_totalcalls_dfd_v1Props,
        setdfd_mongo_totalcalls_dfd_v1Props,
        dfd_mongo_api_repository_dfd_v1Props,
        setdfd_mongo_api_repository_dfd_v1Props,
        dfd_mongodb_api_process_logs_dfd_v1Props,
        setdfd_mongodb_api_process_logs_dfd_v1Props,
        dfd_mongodb_maindashboard_dfd_v1Props,
        setdfd_mongodb_maindashboard_dfd_v1Props,
        dfd_tob_consents_request_dfd_v1Props,
        setdfd_tob_consents_request_dfd_v1Props,
        dfd_mongo_barchart_dfd_v1Props,
        setdfd_mongo_barchart_dfd_v1Props,
        dfd_mongo_linechart_dfd_v1Props,
        setdfd_mongo_linechart_dfd_v1Props,
        dfd_tob_total_used_api_dfd_v1Props,
        setdfd_tob_total_used_api_dfd_v1Props,
        refetch,
        setRefetch,
        searchParam,
        setSearchParam,
        disableParam,
        setDisableParam,
        globalState,
        setGlobalState,
        validate,
        setValidate,
        validateRefetch,
        setValidateRefetch,
        accessProfile,
        setAccessProfile,
        property,
        setProperty,
        setRefresh,
        refresh,
        memoryVariables,
        setMemoryVariables,
        lockedData,
        setLockedData,
        paginationDetails,
        setpaginationDetails,
        eventEmitterData,
        setEventEmitterData,
        userDetails,
        setUserDetails,
        encAppFalg,
        setEncAppFalg
        }}
      >
      {children}
    </TotalContext.Provider>
  )
}

export default GlobalContext