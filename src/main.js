import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/state'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
