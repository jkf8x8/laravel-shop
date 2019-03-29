
export default [
    {
        path: '/',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        meta: { title: '自述文件' },
        children:[
      
            {
                path: '/icon',
                component: resolve => require(['../components/page/Icon.vue'], resolve),
                meta: { title: '自定义图标' }
            },
            {
                path: '/table',
                component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                meta: { title: '基础表格' }
            },
            {
                path: '/tabs',
                component: resolve => require(['../components/page/Tabs.vue'], resolve),
                meta: { title: 'tab选项卡' }
            },
            {
                path: '/form',
                component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                meta: { title: '基本表单' }
            },
        ]
    },
    { path: '/login', component: resolve => require(['../components/page/Login.vue'], resolve) }
]