<template>
	<!--首页-->
	<div id="homepage">
		<div id="homepageHead">
			<router-link tag="li" to="/"><img id="return" src="../../static/img/homepage/nav_icon_logout@2x.png"/></router-link>
			<span>首页</span>
			<router-link tag="li" to="/SetUp"><img id="set" src="../../static/img/homepage/nav_icon_setting@2x.png"/></router-link>
		</div>

			<div id="details">
				<div id="PersonInfor">
					<img src="../../static/img/homepage/AM@2x.png"/>
					<p>上海分行</p>
					<p>福小型&nbsp;&nbsp;&nbsp;&nbsp;工号:&nbsp;&nbsp;&nbsp;(100049)</p>
				</div>
				<div id="commercialTenant">
					<ul id="commercialTenantInfor">
						<li><router-link tag="li" to="/ShopSelection"><img src="../../static/img/homepage/sahnghujinjian@2x.png"/><p>商户进件</p></router-link></li>
						<li><router-link tag="li" to="/DetailsSucess"><img src="../../static/img/homepage/shanghuliebiao@2x.png"/><p>商户列表查询</p></router-link></li>
						<li><router-link tag="li" to="/TaskList"><img src="../../static/img/homepage/renwuguanli@2x.png"><p>任务管理</p></router-link></li>
						<li><router-link tag="li" to="/ShopTransaction"><img src="../../static/img/homepage/jiaoytongji@2x.png"/><p>商户交易统计</p></router-link></li>
					</ul>
				</div>
				<div id="inform">
					<div id="informBox">
						<div id="informDetails">
							<img src="../../static/img/homepage/pic-fish@3x@2x.png"/>
							<ul>
								<li><span>商户&nbsp;&nbsp;[大名水果铺]&nbsp;&nbsp;审核拒绝</span><span style="color: #999;font-size: 12px;">10分钟前</span></li>
								<li><span>商户&nbsp;&nbsp;[大名水果铺]&nbsp;&nbsp;审核拒绝</span><span style="color: #999;font-size: 12px;">10分钟前</span></li>
							</ul>
						</div>
						<div id="informDetailsReturn">
							<router-link tag="li" to="/DetailsSucess"><img src="../../static/img/homepage/icon_list_right@2x.png"/></router-link>
						</div>
					</div>
				</div>
				<div id="counter">
					<div id="counterbox">
						<div id="counterSum">
							<img src="../../static/img/homepage/shuju@2x.png"/>
							<span>总进件商户（户）</span>
						</div>
						<div>109</div>
					</div>
				</div>
				<div id="counterDetails">
					<ul>
						<li><p class="recentlyCounter">1</p><p>今日进件</p></li>
						<li><p class="recentlyCounter">10</p><p>近一周进件</p></li>
						<li><p class="recentlyCounter">46</p><p>近一月进件</p></li>
					</ul>
				</div>
			</div>




	</div>
</template>
<script>
export default {
	name: 'HomePage',
	data () {
    	return {

    	}
   },
	methods: {
	}
}
</script>

<style scoped>
#homepage {
	position: relative;
  padding-bottom: 534px;
  background: rgba(243,244,245,1);

}
#homepageHead {
	z-index: -1;
	padding-bottom: 0.93rem;
	display: flex;
	justify-content: space-between;
	background:rgba(255,255,255,1);
	background:linear-gradient(90deg,rgba(255,181,0,1),rgba(254,107,28,1));
	padding-top: 15px;

}
#return,#set{
	height: 20px;
}
#return{
	padding-left: 12px;
}
#set{
	padding-right: 12px;
}
#homepageHead > span {
	font-size:16px;
	height: 22px;
	font-family:PingFangSC-Regular;
	color:rgba(255,255,255,1);
}
#details {
	background-color:rgba(255,255,255,1);
	border-radius: 8px;
	position: absolute;
	top: 57px;
	left: 10px;
	right:10px;
}
#PersonInfor > img {
	padding-top: 10px;
	width: 80px;
	height: 80px;

}
div > p:nth-of-type(1) {
	font-size: 0.17rem;
	color: black;
}
div > p:nth-of-type(2) {
	padding-top: 0.1rem;
  padding-bottom: 0.22rem;
	font-size: 0.14rem;
}
#commercialTenantInfor {
	display: flex;
	justify-content: space-between;
	margin-left: 0.2rem;
	border-top: 1px dashed #EEE;
	padding-top: 0.14rem;
  padding-bottom: 0.2rem;
}
#commercialTenantInfor > li:nth-of-type(4){
	margin-right: 24px;
}
#commercialTenantInfor > li > li > img {
	width:42px;
	height:42px;
}
#commercialTenantInfor > li > li > p {
	font-size:12px;
	font-family:PingFangSC-Regular;
	color:rgba(102,102,102,1);
	margin-top: 0.02rem;
}
#inform {
	border-top:1px solid  #EEE;
	border-bottom:1px solid  #EEE;
	margin-left: 0.18rem;

}
#informBox {
	display: flex;
	justify-content: space-between;
	margin-top: 0.14rem;
	align-items: center;
  margin-bottom: 0.14rem;
}
#informDetails > img {
  width: 0.5rem;
	height: 0.4rem;
  align-items: center;
  margin-top: 0.08rem;
}
#informDetails {
	display: flex;
  align-items: center;
}
#informDetails > ul > li {
	font-size:13px;
	font-family:PingFangSC-Regular;
	color:rgba(51,51,51,1);
	list-style: disc;
	margin-left: 0.15rem;
}
#informDetails > ul > li:nth-of-type(2){
	margin-top: 10px;
}
#informDetails > ul > li > span {
	font-size:13px;
	font-family:PingFangSC-Regular;
	color:rgba(51,51,51,1);
}
#informDetails > ul > li > span:nth-of-type(2){
  margin-left: 0.1rem;
}
#informDetailsReturn{
  padding-left: 0.18rem;
  padding-right: 0.18rem;
}
#informDetailsReturn > li > img {
	width:8px ;
	height:14px ;
}
#counterbox {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 0.17rem;
	padding-bottom: 0.05rem;
	border-bottom: 1px dashed #EEE;
	margin-left: 0.22rem;
}
#counterSum {
	display: flex;
	align-items: center;
}
#counterSum > img {
	height: 20px;
	padding-right: 14px;
}
#counterSum > span {
	font-size:17px;
	font-family:PingFangSC-Regular;
	color:rgba(51,51,51,1);
}
#counterSum + div {
	font-size:28px;
	font-family:PingFangSC-Medium;
	color:rgba(254,107,28,1);
	padding-right: 37px;
}
#counterDetails {
	padding-bottom: 41px;
}
#counterDetails > ul {
	display: flex;
	justify-content: space-between;
	margin-left: 33px;
	margin-right: 19px;

}
.recentlyCounter {
	font-size:23px;
	font-family:PingFangSC-Medium;
	color:rgba(254,107,28,1);
	padding-top: 15px;
}
.recentlyCounter + p {
	font-size:14px;
	font-family:PingFangSC-Regular;
	color:rgba(102,102,102,1);
	padding-top: 16px;
}
</style>
