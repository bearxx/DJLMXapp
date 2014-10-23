Ext.define('djlmx.view.util.TabView', {
  extend : 'Ext.tab.Panel',
  alias : 'widget.tabView',
  id : 'tabView',
  plugins : Ext.create('Ext.ux.TabCloseMenu', {
    closeTabText : '关闭当前页',
    closeOthersTabsText : '关闭其他页',
    closeAllTabsText : '关闭所有页',
    closeTabIconCls : 'tab-close',
    closeOthersTabsIconCls : 'tab-close-other',
    closeAllTabsIconCls : 'tab-close-all'
  }),
  initComponent : function() {
    this.items = [ {
      xtype : 'homeTabView'
    } ];
    this.callParent(arguments);
  }
});