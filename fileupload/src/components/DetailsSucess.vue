<template>
	<div id="container">
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
				<li><p>审核时间</p><p>2017.11.08</p></li>
				<li><p>审核结果</p><p style="color: #1AAD1A;">{{CheckResult}}</p></li>
				<li><p>微信入网状态</p><p>入网中</p></li>
			</ul>
		</div>
		<!--基本详情-->
		<based-details></based-details>
		<!--升级按钮-->
		<!--<form action="#/BusinessUpgrades" method="post" id="promote">
			<input type="submit"  value="商户升级" />
		</form>-->
		<input type="submit"  value="商户升级" @click="openBusinessUpgrades" />
	</div>
</template>
<script>
import StoreDetailsHeader from '@/components/StoreDetailsHeader'
import BasedDetails from '@/components/BasedDetails'
	
	export default{
		name: 'DetailsSucess',
		data (){
			return{
				CheckResult:"审核通过"
			}
		},
		components:{
			StoreDetailsHeader,
	  		BasedDetails	
	  	},
	  	methods:{
	  		openBusinessUpgrades:function(){
	  			this.$router.push("/BusinessUpgrades")
	  		}
	  	}
	}
	
</script>

<style scoped>
#container{
	height: auto;
	background:rgba(243,244,245,1);
}

#applicationDetails{
	margin-bottom: 10px;
	position: relative;
}
#applicationDetails{
	background:rgba(255,255,255,1);
}
.applicationDetails,li{
	height:42px; 
	line-height: 42px;	
	border-bottom: 1px solid #F3F4F5;
	margin-left: 16px;
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
#promote{
	display: flex;
	justify-content: center;
	margin-top: 70px;
}
#promote > input{
	width:343px;
	height:44px; 
	background:rgba(254,107,28,1);
	border-radius: 4px;
	border: none;
	font-size:17px;
	font-family:PingFangSC-Regular;
	color:rgba(255,255,255,1);
}	
</style>