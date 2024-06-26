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

var dataChooserConfigurationFolder =[]; 

var dataChooserConfigurationAdd = [
  {
    title:'VIS ALTA RES',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=HRV-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HRV-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=HRV-REFN&',
        layer:'HRV-REFN_data'
  },{
    title:'VIS06',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS06-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=VIS06-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS06-REFN&',
        layer:'VIS06-REFN_data'
  },{
    title:'WV62 RAD',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=WV62-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV62-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=WV62-BT&',
        layer:'WV62-BT_data'
  },{
    title:'IR108 BT',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&',
        layer:'IR108-BT_data'
  },{
    title:'LIGHTNING',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=LIGHTNING&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,LIGHTNING_lightningAddLayers&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=LIGHTNING&',
    layer:'LIGHTNING_lightningTimePeriod',
  },{ 
    title:'METAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=METAR&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,T_Td_Vis&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=METAR&&service=WMS&request=GetCapabilities',
    layer:'T_Td_Vis'
  },{ 
    title:'OPERA-RATE',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA-COMP-RATE&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,OPERA_rainfall_rate&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA-COMP-RATE&&service=WMS&request=GetCapabilities',
    layer:'OPERA_rainfall_rate'
  },{
    title:'CRR',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CRR_crr_intensity,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR&',
        layer:'CRR_crr_intensity'
  },{
    title:'CRR-Ph',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR-Ph&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CRR-Ph_crrph_intensity,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR-Ph&',
        layer:'CRR-Ph_crrph_intensity'
  },{
    title:'PC',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PC&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=PC_pc,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PC&',
        layer:'PC_pc'
  },{
    title:'CI',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CI_ci_prob90,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CI&',
        layer:'CI_ci_prob90'
  },{
    title:'LIFTED INDEX',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=iSHAI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=iSHAI_IR_band,iSHAI_ishai_li,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PRECONV&',
        layer:'LIFTED'
  },{
    title:'HUMIDITY DIF NWP/MSG',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=iSHAI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=iSHAI_IR_band,iSHAI_ishai_diffml,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PRECONV&',
        layer:'DIFFERENCES'
  },{
    title:'RDT',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RDT_NOW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,RDT&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=RDT_NOW&',
        layer:'RDT'  
  },{
    title:'CTTH-FL',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IMASK_imask_ctth_FL,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&',
        layer:'IMASK_imask_ctth_FL'
  },{
    title:'ASII-TF',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-TF&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ASII-TF_asii_turb_trop_prob,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-TF&',
        layer:'ASII-TF_asii_turb_trop_prob'
  },{
    title:'ASII-GW',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-GW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ASII-GW_asii_turb_wave_prob,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-GW&',
        layer:'ASII-GW_asii_turb_wave_prob'
  },{
    title:'IMASK',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IMASK_imask,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&',
        layer:'IMASK_imask'
  },{
    title:'WIND',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=HRW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,windHRW&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=HRW&',
        layer:'Wind_pressure'
  },{
    title:'CT',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CT_ct,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&',
        layer:'CT_ct'
  },{
    title:'EXIM-CT',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CT_ct,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EXIM-CT&',
        layer:'EXIM_CT_ct'
  },{
    title:'EMAS',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multiLayer&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multiLayer'
  }
  
];

var dataChooserConfigurationNWC = [];

var dataChooserConfigurationIRIS = [];

