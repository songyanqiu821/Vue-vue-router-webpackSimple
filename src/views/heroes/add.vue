<template>
    <div>
        <h2 class="sub-header">添加列表</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" class="form-control" id="name" placeholder="name" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input type="text" class="form-control" id="sex" placeholder="sex" v-model="formData.gender">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent = "hanleAdd">添加</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                formData:{ //这样写好数据后一定要记得数据绑定
                    name: '',
                    gender: ''
                }
            }
        },
        methods:{
            hanleAdd(){
                axios
                    .post('http://localhost:3000/heroes' ,this.formData)
                    .then((res) =>{
                        // console.log(this);
                        // console.log(res);  
                        const {status ,data } =res;                    
                        if(status === 201){
                            // 添加成功 并跳转到英雄列表页
                            // this.$router.push('/heroes');
                            this.$router.push({name:'heroes'});

                            alert('添加成功');
                        }else{
                            alert('添加失败');
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                        
                    })
            }
        },
    }
</script>

<style>

</style>
