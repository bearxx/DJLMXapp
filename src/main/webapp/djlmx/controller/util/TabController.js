Ext.require('Ext.window.MessageBox');
var g_tabs;
var extraTabsStore;
Ext.define('djlmx.controller.util.TabController', {
	extend : 'Ext.app.Controller',
	views : [ 'util.TabView', 'home.HomeTabView'],
	stores : [ 'util.ExtraTabsStore' ],
	init : function() {
		this.control({
			'tabView' : {
				tabchange : this.onTabChanged,
				afterrender : this.onTabControllerRendered
			}
		});
	},
	refs : [ {
		ref : 'tabs',
		selector : 'tabView'
	} ],

	onTabChanged : function(tabPanel, newCard, oldCard, eOpts) {
		 var tabs = [], oldToken, newToken;
		    newToken = newCard.xtype;
		    if (newCard.kvs) {
		      newToken += '?';
		      for ( var key in newCard.kvs) {
		        newToken += newCard.kvs[key] + '&';
		      }
		      newToken = newToken.substring(0, newToken.length - 1);
		    }
		    oldToken = Ext.History.getToken();
		    if (newToken != oldToken)
		      Ext.History.add(newToken);
	},
	onTabControllerRendered : function(tabs) {
		Ext.History.init();
	    fnCreateTab = this.createTab;
	    g_tabs = tabs;
	    extraTabsStore = this.getStore('util.ExtraTabsStore');
	    Ext.History.on('change', this.onTokenChanged);
	    var curToken = Ext.History.getToken();
	    this.onTokenChanged(curToken);
	},
	createTab : function(id, text, iconCls, tab) {
		return {
			xtype : tab,
			id : 'tab_' + id,
			title : text,
			itemId : text,
			closable : true,
			iconCls : iconCls
		};
	},
	onTokenChanged : function(token) {
		 var parts, length, tabType, activeTab, kvs;
		    if (token) {
		      parts = token.split('?');
		      length = parts.length;
		      if (length > 1) {
		        kvs = parts[1].split('&');
		      }
		    }
		    tabType = parts ? parts[0] : 'homeTabView';
		    activeTabs = Ext.ComponentQuery.query(tabType);
		    var rec = extraTabsStore.findRecord('xtype', tabType);
		    if (rec) {
		      // 对于参数敏感的tab，因为存在多个同时打开的tab页，需要根据相关参数进行详细查询。
		      var paramSensitive = rec.get('paramSensitive');
		      if (paramSensitive === true) {
		        for ( var i = 0; i < activeTabs.length; ++i) {
		          if (kvs.toString() == activeTabs[i].kvs.toString()) {
		            activeTab = activeTabs[i];
		            break;
		          }
		        }
		      } else {
		        activeTab = activeTabs[0];
		      }
		    } else {
		      activeTab = activeTabs[0];
		    }
		    if (!activeTab) {
		      var navs = Ext.ComponentQuery.query('itemRenderer');
		      var nav, i;
		      for (i = 0; i < navs.length; ++i) {
		        nav = navs[i].getRootNode().findChild('qtitle', tabType, true);
		        if (nav)
		          break;
		      }
		      if (nav) {
		        var text = nav.data.text;
		        var id = nav.data.id;
		        activeTab = g_tabs.add(fnCreateTab(id, text, nav.data.iconCls, nav.data.qtitle));
		      } else {
		        var rec = extraTabsStore.findRecord('xtype', tabType);
		        if (rec) {
		          var xtype = rec.get('xtype');
		          activeTab = g_tabs.add({
		            xtype : xtype,
		            closable : true
		          });
		        }
		      }
		    }
		    if (activeTab && typeof activeTab.setKvs === 'function') {
		      if (activeTab.rendered)
		        activeTab.setKvs(kvs);
		      else
		        activeTab.on('afterrender', function(tab) {
		          activeTab.setKvs(kvs);
		        });
		    }
		    if (activeTab)
		      g_tabs.setActiveTab(activeTab);
	}
});