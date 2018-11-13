import Vue from 'vue'
import Router from 'vue-router'

import y1 from '@/components/homeFurnishing/y1'
import y2 from '@/components/homeFurnishing/y2'
import homeFurnishingrouter from '@/components/homeFurnishingrouter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homeFurnishingrouter/y1'
    },
    {
      path: '/homeFurnishingrouter',
      name: 'homeFurnishingrouter',
      component: homeFurnishingrouter,
      redirect: '/homeFurnishingrouter/y1',
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'y1',
          component: y1
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'y2',
          component: y2
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/components/detail'),
      redirect: '/homeFurnishingrouter/y1',
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'y1',
          component: () => import('@/components/detail'),
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'y2',
          component: y2
        }
      ]
    }
  ]
})
