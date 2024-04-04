"use strict";(self.webpackChunknomadd=self.webpackChunknomadd||[]).push([[1666],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>p});var o=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,l=function(e,r){if(null==e)return{};var t,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=o.createContext({}),d=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return o.createElement(u.Provider,{value:r},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},b=o.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=d(t),b=l,p=s["".concat(u,".").concat(b)]||s[b]||v[b]||n;return t?o.createElement(p,i(i({ref:r},c),{},{components:t})):o.createElement(p,i({ref:r},c))}));function p(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,i=new Array(n);i[0]=b;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[s]="string"==typeof e?e:l,i[1]=a;for(var d=2;d<n;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},4234:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>v,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=t(7462),l=(t(7294),t(3905));const n={sidebar_position:3,id:"alerts",title:"Alerts",displayed_sidebar:"User Manual"},i=void 0,a={unversionedId:"user-manual/alerts",id:"user-manual/alerts",title:"Alerts",description:"Overview",source:"@site/docs/user-manual/alerts.md",sourceDirName:"user-manual",slug:"/user-manual/alerts",permalink:"/docs/user-manual/alerts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-manual/alerts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"alerts",title:"Alerts",displayed_sidebar:"User Manual"},sidebar:"User Manual",previous:{title:"Logs",permalink:"/docs/user-manual/logs"},next:{title:"Configuration",permalink:"/docs/user-manual/configuration"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"List of all alerts",id:"list-of-all-alerts",level:2},{value:"Motor1Ctr",id:"motor1ctr",level:4},{value:"Motor2Ctr",id:"motor2ctr",level:4},{value:"Motor3Ctr",id:"motor3ctr",level:4},{value:"Motor4Ctr",id:"motor4ctr",level:4},{value:"Motor5Ctr",id:"motor5ctr",level:4},{value:"bNoBatt_Err",id:"bnobatt_err",level:4},{value:"bLowBatt_Err",id:"blowbatt_err",level:4},{value:"bNoSolarPnl_Err",id:"bnosolarpnl_err",level:4},{value:"bLowSolarPnl_Err",id:"blowsolarpnl_err",level:4},{value:"bUnDocked_Err",id:"bundocked_err",level:4},{value:"bLeaveDockTimeout_Err",id:"bleavedocktimeout_err",level:4},{value:"bS1FwdTimeout_Err",id:"bs1fwdtimeout_err",level:4},{value:"bS2FwdTimeout_Err",id:"bs2fwdtimeout_err",level:4},{value:"bHitRailEndSensor_Err",id:"bhitrailendsensor_err",level:4},{value:"bS3BckTimeout_Err",id:"bs3bcktimeout_err",level:4},{value:"bS2BckTimeout_Err",id:"bs2bcktimeout_err",level:4},{value:"bDockTimeout_Err",id:"bdocktimeout_err",level:4},{value:"bFindingHomeRunTimeout_Err",id:"bfindinghomeruntimeout_err",level:4},{value:"bDC_CriticalSupplyVolt_Err",id:"bdc_criticalsupplyvolt_err",level:4},{value:"bDC_DewPresent_Err",id:"bdc_dewpresent_err",level:4},{value:"Safety Stop",id:"safety-stop",level:4},{value:"bSupplyVoltCritical_Err",id:"bsupplyvoltcritical_err",level:4},{value:"bInternalTempCritical_Err",id:"binternaltempcritical_err",level:4},{value:"bMotor1OverCurrent_Err",id:"bmotor1overcurrent_err",level:4},{value:"bMotor2OverCurrent_Err",id:"bmotor2overcurrent_err",level:4},{value:"bMotor3OverCurrent_Err",id:"bmotor3overcurrent_err",level:4},{value:"bMotor4OverCurrent_Err",id:"bmotor4overcurrent_err",level:4},{value:"bMotor5OverCurrent_Err",id:"bmotor5overcurrent_err",level:4},{value:"bRailMotorOverCurrent_Err",id:"brailmotorovercurrent_err",level:4},{value:"bBrushMotorOverCurrent_Err",id:"bbrushmotorovercurrent_err",level:4},{value:"bUnknown_Err",id:"bunknown_err",level:4},{value:"RPMTargetViolationWarning",id:"rpmtargetviolationwarning",level:4},{value:"RPMTargetViolation",id:"rpmtargetviolation",level:4},{value:"FindHomeActivated",id:"findhomeactivated",level:4},{value:"Reserved 4",id:"reserved-4",level:4},{value:"AutoFindHomeCanceled",id:"autofindhomecanceled",level:4},{value:"bAlreadyAtDock",id:"balreadyatdock",level:4},{value:"bMotorStalled",id:"bmotorstalled",level:4},{value:"bChargingRateAlert",id:"bchargingratealert",level:4},{value:"bInternalTempWarning",id:"binternaltempwarning",level:4}],c={toc:d},s="wrapper";function v(e){let{components:r,...t}=e;return(0,l.kt)(s,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Description of the Main page..."),(0,l.kt)("h2",{id:"list-of-all-alerts"},"List of all alerts"),(0,l.kt)("h4",{id:"motor1ctr"},"Motor1Ctr"),(0,l.kt)("p",null,"Issue with Motor1 Control has been detected."),(0,l.kt)("h4",{id:"motor2ctr"},"Motor2Ctr"),(0,l.kt)("p",null,"Issue with Motor2 Control has been detected."),(0,l.kt)("h4",{id:"motor3ctr"},"Motor3Ctr"),(0,l.kt)("p",null,"Issue with Motor3 Control has been detected."),(0,l.kt)("h4",{id:"motor4ctr"},"Motor4Ctr"),(0,l.kt)("p",null,"Issue with Motor4 Control has been detected."),(0,l.kt)("h4",{id:"motor5ctr"},"Motor5Ctr"),(0,l.kt)("p",null,"Issue with Motor5 Control has been detected."),(0,l.kt)("h4",{id:"bnobatt_err"},"bNoBatt_Err"),(0,l.kt)("p",null,"Battery level critical."),(0,l.kt)("h4",{id:"blowbatt_err"},"bLowBatt_Err"),(0,l.kt)("p",null,"Battery Charge is below Set warning point."),(0,l.kt)("h4",{id:"bnosolarpnl_err"},"bNoSolarPnl_Err"),(0,l.kt)("p",null,"Charge Rate Critical."),(0,l.kt)("h4",{id:"blowsolarpnl_err"},"bLowSolarPnl_Err"),(0,l.kt)("p",null,"Charge Rate is low."),(0,l.kt)("h4",{id:"bundocked_err"},"bUnDocked_Err"),(0,l.kt)("p",null,"Cannot Run - Not Docked."),(0,l.kt)("h4",{id:"bleavedocktimeout_err"},"bLeaveDockTimeout_Err"),(0,l.kt)("p",null,"Timeout leaving the dock."),(0,l.kt)("h4",{id:"bs1fwdtimeout_err"},"bS1FwdTimeout_Err"),(0,l.kt)("p",null,"Timeout Crossing Segment 1 - Forwards."),(0,l.kt)("h4",{id:"bs2fwdtimeout_err"},"bS2FwdTimeout_Err"),(0,l.kt)("p",null,"Timeout Crossing Segment 2 - Forwards."),(0,l.kt)("h4",{id:"bhitrailendsensor_err"},"bHitRailEndSensor_Err"),(0,l.kt)("p",null,"End of Row Safety Sensor Hit."),(0,l.kt)("h4",{id:"bs3bcktimeout_err"},"bS3BckTimeout_Err"),(0,l.kt)("p",null,"Timeout Crossing Segment 3 - Backwards."),(0,l.kt)("h4",{id:"bs2bcktimeout_err"},"bS2BckTimeout_Err"),(0,l.kt)("p",null,"Timeout Crossing Segment 2 - Backwards."),(0,l.kt)("h4",{id:"bdocktimeout_err"},"bDockTimeout_Err"),(0,l.kt)("p",null,"Timeout Attempting to Dock."),(0,l.kt)("h4",{id:"bfindinghomeruntimeout_err"},"bFindingHomeRunTimeout_Err"),(0,l.kt)("p",null,"Timeout Finding Home."),(0,l.kt)("h4",{id:"bdc_criticalsupplyvolt_err"},"bDC_CriticalSupplyVolt_Err"),(0,l.kt)("p",null,"Cannot Duty Cycle.  Supply Voltage level Critical"),(0,l.kt)("h4",{id:"bdc_dewpresent_err"},"bDC_DewPresent_Err"),(0,l.kt)("p",null,"Dew is present - Will not run now."),(0,l.kt)("h4",{id:"safety-stop"},"Safety Stop"),(0,l.kt)("p",null,"Safety Stop On."),(0,l.kt)("h4",{id:"bsupplyvoltcritical_err"},"bSupplyVoltCritical_Err"),(0,l.kt)("p",null,"Supply Voltage level Critical."),(0,l.kt)("h4",{id:"binternaltempcritical_err"},"bInternalTempCritical_Err"),(0,l.kt)("p",null,"Internal Tempreture too high."),(0,l.kt)("h4",{id:"bmotor1overcurrent_err"},"bMotor1OverCurrent_Err"),(0,l.kt)("p",null,"Motor2 Overcurrent Detected."),(0,l.kt)("h4",{id:"bmotor2overcurrent_err"},"bMotor2OverCurrent_Err"),(0,l.kt)("p",null,"Motor2 Overcurrent Detected."),(0,l.kt)("h4",{id:"bmotor3overcurrent_err"},"bMotor3OverCurrent_Err"),(0,l.kt)("p",null,"Motor3 Overcurrent Detected."),(0,l.kt)("h4",{id:"bmotor4overcurrent_err"},"bMotor4OverCurrent_Err"),(0,l.kt)("p",null,"Motor4 Overcurrent Detected."),(0,l.kt)("h4",{id:"bmotor5overcurrent_err"},"bMotor5OverCurrent_Err"),(0,l.kt)("p",null,"Motor5 Overcurrent Detected."),(0,l.kt)("h4",{id:"brailmotorovercurrent_err"},"bRailMotorOverCurrent_Err"),(0,l.kt)("p",null,'  Description: "Rail Motor Overcurrent Detected.'),(0,l.kt)("h4",{id:"bbrushmotorovercurrent_err"},"bBrushMotorOverCurrent_Err"),(0,l.kt)("p",null,'  Description: "Brush Motor Overcurrent Detected.'),(0,l.kt)("h4",{id:"bunknown_err"},"bUnknown_Err"),(0,l.kt)("p",null,"An Unknown Error has Occured (Bit 22 of Alert Record)."),(0,l.kt)("h4",{id:"rpmtargetviolationwarning"},"RPMTargetViolationWarning"),(0,l.kt)("p",null,"Wind overspeed detected.  Nomadd has reduced it's target speed accordingly."),(0,l.kt)("h4",{id:"rpmtargetviolation"},"RPMTargetViolation"),(0,l.kt)("p",null,"Brakes have been applied to the rail motor to prevent overspeed."),(0,l.kt)("h4",{id:"findhomeactivated"},"FindHomeActivated"),(0,l.kt)("p",null,"Find Home Activated"),(0,l.kt)("h4",{id:"reserved-4"},"Reserved 4"),(0,l.kt)("p",null,"Reserved 4"),(0,l.kt)("h4",{id:"autofindhomecanceled"},"AutoFindHomeCanceled"),(0,l.kt)("p",null,"Auto Find Home Failure. Auto Find Home has been canceled."),(0,l.kt)("h4",{id:"balreadyatdock"},"bAlreadyAtDock"),(0,l.kt)("p",null,"Already At Dock."),(0,l.kt)("h4",{id:"bmotorstalled"},"bMotorStalled"),(0,l.kt)("p",null,"A Motor has 0 RPM when it should be running."),(0,l.kt)("h4",{id:"bchargingratealert"},"bChargingRateAlert"),(0,l.kt)("p",null,"Charging Rate Critical."),(0,l.kt)("h4",{id:"binternaltempwarning"},"bInternalTempWarning"),(0,l.kt)("p",null,"Internal Tempreture Warning."))}v.isMDXComponent=!0}}]);