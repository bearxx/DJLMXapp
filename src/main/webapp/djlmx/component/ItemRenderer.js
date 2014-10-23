Ext.define('djlmx.component.ItemRenderer', {
  extend : 'Ext.tree.Panel',
  alias : 'widget.itemRenderer',
  useArrows : true,
  singleExpand : false,
  rootVisible : false,
  initComponent : function() {
    this.callParent(arguments);
  }
});
