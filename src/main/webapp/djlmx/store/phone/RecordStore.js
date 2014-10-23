Ext.define('djlmx.store.phone.RecordStore', {
	extend : 'Ext.data.Store',
	pageSize : 25,
	autoLoad : false,
	fields : [ {name:'id', type:'int'},'user', 'payment',
	           {
					 name : 'timestamp',
					 convert : function(value) {
						 return Ext.util.Format.date(new Date(value), 'Y-m-d H:i:s');
					 }
	           }
	],
	proxy : {
		type : 'jsonp',
		url : 'http://localhost:8081/qmwebservice/rest/phone/list',
		reader : {
			type : 'json',
			root : 'data',
			totalProperty : 'total',
			successProperty : 'success'
		}
	},

});