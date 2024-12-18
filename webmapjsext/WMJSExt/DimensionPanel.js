//import { DateInterval } from "../../webmapjs/WMJSTime";

//Constructor for custom dimension panel
Ext.define('webmapjsext.WMJSExt.DimensionPanel', {
  extend   : 'Ext.panel.Panel',
  alias    : 'WMJSExtDimensionPanel',
  initComponent: function(s) {
    var _this = this;
    _this.dimension.linked=this.Linked
    //console.log("DIM",_this.dimension.linked)
    _this.currentValue = undefined;
    _this.currentSize = undefined
    var defaultIndex=0;
    try{
      defaultIndex = this.dimension.getIndexForValue(this.dimension.defaultValue);
    }catch(e){}
    if(_this.dimension.currentValue){
      try{
        defaultIndex = this.dimension.getIndexForValue(_this.dimension.currentValue);
      }catch(e){}
    }
    if(defaultIndex == -1){
      defaultIndex = (_this.dimension.size() - 1);
    }
    
    _this.currentIndex=defaultIndex;
    
    try{
      _this.dimension.currentValue = _this.dimension.getValueForIndex(defaultIndex);
    }catch(e){
      error("WMJSExtDimensionPanel: getValueForIndex "+defaultIndex+" failed");
    }
    


    //NOTA: Hacer que el slider se cree con el tamaño correcto siempre.
    //Rehacer un metodo que de el size bien.
    _this.dimSlider = Ext.create('Ext.slider.Single',{
      width:50,useTips:false,
      region:'center',
      value:defaultIndex,minValue:0,maxValue:(_this.dimension.size() - 1),increment:1,
      listeners:{
        drag:{fn:function(t){_this.sliderChanged(t.getValue());}},
        change:{fn:function(t){_this.sliderChanged(t.getValue());}},
      }
    });
    
  
    _this.dimCheck = Ext.create('Ext.form.Checkbox',{
      margin:'0 0 0 0',
      bodyStyle:{"background-color":"white"},
      frame:false,
      border:false,
      plain:true,
      checked:_this.dimension.linked,
      handler:function(o,c){
        console.log("CHECKBOX",dimensionValuePanelItems[1].disabled )
        dimensionValuePanelItems[1].setDisabled(!c) 
        _this.dimension.linked=c;
      }
      //listeners:{
      //  drag:{fn:function(t){_this.sliderChanged(t.getValue());}},
      //                           change:{fn:function(t){_this.sliderChanged(t.getValue());}}
      });

    _this.setValue = function(value){
      if(value === _this.currentValue && _this.dimension.size() === _this.currentSize){
        if (_this.dimension.size() === _this.currentSize){
          //console.log("DIMENSION",_this.dimension.size())
          //console.log("Value",value)
        } 
        return;
      }
      return _this._setValue(value);
    };
    
    _this._setValue = function(value){
       //console.log("thisname="+_this.dimension.name+" value "+value);
      _this.currentValue = value;
      _this.currentSize = _this.dimension.size();
      try{
        if(value == WMJSDateTooEarlyString){
          _this.currentIndex = 0;
          _this.dimensionValueLabel.setValueText(WMJSDateTooEarlyString);
        }else if(value == WMJSDateTooLateString){
          _this.currentIndex = (_this.dimension.size() - 1);
          _this.dimensionValueLabel.setValueText(WMJSDateTooLateString);
        }else{
          _this.currentIndex = this.dimension.getIndexForValue(value);
          if(_this.currentIndex != -1){
            _this.dimensionValueLabel.setValueText(_this.getValue());
          }else{
            var curDate=parseISO8601DateToDate(value);
            var earliest = parseISO8601DateToDate(_this.dimension.get(0));
            var latest = parseISO8601DateToDate(_this.dimension.get(_this.dimension.size()-1));
            if(curDate.getTime()<earliest.getTime()){
              console.log("SOY YO",WMJSDateTooEarlyString)
              _this.dimensionValueLabel.setValueText(WMJSDateTooEarlyString);
              _this.layer.setDimension( _this.dimension.name,WMJSDateTooEarlyString);
              _this.currentIndex = 0;
            }else if(curDate.getTime()>latest.getTime()){
              console.log(" o AQUI",value)
              _this.dimensionValueLabel.setValueText(WMJSDateTooLateString);
              _this.layer.setDimension( _this.dimension.name,WMJSDateTooLateString);
              _this.currentIndex = _this.dimension.size()-1;
            }else{
              console.log(" O AQUI",value)
              _this.dimensionValueLabel.setValueText(WMJSDateOutSideRange);
              _this.layer.setDimension( _this.dimension.name,WMJSDateOutSideRange);
            }
          }
        }
      }catch(e){
        _this.dimensionValueLabel.setValueText(WMJSDateOutSideRange);
        _this.layer.setDimension( _this.dimension.name,WMJSDateOutSideRange);
        _this.currentIndex = 0;
        console.log("CATCH")
      }
      _this.dimSlider.suspendEvents();
      
      _this.dimSlider.setValue(_this.currentIndex,false);
      //_this.dimension.setValue(_this.dimension.getValueForIndex(_this.currentIndex));
      
      _this.dimSlider.resumeEvents();
      
    } 

    _this.checkReferenceTime = function(dimension){
      var hasReferenceTime = -1;
      var hasTime = -1;
      for(var j=0;j<_this.dimensionPanels.length;j++){
        var dim=_this.layer.getDimension(_this.dimensionPanels[j].dimension.name);
        if(dim.name=="time" && dim.units=="ISO8601"){
          hasTime = j;
        }
        if(dim.name=="reference_time" && dim.units=="ISO8601"){
          hasReferenceTime = j;
        }
        if(dim.name=="forecast_reference_time" && dim.units=="ISO8601"){
          hasReferenceTime = j;
        }
      }
      _this.dimSlider.suspendEvents();
      if(hasTime != -1 && hasReferenceTime != -1){
        var timedim=_this.layer.getDimension(_this.dimensionPanels[hasTime].dimension.name);
        var reftimedim=_this.layer.getDimension(_this.dimensionPanels[hasReferenceTime].dimension.name);
        if(timedim.getValue() < reftimedim.getValue() ){
            console.log("time should be increased:  "+timedim.getValue() +"<"+ reftimedim.getValue());
            var newValue = reftimedim.getValue();
            _this.dimensionPanels[hasTime].dimSlider.setValue(timedim.getIndexForValue(newValue)+1,false);
          }

         //Haremos una peticion al servidor a ver si el time y el reference_time son compatibles.
        let projs=this.Parent.WMJSLayer.parentMaps[0].getBBOX()  
        let crs = "&CRS=EPSG%3A3857"    
        let BBOX="&BBOX="+projs.left+","+projs.bottom+","+projs.right+","+projs.top
        //console.log("BBBOX",BBOX) 
        let rq=this.Parent.WMJSLayer.service+"service=WMS&REQUEST=GetMap&FORMAT=image/png"

        rq=rq+"&layers="+this.Parent.WMJSLayer.name
        rq=rq+"&WIDTH=870&HEIGHT=919"+crs+BBOX+"&FORMAT=image/png&TRANSPARENT=TRUE&"
        for (let i=0;i<this.Parent.WMJSLayer.dimensions.length;i++){
          if (this.Parent.WMJSLayer.dimensions[i].name =="time" ){
            rq=rq+"&time="+this.Parent.WMJSLayer.dimensions[i].currentValue
          } 
          if (this.Parent.WMJSLayer.dimensions[i].name.includes("reference_time") ){
            rq=rq+"&DIM_forecast_reference_time="+this.Parent.WMJSLayer.dimensions[i].currentValue
          }
        } 
        try{   
          fetch(rq).then(function(response) {
            if (response.status==200){
              console.log("OK")
            }else{
              if (reftimedim.getValue()!=timedim.getValue()){ 
                let current_r_t_sec=new Date(reftimedim.getValue()).getTime()
                let default_r_t_sec=new Date(reftimedim.defaultValue).getTime()
                let default_t_sec=new Date(timedim.defaultValue).getTime()
                //Calculo el tiempo que se ha desplazado el r_t respecto a su defecto.
                let jump=default_r_t_sec-current_r_t_sec
                //Restamos al tiempo por defecto lo que se ha desplazado el ref_time
                let jump_t_sec=default_t_sec-jump
                let jump_time=new Date(jump_t_sec).toISOString()
                //console.log(jump_time)
                //console.log(response.status)
                //console.log("NO SOMOS COMPATIBLES HAY QUE HACER ALGO")
                _this.layer.setDimension(timedim.name,jump_time);
                //_this._setValue(reftimedim.getValue() );
                _this.dimensionPanels[hasTime].setValue(jump_time)
                _this.layer.draw("DimensionPanel::sliderChanged");
              }
            }  ;
          });
        } catch (error) {
          console.log("ERROR",error)
        } 
      }     
      _this.dimSlider.resumeEvents();
    };

    _this.sliderChanged = function(indexValue){
      var preAuto=_this.Parent.getUpdateStatus();
      _this.Parent.setUpdateStatus(false);
      try{
        _this.layer.parentMaps[0].stopAnimating();
      }catch(e){
        _this.Parent.setUpdateStatus(preAuto);
      }
      
      _this.currentIndex = indexValue;
      _this.dimensionValueLabel.setValueText(_this.getValue());
      
      
      _this.layer.setDimension(_this.dimension.name,_this.getValue());
      //alert(54);
      
      
      if(isDefined(_this.dateTimeWindow)){
        _this.dateTimeWindow.setDimension(this.dimension);
      }
      _this.checkReferenceTime(_this.dimension);
      _this.layer.draw("DimensionPanel::sliderChanged");
      _this.Parent.setUpdateStatus(preAuto);
    };
    
    _this.getValue = function(){
      return _this.dimension.get(_this.currentIndex);
    
    };
    
    _this.dimensionValueLabel =  Ext.create('Ext.form.Label',{cls:'dimensionValueLabel',xtype:'label',region:'center',text:_this.getValue()});
    _this.dimensionTitleLabel =  Ext.create('Ext.form.Label',{cls:'dimensionTitleLabel',xtype:'label',region:'center',text:""});
    _this.dimensionPositionLabel =  Ext.create('Ext.form.Label',{cls:'dimensionPositionLabel',xtype:'label',region:'center',text:""});
    
    _this.dimensionValueLabel.setValueText = function(text){
      if(text == WMJSDateOutSideRange || text == WMJSDateTooEarlyString || text == WMJSDateTooLateString){
        try{_this.dimensionValueLabel.getEl().setStyle("backgroundColor",'#FFAAAA');}catch(e){}
        _this.dimensionPositionLabel.setText(" - (-/"+((_this.dimension.size() - 1)+1)+")");
        _this.dimensionValueLabel.setText(text);
      }else{
        try{_this.dimensionValueLabel.getEl().setStyle("backgroundColor",'white');}catch(e){}
        _this.dimensionPositionLabel.setText(" - ("+(_this.currentIndex+1)+"/"+((_this.dimension.size() - 1)+1)+")");
        //var date = parseISO8601DateToDate(text)
        //_this.dimensionValueLabel.setText(date.toString().replace(/GMT.*/g,""));
        _this.dimensionValueLabel.setText(text);
      }
      
      
      _this.dimensionTitleLabel.setText(I18n.dimension.text+" " +_this.dimension.name+' in '+_this.dimension.units);
    };
    
    
    
    _this.dimensionValueLabel.setValueText(_this.getValue());
    
    var dimensionValuePanelItems = [];
    dimensionValuePanelItems.push(_this.dimensionValueLabel);
    
    
    _this.dimensionOptionsList = [];
    if(_this.dimension.units == 'ISO8601'){
      var dateTimeButton = Ext.create(Ext.button.Button,{
        xtype:'button',
        text:'Set time',
        disabled: !(this.Linked),
        tooltip:'Only enabled if checkbox ticked',
        
        
        region:'east',
        handler:function(){
          timeselectorWindow.show();
        }
      });
      dimensionValuePanelItems.push(dateTimeButton);
      var showTimeDurationSelector = false;
      if(_this.layer.name && _this.layer.name.indexOf("GOME")!=-1){ // TODO find proper way of detecting this through WMS standard.
        showTimeDurationSelector = true;
      }
      if (showTimeDurationSelector){
        
        let store = Ext.create('Ext.data.Store', {
          fields:[{name:'title',type:'string'},{name:'name',type:'string'}],
          data:[
            {title:'No duration',name:''},
            {title:'1 Second',name:'PT1S'},
            {title:'10 Seconds',name:'PT10S'},
            {title:'12 Seconds',name:'PT12S'},
            {title:'30 Seconds',name:'PT30S'},
            {title:'1 Minute',name:'PT1M'},
            {title:'5 Minutes',name:'PT5M'},
            {title:'10 Minutes',name:'PT10M'},
            {title:'15 Minutes',name:'PT15M'},
            {title:'30 Minutes',name:'PT30M'},
            {title:'60 Minutes',name:'PT1H'},
            {title:'90 Minutes',name:'PT1H30M'},
            {title:'180 Minutes',name:'PT3H'},
            {title:'360 Minutes',name:'PT6H'},
            {title:'Daily',name:'P1D'}, 
            
          ]
        });
        var timeDurationSelector = Ext.create('Ext.form.ComboBox', {
          fieldLabel: 'Choose duration',
          store: store,
          queryMode: 'local',
          displayField: 'title',
          valueField: 'name',
          region:'center',
          listeners:{
            'select': function(combo,records){
              _this.timeRangeDuration = records[0].get('name');
              let currentValue = _this.dimension.getValue();
              try{
                currentValue = _this.layer.parentMaps[0].getDimension(_this.dimension.name).currentValue;
              }catch(e){
              }              
              if(currentValue.indexOf('/')!=-1){
                currentValue = currentValue.split('/')[0];
              }
              _this.dimension.setTimeRangeDuration(_this.timeRangeDuration);
              _this.dimSlider.setMaxValue(_this.dimension.size()-1);
              
              console.log("Setting value back:" + currentValue);
        
              _this.layer.setDimension(_this.dimension.name,currentValue);
              _this._setValue(currentValue );
              _this.layer.draw("DimensionPanel::sliderChanged");
            }
          }
        });
        _this.dimensionOptionsList.push(timeDurationSelector);
      }
    }
    
    //     if(_this.dimension.units == 'ISO8601'){
    //       var dateTimeButton = Ext.create(Ext.button.Button,{
    //         xtype:'button',
    //         text:'Set time',
    //         
    //         
    //         
    //         region:'east',
    //         handler:function(){
    //           if(!isDefined(_this.dateTimeWindow)){
    //             var dateTimeField = Ext.create('Ext.ux.form.field.DateTime',{
    //               minTimeValue:_this.dimension.getValueForIndex(0),
    //               maxTimeValue:_this.dimension.getValueForIndex(_this.dimension.size()-1),
    //               listeners:{
    //                 change:{
    //                   fn:function(t,value){
    //                     _this.dateTimeWindow.triggerEvents = false;
    //                     //alert(value);
    //                     //alert("DimensionPanel.js, 103: "+value);
    //                     var index = _this.dimension.getIndexForValue(value.toISO8601());
    //                     if(index == -1){
    //                       _this._setValue(value.toISO8601());
    //                     }else{
    //                       _this.dimSlider.setValue(index);
    //                     }
    //                     //alert("V="+value.toISO8601());
    //                     _this.dateTimeWindow.triggerEvents = true;
    //                   }
    //                 }
    //               }
    //             });
    //             _this.dateTimeWindow = Ext.create('Ext.window.Window',{
    //               title:'Pick date and time',
    //               layout:'fit',autoDestroy:true,closeAction:'destroy',autoScroll:false,collapsible:false,
    //               items:[dateTimeField]   ,
    //               listeners:{
    //                 beforeclose:{
    //                   fn:function(){
    //                     _this.dateTimeWindow = undefined;
    //                   }
    //                 }
    //               }
    //             });
    //             _this.dateTimeWindow.setDimension = function(dim){
    //               if(_this.dateTimeWindow.triggerEvents == false)return;
    //               if(dim == _this.dimension){
    //                 var date = parseISO8601DateToDate(_this.getValue());
    //                 _this.dateTimeWindow.dateTimeField.setValue(date);
    //               }
    //             }
    //             _this.dateTimeWindow.dateTimeField = dateTimeField;
    //           }
    //           var date = parseISO8601DateToDate(_this.getValue());
    //           _this.dateTimeWindow.dateTimeField.setValue(date);
    //           _this.dateTimeWindow.showBy(this);
    //         }
    //       });
    //       dimensionValuePanelItems.push(dateTimeButton);
    //     }
    _this.dimensionValuePanel = {
      type:'panel',
      layout:'border',
      background:'white',
      
      bodyStyle:{"background-color":"white"}, 
      border:false,
      items:dimensionValuePanelItems
    };
    
    
    Ext.apply(this, {
      margin:'0',padding:'5 3 5 3',
      border:false,frame:false,plain:true,
      bodyStyle:{"background-color":"white"}, 
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      items:[ {xtype:'panel',height:22,plain:true,border:false,layout:'hbox',items:[_this.dimensionTitleLabel,_this.dimensionPositionLabel]},
      {
        xtype:'panel',height:24,margin:'0 0 0 0',frame:false,border:false,plain:true,layout: 'border',
        bodyStyle:{"background-color":"white"}, 
        items:[
        {
          xtype:'panel',region:'west',width:13,frame:false,border:false,layout: 'border',
          //items:[{margin:'0 0 0 0',xtype:'checkbox',bodyStyle:{"background-color":"white"}, frame:false,border:false,plain:true,checked:_this.dimension.linked,handler:function(o,c){
          //  console.log("CHECK",c)
          //  _this.dimension.linked=c;}}]
          items:[_this.dimCheck] 
        },
        {xtype:'panel',region:'center',frame:false,border:false,plain:true,layout: 'border',
          items:[
          {
            xtype:'panel',layout:'fit',frame:false,border:false,plain:true,region:'center',items:[_this.dimSlider], 
            bodyStyle:{"background-color":"white"}
          },
          {
            xtype:'panel',region:'east',width:40,
            layout:'hbox',
            border:false,frame:false,
            bodyStyle:{"background-color":"white"},
            items:[
            {xtype:'button',text:'&lt;',width:20,height:22,handler:function(){
              var preAuto=_this.Parent.getUpdateStatus();
              _this.Parent.setUpdateStatus(false);
              _this.dimSlider.setValue(_this.dimSlider.getValue()-1);
              _this.Parent.setUpdateStatus(preAuto);
              }
            },
              {xtype:'button',text:'&gt;',width:20,height:22,handler:function(){
              var preAuto=_this.Parent.getUpdateStatus();
              _this.Parent.setUpdateStatus(false);
              _this.dimSlider.setValue(_this.dimSlider.getValue()+1);
              _this.Parent.setUpdateStatus(preAuto);
              }
            }
            ]
          }
          ]
        }
        ]
      },
      {xtype:'panel',height:22,plain:true,border:false,layout:'fit',items:[_this.dimensionValuePanel]},
      {xtype:'panel',plain:true,border:false,layout:'fit',items:_this.dimensionOptionsList}
      ]
    });
    this.superclass.initComponent.apply(this, arguments);
  }
}); 

