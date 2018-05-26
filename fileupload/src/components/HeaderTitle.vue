<template>
	<div class="ssTitle">
		<span @click="goBack"><img src="../../static/img/shopSelection/nav_icon_return_black@2x.png"/></span>
		<h4>{{ headerTitle }}</h4>
		<span class="rightHidden"></span>
	</div>
</template>

<script>
	export default {
		name:"HeaderTitle",
		data () {
			return {
				
			}
		},
		props:["headerTitle"],
		methods:{
			goBack:function () {
				console.log("0001");
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="scoped">
.ssTitle {
	height: 60px;
	background: linear-gradient(to right, #FE6B1C , #FFB500);
	line-height: 60px;
	font-size: 0;
	padding: 0 8px;
}
.ssTitle>span>img {
    width: 20px;
    display: block;
}
.ssTitle>span,
.ssTitle>h4 {
    display: inline-block;
    vertical-align: middle;
}
.ssTitle>h4 {
    font-size: 18px;
    color: #ffffff;
    width: calc(100% - 56px);
}
.rightHidden {
	width: 20px;
	visibility: hidden;
}
</style>