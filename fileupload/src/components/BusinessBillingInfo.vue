<template>
	<div id="businessBillingInfo">
		<!-- title -->
		<header-title header-title="商户结算信息"></header-title>
		<!-- 认证步骤 -->
		<authentication-steps step-five="true"></authentication-steps>
		<!-- 信息内容 -->
		<div class="bbiCon">
			<!--<div class="bbiConInfo">-->
			<form class="bbiConInfo">
				<div><img src="../../static/img/enterDetails/jiesuanxinxi@2x.png" alt="pic" /><b>结算信息</b></div>
				<ul>
					<li><label>结算账户户名</label><input type="text" value="李明" /></li>
					<li><label>结算账户账号</label><input type="text" value="62180119029109384" /></li>
					<li><label>开户行</label><input type="text" value="杭州分行" /></li>
					<li><label>结算日</label><input type="text" name="bbiSettlementDay" value="T＋1" /></li>
				</ul>
			</form>
			<!--</div>-->
			<!--<div class="bbiConPayment">-->
			<form class="bbiConPayment">
				<div><img src="../../static/img/enterDetails/qianyuechanpin@2x.png" alt="pic" /><b>签约产品</b></div>
				<ul>
					<li>
						<img src="../../static/img/businessBillingInfo/wechat@2x.png" alt="pic" />
						<p @click="bbiConPaymentSelect1">
							<small :class="{ activePayment1:showActivePayment1 }"></small>
							<span>微信支付</span>
							<input type="checkbox" name="bbiConPaymentSelect" value="微信支付" />
						</p>
					</li>
					<li>
						<img src="../../static/img/businessBillingInfo/alipay@2x.png" alt="pic" />
						<p @click="bbiConPaymentSelect2">
							<small :class="{ activePayment2:showActivePayment2 }"></small>
							<span>支付宝</span>
							<input type="checkbox" name="bbiConPaymentSelect" value="支付宝" />
						</p>
					</li>
					<li>
						<img src="../../static/img/businessBillingInfo/yinlain@2x.png" alt="pic" />
						<p @click="bbiConPaymentSelect3">
							<small :class="{ activePayment3:showActivePayment3 }"></small>
							<span>银联</span>
							<input type="checkbox" name="bbiConPaymentSelect" value="银联" />
						</p>
					</li>
				</ul>
			</form>
			<!--</div>-->
			<!-- 下一步 -->
			<div class="iaiConInputDiv"><mt-button type="primary" size="large" @click="openRateAllocation">下一步</mt-button></div>
		</div>
	</div>
</template>

