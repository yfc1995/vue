<template>
	<div class="index">
		<div class="hello" :class="{firstName: firstName}">我爱你{{fullName}}</div>
    <div v-if="Math.random() > 0.5">hello world</div>
    <div v-else>hello</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: '原',
        lastName: '法仓',
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

<style>
  .index {
    font-size: 28px;
  }
  .hello {
    font-size: 14px;color: #42B983;
  }
  .firstName {
    color: antiquewhite;
  }
</style>
