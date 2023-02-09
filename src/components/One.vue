<template>
    <div>
        <h2>人数统计</h2>
        <div class="one"  ref="chartone">

        </div>
    </div>
</template>

<script setup>
  import * as echarts from "echarts"
  import { onMounted, ref,reactive} from "vue"
  import { useStore } from 'vuex'

  const chartone = ref();
  const store = useStore();

  
    let xdata = ref()
    let ydata = ref()


     onMounted(()=>{

        let myChart =  echarts.init(chartone.value)

        store.dispatch('users/chartDateOne').then((res)=>{
          let { data } = res;
          // console.log(res);     
          xdata = data.map(v=>v.title)   
          ydata = data.map(v=>v.num)  
          
          // console.log("x",xdata);         
          // console.log("y",ydata);         
           
          myChart.setOption({
            tooltip:{}, 
           xAxis:{
               type:"value",
               axisLine:{
                lineStyle:{
                  color:"#fff"
                }
               }
               
           },
           yAxis:{
               type:"category",
               data:xdata,
               axisLine:{
                lineStyle:{
                  color:"#fff"
                }
               }
           },
           grid:{
            top:"5%",
            left:"8%",
            bottom:"11%",
            right:"8%",
            // containLabel:true

           },
           series:[
            
               {
                   type:"bar",
                   data : ydata,
                   itemStyle:{                   
                      barBorderRadius:[0,20,20,0],
              }
               }
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
  .one{
    height: 4.5rem;

  }
</style>