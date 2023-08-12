import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login/loginIndex.vue'

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,   
  },
  {    
    path: '/cadastro',
    name:'loginCadastro',
    component: () => import('@/views/Cadastro/cadastroIndex.vue') 
  },
  {
    path:'/inicio',
    name: 'inicio',
    component: () => import('@/views/Home/homeIndex.vue')
  },
  {
    path:'/nivel',
    name:'nivel',
    children: [
      {
        path: '/basico',
        name: 'nivelBasico',
        component: () => import('@/views/Nivel/nivelBasico.vue')
      },
      {
        path: '/medio',
        name: 'nivelMedio',
        component: () => import('@/views/Nivel/nivelMedio.vue')
      },
      {
        path: '/avancado',
        name: 'nivelAvancado',
        component: () => import('@/views/Nivel/nivelAvancado.vue')
      },
    ]
  }
/*   {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
