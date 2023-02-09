<template>
    <div>
        <h2>每日访客统计</h2>
        <div class="three"  ref="chartthree">

        </div>
    </div>
</template>

<script setup>
  import * as echarts from "echarts"
  import { onMounted, ref,reactive} from "vue"
  import { useStore } from 'vuex'

  const chartthree = ref();
  const store = useStore();

  
  


     onMounted(()=>{

        let myChart =  echarts.init(chartthree.value)

        store.dispatch('users/chartDateThree').then((res)=>{         
                       console.log(res);
          myChart.setOption({  
            legend:{top:"bottom"}, 
            tooltip:{},       
              series:[
                  {
                   type:"pie",
                   data:res.data,
                   radius:[10,100],
                   center:["50%","45%"],
                   roseType:"area"


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
  .three{
    height: 4.3rem;

  }
</style>    