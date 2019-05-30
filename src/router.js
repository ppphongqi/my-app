import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },

      // 测试组件
      {
          path:'/test',
          name:'test',
          component: () => import('./views/test.vue')
      },
    {
      path : '/my2',
      name:'my2',
      component: () => import('./views/My2.vue')
    },
    {
      path : '/register',
      name:'register',
      component: () => import('./views/Register.vue')
    },
    {
      path:'/fabu',
      name:'pulish',
      component: () => import('./views/Publish.vue')
    },
    {
      path:'/mycol',
      name:'mycollect',
      component: () => import('./views/MyCollect.vue')
    },
    {
      path:'/mybuy',
      name:'mybuy',
      component: () => import('./views/MyBuy.vue')
    },
    {
      path:'/forget',
      name:'forgetpwd',
      component: () => import('./views/ForgetPwd.vue')
    },
    {
      path:'/goodsdetail',
      name:'goodsdetail',
      component: () => import('./views/GoodsDetail.vue')
    },







    {
      path:'/myfabu',
      name:'myfabu',
      component: () => import('./views/myfabu.vue')

    },
    {
      path:'/my',
      name:'my',
      component: ()=> import('./views/My.vue')
    },
    {
      path:'/login',
      name:'login',
      component: ()=> import('./views/login.vue')
    },




    {
      path:'/top',
      name:'top',
      component: ()=> import('./components/NavTop.vue')
    },
    {
      path:'/banner',
      name:'banner',
      component: () => import('./components/IndexBanner.vue')
    },
    {
      path:'/indexNav',
      name:'indexNav',
      component: () => import('./components/IndexNav.vue')
    }


  ]
})
