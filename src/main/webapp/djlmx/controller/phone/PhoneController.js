Ext.define('djlmx.controller.phone.PhoneController', {
  extend : 'Ext.app.Controller',
  views : [ 'phone.PhoneView'],
  isWorking : false,
  init : function() {
    this.control({
        'phoneView': {
            render: this.onTreeRender
        },
        'phoneView panel[itemId=input_panel] button' : {
        	click : this.sendPhone
        },
        'phoneView toolbar button[iconCls=tab-add-icon]' : {
        	click : this.initPhoneService
        },
        'phoneView toolbar button[iconCls=tab-remove-icon]' : {
        	click : this.stopPhoneService
        }
    });
  },
  
  initPhoneService : function(btn, e) {
	  var me = this;
	  Ext.data.JsonP.request({
		  url : 'http://localhost:8081/qmwebservice/rest/esper/startPhone',
		  callbackKey : 'callback',
		  params : {
			  page:1,
			  start:0,
			  limit:25
		  },
		  success : function(result, reqeust) {
			  if(result.success != null) {
				  Ext.Msg.alert('tip', 'success');
				  btn.disable();
				  btn.up('toolbar').down('button[iconCls=tab-remove-icon]').enable();
				  btn.up('phoneView').down('panel[itemId=input_panel]')
				  		.down('button').enable();
				  me.isWorking = true;
				  me.waitForRes(btn);
			  } else {
				  Ext.Msg.alert('tip', 'remote internal error');
			  }
		  },
		  failure : function() {
			  Ext.Msg.alert('tip', 'remote system error');			  
		  }
	  });
  },
  
  waitForRes : function(btn) {
	  var me = this;
	  Ext.data.JsonP.request({
		  url : 'http://localhost:8081/qmwebservice/rest/esper/result',
		  method : 'GET',
		  timeout : 60000,
		  success : function(resp) {
			  if(me.isWorking) {	
//				  var result = Ext.decode(resp.responseText).data[0];
				  var result = resp.data[0];
				  var resField = btn.up('phoneView').down('panel[itemId=result_panel]').down('textfield');
				  var resString = 'User: ' + result.user + '{id:[' + result.id + ']} '
				  		+ 'paid ' + result.newPayment
				  		+ ', average paid last 3 time is: ' + result.avgPayment;
				  resField.setValue(resString);
				  me.waitForRes(btn);
			  }
		  },
		  failure : function() {
			  if(me.isWorking) {
				  me.waitForRes(btn);
			  }
		  }
	  });
  },
  
  sendPhone : function(btn, e) {
	  var inputPanel = btn.up('panel[itemId=input_panel]'),
	  	  id = inputPanel.down('textfield[fieldLabel=Id]').getValue(),
	  	  user = inputPanel.down('textfield[fieldLabel=Username]').getValue(),
	  	  payment = inputPanel.down('textfield[fieldLabel=Payment]').getValue();
	  Ext.data.JsonP.request({
		  url : 'http://localhost:8081/qmwebservice/rest/esper/phone',
		  method : 'GET',
		  params : {
			  id : id,
			  user : user,
			  payment : payment
		  },
		  success : function() {
			  Ext.Msg.alert('ttp', 'send successfully !');
		  },
		  failure : function() {
			  Ext.Msg.alert('ttp', 'send failed !');			  
		  }
	  });
  },
  
  stopPhoneService : function(btn, e) {
	  var me = this;
	  Ext.data.JsonP.request({
		  url : 'http://localhost:8081/qmwebservice/rest/esper/stopPhone',
		  success : function(respText) {
//			  var res = Ext.JSON.decode(respText.responseText).success;
			  var res = respText.success;
			  if(res == true) {
				  Ext.Msg.alert('tip', 'success');
				  btn.disable();
				  btn.up('toolbar').down('button[iconCls=tab-add-icon]').enable();
				  btn.up('phoneView').down('panel[itemId=input_panel]')
			  		.down('button').disable();
				  me.isWorking = false;
			  } else {
				  Ext.Msg.alert('tip', 'remote internal error');
			  }
		  },
		  failure : function() {
			  Ext.Msg.alert('tip', 'remote system error');			  
		  }
	  });
	  
  },
 
  onTreeRender : function (view) {
	  var status = null;
	  Ext.data.JsonP.request({
		  url : 'http://localhost:8081/qmwebservice/rest/esper/status',
		  method: 'GET',
		  success : function(resp) {
//			  var isRunning = Ext.decode(resp.responseText).isRunning;
			  var isRunning = resp.isRunning;
			  if(isRunning == true) {
				  view.down('button[iconCls=tab-add-icon]').disable();
				  view.down('button[iconCls=tab-remove-icon]').enable();
				  view.down('panel[itemId=input_panel]').down('button').enable();
			  }
		  }
	  });
  }
});
