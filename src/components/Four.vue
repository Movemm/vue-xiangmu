<template>
    <div>
        <h2>车辆统计</h2>
        <div class="four"  ref="chartfour">

        </div>
    </div>
</template>

<script setup>
  import * as echarts from "echarts"
  import { onMounted, ref,reactive} from "vue"
  import { useStore } from 'vuex'

  const chartfour = ref();
  const store = useStore();

  

     onMounted(()=>{

        let myChart =  echarts.init(chartfour.value)

        store.dispatch('users/chartDateFour').then((res)=>{
        
           console.log(res);
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
            top:"5%",
            left:"8%",
            bottom:"19%",
            right:"8%",
            // containLabel:true

           },
           series:[
            
               {
                   type:"bar",
                   name:"一般车辆",
                   data :res.data.num.一般车辆
                 
               },
               {
                   type:"bar",
                   name:"月租车辆",
                   data :res.data.num.月租车辆
                 
               },
               {
                   type:"bar",
                   name:"特殊车辆",
                   data :res.data.num.特殊车辆
                 
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
  .four{
    height: 4.9rem;

  }
</style>