var dataChooserConfigurationNWP = [ {title:'Ceiling_ground_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ceiling_Ground_IFS_HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Ceiling_Ground_IFS_HRES_00'
},{title:'Ceiling_sea_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ceiling_Sea_IFS_HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Ceiling_Sea_IFS_HRES_00'
},{title:'Low_clouds_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Low_Clouds_IFS_HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Low_Clouds_IFS_HRES_00'
},{title:'Medium_clouds_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Medium_Clouds_IFS_HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Medium_Clouds_IFS_HRES_00'
},{title:'IR108_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108_IFS_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'IR108_IFS_00'
},{title:'Enhanced_IR108_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Enhanced_IR108_IFS_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'Enhanced_IR108_IFS_00'
},{title:'WV62_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV62_IFS_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'WV62_IFS_00'
},{title:'Boundary_Layer_Height_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Boundary_Layer_Height_IFS-HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'Boundary_Layer_Height_IFS-HRES_00'
},{title:'Surface_Turbulence_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=SFC_TURB_IFS-HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'SFC_TURB_IFS-HRES_00'
},{title:'TI1_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=TI1_IFS-HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'TI1_IFS-HRES_00'
},{title:'TI2_00',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=TI2_IFS-HRES_00,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'TI2_IFS-HRES_00'
},{title:'Ceiling_ground_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ceiling_Ground_IFS_HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Ceiling_Ground_IFS_HRES_12'
},{title:'Ceiling_sea_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ceiling_Sea_IFS_HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Ceiling_Sea_IFS_HRES_12'
},{title:'Low_clouds_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Low_Clouds_IFS_HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Low_Clouds_IFS_HRES_12'
},{title:'Medium_clouds_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Medium_Clouds_IFS_HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Cloudiness&',
      layer:'Medium_Clouds_IFS_HRES_12'
},{title:'IR108_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108_IFS_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'IR108_IFS_12'
},{title:'Enhanced_IR108_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Enhanced_IR108_IFS_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'Enhanced_IR108_IFS_12'
},{title:'WV62_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV62_IFS_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Pseudoimages&',
      layer:'WV62_IFS_12'
},{title:'Boundary_Layer_Height_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Boundary_Layer_Height_IFS-HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'Boundary_Layer_Height_IFS-HRES_12'
},{title:'Surface_Turbulence_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=SFC_TURB_IFS-HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'SFC_TURB_IFS-HRES_12'
},{title:'TI1_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=TI1_IFS-HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'TI1_IFS-HRES_12'
},{title:'TI2_12',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=TI2_IFS-HRES_12,overlay&WIDTH=412&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IFS-HRES_Turbulence&',
      layer:'TI2_IFS-HRES_12'
}];

//----------------------------------- CARPETA OBS -----------------------------------------------------

//Contenido de subcarpeta EMA
var dataChooserConfigurationEMA = [
  {
    title:'THIES',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_THIES&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_THIES'
  },{
    title:'SEACV2',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_SEACV2&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_SEACV2'
  },{
    title:'VAISALA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_VAISALA&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_VAISALA'
  },{
title:'ESOC',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_ESOC&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_ESOC'
  },{
title:'ESOS',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_ESOS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_ESOS'
  },{
title:'NSIM',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_NSIM&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_NSIM'
  },{
title:'IP-PROXY',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_IPPROXY&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_IPPROXY'
  },{
title:'SIMAS',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_SIMAS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_SIMAS'
  },{
title:'SOSS',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_SOSS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_SOSS'
  },{
	  title:'VAISALAhor',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_VAISALAhor&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_VAISALAhor'
  },{
	  title:'RESTO',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multi_RESTO&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multi_RESTO'
  }
];

//Contenido subcarpeta EMA_PARAM
var dataChooserConfigurationEMA_PARAM = [
    {
    title:'PREC_ACUM_10m',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,Prec&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'Prec'
    },{
    title:'VIENTO',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,Wind&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'Wind'
    },{
    title:'Temperatura',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,Temp&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'Temp'
    },{
    title:'HumedadR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,HR&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'HR'
    },{
    title:'PRES',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,PRES&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'PRES'
    },{
    title:'COMB',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,multiLayer&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EMAS&&service=WMS&request=GetCapabilities',
    layer:'multiLayer'
    }

]

//Contenido subcarpeta METAR
var dataChooserConfigurationMETAR = [
  {
    title:'METAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=METAR&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,T_Td_Vis&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=METAR&&service=WMS&request=GetCapabilities',
    layer:'T_Td_Vis'
  }
]

//Contenido subcarpeta BOYAS
var dataChooserConfigurationBOYAS = [
{
    title:'WIND',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,Wind_BOYAS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&&service=WMS&request=GetCapabilities',
    layer:'Wind_BOYAS'
  },{
    title:'MAR_FONDO',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,Corriente&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&&service=WMS&request=GetCapabilities',
    layer:'Corriente'
  },{
    title:'TA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,TA&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&&service=WMS&request=GetCapabilities',
    layer:'TA'

  },{
    title:'TA_MAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,TA_MAR&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&&service=WMS&request=GetCapabilities',
    layer:'TA_MAR'
  }, {
    title:'ALT_OLAS',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,ALT_OLAS&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    abs:"Altura de las Olas",
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=BOYAS&&service=WMS&request=GetCapabilities',
    layer:'ALT_OLAS'
  }
]

