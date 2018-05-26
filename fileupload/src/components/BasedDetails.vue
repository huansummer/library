<template>
	<div id="basedDetails">
		<div class="basedDetails">
			<img src="../../static/img/enterDetails/jiesuanxinxi@2x.png"/>
			<span>基本详情</span>
		</div>
		<ul>
			<li><p>商户名称</p><p @click="openDetailsSucess">大名水果铺</p></li>
			<li><p>商户简称</p><p>大名水果铺</p></li>
			<li><p>地址</p><p>上海市长宁区49号</p></li>
			<li><p>商户性质</p><p>小微商号</p></li>
			<li><p>店主姓名</p><p>李明</p></li>
			<li><p>店主手机号</p><p>139xxxxxxxx</p></li>
		</ul>
	</div>	
</template>

<script type="text/javascript">
	export default {
		name:"BasedDetails",
		data () {
			return {
				
			}
		},
		methods:{
			openDetailsSucess:function(){
				this.$router.push("/DetailsSucess");
			}
		}
	}
</script>

<style scoped>
.basedDetails{
	position: relative;
}
#basedDetails{
	background:rgba(255,255,255,1);
}
.basedDetails,li{
	height:42px; 
	line-height: 42px;	
	border-bottom: 1px solid #F3F4F5;
	margin-left: 16px;
}
li{
	display: flex;
	justify-content: space-between;
}
img{
	width:21px;
	height:21px;
}
.basedDetails > img{
	position: absolute;
	top: 10px;
}
.basedDetails span{
	padding-left: 30px;
}
p:nth-child(1){
	height:21px; 
	font-size:15px;
	font-family:PingFangSC-Regular;
	color:rgba(102,102,102,1);
}
p:nth-of-type(2){
	height:21px; 
	font-size:15px;
	font-family:PingFangSC-Regular;
	color:rgba(51,51,51,1);
	padding-right: 16px;
}
</style>