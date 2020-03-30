sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("code.appUI5_Hello.controller.View1", {
		
	
		onPress: function(){
			var emp={"name" : " ", "emp_id" : " ", "location" : " "};
			var oData=new sap.ui.model.json.JSONModel();
			oData.loadData("./data/data.json");
			
			emp.name=this.getView().byId("name").getValue();
			emp.emp_id=this.getView().byId("emp_id").getValue();
			emp.location=this.getView().byId("location").getValue();
			MessageToast.show("Value you entered is : " + JSON.stringify(emp));
			MessageToast.show("Value you entered is : " + JSON.stringify(oData.getData()));
			
		/*	reader1.onloadend = function(evn){
				if(evn.target.result === null){
						MessageToast.show("File Error. Unable to add data");	
				}
				else{
						MessageToast.show("File is not available");	
				}
			};
			reader1.readAsText("data/data.json");*/
			//	MessageToast.show("File Exists : " + fs.exists('./data/data.json'));
			//var inputStr="";
			//var json = JSON.parse();
			//var data = JSON.stringify(json);
			//var fs = require('fs');
			//fs.writeFile("file.json", data);
		},
		displayAll: function(){
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Display_route");
			
		}

	});
});