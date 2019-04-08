<template>
	<div class="index">
		商品首页
	</div>
</template>

<script>
  export default {
    data() {
      return {
        
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
