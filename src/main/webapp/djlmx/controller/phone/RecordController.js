Ext.define('djlmx.controller.phone.RecordController', {
	extend : 'Ext.app.Controller',
    views : ['phone.RecordView'],
    stores : ['phone.RecordStore'],
    init : function() {
	    this.control({
	    	'recordView': {
	    		render: this.onTreeRender
	    	},
	    	'recordView toolbar button' : {
	    		click : this.clickSearchButton
	    	}
	    });
    },
    
    clickSearchButton : function(btn) {
    	var id = btn.up('recordView').down('toolbar').down('textfield[itemId=id]').getValue(),
    		user = btn.up('recordView').down('toolbar').down('textfield[itemId=user]').getValue();
    	var store = btn.up('recordView').getStore();
    	var bbar = btn.up('recordView').down('pagingtoolbar');
		bbar.moveFirst();
    	store.load({
    		params : {
    			id : id,
    			user : user,
    		}
    	});
    },
    
    onTreeRender : function (view) {
    	var store = view.getStore();
    	store.load();
    	store.on('beforeload', function(store, operation, opts){
        	var id = view.down('toolbar').down('textfield[itemId=id]').getValue();
        	var user = view.down('toolbar').down('textfield[itemId=user]').getValue();
    		Ext.apply(store.proxy.extraParams, {
    			id : id,
    			user : user
    		});
    	}, this);
    }
});
