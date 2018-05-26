<template>
    <div @click =getVersion >welcome to </div>
</template>

<script>
    export default {
        name: "Welcome",
        data () {
        	return {
        		// abs:{
        		// 	"applChnl": "01",
              // "applSrc": "01",
              // // "reqSsn": randomNum(),
              // // "reqTm": currentTime(),
              // "userAccount": "",
              // "appType": "a",
              // "clientVersion": "1.0",
              // "busCode":"501.501000",
              // "transId":"504.504006"
        		// }
        	}
        },
        mounted () {
        	this.randomNum = this.randomNum();
        	this.currentTime = this.currentTime();
        },
     	methods:{
	    	getVersion: function () {
	    	//	this.$options.methods可以调用同级函数
          var timestamp = this.$options.methods.currentTime();
          var randomNum = this.$options.methods.randomNum();
          console.log(timestamp);
          console.log(randomNum);
          var data = JSON.stringify({
            "applChnl": "01",
            "applSrc": "01",
            "reqSsn": randomNum,
            "reqTm": timestamp,
            "userAccount": "",
            "appType": "a",
            "clientVersion": "1.0",
            "busCode":"501.501000",
            "transId":"504.504006"
          })
          console.log(data);
		    	android.toNativeParams(1,data)

		    },
        randomNum: function() {
            var x = "0123456789";
            var tmp = "";
            var dateTime = new Date();
            const year = dateTime.getFullYear();
            const month = (dateTime.getMonth()+1) < 10 ? "0"+(dateTime.getMonth()+1)  : dateTime.getMonth()+1;
            const day = (dateTime.getDate()+1) < 10 ? "0"+dateTime.getDate() : dateTime.getDate();
            const hour = dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours();
            const minutes = dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes();
            const seconds = dateTime.getSeconds() < 10 ? "0" + dateTime.getSeconds() : dateTime.getSeconds();
            const timestamp = year + "" + month + "" + day +""+hour +""+ minutes +""+seconds;

            for (var i = 0; i < 6; i++) {
              tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
            }
            return timestamp + tmp ;
        },
        currentTime:function () {
              var dateTime = new Date();
              const year = dateTime.getFullYear();
              const month = (dateTime.getMonth()+1) < 10 ? "0"+(dateTime.getMonth()+1)  : dateTime.getMonth()+1;
              const day = (dateTime.getDate()+1) < 10 ? "0"+dateTime.getDate() : dateTime.getDate();
              const hour = dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours();
              const minutes = dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes();
              const seconds = dateTime.getSeconds() < 10 ? "0" + dateTime.getSeconds() : dateTime.getSeconds();
              const timestamp = year + "" + month + "" + day +""+hour +""+ minutes +""+seconds;
              return  timestamp;
        }
      }
    }
</script>

<style scoped>
div{
  width: 100px;
  height: 20px;
  background-color: antiquewhite;
}
</style>
