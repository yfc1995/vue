<template>
	<div class="login">
		<div class="box">
      <img src="" alt="">
      <span>管理系统</span>
      <div>
        <input type="text" placeholder="账号" v-model="name">
        <input type="text" placeholder="密码" v-model="password">
        <el-button  type="primary" size="small" class="loginButton" plain>登录</el-button>
      </div>
    </div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        password: '',
      }
    },
    computed: {
      fullName:    {
        get: function(){
          console.log("this is get function");
          return this.firstName + this.lastName;
        },
        ser: function() {
          console.log("this is set function");
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .login {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      span {
        color: #a8a8a8;
      }
      >div {
        margin-top: 5spx;
        display: flex;
        padding: 10px;
        border: 1px solid #cccc;
        border-radius: 4px;
        background-color: #f9f9f9;
        input {
          outline: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          height: 30px;
          font-size: 12px;
          padding-left: 8px;
          color: #ccc;
          background-color: #fff;
          margin-right: 16px;
        }
        .loginButton {
          height: 30px;
        }
      }
    }
  }
</style>
