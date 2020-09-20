import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = ()=> import('../views/fontend/Home')
const Articles = ()=> import('../views/fontend/Articles')
const Article = ()=> import('../views/fontend/Article')
const Profile = ()=> import('../views/fontend/Profile')
const Archive = ()=> import('../views/fontend/Archive')
const Category = ()=> import('../views/fontend/Category')
const Tag = ()=> import('../views/fontend/Tag')

const Admin = ()=> import('../views/admin/Index')
const AdminArticle = ()=> import('../views/admin/AdminArticle')
const AddArticle = ()=> import('../views/admin/AddArticle')
const AdminTags = ()=> import('../views/admin/AdminTags')
const UpdateArticle = ()=> import('../views/admin/UpdateArticle')

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
      {path:'/home/article/:id',component:Article},
      {path: '/home/proflie', component: Profile}, 
      {path: '/home/archive', component: Archive},
      {path: '/home/category', component: Category},
      {path: '/home/category/:type', component: Tag},  
    ]
  },
  {
    path:'/admin',
    component:Admin,
    children:[
      {path:'/admin/article',component:AdminArticle},
      {path:'/admin/article/add',component:AddArticle},
      {path:'/admin/tags',component:AdminTags},
      {path:'/admin/article/update/:id',component:UpdateArticle},
    ]
  }
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
