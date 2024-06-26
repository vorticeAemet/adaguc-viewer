var baseLayerConfiguration = [
  {
    name:"OSM",
    title:"Open streetmap",
    type: 'twms',
    enabled:true
  },
  {
    name:"TERRAIN",
    title:"terrain",
    type: 'twms',
    enabled:false
  },
  {
    name:"LITE",
    title:"toner-lite",
    type: 'twms',
    enabled:false
  },
  {
    service: "https://geoservices.knmi.nl/wms?DATASET=baselayers&",
    name: "countryborders",
    format: "image/png",
    title: "World country borders",
    enabled: true,
    keepOnTop: true,
  },

];

//var defaultProjection = {srs:'EPSG:4326',bbox:'-180,-90,180,90'};

//var defaultProjection = {srs:'EPSG:3857',bbox:'-19000000,-12000000,19000000,16000000'};

var defaultProjection = {srs:'EPSG:3857',bbox:'-3900000,3000000,3500000,8300000'};

var hashLocationNotfiyAddLayer = false;

var getFeatureInfoApplications = [
  {name:'Time series mode',iconCls:'button_getfeatureinfo',location:'apps/gfiapp_d3c3.html'}
  //,{name:'Glameps application',iconCls:'button_getfeatureinfo',location:'../gfiapps/GLAMEPS_gfiapp.html'}
];
var dataChooserConfiguration = [];

var dataChooserConfigurationAdd = [
  {
    title:'VIS ALTA RES',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=HRV-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HRV-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=HRV-REFN&',
        layer:'HRV-REFN_data'
  },{
    title:'VIS06',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS06-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=VIS06-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS06-REFN&',
        layer:'VIS06-REFN_data'
  },{
    title:'WV62 RAD',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=WV62-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV62-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=WV62-BT&',
        layer:'WV62-BT_data'
  },{
    title:'IR108 BT',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&',
        layer:'IR108-BT_data'
  },{
    title:'LIGHTNING',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//wms?DATASET=LIGHTNING&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,LIGHTNING_lightningAddLayers&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=LIGHTNING&',
    layer:'LIGHTNING_lightningTimePeriod',
  },{ 
    title:'METAR',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=METAR&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,T_Td_Vis&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=METAR&&service=WMS&request=GetCapabilities',
    layer:'T_Td_Vis'
  },{ 
    title:'OPERA-RATE',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA-COMP-RATE&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,OPERA_rainfall_rate&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA-COMP-RATE&&service=WMS&request=GetCapabilities',
    layer:'OPERA_rainfall_rate'
  },{
    title:'CRR',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CRR_crr_intensity,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR&',
        layer:'CRR_crr_intensity'
  },{
    title:'CRR-Ph',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR-Ph&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CRR-Ph_crrph_intensity,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR-Ph&',
        layer:'CRR-Ph_crrph_intensity'
  },{
    title:'PC',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=PC&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=PC_pc,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=PC&',
        layer:'PC_pc'
  },{
    title:'CI',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CI_ci_prob90,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CI&',
        layer:'CI_ci_prob90'
  },{
    title:'LIFTED INDEX',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=iSHAI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=iSHAI_IR_band,iSHAI_ishai_li,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=PRECONV&',
        layer:'LIFTED'
  },{
    title:'HUMIDITY DIF NWP/MSG',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=iSHAI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=iSHAI_IR_band,iSHAI_ishai_diffml,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=PRECONV&',
        layer:'DIFFERENCES'
  },{
    title:'RDT',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RDT_NOW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,RDT&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//wms?DATASET=RDT_NOW&',
        layer:'RDT'  
  },{
    title:'CTTH-FL',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IMASK_imask_ctth_FL,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&',
        layer:'IMASK_imask_ctth_FL'
  },{
    title:'ASII-TF',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-TF&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ASII-TF_asii_turb_trop_prob,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-TF&',
        layer:'ASII-TF_asii_turb_trop_prob'
  },{
    title:'ASII-GW',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-GW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ASII-GW_asii_turb_wave_prob,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-GW&',
        layer:'ASII-GW_asii_turb_wave_prob'
  },{
    title:'IMASK',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IMASK_imask,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&',
        layer:'IMASK_imask'
  },{
    title:'WIND',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=HRW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,windHRW&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=HRW&',
        layer:'Wind_pressure'
  },{
    title:'CT',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CT_ct,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&',
        layer:'CT_ct'
  },{
    title:'EXIM-CT',
        thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CT_ct,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EXIM-CT&',
        layer:'EXIM_CT_ct'
  },{
    title:'EMAS',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multiLayer&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multiLayer'
  }
  
];

