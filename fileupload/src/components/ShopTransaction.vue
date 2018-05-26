<template>
	<!-- title -->
	<div id="container">
		<header-title class="header" header-title="商户交易统计"></header-title>
      <div id="shopTranscation">
        <div id="date">
          <!--<calendear-master></calendear-master>-->
          <div>
            <div>
              <input type="text" @click="openPickerStart" id="pickerValueStart" placeholder="2018-03-03"/>
              <mt-datetime-picker
                v-model="pickerValue"
                type="date"
                ref="openPickerStart"
                @confirm="handleConfirmStart">
              </mt-datetime-picker>
            </div><span>—</span>
            <!--一定要嵌套外层div，并且cilck不能写在div中-->
            <div>
              <input type="text" @click="openPicker"  id="pickerValueEnd" placeholder="2018-05-07"/>
              <mt-datetime-picker
                v-model="pickerValue"
                type="date"
                ref="pickerValueEnd"
                @confirm="handleConfirmEnd">
              </mt-datetime-picker>
            </div>
          </div>

            <img src="../../static/img/shoptransaction/icon-calendar@2x.png"/>
          </div>
          <hr/>
        <!--列表详情-->
        <ul id="listDetails">
          <li v-for="item in items">
            <p>{{item.name}}</p>
            <p class = "transactionCount">
              <span>{{item.time}}</span>
              <span>交易{{item.count}}(笔)</span>
            </p>
          </li>
        </ul>
    </div>
	</div>

</template>

<script>
import HeaderTitle from "./HeaderTitle"
import CalendearMaster from "./CalendearMaster"

	export default {
		name:'SetUp',
		data () {
			return {
        pickerValue : "2018-02-02",
				items : [
					{
						name:"我爱我家",
						time:"1890.01",
						count:30
					},
					{
						name:"我爱我家",
						time:"1890.01",
						count:30
					},
					{
						name:"我爱我家",
						time:"1890.01",
						count:30
					},
					{
						name:"我爱我家",
						time:"1890.01",
						count:30
					}
				]
			}

		},
		components:{
			HeaderTitle,
			CalendearMaster
		},
		methods:{
		  // 开始时间，打开下拉日期选项
      openPickerStart:function() {
        this.$refs.openPickerStart.open();
      },
      // 开始时间，点击确定
      handleConfirmStart:function() {
        var selectTime = this.formatDate(this.$refs.openPickerStart.value);
        document.getElementById("pickerValueStart").value = selectTime;
      },
      // 结束时间，打开下拉日期选项
			openPicker:function() {
        		this.$refs.pickerValueEnd.open();
      },
      // 结束时间，点击确定
      handleConfirmEnd:function() {
        var selectTime = this.formatDate(this.$refs.pickerValueEnd.value);
        document.getElementById("pickerValueEnd").value = selectTime;
      },
      //格式化日期
			formatDate: function (dateTime) {
        const year = dateTime.getFullYear();
        const month = (dateTime.getMonth()+1) < 10 ? "0"+(dateTime.getMonth()+1)  : dateTime.getMonth()+1;
        const day = (dateTime.getDate()+1) < 10 ? "0"+dateTime.getDate() : dateTime.getDate();
        const selectTime = year + "-" + month + "-" + day;
        return  selectTime;
      }
		}
	}
</script>

<style scoped>
#container {
	background: linear-gradient(-137.2deg,rgba(255,181,0,1),rgba(254,107,28,1));
}
#container > .ssTitle {
	background: none;
}
#shopTranscation {
	margin: 0 16px;
	background: #FFF;
}
#date{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	padding-top: 0.3rem;
  padding-bottom: 0.13rem;

}
#date > div>div {
	  width: 80px;
    height: 20px;
}
#date > div {
  display: flex;
  justify-content: left;
  align-items: center;
  width: calc(100% - 20px);
}
#date > div > div:nth-of-type(2){
  margin-right: 1.22rem;
}
#date > img {
	width: 18px;
	height: 17px;
}
#xiahuaxian{

  border-bottom: 3px solid red;
}
hr {
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 5px;
  height: 2px;
  background-color: #483628;
}
#listDetails {
	padding: 0 16px;
  padding-bottom: 263px;
  overflow: hidden;
}
#listDetails > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #DBDBDB;
  padding-top: 0.1rem;
  padding-bottom: 0.08rem;
}
#listDetails > li:nth-of-type(1){
  padding-top: 0.19rem;

  border-top: 1px solid #483628;
}
#listDetails > li >p:nth-of-type(1){
  font-size:16px;
  font-family:PingFangSC-Regular;
  color:rgba(102,102,102,1);
}
.everyList {
	display: flex;
	justify-content: space-around;
}
.transactionCount{
	font-size:20px;
	font-family:PingFangSC-Semibold;
	color:rgba(51,51,51,1);
  display: flex;
  flex-direction: column;
}
.transactionCount > span:nth-of-type(1){
  color:rgba(51,51,51,1);
  font-size:19px;
}
.transactionCount > span {
	font-size:11px;
	font-family:PingFangSC-Regular;
	color:rgba(153,153,153,1);
}
input {
    width: 80px;
    height: 20px;
    font-size: 0.15rem;
    border: 0;
    outline: none;
  padding-top: 4px;
}
</style>
