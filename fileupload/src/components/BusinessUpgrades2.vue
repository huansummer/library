<template>
	<div id="businessUpgrades2">
		<!-- title -->
		<header-title header-title="身份认证信息"></header-title>
		<!-- 商户类型 -->
		<div class="buCon">
			<!-- 商户类型 -->
			<div class="buConShopStyle">
				<span>商户类型</span>
				<a href="javascript:void(0);"><span>个体工商</span><img src="../../static/img/shopSelection/icon_list_right@2x.png" alt="pic" /></a>
			</div>
			<!-- 详细信息 -->
			<div class="buConDetailInfo">
				<form action="" method="post">
					<ul>
						<li><span>法人姓名</span><input type="text" value="小王" readonly="readonly" /></li>
						<li><span>法人身份证号</span><input type="text" value="4528871990923457896" readonly="readonly" /></li>
						<li><span>户籍地址</span><textarea type="text" readonly="readonly">新疆乌鲁木齐市新市区太原南路898号和兴润园3-2-802</textarea></li>
						<li><span>证件有效期</span><input type="text" value="2030-05-31" readonly="readonly" /></li>
						<li><span>法人手机号</span><input type="text" placeholder="请输入法人手机号" /></li>
						<li><span>联系人姓名</span><input type="text" placeholder="请输入联系人姓名" /></li>
						<li><span>联系人手机号</span><input type="text" placeholder="请输入联系人手机号" /></li>
						<li><span>结算账户账号</span><input type="text" placeholder="请输入结算账号" /></li>
						<li><span>开户行</span><input type="text" value="杭州分行" readonly="readonly" /></li>
						<li><span>营业执照号码</span><input type="text" placeholder="请输入营业执照号码" /></li>
						<li><span>营业执照成立日期</span><input type="text" placeholder="请输入营业执照成立日期" /></li>
						<li><span>营业执照有效期</span><span><b>非长期有效</b><img src="../../static/img/shopSelection/icon_list_right@2x.png" alt="ic" /></span></li>
						<li><span>有效期至</span><span @click="openPicker"><b>2019-05-31</b><img src="../../static/img/shopSelection/icon_list_right@2x.png" alt="pic" /></span></li>
					</ul>
					<!--<input type="submit" value="提交"/>-->
				</form>
			</div>
			<!-- 提交 -->
			<div class="buConInputDiv"><mt-button type="primary" size="large" @click="openPicker" >提交</mt-button></div>
			<mt-datetime-picker ref="picker" type="date" v-model="value1" @confirm="getTime"></mt-datetime-picker>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from "./HeaderTitle"
	export default {
		name:"BusinessUpgrades2",
		data () {
			return {
				value1:null
			}
		},
		components:{
			HeaderTitle
		},
		methods:{
			openPicker() {
		        this.$refs.picker.open();
		  },
		  getTime:function() {
		  	var date = this.$refs.picker.value,
		  	Y = date.getFullYear(),
		  	M = (date.getMonth() + 1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1),
		  	D = date.getDate();
		  	var datetime=Y + '-' + M + '-' + D;
		  	
		  }
		}
	}
</script>

<style scoped="scoped">
.buConShopStyle {
    padding: 13px 10px 12px 16px;
    color: #333333;
}
.buConShopStyle>a>img {
    width: 20px;
}
.buConShopStyle>a {
    text-decoration: none;
    color: #333333;
}
.buConShopStyle>a>span, .buConShopStyle>a>img {
    display: inline-block;
    vertical-align: middle;
}
.buConInputDiv {
    margin: 30px 16px 0 16px;
}
.buConInputDiv>button {
    height: 44px;
    background: #FE6B1C;
}
.buConInputDiv>button>label {
    font-size: 17px; 
}
.buConDetailInfo {
    margin-top: 15px;
    font-size: 16px;
    color: #666666;
}
.buConDetailInfo>form>ul>li {
    padding: 12px 16px 14px 16px;
    border-bottom: 1px solid #f1f1f1;
}
.buConDetailInfo>form>ul>li>input,
.buConDetailInfo>form>ul>li>textarea {
    background: none;
    border: none;
    text-align: right;
    font-size: 16px;
    color: #666666;
}
.buConDetailInfo>form>ul>li>textarea {
	text-align: left;
	resize:none;
}
.buConDetailInfo>form>ul>li>span>img {
	width: 20px;
}
.buConDetailInfo>form>ul>li>span>b,
.buConDetailInfo>form>ul>li>span>img {
	display: inline-block;
	vertical-align: text-bottom;
	font-weight: 100;
    font-size: 16px;
}
.buConInputDiv {
	margin-bottom: 23px;
}
</style>