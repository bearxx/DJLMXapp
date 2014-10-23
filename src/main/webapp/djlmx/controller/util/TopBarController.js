Ext.define('djlmx.controller.util.TopBarController', {
  extend : 'Ext.app.Controller',
  views : [ 'util.TopBarView' ],
  init : function() {
    this.control({
      'topbar' : {
        afterrender : function(view, opts) {

        }
      }
    });
  },
});