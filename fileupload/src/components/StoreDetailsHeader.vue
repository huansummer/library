<template>
	<div class="StoreDetailsHeader">
		<router-link to="/DetailsUncheck">
			<img src="../../static/img/enterDetails/jiesuanxinxi@2x.png"/>
		</router-link>
		<p>商户入驻详情</p>
	</div>
</template>
<script>
	export default{
	name: 'StoreDetailsHeader',
		data (){
			return{
				
			}
		}
	}
</script>

<style scoped>
.StoreDetailsHeader{
	width:100%;
	height:63px; 
	background:rgba(255,255,255,1);
	background:linear-gradient(90deg,rgba(254,107,28,1),rgba(255,181,0,1));
	position: relative;
	display: flex;
	justify-content: center;
	}
img{
	width:20px; 	
	height:20px; 
	position: absolute;
	top:32px ;
	left: 8px;
}	
.StoreDetailsHeader > p{
	position: absolute;
	top:32px ;
	font-size:17px;
	font-family:PingFangSC-Regular;
	color:rgba(255,255,255,1);
}
</style>