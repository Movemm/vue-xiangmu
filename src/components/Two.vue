<template>
    <div>
        <h2>每日访客统计</h2>
        <div class="two"  ref="charttwo">

        </div>
    </div>
</template>

<script setup>
  import { right } from "@popperjs/core";
import * as echarts from "echarts"
  import { onMounted, ref,reactive} from "vue"
  import { useStore } from 'vuex'

  const charttwo = ref();
  const store = useStore();

  
  


     onMounted(()=>{

        let myChart =  echarts.init(charttwo.value)

        store.dispatch('users/chartDateTwo').then((res)=>{         
                     
          myChart.setOption({
            tooltip:{}, 
            legend:{
                  x:"right"
            },
           xAxis:{
               type:"category",
               data:res.data.day,
               axisLine:{
                lineStyle:{
                  color:"#fff"
                }
               }
               
           },
           yAxis:{
               type:"value",
              
               axisLine:{
                lineStyle:{
                  color:"#fff"
                }
               }
           },
           grid:{
            top:"10%",
            left:"8%",
            bottom:"12%",
            right:"10%",
            // containLabel:true

           },
           series:[
               {
                   type:"line",
                   name:"外卖",
                   data:res.data.num.外卖,
                  
               },
               {
                   type:"line",
                   name:"快递",
                   data:res.data.num.快递
               },{
                   type:"line",
                   name:"一般访客",
                   data:res.data.num.一般访客
               },
           ]
         }) 
        })
     })   

    
</script>

<style lang="scss" scoped>
  h2{
        height: 0.3rem;
        color: #fff;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.25rem;
  }
  .two{
    height: 4.5rem;

  }
</style>    