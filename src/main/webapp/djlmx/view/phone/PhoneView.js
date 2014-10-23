Ext.define('djlmx.view.phone.PhoneView',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.phoneView',
	title: 'Phone',
//    layout: 'fit',
    items: [ {
    	xtype : 'panel',
    	itemId : 'input_panel',
    	layout : 'column',
    	height : 80,
    	align : 'center',
    	items : [{
		            xtype: 'textfield',
		            fieldLabel: 'Id',
		            margin : '25',
		            labelAlign : 'right'
		        }, {
		            xtype: 'textfield',
		            fieldLabel: 'Username',
		            margin : '25',
		            labelAlign : 'right'
		        }, {
		            xtype: 'textfield',
		            fieldLabel: 'Payment',
		            margin : '25',
		            labelAlign : 'right'
		        }, {
		        	xtype: 'button',
		        	text : '发送',
		        	tip : '发送事件，表示交款事件发生',
		            margin : '25',
		            disabled : true
		        }]
	    }, {
	    	xtype : 'panel',
	    	layout : 'fit',
	    	height : 90,
	    	itemId : 'result_panel',
	    	align : 'center',
	    	items : [{
	    		xtype : 'textfield',
	    		fieldLabel : 'result',
	    		width : 200,
	            margin : '30',
	            labelAlign : 'right',
	            editable : false
	    	}],
	    },  {
	    	xtype : 'container',
	    	layout : 'fit',
	    	align : 'center',
	    	items : [{
	    		xtype : 'image',
	    		src : 'resources/images/_phone_show.jpg',
	            margin : '30',
	            labelAlign : 'right'
	    	}],
	    }
	],
    bbar: {},
    tbar: {
    	xtype : 'toolbar',
		cls : 'x-panel-header',
		layout : 'column',
		items : [{
            text : '初始化Phone服务',
            xtype : 'button',
            iconCls : 'tab-add-icon',
            tooltip : '初始化所需资源'
        }, '-', {
            text : '终止Phone服务',
            xtype : 'button',
            iconCls : 'tab-remove-icon',
            tooltip : '终止Phone服务，并释放相关资源',
            disabled : true
        }]
	
    }
});