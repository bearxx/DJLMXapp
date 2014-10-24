Ext.override(Ext.tree.View, {
    enableTextSelection: true
});
var _remote_esper_ip = null;
delete Ext.tip.Tip.prototype.minWidth;
delete Ext.tip.Tip.prototype.maxWidth;
Ext.override(Ext.form.Field, {
    initComponent: function () {
    	Ext.Ajax.request({
    		url : 'rest/init/service',
    		method : 'GET',
    		success : function(resp) {
    			_remote_esper_ip = Ext.decode(resp.responseText).data;
    		}
    	});
    	
        var fl = this.fieldLabel, h = this.helpText;
        if (h && h !== '' && fl) {
            this.fieldLabel = fl + (h ? '<span style="color:green;" data-qtip="' + h + '">?</span> ' : '');
        }
        this.callParent(arguments);
    }
});
Ext.application({
    requires: [ 'Ext.container.Viewport'],
    name: 'djlmx',
    appFolder: 'djlmx',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            style: 'padding:0px',
            items: [
                {
                    xtype: 'container',
                    layout: 'border',
                    items: [
                        {
                            xtype: 'topBarView',
                            height: 72,
                            region: 'north'
                        },
                        {
                            xtype: 'menuView',
                            region: 'west',
                            collapsible: true,
                            split: true,
                            width: 240
                        },
                        {
                            xtype: 'tabView',
                            region: 'center'
                        }

                    ]
                }
            ]
        });
    },
    controllers: ['util.TopBarController',
                  'util.TabController','home.HomeController',
                  'util.MenuController',
                  'phone.PhoneController',
                  'phone.RecordController'
                  ]
});