//Contenido carpeta del menu OBS
var dataChooserConfigurationFoldersOBS = [
  {
    title:"EMAS",
    thumbnail:'./img/open-file-folder.png',
    dataChooserConfiguration: dataChooserConfigurationEMA
  },{
    title:"EMAS_PARAM",
    thumbnail:'./img/open-file-folder.png',
    abs:"Parametros generales de todas las EMAS",
    dataChooserConfiguration: dataChooserConfigurationEMA_PARAM
  },{
    title:"METAR",
    thumbnail:'./img/open-file-folder.png',
    abs:"Productos METAR",
    dataChooserConfiguration: dataChooserConfigurationMETAR
  },{
    title:"BOYAS",
    thumbnail:'./img/open-file-folder.png',
    dataChooserConfiguration: dataChooserConfigurationBOYAS
  }
];

//--------------------------------------- FIN CARPETA OBS -----------------------------------------------------------------

//--------------------------------------- CARPETA TEL (Teledeteccion) -----------------------------------------------------

//Contenido de la subcarpeta RAYOS
var dataChooserConfigurationRAY = [
  {
title:'RAYOS',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=LIGHTNING&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,LIGHTNING_lightningAddLayers&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=LIGHTNING&',
    layer:'LIGHTNING_lightningTimePeriod',
  }
]

//Contenido de la subcarpeta PPI
var dataChooserConfigurationPPI = [
  {
    title:'PPI-ALM',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_ALM_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_ALM_mask',
  },
  {
    title:'PPI-BAD',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_BAD_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_BAD_mask',
  },
  {
    title:'PPI-BAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_BAR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_BAR_mask',
  },
  {
    title:'PPI-COR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_COR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_COR_mask',
  },
  {
    title:'PPI-LID',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_LID_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_LID_mask',
  },
  {
    title:'PPI-MAD',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_MAD_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_MAD_mask',
  },
  {
    title:'PPI-MAL',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_MAL_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_MAL_mask',
  },
  {
    title:'PPI-MUR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_MUR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_MUR_mask',
  },
  {
    title:'PPI-PMA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_PMA_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_PMA_mask',
  },
  {
    title:'PPI-SAN',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_SAN_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_SAN_mask',
  },
  {
    title:'PPI-SEV',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_SEV_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_SEV_mask',
  },
  {
    title:'PPI-SSE',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_SSE_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_SSE_mask',
  },
  {
    title:'PPI-VAL',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_VAL_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisPPI_VAL_mask',
  },
  {
    title:'PPI-ZAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_ZAR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI&',
    layer:'irisTOPS_ZAR_mask',
  },
  {
    title:'PPI-LPA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-PPI-LPA&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisPPI_LPA_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-PPI-LPA&',
    layer:'irisPPI_LPA_mask',
  }

]

//contenido de la subcarpeta ECHO-TOP
var dataChooserConfigurationTOPS = [
   {
    title:'TOPS-ALM',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_ALM_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_ALM_mask',
  },
  {
    title:'TOPS-BAD',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_BAD_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_BAD_mask',
  },
  {
    title:'TOPS-BAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_BAR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_BAR_mask',
  },
  {
    title:'TOPS-COR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_COR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_COR_mask',
  },
  {
    title:'TOPS-LID',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_LID_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_LID_mask',
  },
  {
    title:'TOPS-MAD',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_MAD_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_MAD_mask',
  },
  {
    title:'TOPS-MAL',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_MAL_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_MAL_mask',
  },
  {
    title:'TOPS-MUR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_MUR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_MUR_mask',
  },
  {
    title:'TOPS-PMA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_PMA_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_PMA_mask',
  },
   {
    title:'TOPS-SAN',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_SAN_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_SAN_mask',
  },
  {
    title:'TOPS-SEV',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_SEV_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_SEV_mask',
  },
  {
    title:'TOPS-SSE',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_SSE_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_SSE_mask',
  },
  {
    title:'TOPS-VAL',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_VAL_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_VAL_mask',
  },
  {
    title:'TOPS-ZAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_ZAR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS&',
    layer:'irisTOPS_ZAR_mask',
  },
  {
    title:'TOPS-LPA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-TOPS-LPA&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisTOPS_LPA_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-TOPS-LPA&',
    layer:'irisTOPS_LPA_mask',
  }
]

