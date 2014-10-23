Ext.define('djlmx.view.phone.RecordView',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.recordView',
    store : 'phone.RecordStore',
	title: 'AllRecord',
    layout: 'fit',
    columnLines : true,
    autoScroll : true,
    columns : [{
	        header : '用户id',
	        dataIndex : 'id',
	        flex:1
    	},{
            header : '用户名',
            dataIndex : 'user',
            flex:1
        },{
            header : '费用',
            dataIndex : 'payment',
            flex:1
        },{
            header : '时间',
            dataIndex : 'timestamp',
            flex:1
        }
    ],
    tbar: {
    	xtype : 'toolbar',
		cls : 'x-panel-header',
		layout : 'column',
		padding : 5,
		items : [{
			fieldLabel : '用户id',
			labelAlign : 'right',
			itemId : 'id',
            xtype : 'textfield',
            tooltip : '用户唯一标识符'
        }, '-', {
			fieldLabel : '用户名',
			labelAlign : 'right',
			itemId : 'user',
            xtype : 'textfield',
            tooltip : '用户名，只按照名字搜索，不一定包含该用户全部信息'
        }, '-', {
            text : '搜索',
            xtype : 'button',
            iconCls : 'tab-remove-icon',
            tooltip : '按条件搜索，无条件则表示全部,<b>如果没有运行服务，将不会有数据产生</b>'
        }]
    },
    bbar: [{
       	xtype : 'pagingtoolbar',
       	itemId : 'page_bar',
       	store:'phone.RecordStore',
        displayInfo : true
    }],
    renderTo: Ext.getBody()
});