var dataChooserConfigurationNWC = [];

var dataChooserConfigurationMSG = [
  {title:'Airmass',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Airmass,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Airmass'
},{
  title:'Ash',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ash,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Ash'
},{
  title:'CloudtopDaytime',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CloudtopDaytime,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'CloudtopDaytime'
},{
  title:'Cloudtop',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Cloudtop,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Cloudtop'
},{
  title:'ColorizedIrClouds',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ColorizedIrClouds,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'ColorizedIrClouds'
},{
  title:'Convection',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Convection,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Convection'
},{
  title:'Sandwich',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IrSandwich,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'IrSandwich'
},{
  title:'DayMicrophysics',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=DayMicrophysics,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'DayMicrophysics'
},{
  title:'DayMicrophysicsWinter',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=DayMicrophysicsWinter,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'DayMicrophysicsWinter'
},{
  title:'Dust',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Dust,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Dust'
},{
  title:'Fog',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Fog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Fog'
},{
  title:'HrvFog',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HrvFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'HrvFog'
},{
  title:'Snow',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Snow,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Snow'
},{
  title:'NaturalColor',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalColor,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalColor'
},{
  title:'NaturalWithNightFog',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalWithNightFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalWithNightFog'
},{
  title:'NightFog',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NightFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NightFog'
},{
  title:'NightMicrophysics',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NightMicrophysics,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NightMicrophysics'
},{
  title:'Overview',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Overview,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Overview'
},{
  title:'HIGH RES',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=HRV-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HRV-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=HRV-REFN&',
      layer:'HRV-REFN_data'
},{
  title:'VIS06',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS06-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=VIS06-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS06-REFN&',
      layer:'VIS06-REFN_data'
},{
  title:'VIS08',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS08-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=VIS08-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS08-REFN&',
      layer:'VIS08-REFN_data'
},{
  title:'IR38 BT',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR38-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR38-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR38-BT&',
      layer:'IR38-BT_data'
},{
  title:'IR87 BT',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR87-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR87-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR87-BT&',
      layer:'IR87-BT_data'
},{
  title:'IR97 BT',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR97-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR97-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR97-BT&',
      layer:'IR97-BT_data'
},{
  title:'IR108 BT',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&',
      layer:'IR108-BT_data'
},{
  title:'IR120 BT',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR120-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR120-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR120-BT&',
      layer:'IR120-BT_data'
},{
  title:'IR134 BT',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR134-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR134-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IR134-BT&',
      layer:'IR134-BT_data'
},{
  title:'WV62 RAD',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=WV62-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV62-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=WV62-BT&',
      layer:'WV62-BT_data'
},{
  title:'WV73 RAD',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=WV73-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV73-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=WV73-BT&',
      layer:'WV73-BT_data'
}];

var dataChooserConfigurationIRIS = [];

