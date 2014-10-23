Ext.require([ 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.state.*',
		'Ext.form.*']);
Ext.define('djlmx.component.EnumItemGrid', {
	extend: 'Ext.grid.Panel',  
	alias: 'widget.enumitemgrid',  
	itemId : 'enumitemgrid',
	loadMask : true,
	width : 600,
	height : 0,
	margin : 5,
	store : 'EnumItemStore',
	title : '枚举项管理',
	plugins : [ {
		ptype : 'rowediting'
	} ],
	
	tbar : {
		xtype : 'toolbar',
		cls : 'x-panel-header',
		items : [ {
			itemId : 'addEnumItem',
			text : '添加',
			xtype : 'button',
			iconCls : 'tab-add-icon',
		}, '-', {
			itemId : 'removeEnumItem',
			text : '删除',
			xtype : 'button',
			iconCls : 'tab-remove-icon',
			disabled : true
		} ]
	},
	
	listeners : {
		'selectionchange' : function(view, records) {
			this.down('#removeEnumItem').setDisabled(!records.length);
		}
	},
	
	initComponent : function() {
	    var me = this;
	    /*
	     * this tab class will have multiple instances, so you can't share with the
	     * same store.
	     */
	    var enumItemStore = Ext.create('djlmx.store.EnumItemStore');
	    Ext.apply(me, {
	      store : enumItemStore,
	      // 必须把columns与store定义在initComponent下的Ext.apply才可以保证COMBOX不出问题.
	      columns : [ {
	    		header : '枚举项名称',
	    		dataIndex : 'name',
	    		width : 230,
	    		flex : 1,
	    		editor : {
	    			allowBlank : false
	    		}
	        }, {
	    		header : '默认值',
	    		dataIndex : 'defaultValue',
	    		width : 30,
	    		flex : 1,
	    		editor : {
	    			allowBlank : true
	    		}
	    	  }]
	    });
	    this.callParent(arguments);
	  }
});