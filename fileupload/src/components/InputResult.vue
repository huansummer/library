<template>
	<div id="inputResult">
		<!-- 标题 -->
		<header-title header-title="进件申请"></header-title>
		<!-- 审核结果 -->
		<div class="irCon">
			<img src="../../static/img/inputResult/icon_queding@2x.png"/>
			<p>进件申请成功，等待审核</p>
		</div>
		<!-- 完成 -->
		<input type="button" id="irButton" value="完成" />
	</div>
</template>

<script>
	import HeaderTitle from "./HeaderTitle"
	export default {
		name:"InputResult",
		data () {
			return {
				
			}
		},
		components:{
			HeaderTitle
		}
	}
</script>

<style scoped="scoped">
#inputResult {
	margin-top: -60px;
}
.irCon {
    background: #ffffff;
}
.irCon>img {
    width: 70px;
    margin-bottom: 18px;
    margin-top: 65px;
}
.irCon>p {
    font-size: 13px;
    color: #333333;
    padding-bottom: 59px;
}
#irButton {
    width: calc(100% - 30px);
    margin: 120px 15px 0 15px;
    box-sizing: border-box;
    padding: 0;
    border: none;
    height: 44px;
    border-radius: 4px;
    background: #FE6B1C;
    font-size: 17px;
    color: #ffffff;
}
</style>