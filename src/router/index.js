import { createRouter,createWebHistory } from 'vue-router'
import store from '../store'
const Login = () =>import('../views/Login.vue')
const Index = () =>import('../views/Index.vue')
const App = () =>import('../App.vue')
const Record = () => import('../views/Index/Record.vue')
const TenantsList = () => import('../views/Index/TenantsList.vue')
const TenantsChange = () => import('../views/Index/TenantsChange.vue')
const MoneyCar = () => import('../views/Index/MoneyCar.vue')
const MoneyProperty = () => import('../views/Index/MoneyProperty.vue')
const Qrcode = () => import('../views/Index/Qrcode.vue')


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
              },
              redirect:'/record',
            children:[
                {
                    path:'/record',
                    name: 'record',
                    component: Record ,
                    meta: {
                        breadcrumb: ['数据展示']
                    }
                },
                {
                    path: '/tenants/list',
                    name: 'tenantsList',
                    component: TenantsList,
                    meta: {
                        breadcrumb: ['住户信息列表', '住户信息修改']
                    }
                },
                {
                    path: '/tenants/change',
                    name: 'tenantsChange',
                    component: TenantsChange,
                    meta: {
                        breadcrumb: ['住户信息列表', '住户信息修改']
                    }
                },
                {
                    path: '/money/car',
                    name: 'moneycar',
                    component: MoneyCar,
                    meta: {
                        breadcrumb: ['停车费']
                    }
                },
                {
                    path: '/money/property',
                    name: 'moneyproperty',
                    component: MoneyProperty,
                    meta: {
                        breadcrumb: ['物业费']
                    }
                },
                {
                    path: '/qrcode',
                    name: 'qrcode',
                    component: Qrcode,
                    meta: {
                        breadcrumb: ['二维码']
                    }
                }
            ]
        }
    ]
})


//创建路由前置守卫验证token
router.beforeEach((to,from,next)=>{
    // console.log(store.state.users.token);
    // console.log(to.meta.auth);
    if(to.meta.auth){
        store.dispatch('users/info').then((res)=>{
          if(store.state.users.token === res.data[0].token ){//token校验成功
            // console.log(res.data[0].token);
            next()
          }else{//token校验失败
            next('/')
          }
        })
      }else{
        next()
      }
    // next()
})
export default router