//contenido carpeta ACUM1H
var dataChooserConfigurationAC1H = [
  {
    title:'ACUM1H-ALM',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_ALM_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_ALM_mask',
  },
  {
    title:'ACUM1H-BAD',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_BAD_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_BAD_mask',
  },
  {
    title:'ACUM1H-BAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_BAR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_BAR_mask',
  },
  {
    title:'ACUM1H-COR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_COR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_COR_mask',
  },
  {
    title:'ACUM1H-LID',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_LID_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_LID_mask',
  },
  {
    title:'ACUM1H-MAD',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_MAD_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_MAD_mask',
  },
  {
    title:'ACUM1H-MAL',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_MAL_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_MAL_mask',
  },
  {
    title:'ACUM1H-MUR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_MUR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_MUR_mask',
  },
  {
    title:'ACUM1H-PMA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_PMA_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_PMA_mask',
  },
  {
    title:'ACUM1H-SAN',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_SAN_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_SAN_mask',
  },
  {
    title:'ACUM1H-SEV',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_SEV_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_SEV_mask',
  },
  {
    title:'ACUM1H-SSE',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_SSE_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_SSE_mask',
  },
  {
    title:'ACUM1H-VAL',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_VAL_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_VAL_mask',
  },
  {
    title:'ACUM1H-ZAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_ZAR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H&',
    layer:'irisACUM1H_ZAR_mask',
  },
  {
    title:'ACUM1H-LPA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-ACUM1H-LPA&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisACUM1H_LPA_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-ACUM1H-LPA&',
    layer:'irisACUM1H_LPA_mask',
  }

]

//contenido carpeta VIL
var dataChooserConfigurationVIL = [
  {
    title:'VIL-ALM',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_ALM_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_ALM_mask',
  },
  {
    title:'VIL-BAD',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_BAD_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_BAD_mask',
  },
  {
    title:'VIL-BAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_BAR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_BAR_mask',
  },
  {
    title:'VIL-COR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_COR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_COR_mask',
  },
   {
    title:'VIL-LID',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_LID_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_LID_mask',
  },
  {
    title:'VIL-MAD',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_MAD_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_MAD_mask',
  },
  {
    title:'VIL-MAL',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_MAL_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_MAL_mask',
  },
  {
    title:'VIL-MUR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_MUR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_MUR_mask',
  },
  {
    title:'VIL-PMA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_PMA_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_PMA_mask',
  },
  {
    title:'VIL-SAN',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_SAN_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_SAN_mask',
  },
  {
    title:'VIL-SEV',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_SEV_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_SEV_mask',
  },
  {
    title:'VIL-SSE',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_SSE_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_SSE_mask',
  },
  {
    title:'VIL-VAL',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_VAL_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisVIL_VAL_mask',
  },
  {
    title:'VIL-ZAR',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_ZAR_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL&',
    layer:'irisTOPS_ZAR_mask',
  },
  {
    title:'VIL-LPA',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=IRIS-VIL-LPA&SERVICE=WMS&REQUEST=GetMap&&VERSION=1.1.1&SRS=EPSG:4326&LAYERS=overlay,irisVIL_LPA_mask&&BBOX=-20,25,10,50WIDTH=900&HEIGHT=800&FORMAT=image/png&TRANSPARENT=TRUE',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IRIS-VIL-LPA&',
    layer:'irisVIL_LPA_mask',
  }

]


var dataChooserConfigurationMSGOPE = [
  {
    title:'OPERA-RATE',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,OPERA_rainfall_rate&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA&&service=WMS&request=GetCapabilities',
    layer:'OPERA_rainfall_rate'
  },
  {
    title:'OPERA-REF',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,OPERA_reflectivity&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA&&service=WMS&request=GetCapabilities',
    layer:'OPERA_reflectivity'
  },
  {
    title:'OPERA-ACUM',
    thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,OPERA_accumulated_precipitation&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
    service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=OPERA&&service=WMS&request=GetCapabilities',
    layer:'OPERA_accumulated_precipitation'
  }
]

