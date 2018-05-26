<template>
	<div id="QualificationPic">
		<!-- title -->
		<header-title header-title="资质图片"></header-title>
		<div class="progress">
			<img src="../../static/img/qualificationpic/jibenxinxi_red_01@2x.png"/>
			<img src="../../static/img/qualificationpic/jibenxinxi_red_02@2x.png"/>
			<img src="../../static/img/qualificationpic/jibenxinxi_red_03@2x.png"/>
			<img src="../../static/img/qualificationpic/jibenxinxi_gray_04@2x.png"/>
			<img src="../../static/img/qualificationpic/jibenxinxi_gray_05@2x.png"/>
		</div>
		<div id="handId">
			<!-- 手持身份证 -->
			<div id="handIdHead">
					<p>
						<small>*</small><span>手持身份证</span>
					</p>
					<span>
						<img src="../../static/img/shopSelection/icon_list_right@2x.png"/>
					</span>
			</div>
			<div class="IdCarame">
				<input type="file" id="fileHead" accept="image/jpeg,image/jpg,image/png" @change="showPreview()"/>  
            	<img id="portrait" ref = "portrait" src="../../static/img/qualificationpic/pic_shouchi@2x.png"> 
			</div>
		</div>
		<!--商户门头照-->
		<div id="storeinfor">
			<div id="storeinforHead">
					<p>
						<small>*</small><span>商户门头照</span>
					</p>
					<span>
						<img src="../../static/img/shopSelection/icon_list_right@2x.png"/>
					</span>
			</div>
			<div class="IdCarame">
				<input type="file" id="fileHead" accept="image/jpeg,image/jpg,image/png" @change="showPreview()"/>  
            	<img id="portrait" ref = "portrait" src="../../static/img/qualificationpic/pic_mentouzhao@2x.png"> 
			</div>
		</div>
		
		<!--商户门头照-->
		<div id="storeinfor">
			<div id="storeinforHead">
					<p>
						<small>*</small><span>商户门头照</span>
					</p>
					<span>
						<img src="../../static/img/shopSelection/icon_list_right@2x.png"/>
					</span>
			</div>
			<div class="IdCarame">
				<input type="file" id="fileHead" accept="image/jpeg,image/jpg,image/png" @change="showPreview()"/>  
            	<img id="portrait" ref = "portrait" src="../../static/img/qualificationpic/pic_shouyintai@2x.png"> 
			</div>
		</div>
		<!-- 提交 -->
		<input type="button" name="next" id="next" value="下一步" />
	</div>
</template>

<script>
	import HeaderTitle from "./HeaderTitle"
	import FlexToPage from "./FlexToPage"
	export default {
		name:"BusinessUpgrades",
		data () {
			return {
				
			}
		},
		methods:{
			showPreview:function (){
				console.log(1);
			}
		},
		components:{
			HeaderTitle,
			FlexToPage
		}
	}
</script>

<style scoped="scoped">
	#QualificationPic{
		background-color: white;
	}
.progress{
	height:79px; 
	background:rgba(255,255,255,1); 
	text-align: center;	
	line-height: 79px;
}
.progress > img{
    width:17px; 
    height:17px;
    display: inline-block;
    vertical-align: middle;
    
}
#next{
	width:343px ;
	height:44px ; 
	background:rgba(254,107,28,1);
	border-radius: 4px ; 
	border:none ;
}
#handIdHead,#storeinforHead{
	height:42px; 
	line-height: 42px;
	background:rgba(255,255,255,1);
	border: 1px solid #F3F4F5;
    font-size: 16px;
    color: #666666;
    text-align: center;
    display: flex;
    justify-content: space-between;
}
#handIdHead > p, #storeinforHead > p{
	display: inline-block;
	padding-left: 16px;
}
small{
	font-family:PingFangSC-Regular;
	color:rgba(208,2,27,1);
}
#handIdHead > span,#storeinforHead > span{
    display: inline-block;
    vertical-align: middle;	
}
#handIdHead > span > img,#storeinforHead > span > img{
	width: 24px;
    height: 24px;
    transform: rotate(90deg); 
}
.IdCarame {
	height:171px;
}
.IdCarame > img {
	width: 208px;
	height: 142px;
	display: inline-block;
	vertical-align: middle;
	position: relative;
}
.IdCarame > input {
	width: 208px;
	height: 142px;
	display: inline-block;
	vertical-align: middle;
	border: 1px solid red;
	position: absolute;
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