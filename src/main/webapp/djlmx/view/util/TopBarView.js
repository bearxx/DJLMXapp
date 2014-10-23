Ext.define('djlmx.view.util.TopBarView', {
    extend: 'Ext.container.Container',
    alias: 'widget.topBarView',
    layout: 'border',
    style: 'background-image: url(resources/images/bg.png) !important;background-repeat:repeat-x;',
    html : '<div><h1>welcome -- DjLmx 中间件展示系统</h1></div>',
//    initComponent: function () {
//        this.items = [
//            {
//                xtype: 'container',
//                region: 'center',
//                style: 'padding:5px',
//                html: '<div>Welcome</div>'
//            },
//            {
//                xtype: 'container',
//                region: 'east',
//                width: 550,
//                layout: {
//                    type: 'vbox',
//                    pack: 'bottom'
//                },
//                items: [
//                    {
//                        xtype: 'container',
//                        height: 36
//                    },
//                    {
//                        xtype: 'box',
//                        id: 'welcome_box',
//                        width: '100%',
//                        tpl: '<p><font color="white">欢迎</font></p>',
//                        style: 'padding:3px;position: absolute; bottom: 0; right: 0; text-align:right;'
//                    }
//                ]
//            }
//        ];
//        this.callParent(arguments);
//    }
});