//Contenido carpeta del menu TEL
var dataChooserConfigurationFoldersTEL = [
  {
  title:"RAYOS",
  thumbnail:'./img/open-file-folder.png',
  dataChooserConfiguration: dataChooserConfigurationRAY
  },	
  {
  title:"PPI",
  thumbnail:'./img/open-file-folder.png',
  dataChooserConfiguration: dataChooserConfigurationPPI
  },
  {
  title:"ECHO-TOP",
  thumbnail:'./img/open-file-folder.png',
  dataChooserConfiguration: dataChooserConfigurationTOPS
  },
  {
  title:"ACUM1H",
  thumbnail:'./img/open-file-folder.png',
  abs:"RADAR IRIS ACUMULACION 1H",
  dataChooserConfiguration: dataChooserConfigurationAC1H
  },
  {
  title:"VIL",
  thumbnail:'./img/open-file-folder.png',
  abs:"RADAR IRIS VIL",
  dataChooserConfiguration: dataChooserConfigurationVIL
  },
  {
  title:"OPERA",
  thumbnail:'./img/open-file-folder.png',
  dataChooserConfiguration: dataChooserConfigurationMSGOPE
  }

]

//--------------------------------------------------- FIN CARPETA TEL ----------------------------------------------------

//--------------------------------------------------- CARPETA MSG --------------------------------------------------------

//Contenido de la subcarpeta MSG-IMG
var dataChooserConfigurationMSGIMG = [
{
  title:'HIGH RES',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=HRV-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HRV-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=HRV-REFN&',
      layer:'HRV-REFN_data'
},{
  title:'VIS06',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS06-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=VIS06-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS06-REFN&',
      layer:'VIS06-REFN_data'
},{
  title:'VIS08',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS08-REFN&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=VIS08-REFN_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=VIS08-REFN&',
      layer:'VIS08-REFN_data'
},{
  title:'IR38 BT',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR38-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR38-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR38-BT&',
      layer:'IR38-BT_data'
},{
  title:'IR87 BT',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR87-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR87-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR87-BT&',
      layer:'IR87-BT_data'
},{
  title:'IR97 BT',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR97-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR97-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR97-BT&',
      layer:'IR97-BT_data'
},{
  title:'IR108 BT',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&',
      layer:'IR108-BT_data'
},{
  title:'IR120 BT',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR120-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR120-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR120-BT&',
      layer:'IR120-BT_data'
},{
  title:'IR134 BT',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR134-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR134-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR134-BT&',
      layer:'IR134-BT_data'
},{
  title:'WV62 RAD',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=WV62-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV62-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=WV62-BT&',
      layer:'WV62-BT_data'
},{
  title:'WV73 RAD',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=WV73-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=WV73-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=WV73-BT&',
      layer:'WV73-BT_data'
}
]

//Contenido carpeta MSG-RGB
var dataChooserConfigurationMSGRGB = [
  {title:'Airmass',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Airmass,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Airmass'
},{
  title:'Ash',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ash,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Ash'
},{
  title:'CloudtopDaytime',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CloudtopDaytime,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'CloudtopDaytime'
},{
  title:'Cloudtop',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Cloudtop,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Cloudtop'
},{
  title:'ColorizedIrClouds',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ColorizedIrClouds,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'ColorizedIrClouds'
},{
  title:'Convection',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Convection,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Convection'
},{
  title:'DayMicrophysics',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=DayMicrophysics,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'DayMicrophysics'
},{
  title:'DayMicrophysicsWinter',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=DayMicrophysicsWinter,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'DayMicrophysicsWinter'
},{
  title:'Dust',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Dust,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Dust'
},{
  title:'Fog',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Fog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Fog'
},{
  title:'Snow',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Snow,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Snow'
},{
  title:'NaturalColor',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalColor,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalColor'
},{
  title:'NaturalWithNightFog',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalWithNightFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalWithNightFog'
},{
  title:'NightFog',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NightFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NightFog'
},{
  title:'NightMicrophysics',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NightMicrophysics,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NightMicrophysics'
},{
  title:'Dust',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Dust,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Dust'
},{
  title:'Fog',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Fog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Fog'
},{
  title:'IrOverview',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IrOverview,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'IrOverview'
},{
  title:'NaturalColorNoCorr',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalColorNocorr,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalColorNocorr'
},{
  title:'NaturalColorRaw',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalColorRaw,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalColorRaw'
},{
  title:'NaturalColor',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalColor,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalColor'
},{
  title:'NaturalEnh',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalEnh,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalEnh'
},{
  title:'NaturalWithNightFog',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NaturalWithNightFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NaturalWithNightFog'
},{
  title:'NightFog',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NightFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NightFog'
},{
  title:'NightIrAlpha',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=NightIrAlpha,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'NightIrAlpha'
},{
  title:'Overview',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Overview,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Overview'
},{
  title:'Snow',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Snow,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&',
      layer:'Snow'
},{
  title:'Sandwich',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IrSandwich,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'IrSandwich'
},{
  title:'HrvFog',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HrvFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'HrvFog'
}

]

