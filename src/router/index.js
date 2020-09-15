import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = ()=> import('../views/fontend/Home')
const Articles = ()=> import('../views/fontend/Articles')
const Profile = ()=> import('../views/fontend/Profile')
const Archive = ()=> import('../views/fontend/Archive')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    redirect:'/home/articles',
    children:[
      {path:'/home/articles',component:Articles},
      {path: '/home/proflie', component: Profile}, 
      {path: '/home/aechive', component: Archive}, 
    ]
  },
  // {
  //   path:'/profile',
  //   component:Profile
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
