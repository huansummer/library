<template>
	<div class="ssConShop" @click="pageTo(linkTo)">
		<span>{{ spanText }}</span><a href="javascript:void(0);"><img src="../../static/img/shopSelection/icon_list_right@2x.png"/></a>
	</div>
</template>

<script>
	import FlexToPage from "./FlexToPage"
	export default {
		name:"FlexToPage",
		data () {
			return {
				
			}
		},
		components:{
			FlexToPage
		},
		props:["spanText","linkTo"],
		methods:{
			pageTo:function (linkTo) {
				this.$router.push("/"+linkTo+"")
			}
		}
	}
</script>

<style scoped="scoped">
.ssConShop {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #EDEFF2;
    padding: 14px 14px 12px 0px;
    margin-left: 12px;
}
.ssConShop>span {
    font-size: 16px;
    color: #333333;
    font-weight: 600;
}
.ssConShop>a>img {
    width: 20px;
}
</style>