<script>
	import HeaderTitle from "./HeaderTitle"
	import AuthenticationSteps from "./AuthenticationSteps"
	export default {
		name:"BusinessBillingInfo",
		data () {
			return {
				showActivePayment1:false,
				showActivePayment2:false,
				showActivePayment3:false,
				userInfoHeader:{
					"osVersion": "19",
					"chlNo": "411",
					"txnCode": "411039",
					"dvImei": "357143047804981",
					"osType": "02",
					"txnTm": "20180315090359"
				}
			}
		},
		mounted () {
		},
		components:{
			HeaderTitle,
			AuthenticationSteps
		},
		methods:{
			openRateAllocation:function () {
				//结算信息&签约产品
				var bbiCon = $(".bbiConInfo,.bbiConPayment").serializeObject();
				var storeKey = "businessBillingInfo";
				localStorage.setItem(storeKey,JSON.stringify(bbiCon));
			    
			    //16位随机数
				var getRandomString = function(len){
				    len = len || 32;
				    var randomString = "";
				    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
				    var maxPos = $chars.length;
				    var pwd = '';
				    var num = '';
				    for (var i = 0; i < len; i++) {
				        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
				        num+=Math.floor(Math.random()*10);
				    }
				    pwd.toLowerCase();
				    randomString = (pwd+num).slice(8,24);
				    console.log(randomString);
				    return pwd;
				}
				var randomString = getRandomString(16);
				console.log("16位随机数",randomString);
				
				//转化为字节
				function strUtf8(str) {
				    var encoder = new TextEncoder('utf8');
				    var arr1 = encoder.encode(str);
				    console.log(arr1);
				    return arr1
				    var str1 = "";
				    for (var i = 0;i<arr1.length;i++) {
				    	str1 += arr1[i].join();
				    }
				    return str1;
				}
				var base = strUtf8(randomString);
				console.log("字节字符串",base);
				let jse = new this.$jsEncrypt();
				jse.setPublicKey(`-----BEGIN PUBLIC KEY-----
				MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaF0B1sjntM/AoAe0vrqpNBpHZzU4q/6u5r1M8GeIs3USpWl3U0UcTJfgEKNbh9QsutgwLuDHW40ngFyHM3c9SgtRnQAjFbSEeHuJQm9AJRZN7LwNdyq5TkDi5BBYvEBoTkSaBxw7Zc+GHf3zcyThiuHwzhhrnm7t+IaVP5WNFMwIDAQAB
				-----END PUBLIC KEY-----`)
//				let encrypted = jse.encrypt('Hello, world')
				let encrypted = jse.encrypt(base)
				console.log("对字节进行RSA加密",encrypted)
				
				//加密后的新字节转为base64
//				var base64 = new Base64();
//				var result = base64.encode(encrypted);
//				console.log("对加密后的字节进行base64转换",result);
				
				//转码后的字节进行字符串转换
//				var base632 = strUtf8(result);
//				console.log("对进行base64加密后的字节进行utf-8转换",base632);
				
				//请求报文的请求头base64转换
//				var base64Header = base64.encode(JSON.stringify(this.userInfoHeader));
//				console.log("报文头base64转换",base64Header);
				
//				var qs=require('qs');
//				this.$axios.post('/504.504001',qs.stringify({
//					"txnHeaderInfo":base64Header,
//					"txnBody":base632
//				}))
				this.$axios.post('/504.504001',{
//					"txnHeaderInfo":base64Header,
//					"txnBody":result
				})
			    .then(res => {
			        console.log(res)
			    })
			    .catch(err => {
			        console.log(err)
			    })
				
				function Base64() {
   
				    // private property  
				    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
				   
				    // public method for encoding  
				    this.encode = function (input) {  
				        var output = "";  
				        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
				        var i = 0;  
				        input = _utf8_encode(input);  
				        while (i < input.length) {  
				            chr1 = input.charCodeAt(i++);  
				            chr2 = input.charCodeAt(i++);  
				            chr3 = input.charCodeAt(i++);  
				            enc1 = chr1 >> 2;  
				            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
				            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
				            enc4 = chr3 & 63;  
				            if (isNaN(chr2)) {  
				                enc3 = enc4 = 64;  
				            } else if (isNaN(chr3)) {  
				                enc4 = 64;  
				            }  
				            output = output +  
				            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
				            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
				        }  
				        return output;  
				    }  
				   
				    // public method for decoding  
				    this.decode = function (input) {  
				        var output = "";  
				        var chr1, chr2, chr3;  
				        var enc1, enc2, enc3, enc4;  
				        var i = 0;  
				        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
				        while (i < input.length) {  
				            enc1 = _keyStr.indexOf(input.charAt(i++));  
				            enc2 = _keyStr.indexOf(input.charAt(i++));  
				            enc3 = _keyStr.indexOf(input.charAt(i++));  
				            enc4 = _keyStr.indexOf(input.charAt(i++));  
				            chr1 = (enc1 << 2) | (enc2 >> 4);  
				            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
				            chr3 = ((enc3 & 3) << 6) | enc4;  
				            output = output + String.fromCharCode(chr1);  
				            if (enc3 != 64) {  
				                output = output + String.fromCharCode(chr2);  
				            }  
				            if (enc4 != 64) {  
				                output = output + String.fromCharCode(chr3);  
				            }  
				        }  
				        output = _utf8_decode(output);  
				        return output;  
				    }  
				   
				    // private method for UTF-8 encoding  
				    var _utf8_encode = function (string) {  
				        var string = string.replace(/\r\n/g,"\n");  
				        var utftext = "";  
				        for (var n = 0; n < string.length; n++) {  
				            var c = string.charCodeAt(n);  
				            if (c < 128) {  
				                utftext += String.fromCharCode(c);  
				            } else if((c > 127) && (c < 2048)) {  
				                utftext += String.fromCharCode((c >> 6) | 192);  
				                utftext += String.fromCharCode((c & 63) | 128);  
				            } else {  
				                utftext += String.fromCharCode((c >> 12) | 224);  
				                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
				                utftext += String.fromCharCode((c & 63) | 128);  
				            }  
				   
				        }  
				        return utftext;  
				    }  
				   
				    // private method for UTF-8 decoding  
				    var _utf8_decode = function (utftext) {  
				        var string = "";  
				        var i = 0;  
				        var c = c1 = c2 = 0;  
				        while ( i < utftext.length ) {  
				            c = utftext.charCodeAt(i);  
				            if (c < 128) {  
				                string += String.fromCharCode(c);  
				                i++;  
				            } else if((c > 191) && (c < 224)) {  
				                c2 = utftext.charCodeAt(i+1);  
				                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
				                i += 2;  
				            } else {  
				                c2 = utftext.charCodeAt(i+1);  
				                c3 = utftext.charCodeAt(i+2);  
				                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
				                i += 3;  
				            }  
				        }  
				        return string;  
				    }  
				}
				
//				this.$router.push("/RateAllocation")
			},
			bbiConPaymentSelect1:function (e) {
				this.showActivePayment1 = !this.showActivePayment1
				this.showActivePayment1 == true ? e.target.parentElement.children[2].checked = true : e.target.parentElement.children[2].checked = false
//				e.target.parentElement.children[0].style.backgroundPositionY = "-16px"
			},
			bbiConPaymentSelect2:function (e) {
				this.showActivePayment2 = !this.showActivePayment2
				this.showActivePayment2 == true ? e.target.parentElement.children[2].checked = true : e.target.parentElement.children[2].checked = false
			},
			bbiConPaymentSelect3:function (e) {
				this.showActivePayment3 = !this.showActivePayment3
				this.showActivePayment3 == true ? e.target.parentElement.children[2].checked = true : e.target.parentElement.children[2].checked = false
			}
		}
	}
