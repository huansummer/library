<template>
	<div id="shopSelect">
		<!-- 标题 -->
		<header-title header-title="商户类型选择"></header-title>
		<!-- 商户类型选择 -->
		<div class="ssCon">
			<div>
				<flex-to-page span-text="小微商户" link-to="SetUp"></flex-to-page>
				<div class="ssConShopMaterial">
					<div>无需营业执照</div>
					<p>需准备的材料：身份证、结算银行账户</p>
				</div>
			</div>
			<div>
				<flex-to-page span-text="个体工商" link-to="PatternLogin"></flex-to-page>
				<div class="ssConShopMaterial">
					<div>营业执照认证商户</div>
					<p>需准备的材料：营业执照、法人身份证、泰隆银行对公账户或借记卡<br />若非本人办理，则需增加代办人身份证、法人授权书</p>
				</div>
			</div>
			<div>
				<flex-to-page span-text="企业" link-to="BasedDetails"></flex-to-page>
				<div class="ssConShopMaterial">
					<div>营业执照认证商户</div>
					<p>需准备的材料：营业执照、法人身份证、泰隆银行对公账户<br />若非本人办理，则需增加代办人身份证、法人授权书</p>
				</div>
			</div>
		</div>
		<!-- 下载项 -->
		<div class="ssDownload">
			<a href="javascript:void(0);" @click="openInputResult">商户协议下载</a><span>|</span><a href="javascript:void(0);" @click="openAbout">授权书模板下载</a>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from "./HeaderTitle"
	import FlexToPage from "./FlexToPage"
	export default {
		name:"ShopSelection",
		data () {
			return {
				
			}
		},
		components:{
			HeaderTitle,
			FlexToPage
		},
		methods:{
			openInputResult:function () {
				this.$router.push("/InputResult")
			},
			openAbout:function () {
				this.$router.push("/About")
			}
		}
		
	}
</script>

<style scoped="scoped">
.ssCon>div {
    margin-bottom: 16px;
    background: #FFFFFF;
}
.ssConShopMaterial {
    text-align: left;
    padding: 0 12px;
}
.ssConShopMaterial>div {
    margin: 16px 0;
    font-size: 16px;
    color: #333333;
}
.ssConShopMaterial>p {
    font-size: 14px;
    color: #FE6B1C;
    padding-bottom: 20px;
}
.ssDownload {
    height: 50px;
    background: #ffffff;
    line-height: 50px;
    margin-top: 32px;
}
.ssDownload>a {
    display: inline-block;
    width: calc((100% - 2px)/2);
    color: #549AFF;
    text-decoration: none;
    font-size: 14px;
}
.ssDownload>span {
    display: inline-block;
    width: 2px;
    color: #979797;
}
</style>