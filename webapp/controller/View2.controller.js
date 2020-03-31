sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel',
		'sap/ui/model/Filter'
	], function(Controller, JSONModel, Filter) {
	"use strict";
	
	return Controller.extend("code.appUI5_Hello.controller.View2", {
		
		onInit: function(){
			var sPath = jQuery.sap.getModulePath("code.appUI5_Hello", "/data/data.json"); 
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel);
		},
		onNavBack: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home_route");
		},
		onChange: function(){
			
		},
		onSearch: function(){
			var comboBoxValue=this.byId("oComboBox").getValue();
			var oTable = this.getView().byId("table1");    
			var obinding=oTable.getBinding("items"), oFilter;
			if(comboBoxValue || comboBoxValue === ""){
				oFilter= new Filter("location","EQ",comboBoxValue);
				obinding.filter([oFilter]);
			}
		},
		onReset: function(){
			
		}
			
	});	
	
		
		
});