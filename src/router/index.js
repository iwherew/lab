import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
Vue.use(ElementUI);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: resolve => require(['../pages/officialWebsite/Index/Index'], resolve),
      children: [
        {
          path: 'home',
          meta: {title: '首页'},
          component: resolve => require(['../pages/officialWebsite/Home/Home'], resolve),
        },
        {
          path: 'notice',
          component: resolve => require(['../pages/officialWebsite/Notice/Notice'], resolve),
          children: [
            {
              path: '',
              meta: {title: '通知公告'},
              component: resolve => require(['../pages/officialWebsite/common/articleLists'], resolve),
            },
            {
              path: 'articleDetail',
              meta: {title: '文章详情'},
              component: resolve => require(['../pages/officialWebsite/common/articleDetail'], resolve),
            },
            {
              path: 'articleEdit',
              meta: {title: '文章编辑'},
              component: resolve => require(['../pages/officialWebsite/common/articleEdit'], resolve),
            },
          ]
        },
        {
          path: 'department',
          meta: {title: '部门介绍'},
          component: resolve => require(['../pages/officialWebsite/Department/department'], resolve),
        },
        {
          path: 'member',
          meta: {title: '成员介绍'},
          component: resolve => require(['../pages/officialWebsite/Member/member'], resolve),
        },
        {
          path: 'recruitment',
          meta: {title: '招生信息'},
          component: resolve => require(['../pages/officialWebsite/Recruitment/recruitment'], resolve),
        },
      ]
    },
  ]
})