var dataChooserConfigurationNWP = [ {title:'Ceiling_ground_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ceiling_Ground_IFS_HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Ceiling_Ground_IFS_HRES_00'
},{title:'Ceiling_sea_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ceiling_Sea_IFS_HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Ceiling_Sea_IFS_HRES_00'
},{title:'Low_clouds_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Low_Clouds_IFS_HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Low_Clouds_IFS_HRES_00'
},{title:'Medium_clouds_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Medium_Clouds_IFS_HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Medium_Clouds_IFS_HRES_00'
},{title:'IR108_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108_IFS_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'IR108_IFS_00'
},{title:'Enhanced_IR108_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Enhanced_IR108_IFS_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'Enhanced_IR108_IFS_00'
},{title:'WV62_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV62_IFS_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'WV62_IFS_00'
},{title:'Boundary_Layer_Height_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Boundary_Layer_Height_IFS-HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'Boundary_Layer_Height_IFS-HRES_00'
},{title:'Surface_Turbulence_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=SFC_TURB_IFS-HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'SFC_TURB_IFS-HRES_00'
},{title:'TI1_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=TI1_IFS-HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'TI1_IFS-HRES_00'
},{title:'TI2_00',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=TI2_IFS-HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'TI2_IFS-HRES_00'
},{title:'Ceiling_ground_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ceiling_Ground_IFS_HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Ceiling_Ground_IFS_HRES_12'
},{title:'Ceiling_sea_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ceiling_Sea_IFS_HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Ceiling_Sea_IFS_HRES_12'
},{title:'Low_clouds_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Low_Clouds_IFS_HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Low_Clouds_IFS_HRES_12'
},{title:'Medium_clouds_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Medium_Clouds_IFS_HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Medium_Clouds_IFS_HRES_12'
},{title:'IR108_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108_IFS_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'IR108_IFS_12'
},{title:'Enhanced_IR108_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Enhanced_IR108_IFS_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'Enhanced_IR108_IFS_12'
},{title:'WV62_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV62_IFS_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'WV62_IFS_12'
},{title:'Boundary_Layer_Height_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Boundary_Layer_Height_IFS-HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'Boundary_Layer_Height_IFS-HRES_12'
},{title:'Surface_Turbulence_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=SFC_TURB_IFS-HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'SFC_TURB_IFS-HRES_12'
},{title:'TI1_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=TI1_IFS-HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'TI1_IFS-HRES_12'
},{title:'TI2_12',
      thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=TI2_IFS-HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'TI2_IFS-HRES_12'
}];

var dataChooserConfigurationEMA = [
  {
    title:'THIES',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_THIES&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_THIES'
  },{
    title:'SEACV2',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_SEACV2&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_SEACV2'
  },{
    title:'VAISALA',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_VAISALA&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_VAISALA'
  },{
title:'ESOC',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_ESOC&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_ESOC'
  },{
title:'ESOS',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_ESOS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_ESOS'
  },{
title:'NSIM',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_NSIM&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_NSIM'
  },{
title:'FTP',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_FTP&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_FTP'
  },{
title:'SIMAS',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_SIMAS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_SIMAS'
  },{
title:'SOSS',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_SOSS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_SOSS'
  }
,{
	  title:'CAMPBELL',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_CAMPBELL&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_CAMPBELL'
  },{
	  title:'OTRAS',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_OTRAS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_SIMAS'
  },{
	  title:'RESTO',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_RESTO&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_RESTO'
  },{
    title:'TODAS',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multiLayer&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multiLayer'
  },{
    title:'TODAS',
    thumbnail:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multiLayer&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://dorsal.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multiLayer'
  }
];

var mapTypeConfiguration = [  {
    title: "World WGS84",
    bbox: [-180, -90, 180, 90],
    srs: "EPSG:4326",
    baselayer: {
      service: "",
      name: "WorldMap",
      type: "twms",
    },
  },
  {
    title: "Robinson",
    bbox: [
      -17036744.451383516,
      -10711364.114367772,
      16912038.081015453,
      10488456.659686875,
    ],
    srs: "EPSG:54030",
    baselayer: {
      service: "",
      name: "WorldMap",
      type: "twms",
    },
  },
  {
    title: "World Mercator",
    bbox: [-19000000, -19000000, 19000000, 19000000],
    srs: "EPSG:3857",
    baselayer: {
      service: "",
      name: "WorldMap",
      type: "twms",
    },
  },
  {
    title: "Openstreetmap",
    bbox: [-19000000, -19000000, 19000000, 19000000],
    srs: "EPSG:3857",
    baselayer: {
      service: "",
      name: "OpenStreetMap_Service",
      type: "twms",
    },
  },
  {
    title: "Northern Hemisphere",
    bbox: [
      -5661541.927991125,
      -3634073.745615984,
      5795287.923063262,
      2679445.334384017,
    ],
    srs: "EPSG:3411",
    baselayer: {
      service: "",
      name: "NaturalEarth2",
      type: "twms",
    },
  },
  {
    title: "Southern Hemisphere",
    bbox: [
      -4589984.273212382,
      -2752857.546211313,
      5425154.657417289,
      2986705.2537886878,
    ],
    srs: "EPSG:3412",
    baselayer: {
      service: "",
      name: "NaturalEarth2",
      type: "twms",
    },
  },
  {
    title: "Europe North Pole",
    bbox: [-13000000, -13000000, 13000000, 13000000],
    srs: "EPSG:3575",
    baselayer: {
      service: "",
      name: "NaturalEarth2",
      type: "twms",
    },
  },

  {
    title: "Europe stereographic",
    bbox: [
      -2776118.977564746,
      -6499490.259201691,
      9187990.785775745,
      971675.53185069,
    ],
    srs: "EPSG:32661",
    baselayer: {
      service: "",
      name: "NaturalEarth2",
      type: "twms",
    },
  },
    
];

