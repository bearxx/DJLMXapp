{
    'data'
:
    [{
        xtype : 'itemRenderer',
        title : '案卷管理',
        iconCls : 'navigator-archive',
        store : {
            xtype : 'treestore',
            root : {
                expanded : true,
                children : [ {
                    text : '待处理案卷',
                    id : 'homeTabView',
                    iconCls : 'navigator-rank-history',
                    qtitle : 'homeTabView',
                    leaf : true
                } ,{
                    text : '我的案卷',
                    id : 'mycaptureview',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'mycaptureview',
                    leaf : true
                },{
                    text : '所有案卷',
                    id : 'allcaptureview',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'allcaptureview',
                    leaf : true
                } ,{
                    text : '案卷统计',
                    id : 'statisticalEventsView',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'statisticalEventsView',
                    leaf : true
                },{
                    text : '案卷详情',
                    id : 'dossierInformationView',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'dossierInformationView',
                    leaf : true
                },{
                    text : '图片',
                    id : 'testPhotoView',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'testPhotoView',
                    leaf : true
                },{
                    text : '测试案卷详情',
                    id : 'testEventView',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'testEventView',
                    leaf : true
                }]
            }
        }
    },{
        xtype : 'itemRenderer',
        title : '系统管理',
        iconCls : 'navigator-archive',
        store : {
            xtype : 'treestore',
            root : {
                expanded : true,
                children : [{
                    text : '后台用户管理',
                    id : 'pspuserList',
                    iconCls : 'navigator-rank-history',
                    qtitle : 'pspuserList',
                    leaf : true
                } ,{
                    text : '终端用户管理',
                    id : 'enduserView',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'enduserView',
                    leaf : true
                } ,{
                    text : '默认回复管理',
                    id : 'replyView',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'replyView',
                    leaf : true
                } ,{
                    text : '案卷类型管理',
                    id : 'caseView',
                    iconCls : 'navigator-blacklist',
                    qtitle : 'caseView',
                    leaf : true
                } ]
            }
        }
    }],
        'success'
:
    true
}
