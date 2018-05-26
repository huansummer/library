<template>
	<div id="businessUpgrades">
		<!-- title -->
		<header-title header-title="身份认证信息"></header-title>
		<!-- 商户类型 -->
		<div class="buCon">
			<!-- 商户类型 -->
			<div class="buConShopStyle">
				<span>商户类型</span>
				<a href="javascript:void(0);"><span>个体工商</span><img src="../../static/img/shopSelection/icon_list_right@2x.png" alt="pic" /></a>
			</div>
			<!-- 法人身份证上传 -->
			<div class="buConUpload">
				<div>
					<div><span><small>*</small>法人身份证正面</span><span><img src="../../static/img/shopSelection/icon_list_right@2x.png" alt="pic" /></span></div>
					<div class="buConIdCard">
						<img src="../../static/img/businessUpgrades/pic_renxiangye@2x.png" alt="pic"/>
						<span>拍摄人像页</span>
					    <input type="file" id="fileHead-1" accept="image/jpeg,image/jpg,image/png" @change="showPreview(idCard1)"/>  
        			</div>
				</div>
				<div>
					<div><span><small>*</small>法人身份证反面</span><span><img src="../../static/img/shopSelection/icon_list_right@2x.png" alt="pic" /></span></div>
					<div class="buConIdCard">
						<img src="../../static/img/businessUpgrades/pic_renxiangye@2x.png" alt="pic"/>
						<span>拍摄国徽页</span>
						<input type="file" id="fileHead-2" accept="image/jpeg,image/jpg,image/png" @change="showPreview(idCard2)"/>
					</div>
				</div>
			</div>
			<!-- 提交 -->
			<div class="buConInputDiv"><mt-button type="primary" size="large" @click="openBusinessUpgrades2" >提交</mt-button></div>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from "./HeaderTitle"
	import FlexToPage from "./FlexToPage"
	export default {
		name:"BusinessUpgrades",
		data () {
			return {
				idCard1:"fileHead-1",
				idCard2:"fileHead-2"
			}
		},
		components:{
			HeaderTitle,
			FlexToPage
		},
		methods:{
			//本地预览图片
			showPreview: function(idResouce){
		    	var fileHead = document.getElementById(idResouce);
		    	var file = fileHead.files[0]||fileHead.files;  
	            if(window.FileReader) {  
	                var fr = new FileReader();  
	                fr.onloadend = function(e) { 
	                	var portrait = fileHead.parentElement.firstChild;
	                    portrait.src = e.target.result;  
	                };  
	                fr.readAsDataURL(file);  
	            }   
			},
			openBusinessUpgrades2:function () {
				this.$router.push("/BusinessUpgrades2")
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
.buConUpload {
    margin-top: 12px;
}
.buConUpload>div>div {
    padding: 10px 7px 10px 16px;
    font-size: 16px;
    color: #666666;
    border-bottom: 1px solid #f1f1f1;
}
.buConUpload>div>div>span>small {
	color: #D0021B;
}
.buConUpload>div>div>span>img {
    width: 20px;
    transform: rotate(90deg);
}
.buConIdCard {
    position: relative;
}
.buConIdCard>img {
    width: 208px;
    height: 142px;
    margin: 13px auto 16px auto;
}
.buConIdCard>span {
    position: absolute;
    font-size: 12px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: 0 auto;
    margin-top: 90px;
    z-index: 1;
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
.buConUpload>div>.buConIdCard {
	padding: 0;
}
.buConIdCard>input {
    position: absolute;
    width: 208px;
    height: 142px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    margin-top: 13px;
    opacity: 0;
    z-index: 2;
    overflow: hidden;
    font-size: 104px;
}
</style>