var defaultLanguage = { language: 'en' }; // <-- Language for the ADAGUC viewer.
var defaultUsernameSearch = "dorsalops"; // <-- Username for the GeoNames API. 1
var geoNamesURL = "http://api.geonames.org/search?q={searchTerm}&username={username}&maxRows=1"; // <-- URL for the GeoNames API. Requires 'defaultUsernameSearch'    

var webMapJSSettings = {
  enableTouchDevice:true
}

//FOR JSP:
/*
var xml2jsonrequestURL = "/impactportal/AdagucViewer?SERVICE=XML2JSON&";
var requestProxy = "/impactportal/AdagucViewer?SERVICE=PROXY&";
*/

//For PHP:
var requestProxy       = "./webmapjs_php/MakeRequest.php?";
var xml2jsonrequestURL = "./webmapjs_php/xml2jsonrequest.php?"

// getFeatureInfoApplications.push({name:'EProfile',iconCls:'button_getfeatureinfo'});
getFeatureInfoApplications.push({name:'AutoWMS',iconCls:'button_getfeatureinfo'});
// getFeatureInfoApplications.open = 'EProfile';
// xml2jsonrequestURL = 'http://localhost:8080/adaguc-services/xml2json?'
// autowmsURL = 'http://localhost:8080/adaguc-services/autowms?';
// getFeatureInfoApplications.push({name:'AutoWMS',iconCls:'button_getfeatureinfo'});

