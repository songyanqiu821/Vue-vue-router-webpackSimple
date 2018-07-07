<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
          <!-- <a class="btn btn-success" href="add.html">添加</a> -->
          <!-- <router-link to="/heroes/add" class="btn btn-success">添加</router-link> -->
          <!-- 使用命名路由 -->
          <router-link  :to="{name :'heroadd'}" class="btn btn-success" >添加</router-link>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>名称</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr :key = "item.id" v-for="(item ,index) in list">
                  <td>{{index +1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  <td>
                    <!-- <a href="edit.html">编辑</a> -->
                    <router-link :to="{name :'heroedit',params:{id:item.id}}">编辑</router-link>
                    &nbsp;&nbsp;
                    <a href="javascript:window.confirm('Are you sure?')" @click.prevent = "handleDelete(item.id)">删除</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
</template>

<script>

    export default {
      data(){
        return {
          list:[]
        }
      },
      created() {
        // 调用加载数据的方法
        this.loadData();
      },
      methods:{
        // 加载英雄列表
        loadData(){
          this.$http
            .get('http://localhost:3000/heroes')
            .then((res) =>{
              const {status,data} = res;
              if(status === 200){
                this.list = data;
              }
            });
            
        },
        handleDelete(id){
          if(!confirm('您确认要删除吗？') ){
            return;
          }
           this.$http
            .delete(`heroes/${id}`)
            .then((res) =>{
                if(res.status ===200){
                  // 删除成功 重新渲染列表
                  this.loadData();
                }
            })
            .catch((err) =>{
              alert('删除成功');
            })
         },
         
      }
     
    };
</script>

<style>

</style>