//Contenido carpeta MSG-HighRGB
var dataChooserConfigurationMSGHRGB = [
{
  title:'GreenSnow',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=GreenSnow,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'GreenSnow'
},{
  title:'HrvClouds',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HrvClouds,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'HrvClouds'
},{
  title:'HrvFog',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HrvFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'HrvFog'
},{
  title:'HrvSevereStormsMasked',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HrvSevereStormsMasked,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'HrvSevereStormsMasked'
},{
  title:'HrvSevereStorms',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HrvSevereStorms,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'HrvSevereStorms'
},{
  title:'Sandwich',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IrSandwich,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'IrSandwich'
},{
  title:'RealisticColors',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=RealisticColors,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'RealisticColors'
},{
  title:'VisSharpenedIr',
      thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=VisSharpenedIr,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
      service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&',
      layer:'VisSharpenedIr'
}

]

//Contenido carpeta MSG-SAF
var dataChooserConfigurationMSGSAF = [
  {
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/cma_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>Cloud Mask</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CMA&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CMA_cma_cloudsnow,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CMA&',
        layer:'CMA_cma_cloudsnow'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/ct_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>Cloud Type</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CT_ct,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&',
        layer:'CT_ct'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/exim_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>EXIM CT</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CT_ct,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=EXIM-CT&',
        layer:'EXIM_CT_ct'
  },{
    title:"<body> <table><tr><td><a href='https://en.wikipedia.org/wiki/Flight_level' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>CTTH FL</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IMASK_imask_ctth_FL,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&',
        layer:'IMASK_imask_ctth_FL'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/ctth_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>CTTH meters</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CTTH&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CTTH_ctth_alti,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CTTH&',
        layer:'CTTH_ctth_alti'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/cmic_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>CMIC</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CMIC&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CMIC_cmic_phase,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CMIC&',
        layer:'CMIC_cmic_phase'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/crr_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>CRR</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CRR_crr_intensity,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR&',
        layer:'CRR_crr_intensity'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/crr-ph_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>CRR Ph</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR-Ph&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CRR-Ph_crrph_intensity,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CRR-Ph&',
        layer:'CRR-Ph_crrph_intensity'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/pc_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>PC</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PC&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=PC_pc,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PC&',
        layer:'PC_pc'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/pc-ph_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>PC Ph</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PC-Ph&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=PC-Ph_pcph,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PC-Ph&',
        layer:'PC-Ph_pcph'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/rdt_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>RDT-CW</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RDT_NOW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,RDT&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//wms?DATASET=RDT_NOW&',
        layer:'RDT'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/ci_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>CI</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CI_ci_prob90,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CI&',
        layer:'CI_ci_prob90'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/ishai_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>LIFTED INDEX</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=iSHAI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=iSHAI_IR_band,iSHAI_ishai_li,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PRECONV&',
        layer:'LIFTED'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/ishai_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>HUMIDITY DIF NWP/MSG</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=iSHAI&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=iSHAI_IR_band,iSHAI_ishai_diffml,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=PRECONV&',
        layer:'DIFFERENCES'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/hrw_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>WIND</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=HRW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=overlay,windHRW&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=HRW&',
        layer:'Wind_pressure'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/asii-ng_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>ASII TF</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-TF&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ASII-TF_asii_turb_trop_prob,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-TF&',
        layer:'ASII-TF_asii_turb_trop_prob'
  },{
    title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/asii-ng_description' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td>ASII GW</td><td>&nbsp;&nbsp;</td><td></td></tr></table></body>",
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-GW&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ASII-GW_asii_turb_wave_prob,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=ASII-GW&',
        layer:'ASII-GW_asii_turb_wave_prob'
  },{
    title:'IMASK',
        thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IMASK_imask,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
        service:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IMASK&',
        layer:'IMASK_imask'
  }
]


