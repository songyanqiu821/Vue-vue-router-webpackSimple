<template>
    <div>
        <h2 class="sub-header">修改列表</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="name" value="xxx">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input type="text"  v-model="formData.gender" class="form-control" id="sex" placeholder="sex" value="xxx">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent = "handleEdit">修改</button>
        </form>
    </div>
</template>

<script>
   import axios from 'axios';
//   1、 进入编辑页面 显示当前要编辑的英雄
    // 获取url上的id--》created（）
    // 发送请求获取数据
    // 绑定文本框
//2、 点击submit按钮 实现更新功能
    export default{
        data(){
            return {
                formData:{
                    name:'',
                    gender:''
                },
                // 获取url上的id 默认是-1
                heroId:-1
            }
        },
        // 组件创建完毕
        created(){
            // 获取路由参数
            this.heroId = this.$route.params.id;
            // 调用 获取英雄对象的方法
            this.loadData();
        },
        methods:{
        // 展示在页面上
            loadData(){
                axios
                    .get(`http://localhost:3000/heroes/${ this.heroId}`)
                    .then((res) =>{
                        if(res.status === 200){
                            this.formData = res.data;
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                        
                    })
            },
            handleEdit(){
                axios
                    .put(`http://localhost:3000/heroes/${ this.heroId}`,this.formData)
                    .then((res) =>{
                        // 修改成功 跳转页面
                        this.$router.push({name:'heroes'});
                    })
                    .catch((err) =>{
                        console.log(err);
                        
                    })
            }
        }
        
    }

</script>

<style>


</style>
