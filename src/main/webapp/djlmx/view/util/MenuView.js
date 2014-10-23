Ext.define('djlmx.view.util.MenuView', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.menuView',
	requires : [ 'djlmx.component.ItemRenderer' ],
	title : 'djlmx功能列表',
	iconCls : 'navigator-riskmgr',
	layout : {
		type : 'accordion'
	},
	initComponent : function() {
		this.items=[{
	        xtype : 'itemRenderer',
	        title : '功能列表',
	        iconCls : 'navigator-archive',
	        store : {
	            xtype : 'treestore',
	            root : {
	                expanded : true,
	                children : [ {
	                    text : 'HomePage',
	                    id : 'homeTabView',
	                    iconCls : 'navigator-rank-history',
	                    qtitle : 'homeTabView',
	                    leaf : true
	                },{
	                    text : '电话账单',
	                    id : 'phoneView',
	                    iconCls : 'navigator-rank-history',
	                    qtitle : 'phoneView',
	                    leaf : true
	                },{
	                    text : '全部记录',
	                    id : 'recordView',
	                    iconCls : 'navigator-rank-history',
	                    qtitle : 'recordView',
	                    leaf : true
	                } ]
	            }
	        }
	    }
	    ];
		this.callParent(arguments);
	}
});