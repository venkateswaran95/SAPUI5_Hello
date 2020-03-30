sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
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
		}
			
	});	
	
		
		
});