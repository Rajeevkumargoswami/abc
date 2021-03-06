sap.ui.jsview("Test.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function() {
		return "Test.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: []
		});
 // create a lite button with an icon and a text
		var oButton9 = new sap.m.Button({
						text : "Settings",
						icon : "sap-icon://settings",
						//class: "sapUiSmallMargin",
						press : oController.handleMessageToastPress
										});
		oPage.addContent(oButton9);
		var app = new sap.m.App("myApp", {
			initialPage: "oPage"  
		});
		app.addPage(oPage);
		return app;
	}

});