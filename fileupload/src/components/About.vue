<template>
	<div id="about">
		<!-- 关于 -->
		<header-title header-title="关于"></header-title>
		<!-- 版本内容 -->
		<div class="edition"> 
			<div class="editionNumber">
				<img src="../../static/img/about/logo@2x.png" alt="pic" />
				<p>版本号 {{ editionNumber }}</p>
			</div>
			<!-- 跳转单页 -->
			<flex-to-page span-text="版本说明" link-to="ShopSelection" class="aboutToPage"></flex-to-page>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from "./HeaderTitle"
	import FlexToPage from "./FlexToPage"
	export default {
		name:"About",
		data () {
			return {
				editionNumber:"v2.0.0"
			}
		},
		components:{
			HeaderTitle,
			FlexToPage
		}
	}
</script>

<style scoped="scoped">
.editionNumber {
    background: #ffffff;
}	
.editionNumber>img {
    width: 60px;
    height: 59px;
    margin: 25px 0 16px 0;
}
.editionNumber>p {
    font-size: 15px;
    color: #666666;
    padding-bottom: 19px;
}	
.edition>.aboutToPage {
    background: #FFFFFF;
    margin-left: 0;
    padding: 14px 16px 14px 18px;
    margin-top: 10px;
}
</style>