<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px" >
                <el-menu
                    active-text-color="orange"
                    background-color="#2e445b"
                    class="el-menu-vertical-demo"
                    :default-active="activeIndex"
                    text-color="#b5c2c8"
                    router
                >
                    <span class="title">物业管理系统</span>
                    <el-menu-item index="/record">
                        <el-icon><HomeFilled /></el-icon>
                        <span>数据展示</span>
                    </el-menu-item>
                    <el-sub-menu index="/money">
                        <template #title>
                            <el-icon><Notebook /></el-icon>
                            <span>缴费管理</span>
                        </template>
                        <el-menu-item index="/money/property">物业费</el-menu-item>
                        <el-menu-item index="/money/car">停车费</el-menu-item>
                        <el-menu-item index="/qrcode">缴费二维码</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="/tenants">
                        <template #title>
                            <el-icon><UserFilled /></el-icon>
                            <span>住户信息</span>
                        </template>
                        <el-menu-item index="/tenants/list">住户信息列表</el-menu-item>
                        <el-menu-item index="/tenants/change">住户信息修改</el-menu-item>
                </el-sub-menu>
                </el-menu>
            </el-aside>
        <el-container>
            <el-header>
                <div class="user-info">
                    <el-space>
                        <span class="el-dropdown-link">
                            欢迎访问物业管理系统              
                        </span>  
                    </el-space>
                    <el-space>
                        <el-avatar src="https://p.qqan.com/up/2020-9/16010876389657332.jpg" />
                        
                        <span class="el-dropdown-link">
                                <el-button round @click="handleToLogin">退出登录</el-button>            
                        </span>
                        
                    </el-space>
                </div>
            </el-header>
            <el-main>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in breadcrumb" :key="item">{{ item }}</el-breadcrumb-item>
                </el-breadcrumb>
                <RouterView />
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                activeIndex:''
            }
        },
        created(){
            this.activeIndex = this.$route.path
        },
        computed: {
            breadcrumb(){
                return this.$route.meta.breadcrumb || [];
            }
        },
        methods:{
            handleToLogin(){
                // console.log(1);
                this.$store.commit('users/clearToken')
                this.$router.push('/')
            }
        }
    }

</script>

<style lang="scss" scoped>
    .el-menu{
        height: 100%;
    }
    .el-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #2e445b;
        width: 100%;
    }

    .el-aside {
        height: 100vh;
    }

    .el-menu {
        height: 100%;
    }
    .title{
        display: block;
        color:white;
        height: 100px;
        font-size: 25px;
        line-height: 100px;
        text-align: center;
        font-weight: bold;
        background: #2e445b; 
    }
    .user-info{
        display: flex;
        align-items: center;
    }
    .el-dropdown-link{
        color: #fff;
        font-size: 20px;
    }
    .el-breadcrumb{
        font-size: 30px;
    }
</style>