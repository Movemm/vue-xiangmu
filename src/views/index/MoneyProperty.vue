<template>
  <div class="inputbox" >
    查询：<el-input v-model="search" size="small" placeholder="输入查询的户主姓名">
            <template #append>
                <el-button @click="getUserList" title="再次点击查看全部内容"><el-icon><search /></el-icon></el-button>
            </template>
          </el-input>
    更改缴费金额：<el-input-number v-model="input" :min="0"  />
    新户主姓名：<el-input v-model="name"   />
    <el-button  style="width: 100px" @click="onAddItem"
    >添加新数据</el-button>
  </div>
  
      <el-table  :data="tableData" >
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
     
      />
      <el-table-column prop="name" label="户主姓名"  />
      <el-table-column prop="number" label="楼号"  />
      <el-table-column prop="all" label="总费用(水/电/卫生费)" />
  
      <el-table-column
        prop="tag"
        label="缴费状态"
        width="200"
        
      >
        <template #default="scope">
          <el-tag
            :type="scope.row.tag === '已缴费' ? '' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>

      <el-table-column prop="address" label="修改费用" #default="scope">
        <el-button type="primary" @click="ChangeMoney(scope.$index)">编辑</el-button>
      </el-table-column>

      <el-table-column prop="address" label="按钮" #default="scope">
          <el-button type="danger" @click="DeleteRow(scope.$index)">删除</el-button>
      </el-table-column>
    </el-table>
    
  </template>
  
  <script  >


import axios from 'axios'
import { ElMessage } from 'element-plus'


  export default{
    data(){
      return {
        tableData :[],
        input:0,
        num:2,
        date:13,
        mon:1,
        name:'',
        louhao:'',
        search:'',
        a:[]
      }
    },
    created(){
      this.$store.dispatch('users/money').then((res)=>{
        // console.log(res);
        this.tableData  = res.data
        this.a = res.data
      })
      
    },
    methods:{
      DeleteRow(index){
        // console.log(id);
        this.tableData.splice(index,1)
        
      },
      ChangeMoney(index){
        if(this.input == 0){
          ElMessage('请输入缴费金额')
        }else{
          this.tableData[index].all = this.input
        }
          this.input = 0
        
      },
      onAddItem(){
        if(this.name === ''){
          ElMessage('请输入要添加的户主姓名')
        }
        else if(this.date != 31){
          this.date ++
          this.tableData.unshift({
          date:`2023-0${this.mon}-${this.date}`,
                name:`${this.name}`,
                number:`${this.num ++}栋102室`,
                all:"0",
                tag:"未缴费"  
        })
        }else{
          this.mon ++
          this.date = 0
        }
        this.name = ''
       
      },
      getUserList(){
        if(this.search === ''){
          this.tableData = this.a
        }else{
          this.tableData = this.tableData.filter((v)=>v.name.includes(this.search))
          this.search = ''
        }
      }
      
    },
    // computed:{
    //   getUserList(){
    //    return this.tableData.filter((v)=>v.name.includes(this.search))
    //     // console.log(this.search);

    //   }
    // }

  }

  

  
 
 
  
  
  </script>
  <style scoped>
.el-table{
    margin-top: 50px;
}
.inputbox{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
}

.el-input-number,.el-input{
  width: 200px;
  height: 30px;
  margin-right: 10px;
}

  </style>