<template>
	<div class="TaskList">
		<header-title header-title="任务列表"></header-title>
		<div class="TaskDetail">
			<ul id="baseInfor">
				<li><p>商户名</p><p>{{shopName}}</p></li>
				<li><p>商户类型</p><p>{{shopType}}</p></li>
				<li><p>联系人姓名</p><p>{{userName}}</p></li>
				<li><p>联系电话</p><p>{{userPhone}}</p></li>
				<li><p>商户申请时间</p><p>{{applyTime}}</p></li>
				<li id="status"><p>状态</p><p>{{status}}</p></li>
			</ul>
      <div id = shopInfor v-show="shopInfor"><p id="shopInforAdd">{{shopInforAdd}}</p></div>
      <ul id="selectTask">
        <li @click ="selectTaskShow">拒绝商户</li>
        <li>领取任务</li>
        <li @click = "taskForward">任务转发</li>
      </ul>
      <!--&lt;!&ndash;拒绝弹出框&ndash;&gt;-->
      <!--<mt-popup-->
        <!--v-model="popupVisible"-->
        <!--position="top">-->
          <!--<div>-->
            <!--<div class="mint-msgbox-header">-->
              <!--<div class="mint-msgbox-title">拒绝原因</div>-->
            <!--</div>-->
            <!--<div class="mint-msgbox-content">-->
              <!--<div class="mint-msgbox-input">-->
                <!--<textarea id ="inputText" autofocus rows="5" cols="34" placeholder="    至少5个汉字"  v-model="message">{{message}}</textarea>-->
                <!--<div class="mint-msgbox-errormsg"></div>-->
              <!--</div>-->
              <!--<div class="mint-msgbox-btns">-->
                <!--<button class="mint-msgbox-btn mint-msgbox-cancel" @click ="clickCancel">取消</button>-->
                <!--<button class="mint-msgbox-btn mint-msgbox-confirm" @click ="clickConfirm">确定</button>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
      <!--</mt-popup>-->
		</div>
	</div>
</template>
<script>
import HeaderTitle from '@/components/HeaderTitle'
import { MessageBox } from 'mint-ui'
import { Popup } from 'mint-ui'

	export default{
	name: 'TaskList',
		data (){
			return{
						shopName : "大明水果铺",
            shopType : "小微商户",
						userName : "李明",
						userPhone : "18009201203",
						applyTime : "2018/01/31 12:31",
						status : "处理中",
            shopInforAdd :"商户信息补录",
            shopInfor :false,
            message :"",
            popupVisible : false

			}
		},
		components:{
			HeaderTitle
		},
    methods: {
	    selectTaskShow :function (){
         this.popupVisible = true;
        MessageBox.prompt(' ', '拒绝原因', {
          inputPlaceholder: '至少5个汉字',inputType:"text"}).then(({ value, action }) => {
          console.log(value)
        }).catch(err => {
          if (err == '') {
            console.log('error');
          }
        });
      },

      taskForward : function () {
        // //必须引入import { MessageBox } from 'mint-ui'
        MessageBox.prompt(' ', '客户经理工号', {
          inputPlaceholder: '请输入需要转发的客户经理工号'}).then(({ value, action }) => {
          console.log(value)
        }).catch(err => {
            if (err == '') {
              console.log('error');
            }
          });
      }
    }
	}
</script>

<style scoped>
body {
  background-color: #f3f4f5;
}
.TaskList{
	background-color:rgba(243,244,245,1);
  padding-bottom: 287px;
}
.TaskDetail{
	border-radius: 8px ;
	margin:13px 16px 10px;
  background-color:rgba(255,255,255,1);
}
#baseInfor > li{
	display: flex;
	justify-content: space-between;
	padding-bottom: 15px;
}
#baseInfor {
	padding:0.2rem 0.16rem 0 0.16rem;
	border-radius: 8px ;

}
#baseInfor > li :nth-of-type(2) {
	color:rgba(51,51,51,1);
}
#baseInfor > li :nth-of-type(1) {
	color:rgba(102,102,102,1);
}
#status {
  padding-bottom: 0;
}
#baseInfor > li > p{
	font-size:15px;
	font-family:PingFangSC-Regular;
	color:rgba(102,102,102,1);
}
#shopInforAdd,#selectTask {
  height: 55px;
  font-size:17px;
  font-family:PingFangSC-Regular;
  color:rgba(255,85,5,1);
  border-top:1px solid #eee ;
}
#shopInfor {
  display: flex;
  justify-content: center;
  border: 1px solid #eee;
}
#shopInforAdd{
  padding: 15px 0;
}
#selectTask{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#selectTask >li {
  height: 55px;
  padding-top: 15px;
  padding-bottom: 16px;
}
#selectTask :nth-of-type(1) {
  padding-left: 22px;
  padding-right: 22px;
}
#selectTask :nth-of-type(2) {
  padding-left: 23px;
  padding-right: 11px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
#selectTask :nth-of-type(3) {
  padding-left: 27px;
  padding-right: 28px;
}
.mint-msgbox-input > textarea {
  background:rgba(243,244,245,1);
  border: 0;
}
</style>
