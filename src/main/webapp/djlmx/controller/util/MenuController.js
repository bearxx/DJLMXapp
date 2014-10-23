Ext.require('Ext.window.MessageBox');
var fnCreateTab;
Ext.define('djlmx.controller.util.MenuController', {
  extend : 'Ext.app.Controller',
  views : [ 'util.MenuView'],
  init : function() {
    this.control({
        'menuView': {
            render: this.onTreeRender
        },
        'itemRenderer' : {
        itemclick : this.onItemClicked
      }
    });
  },
 

    onTreeRender: function (view) {
    },
  onNavigatorRendered : function() {
  },

  onItemClicked : function(view, rec, item, index, e, eOpts) {
	  if (!rec.raw || !rec.data || rec.data.leaf != true)
	      return;
	    Ext.History.add(rec.data.qtitle);
  }
});
