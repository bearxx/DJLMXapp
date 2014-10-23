Ext.define('djlmx.view.home.HomeTabView', {
  extend : 'Ext.panel.Panel',
  alias : 'widget.homeTabView',
  title : 'Phone Part',
  id : 'tab_home',
  tabType : 'homeTabView',
  iconCls : 'tab-home',
  layout : {
    type : 'vbox',
    padding : '5',
    align : 'stretch'
  },
  items : [
	{
		xtype : 'button',
	    title : 'phone esper',
	    flex : 1,
	    padding : 5,
  },{
	  	xtype : 'textfield',
		title : 'phone esper',
		flex : 1,
		padding : 5,
}],
  initComponent : function() {
	  this.callParent(arguments);
  }
});