import { createRouter,createWebHistory } from 'vue-router'
import store from '../store'
const Login = () =>import('../views/Login.vue')
const Index = () =>import('../views/Index.vue')
const App = () =>import('../App.vue')


const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            component:App,
            redirect:'/login'
        },
        {
            path:'/login',
            component:Login,
            meta:{
                auth:false//是否需要校验
              }
        },
        {
            path:'/index',
            component:Index,
            meta:{
                auth:true//是否需要校验
              }
        }

    ]
}

)


// router.beforeEach((to,from,next)=>{
//     // console.log(1);
//     if(to.meta.auth){
//         store.dispatch('info').then((res)=>{
//           if(store.state.users.token === res.data[0].token ){//token校验成功
//             next()
//           }else{//token校验失败
//             next('/login')
//           }
//         })
//       }else{
//         next()
//       }
// })
export default router