var WMJSTileRendererTileSettings = {
 
  OSM: {
    'EPSG:3857': {
      home: 'https://b.tile.openstreetmap.org/',
      minLevel: 1,
      maxLevel: 16,
      tileServerType: 'osm',
      copyRight: 'Open Street Map'
    },
    'EPSG:28992': {
      home: 'http://services.arcgisonline.nl/ArcGIS/rest/services/Basiskaarten/PDOK_BRT/MapServer/tile/',
      minLevel: 1,
      maxLevel: 12,
      origX:-285401.92,
      origY:903401.92,
      resolution:3440.64,
      tileServerType: 'arcgisonline',
      copyRight: 'Basiskaart bronnen: PDOK, Kadaster, OpenStreetMap'
    }
  },
 TERRAIN: {
    'EPSG:3857': {
      home: 'http://d.tile.stamen.com/terrain/',
      minLevel: 1,
      maxLevel: 20,
      tileServerType: 'osm',
      copyRight: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    },
    'EPSG:28992': {
      home: 'http://services.arcgisonline.nl/ArcGIS/rest/services/Basiskaarten/PDOK_BRT/MapServer/tile/',
      minLevel: 1,
      maxLevel: 12,
      origX:-285401.92,
      origY:903401.92,
      resolution:3440.64,
      tileServerType: 'arcgisonline',
      copyRight: 'Basiskaart bronnen: PDOK, Kadaster, OpenStreetMap'
    }
  },
 LITE: {
    'EPSG:3857': {
      home: 'http://b.tile.stamen.com/toner-lite/',
      minLevel: 1,
      maxLevel: 20,
      tileServerType: 'osm',
      copyRight: 'Open Street Map'
    },
    'EPSG:28992': {
      home: 'http://services.arcgisonline.nl/ArcGIS/rest/services/Basiskaarten/PDOK_BRT/MapServer/tile/',
      minLevel: 1,
      maxLevel: 12,
      origX:-285401.92,
      origY:903401.92,
      resolution:3440.64,
      tileServerType: 'arcgisonline',
      copyRight: 'Basiskaart bronnen: PDOK, Kadaster, OpenStreetMap'
    }
  },
  WorldMap_Light_Grey_Canvas: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap_Light_Grey_Canvas/EPSG3857/",
      minLevel: 0,
      maxLevel: 9,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
  },
  OpenStreetMap_NL: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/OpenStreetMap_NL/EPSG3857/",
      minLevel: 0,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors | Ingmapping",
    },
  },
  OpenStreets_NL: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/OpenStreets_NL/EPSG3857/",
      minLevel: 0,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors | Ingmapping",
    },
    "EPSG:28992": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/OpenStreets_NL/EPSG28992/",
      minLevel: 0,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
  },
  Positron_NL: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/Positron_NL/EPSG3857/",
      minLevel: 0,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors | OpenMapTiles | Ingmapping",
    },
  },
  Positron_NL_NoLabels: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/Positron_NL_NoLabels/EPSG3857/",
      minLevel: 0,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors | OpenMapTiles | Ingmapping",
    },
  },
  Klokantech_Basic_NL: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/Klokantech_Basic_NL/EPSG3857/",
      minLevel: 0,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors | OpenMapTiles | Ingmapping",
    },
  },
  Klokantech_Basic_NL_NoLabels: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/Klokantech_Basic_NL_NoLabels/EPSG3857/",
      minLevel: 0,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors | OpenMapTiles | Ingmapping",
    },
  },
  OSM_Blossom_NL: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/OSM_Blossom_NL/EPSG3857/",
      minLevel: 0,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors | Ingmapping",
    },
  },
  WorldMap: {
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap/EPSG3857/",
      minLevel: 0,
      maxLevel: 9,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
    "TODO__EPSG:4326": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap/EPSG4326/",
      minLevel: 0,
      maxLevel: 9,
      origX: -180,
      origY: 90,
      resolution: 1.422222,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
    "EPSG:3411": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap/EPSG3411/",
      minLevel: 3,
      maxLevel: 9,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
    "EPSG:28992": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap/EPSG28992/",
      minLevel: 5,
      maxLevel: 9,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
    "EPSG:3412": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap/EPSG3412/",
      minLevel: 3,
      maxLevel: 9,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
    "EPSG:32661": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap/EPSG32661/",
      minLevel: 4,
      maxLevel: 9,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
    "EPSG:54030": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap/EPSG54030/",
      minLevel: 3,
      maxLevel: 9,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
    "EPSG:3575-disabled": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/WorldMap/EPSG3575/",
      minLevel: 5,
      maxLevel: 9,
      tileServerType: "osm",
      copyRight: "Natural Earth II | Ingmapping",
    },
  },
  OSM_Antarctica: {
    "EPSG:3412": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/OSM_Antarctica/EPSG3412/",
      minLevel: 1,
      maxLevel: 7,
      origX: -3000000,
      origY: 3000000,
      resolution: 23437.5,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors | Ingmapping",
    },
  },
  arcGisCanvas: {
    title: "ArcGIS canvas map",
    "EPSG:3857": {
      home:
        "//services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/",
      minLevel: 1,
      maxLevel: 16,
      tileServerType: "arcgisonline",
      copyRight: "Basemap copyright: 2013 ESRI, DeLorme, NAVTEQ",
    },
    "EPSG:28992": {
      home:
        "//services.arcgisonline.com/arcgis/rest/services/Basiskaarten/Canvas/MapServer/tile/",
      minLevel: 1,
      maxLevel: 12,
      origX: -285401.92,
      origY: 903401.92,
      resolution: 3440.64,
      tileServerType: "arcgisonline",
      copyRight:
        "Basiskaart bronnen: ESRI Nederland, ESRI, Kadaster, CBS en Rijkswaterstaat",
    },
  },
  arcGisTopo: {
    title: "ArcGIS topo map",
    "EPSG:3857": {
      home:
        "//services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/",
      minLevel: 1,
      maxLevel: 19,
      tileServerType: "arcgisonline",
      copyRight:
        "Basemap sources: ESRI, DeLorme, NAVTEQ, TomTom, Intermap, increment P Corp., GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, ESRI Japan, METI, ESRI China (Hong Kong), and the GIS User Community",
    },
    "EPSG:28992": {
      home:
        "//services.arcgisonline.com/arcgis/rest/services/Basiskaarten/Topo/MapServer/tile/",
      minLevel: 1,
      maxLevel: 12,
      origX: -285401.92,
      origY: 903401.92,
      resolution: 3440.64,
      tileServerType: "arcgisonline",
      copyRight:
        "Basiskaart bronnen: ESRI Nederland, ESRI, Kadaster, CBS, Min VROM, Rijkswaterstaat en gemeenten: Rotterdam, Breda, Tilburg",
    },
  },
  arcGisOceanBaseMap: {
    title: "ArcGIS ocean map",
    "EPSG:3857": {
      home:
        "//services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/",
      minLevel: 1,
      maxLevel: 19,
      tileServerType: "arcgisonline",
      copyRight:
        "Basemap sources: ESRI, GEBCO, NOAA, National Geographic, DeLorme, NAVTEQ, Geonames.org, and other contributors",
    },
  },
  arcGisSat: {
    title: "ArcGIS satellite map",
    "EPSG:4326": {
      home:
        "//services.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer/tile/",
      minLevel: 1,
      maxLevel: 15,
      tileServerType: "arcgisonline",
      origX: -180,
      origY: 90,
      resolution: 0.3515625,
      tileSize: 512,
      copyRight: "ESRI",
    },
    "EPSG:3857": {
      home:
        "//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/",
      minLevel: 1,
      maxLevel: 18,
      tileServerType: "arcgisonline",
      copyRight: "ESRI",
    },
  },
  OpenStreetMap_Service: {
    title: "OpenStreetMap Service",
    "EPSG:3857": {
      home: "//b.tile.openstreetmap.org/",
      minLevel: 1,
      maxLevel: 16,
      tileServerType: "osm",
      copyRight: "OpenStreetMap - contributors",
    },
    "EPSG:28992": {
      home:
        "//services.arcgisonline.com/ArcGIS/rest/services/Basiskaarten/PDOK_BRT/MapServer/tile/",
      minLevel: 1,
      maxLevel: 12,
      origX: -285401.92,
      origY: 903401.92,
      resolution: 3440.64,
      tileServerType: "arcgisonline",
      copyRight: "Basiskaart bronnen: PDOK, Kadaster, OpenStreetMap",
    },
  },
  NaturalEarth2: {
    "EPSG:3411": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG3411/",
      minLevel: 1,
      maxLevel: 6,
      origX: -12400000,
      origY: 12400000,
      resolution: 96875,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
    "EPSG:3412": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG3412/",
      minLevel: 1,
      maxLevel: 6,
      origX: -12400000,
      origY: 12400000,
      resolution: 96875,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
    "EPSG:3575": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG3575/",
      minLevel: 1,
      maxLevel: 6,
      origX: -13000000,
      origY: 13000000,
      resolution: 101562.5,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
    "EPSG:3857": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG3857/",
      minLevel: 1,
      maxLevel: 7,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
    "EPSG:4258": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG4326/",
      minLevel: 1,
      maxLevel: 6,
      origX: -180,
      origY: 90,
      resolution: 0.703125,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
    "EPSG:4326": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG4326/",
      minLevel: 1,
      maxLevel: 6,
      origX: -180,
      origY: 90,
      resolution: 0.703125,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
    "EPSG:28992": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG28992/",
      minLevel: 1,
      maxLevel: 5,
      origX: -2999000,
      origY: 2995500,
      resolution: 23437,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
    "EPSG:32661": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG32661/",
      minLevel: 1,
      maxLevel: 7,
      origX: -5000000,
      origY: 4000000,
      resolution: 58593.75,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
    "EPSG:54030": {
      home:
        "https://knmi-geoweb-assets.s3-eu-west-1.amazonaws.com/NaturalEarth2/EPSG54030/",
      minLevel: 1,
      maxLevel: 7,
      origX: -17000000,
      origY: 8625830,
      resolution: 132812.5,
      tileServerType: "wmst",
      copyRight: "NPS - Natural Earth II",
    },
  },
  
};

xml2jsonrequestURL = '/adaguc-services/xml2json?'
autowmsURL = '/adaguc-services/autowms?';
