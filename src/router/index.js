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
      meta: {title: '首页'},
      component: resolve => require(['../pages/officialWebsite/Home/Home'], resolve),
    },
    {
      path: '/notice',
      meta: {title: '通知公告'},
      component: resolve => require(['../pages/officialWebsite/Notice/Notice'], resolve),
      children: [
        {
          path:'noticeDetail',
          component: resolve => require(['../pages/officialWebsite/Notice/NoticeDetail'], resolve),
        }
      ],
    },
  ]
})
