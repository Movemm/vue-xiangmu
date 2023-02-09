import http from "../../utils/http"
const state ={
    token:''
}
const actions={
    login(context,data){
        return http.get('user/login',data)
    },
    info(context,data){
        return http.get('user/login',data)
    },
    money(context,data){
        return http.get('user/money',data)
    },
    moneyCar(context,data){
        return http.get('user/moneyCar',data)
    },
    family(context,data){
        return http.get('user/family',data)

    }
}
const getters={}
const mutations={
    updataToken(state,payload){
        // console.log(1);
        state.token = payload
        
    },
    clearToken(state,payload){
        state.token = ''
    }
}

export default{
    namespaced:true,
    state,
    actions,
    getters,
    mutations
}