<template>
  <div class="filterDate">
  筛选：<el-input v-model="input" placeholder="请输入筛选日期" />
  <el-button  type="primary" @click="AddDate">添加数据</el-button>
  </div>
  <el-table :data="filterDate"  style="width: 100%" sortable>
    <el-table-column type="expand" >
      <template #default="props">
        <div m="4">
          <p m="t-0 b-2">XX物业</p>
          <p m="t-0 b-2">客服电话:8008208820 </p>
          <p m="t-0 b-2">每小时费用:3元 </p><br>
          <h3>车位缴费统计</h3>
          <el-table :data="family" >
            <el-table-column label="姓名" prop="name" />
            <el-table-column label="车牌号" prop="state" />
            <el-table-column label="车位号" prop="city" />
            <el-table-column label="停放时长" prop="address" />
            <el-table-column label="缴费" prop="zip" />
            <!-- <el-table-column label="修改" prop="date" >
            <el-button  type="">修改</el-button>
            </el-table-column> -->
            <el-table-column label="删除" prop="name"  #default="scope">
            <el-button  type="danger" @click="DeleteNmae(scope.$index)">删除</el-button>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="停放日期" prop="date"/>
    <!-- <el-table-column  prop="date" >
      <el-button type="">添加</el-button>
    </el-table-column> -->
    <el-table-column  prop="date" #default="scope">
      <el-button type="danger" @click="DeleteDate(scope.$index)">删除</el-button>
    </el-table-column>
  </el-table>
</template>

<script >
export default{
  data(){
    return {
      tableData:[],
      family:[],
      date:'',
      input:'',
      name:'',
      num:5
    }
  },
  methods:{
    DeleteDate(index){
      this.tableData.splice(index,1)
    },
    DeleteNmae(index){
      this.family.splice(index,1)
    },
    AddDate(){
      this.num ++
      this.$store.dispatch('users/AddDate',{
          date:`2023-5-${this.num}`
      }),
      this.$store.dispatch('users/moneyCar').then((res)=>{
      // console.log(res.data[0].family[0]);
      this.tableData = res.data
    })
      // this.tableData.push({
      //   date:`
      //       2023-5-${this.num}
      //   `
      // })
    }
  },
  created(){
    this.$store.dispatch('users/moneyCar').then((res)=>{
      // console.log(res.data[0].family[0]);
      this.tableData = res.data
    }),
    this.$store.dispatch('users/family').then((res)=>{
      // console.log(res.data[0].family[0]);
      this.family = res.data
    })
  },
  computed:{
    filterDate(){
      return  this.tableData.filter((v)=>v.date.includes(this.input))
    }
  }
  
  
}
</script>

<style scoped>
.el-table{
  margin-top: 30px;
}
.filterDate,.filterName{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.filterDate .el-input{
  width: 200px;
}
.filterName .el-input{
  width: 200px;
}
</style>