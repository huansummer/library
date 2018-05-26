<template>
  <div>
    <div id="patternLock">
    </div>
    <br/>
    <br/>
    <br/>
    <mt-button @click="reset" size="small">重置</mt-button>
  </div>
</template>
<script>
  import PatternLock from '../../static/js/patternLock.js'
  export default {
        name: "PatternLogin",
    data(){
          return{
            lock : {}
          }
    },
    mounted: function () {
  		var self = this;
      self.lock = new PatternLock('#patternLock',{
          onDraw:function(pattern){
            //do something with pattern
            console.log(pattern);
            if(pattern == '1235789'){
              self.$toast('输入错误！');
              // self.$messagebox('输入错误！');
              self.lock.error();
              setTimeout(function(){
                self.lock.reset();
              },2000)
            }
          }
        });
      },
    methods: {
      reset: function () {
        this.lock.reset();
      }
    }
    }
</script>

<style scoped>

</style>