</script>

<style scoped="scoped">
.bbiConPayment {
	margin-top: 10px;
}
.bbiConInfo>div,.bbiConPayment>div {
    font-size: 16px;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 42px;
    border-bottom: 1px solid #f1f1f1;
    padding: 0 16px;
}
.bbiConInfo>div>img,.bbiConPayment>div>img {
	width: 21px;
	margin-right: 9px;
}
.bbiConInfo>ul>li {
	border-bottom: 1px solid #F1F1F1;
}
.bbiConInfo>ul>li:last-child {
	border-bottom: none;
}
.bbiConInfo>ul>li>label,.bbiConInfo>ul>li>span {
	font-size: 15px;
}
.bbiConPayment>ul {
	display: flex;
	justify-content: space-around;
	padding-bottom: 21px;
}
.bbiConPayment>ul>li>img {
	width: 50px;
	margin-top: 40px;
}
.bbiConPayment>ul>li>p {
    display: flex;
    align-items: center;
    position: relative;
}
.bbiConPayment>ul>li>p>small {
    background: url(../../static/img/businessBillingInfo/0002.jpg) no-repeat;
    background-size: 100%;
    width: 15px;
    height: 15px;
    margin-right: 8px;
}
.bbiConPayment>ul>li>p>small.activePayment1,
.bbiConPayment>ul>li>p>small.activePayment2,
.bbiConPayment>ul>li>p>small.activePayment3 {
	background-position-y: -16px;
}
.bbiConPayment>ul>li>p>span {
	font-size: 12px;
	color: #333333;
}
.bbiConPayment>ul>li>p>input {
    position: absolute;
    left: 0;
    top: 20px;
    visibility: hidden;
}
</style>