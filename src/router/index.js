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
    path:'/register',
    name:'register',
    children: [
      {
        path: '/corporate',
        name: 'corporateRegister',
        component: () => import('@/views/Register/Corporate/registerCorporate.vue'),       
      },                                  
      {
        path: '/personal',
        name: 'personalRegister',
        component: () => import('@/views/Register/Personal/registerPersonal.vue')
      },
      {
        path: "hours",
        name: "registerHours",
        component: () => import('@/views/Register/Corporate/registerHours.vue'),
      }                                 
     /*  {
        path: '/usuario/:codigo?',
        name: 'cadastroUsuario',
        component: () => import('@/views/Cadastro/Usuario/cadastroUsuario.vue')
      },   */             
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
