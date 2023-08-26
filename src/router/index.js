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
    path:'/inicio',
    name: 'inicio',
    component: () => import('@/views/Home/homeIndex.vue')
  },
  {
    path:'/cadastro',
    name:'cadastro',
    children: [
      {
        path: '/usuario',
        name: 'usuarioFiltro',
        component: () => import('@/views/Cadastro/Usuario/cadastroUsuarioFiltro.vue')
      },               
      {
        path: '/usuario/:codigo?',
        name: 'cadastroUsuario',
        component: () => import('@/views/Cadastro/Usuario/cadastroUsuario.vue')
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
