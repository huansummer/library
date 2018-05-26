<template>
	<div class="container">
		<!--商户入驻详情-->
		<store-details-header></store-details-header>
		<!--申请信息-->
		<div id="applicationDetails">
			<div class="applicationDetails">
				<img src="../../static/img/enterDetails/jiesuanxinxi@2x.png"/>
				<span>申请信息</span>
			</div>
			<!--待审核状态-->
			<ul>
				<li><p>业务类型</p><p>小微商户申请</p></li>
				<li><p>申请时间</p><p>2017.11.06</p></li>
				<li><p>审核时间</p><p>--</p></li>
				<li><p>审核结果</p><p style="color: #FE6B1C;">{{CheckResult}}</p></li>
			</ul>
		</div>
		<!--基本详情-->
		<based-details></based-details>
	</div>
</template>
<script>
import StoreDetailsHeader from '@/components/StoreDetailsHeader'
import BasedDetails from '@/components/BasedDetails'
	
	export default{
	name: 'DetailsUncheck',
		data (){
			return{
				CheckResult:"待审核"
			}
		},
		components:{
			StoreDetailsHeader,
	  		BasedDetails	
	  	}
	}
</script>

<style scoped>
.container{
	width: 100%;
	height: auto;
	background:rgba(243,244,245,1);
}
#applicationDetails{
	margin-bottom: 10px;
	position: relative;
}
#applicationDetails,li{
	background:rgba(255,255,255,1);
}
.applicationDetails,li{
	height:42px; 
	line-height: 42px;	
	border-bottom: 1px solid #F3F4F5;
	padding-left: 16px;
}
li{
	display: flex;
	justify-content: space-between;
}
.applicationDetails > span{
	font-size:16px;
	font-family:PingFangSC-Regular;
	color:rgba(51,51,51,1);
	display: inline-block;
	height: 21px;
	line-height: 21px;
	padding-left: 30px;
}
img{
	width:21px;
	height:21px;
}
.applicationDetails > img{
	position: absolute;
	top: 10px;
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