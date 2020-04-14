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
			this.oTable = this.getView().byId("table1");    
		},
		onNavBack: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home_route");
		},
		onChange: function(){
			
		},
		onSearch: function(){
			var comboBoxValue=this.byId("oComboBox").getValue();
			
			var obinding=this.oTable.getBinding("items"), oFilter;
			if(comboBoxValue || comboBoxValue === ""){
				oFilter= new Filter("location","EQ",comboBoxValue);
				obinding.filter([oFilter]);
			}
		},
		onReset: function(){
			var obinding=this.oTable.getBinding("items");
			obinding.filter([]);
			this.byId("oComboBox").setSelectedItem(null);
		},
		handleListItem : function(oEvent){
			var location = oEvent.getSource().getBindingContext().getProperty("location");
			var obinding=this.oTable.getBinding("items"), oFilter;
			//if(comboBoxValue || comboBoxValue === ""){
				oFilter= new Filter("location","EQ",location);
				obinding.filter([oFilter]);
			//}
		}
			
	});	
	
		
		
});