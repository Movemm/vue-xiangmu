<template>
    <div class="content">
        <div class="inputDom">
            <el-input v-model="input" placeholder="请输入收款金额" type=resize />
            <el-button type="success" @click="MakeQrcode">生成二维码</el-button>
        </div>
    </div>
        <qrcode-vue class="qr" background="white" foreground="#000" :value="value" :size="size" level="H" v-show="or"/>  
</template>

<script >

    import QrcodeVue from 'qrcode.vue'
    export default{
        data() {
      return {
        value: '',
        size: 500,
        input:'',
        or:false
      }
    },
    components: {
      QrcodeVue,
    },
    methods:{
        MakeQrcode(){
            this.value = this.input
            this.or = true
        }
    }
    }
  
    
</script>

<style scoped>
.content{
    margin-top:20px ;
    margin-bottom: 20px;
}

.el-button{
    margin-top:20px ;
}
.qr{
    border: 2px solid #ccc;
    border-radius: 10px;
    
}
.inputDom{
    width: 500px;
}
</style>