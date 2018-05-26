<template>
	<div id="setUp">
		<!-- title -->
		<header-title header-title="设置"></header-title>
		<!-- 事件管理 -->
		<div class="eventManagement">
			<div><span>手势管理</span><mt-switch v-model="gesture"></mt-switch></div>
			<div><span>指纹管理</span><mt-switch v-model="fingerprint"></mt-switch></div>
		</div>
		<!-- 跳转单页 -->
		<flex-to-page span-text="关于" class="setUpFlex" link-to="About"></flex-to-page>
    <div @click = "getVersion">wwwwwwwwwwwwwwwwwww</div>
	</div>
</template>

<script>
	import HeaderTitle from "./HeaderTitle"
	import FlexToPage from "./FlexToPage"
	export default {
		name:'SetUp',
		data () {
			return {
				gesture:false,
				fingerprint:false
			}
		},
		components:{
			HeaderTitle,
			FlexToPage
		},
		methods:{
      getVersion: function () {
        function h5ToNative () {
          function randomChar(l) {
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

            for (var i = 0; i < l; i++) {
              tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
            }
            return timestamp + tmp ;
          }
          function currentTime () {
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
          var currentTime = currentTime();
          console.log(currentTime);

          var randomNum = randomChar(6);
          console.log(randomNum);

          android.toNativeParams(1,
            {"data": JSON.stringify({
                "txnBody":{
                  "applChnl": "01",
                  "applSrc": "01",
                  "txnId": randomNum,
                  "reqTm": currentTime,
                  "userAccount": "",
                  "appType": "a",
                  "clientVersion": "1.0"
                }})}

          )
        }
        var a = h5ToNative();
        console.log(a);

        // 	this.$axios.post('/504.504006', a
        //
        // )
        // .then(function (res) {
        //        self.data = res.data
        //        console.log(self.data)
        //        console.log("请求成功");
        //
        //  	})
        //  	.catch(function (error) {
        //        console.log(error.data)
        //  	})
      }
		}
	}
</script>

<style scoped="scoped">
#setUp{
	margin-top: 0;
}
.eventManagement>div>span {
    font-size: 15px;
    color: #666666;
    margin: 15px 0;
}
.eventManagement>div {
	background: #FFFFFF;
    padding: 0 15px 0 16px;
}
.eventManagement>div:nth-of-type(1) {
	border-bottom: 1px solid #f1f1f1;
}
</style>
