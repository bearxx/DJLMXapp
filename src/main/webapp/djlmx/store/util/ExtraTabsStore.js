Ext.define('djlmx.store.util.ExtraTabsStore', {
  extend : 'Ext.data.Store',
  autoLoad : false,
  fields : [ 'xtype', 'paramSensitive' ],
  data : [ {
    xtype : 'moduleedittab',
    paramSensitive : false
  }]
});