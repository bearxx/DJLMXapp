Ext.require([ 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.state.*',
		'Ext.form.*','dossueradmin.component.MetaDataComboBox']);
Ext.define('djlmx.component.MetaDataGrid', {
	extend: 'Ext.grid.Panel',  
	alias: 'widget.metadatagrid',  
	itemId : 'metaDataGrid',
	loadMask : true,
	width : 600,
	height : 260,
	margin : 5,
	store : 'MetaDataStore',
	title : '元数据管理',
	plugins : [ {
		ptype : 'rowediting'
	} ],
	
	tbar : {
		xtype : 'toolbar',
		cls : 'x-panel-header',
		items : [ {
			itemId : 'addMetaData',
			text : '添加',
			xtype : 'button',
			iconCls : 'tab-add-icon'
		}, '-', {
			itemId : 'removeMetaData',
			text : '删除',
			xtype : 'button',
			iconCls : 'tab-remove-icon',
			disabled : true
		} ]
	},
	
	listeners : {
		'selectionchange' : function(view, records) {
			this.down('#removeMetaData').setDisabled(!records.length);
		}
	},
	
	initComponent : function() {
	    var me = this;
	    /*
	     * this tab class will have multiple instances, so you can't share with the
	     * same store.
	     */
	    var metaDataStore = Ext.create('djlmx.store.MetaDataStore');
	    Ext.apply(me, {
	      store : metaDataStore,
	      // 必须把columns与store定义在initComponent下的Ext.apply才可以保证COMBOX不出问题.
	      columns : [ {
	    		header : '元数据名称',
	    		dataIndex : 'name',
	    		width : 230,
	    		flex : 1,
	    		editor : {
	    			allowBlank : false
	    		}
	        }, {
	    		header : '域规则类型',
	    		dataIndex : 'fieldRuleType',
	    		width : 30,
	    		flex : 1,
	    		editor:new Ext.form.field.ComboBox({
	    				allowBlank : false,
	                    typeAhead: true,
	                    editable: false,
	                    triggerAction: 'all',
	                    store: [
	                        ['0','required'],
	                        ['1','optional'],
	                        ['2','repeated']
	                    ]
	            })
	        }, {
	    		header : '元数据类型',
	    		dataIndex : 'dataType',
	    		width : 30,
	    		flex : 1,
	    		editor:{
	    			xtype:'metadatacombobox'//自定义组件
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