//Contenido carpeta del menu MSG
var dataChooserConfigurationFoldersMSG = [
  {
  title:"<body> <table><tr><td><a href='https://www.eumetsat.int/mfg-calibration' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td><b>&nbsp;&nbsp;METEOSAT IMAGES BT /Refl.</b></td><td>&nbsp;&nbsp;</td><td><h1 ><img src='./img/folder-icon-transparent.png' width='30' height='30'></h1></td></tr></table></body>",
  thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=IR108-BT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=IR108-BT_data,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
  dataChooserConfiguration: dataChooserConfigurationMSGIMG
  },
  {
  title:"<body> <table><tr><td><a href='http://www.eumetrain.org/RGBguide/rgbs.html' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td><b>&nbsp;&nbsp;     METEOSAT RGB</b></td><td>&nbsp;&nbsp;</td><td><h1 ><img src='./img/folder-icon-transparent.png' width='30' height='30'></h1></td></tr></table></body>",
  thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=Ash,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=26,-20,30,-13&FORMAT=image/png&TRANSPARENT=TRUE&',
  dataChooserConfiguration: dataChooserConfigurationMSGRGB
  },
  {
  title:"<body> <table><tr><td><a href='http://www.eumetrain.org/RGBguide/rgbs.html'  target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td><b>&nbsp;&nbsp;METEOSAT hight Resolution RGB</b></td><td>&nbsp;&nbsp;</td><td><h1 ><img src='./img/folder-icon-transparent.png' width='30' height='30'></h1></td></tr></table></body>",
  thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=RGB-HRV&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=HrvFog,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE&',
  dataChooserConfiguration: dataChooserConfigurationMSGHRGB
  },
  {
  title:"<body> <table><tr><td><a href='https://www.nwcsaf.org/' target='_blank' rel='noopener noreferrer'>info</a></td><td>&nbsp;&nbsp;</td><td><b>&nbsp;&nbsp;NWC SAF METEOSAT Based</b></td><td>&nbsp;&nbsp;</td><td><h1 ><img src='./img/folder-icon-transparent.png' width='30' height='30'></h1></td></tr></table></body>",
  thumbnail:'http://vortice.aemet.es:8080/adaguc-services//adagucserver?dataset=CT&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=CT_ct,overlay&WIDTH=400&HEIGHT=350&CRS=EPSG:4326&BBOX=25,-20,46,10&FORMAT=image/png&TRANSPARENT=TRUE',
  dataChooserConfiguration: dataChooserConfigurationMSGSAF
  },
]
//----------------------------------------FIN CARPETA TEL ----------------------------------------------

//----------------------------------------CARPETA NWP --------------------------------------------------
//Contenido carpeta del menu NWP
var dataChooserConfigurationFoldersNWP = [
  {
  title:"NWP",
  thumbnail:'./img/open-file-folder.png',
  dataChooserConfiguration: dataChooserConfigurationNWP
  }
]
//---------------------------------------FIN CARPETA NWP ------------------------------------------------

//Definimos el nombre y contenido de los botones de la toolbar
var dataChooser =[
 /* {
    title: "NWP",
    dataChooserConfiguration: dataChooserConfigurationNWP
  }*/ 
];

//Definimos el nombre y el contenido de las carpetas de la toolbar
var folderChooser =[
 {
   title: "NWP",
   dataChooserConfigurationFolder: dataChooserConfigurationFoldersNWP
 },
 {
   title: "MSG",
   dataChooserConfigurationFolder: dataChooserConfigurationFoldersMSG
 },
 {
   title: "OBS",
   dataChooserConfigurationFolder: dataChooserConfigurationFoldersOBS
 },
 {
 title: "TEL",
 dataChooserConfigurationFolder: dataChooserConfigurationFoldersTEL
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
var defaultUsernameSearch = "vorticeops"; // <-- Username for the GeoNames API. 1
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
