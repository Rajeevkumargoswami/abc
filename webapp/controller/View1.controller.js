sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Test.controller.View1", {
		handleMessageToastPress: function(oEvent) {
			var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\r\n eirmod.';
			sap.m.MessageToast.show(msg);
		}
	});
});