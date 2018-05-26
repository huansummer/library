<template>
	<div id="register">
		<div class="registerHead">
			<img id="bgPic"  src="../../static/img/register/BG@2x.png"/>
			<img id="logo" src="../../static/img/register/yu@2x.png"/>
		</div>
		<form action="#" method="post"  class="registerInfor"  v-on:submit.prevent="login">
			<div id="username" class="iconsize">
				<img src="../../static/img/register/icon-account@2x.png"/>
				<input type="text" name="username" value ="1111111"/>
			</div>
			<div id="psd" class="iconsize">
				<img src="../../static/img/register/icon-key@2x.png"/>
				<input type="password" name="psd" value ="1235467"/>
			</div>
			<mt-button class="registerBtn" type="primary">登录</mt-button>
		</form>
	</div>
</template>
<script>
export default {
	name: 'Register',
	data () {
    	return {

    	}
   },
	methods: {
		//16位随机数的字符串生成
	    //登录验证
	    login : function (){
	    	this.$router.push("/HomePage");
			  var qs = require('qs');

        // function h5ToNative () {
        //   android.toNativeParams(1,
        //     qs.stringify({"data": JSON.stringify({
        //         "txnHeaderInfo" : {
        //           "userId:"" ,
        //           "osType" :
        //         },
        //         "txnBody":{
        //           "reqTm": "20171023145519",
        //           " userAccount ": "admin",
        //         }})}
        //     )
        //   )
        // }
        // var a = h5ToNative();
        // console.log(a);
			// 	this.$axios.post('/504.504006', a
        //
        // )
			// .then(function (res) {
		 //        self.data = res.data
		 //        console.log(self.data)
		 //        console.log("请求成功");
        //
	     //  	})
	     //  	.catch(function (error) {
		 //        console.log(error.data)
	     //  	})
//			var getRandomString = function(len){
//			    len = len || 32;
//			    var randomString = "";
//			    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
//			    var maxPos = $chars.length;
//			    var pwd = '';
//			    var num = '';
//			    for (var i = 0; i < len; i++) {
//			        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
//			        num+=Math.floor(Math.random()*10);
//			    }
//			    pwd.toLowerCase();
//			    randomString = (pwd+num).slice(8,24);
//			    console.log(randomString);
//			    return pwd;
//			}
//			var randomString = getRandomString();
//			console.log("16位随机数",randomString);
//
//			//转化为字节
//				function strUtf8(str) {
//				    var encoder = new TextEncoder('utf8');
//				    var arr1 = encoder.encode(str);
//				    return arr1
////				    var str1 = "";
////				    for (var i = 0;i<arr1.length;i++) {
////				    	str1 += arr1[i].join();
////				    }
////				    return str1;
//				}
//				var base = strUtf8(randomString);
//				console.log("字节字符串",base);
////				var a = this.$getCode(base);
////				console.log(a)
//			//对字节加密
//			let jse = new this.$jsEncrypt();
//			jse.setPublicKey(`-----BEGIN PUBLIC KEY-----
//					MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaF0B1sjntM/AoAe0vrqpNBpHZzU4q/6u5r1M8GeIs3USpWl3U0UcTJfgEKNbh9QsutgwLuDHW40ngFyHM3c9SgtRnQAjFbSEeHuJQm9AJRZN7LwNdyq5TkDi5BBYvEBoTkSaBxw7Zc+GHf3zcyThiuHwzhhrnm7t+IaVP5WNFMwIDAQAB
//			-----END PUBLIC KEY-----`)
//			let encrypted = jse.encrypt('Hello, world')
////			let encrypted = jse.encrypt(base)
//			console.log("对字节进行RSA加密",encrypted)
//				//加密后的新字节转为base64
//				var base64 = new Base64();
//				var result = base64.encode(encrypted);
//				console.log("对加密后的字节进行base64转换",result);
//
//				//转码后的字节进行字符串转换
//				var base632 = strUtf8(result);
//				console.log("对进行base64加密后的字节进行utf-8转换",base632);
//
//				//请求报文的请求头base64转换
//				var base64Header = base64.encode(JSON.stringify(this.userInfoHeader));
//				console.log("报文头base64转换",base64Header);
//
//				var qs=require('qs');
//				this.$axios.post('/504.504001',qs.stringify({
//					"txnHeaderInfo":base64Header,
//					"txnBody":base632
//				}))
//				this.$axios.post('/504.504001',{
//					"txnHeaderInfo":base64Header,
//					"txnBody":result
//				})
//			    .then(res => {
//			        console.log(res)
//			    })
//			    .catch(err => {
//			        console.log(err)
//			    })
//
//				function Base64() {
//
//				    // private property
//				    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//
//				    // public method for encoding
//				    this.encode = function (input) {
//				        var output = "";
//				        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
//				        var i = 0;
//				        input = _utf8_encode(input);
//				        while (i < input.length) {
//				            chr1 = input.charCodeAt(i++);
//				            chr2 = input.charCodeAt(i++);
//				            chr3 = input.charCodeAt(i++);
//				            enc1 = chr1 >> 2;
//				            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
//				            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
//				            enc4 = chr3 & 63;
//				            if (isNaN(chr2)) {
//				                enc3 = enc4 = 64;
//				            } else if (isNaN(chr3)) {
//				                enc4 = 64;
//				            }
//				            output = output +
//				            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
//				            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
//				        }
//				        return output;
//				    }
//
//				    // public method for decoding
//				    this.decode = function (input) {
//				        var output = "";
//				        var chr1, chr2, chr3;
//				        var enc1, enc2, enc3, enc4;
//				        var i = 0;
//				        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
//				        while (i < input.length) {
//				            enc1 = _keyStr.indexOf(input.charAt(i++));
//				            enc2 = _keyStr.indexOf(input.charAt(i++));
//				            enc3 = _keyStr.indexOf(input.charAt(i++));
//				            enc4 = _keyStr.indexOf(input.charAt(i++));
//				            chr1 = (enc1 << 2) | (enc2 >> 4);
//				            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
//				            chr3 = ((enc3 & 3) << 6) | enc4;
//				            output = output + String.fromCharCode(chr1);
//				            if (enc3 != 64) {
//				                output = output + String.fromCharCode(chr2);
//				            }
//				            if (enc4 != 64) {
//				                output = output + String.fromCharCode(chr3);
//				            }
//				        }
//				        output = _utf8_decode(output);
//				        return output;
//				    }
//
//				    // private method for UTF-8 encoding
//				    var _utf8_encode = function (string) {
//				        var string = string.replace(/\r\n/g,"\n");
//				        var utftext = "";
//				        for (var n = 0; n < string.length; n++) {
//				            var c = string.charCodeAt(n);
//				            if (c < 128) {
//				                utftext += String.fromCharCode(c);
//				            } else if((c > 127) && (c < 2048)) {
//				                utftext += String.fromCharCode((c >> 6) | 192);
//				                utftext += String.fromCharCode((c & 63) | 128);
//				            } else {
//				                utftext += String.fromCharCode((c >> 12) | 224);
//				                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
//				                utftext += String.fromCharCode((c & 63) | 128);
//				            }
//
//				        }
//				        return utftext;
//				    }
////
//				    // private method for UTF-8 decoding
//				    var _utf8_decode = function (utftext) {
//				        var string = "";
//				        var i = 0;
//				        var c = c1 = c2 = 0;
//				        while ( i < utftext.length ) {
//				            c = utftext.charCodeAt(i);
//				            if (c < 128) {
//				                string += String.fromCharCode(c);
//				                i++;
//				            } else if((c > 191) && (c < 224)) {
//				                c2 = utftext.charCodeAt(i+1);
//				                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
//				                i += 2;
//				            } else {
//				                c2 = utftext.charCodeAt(i+1);
//				                c3 = utftext.charCodeAt(i+2);
//				                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
//				                i += 3;
//				            }
//				        }
//				        return string;
//				        console.log(string)
//				    }
//
//			}
		}
	},
	mounted: function () {
	    var self = this
	    this.$axios.get('/')
	      .then(function (res) {
	        self.data = res.data
	        console.log(self.data)
	      })
	      .catch(function (error) {
	        console.log(error)
	      })
	}
}
</script>

<style scoped>
#register {
	background:rgba(255,255,255,1);
}
.registerHead {
	display: flex;
	justify-content: center;
	position: relative;
}
#bgPic {
	width:100%;
  height: 50%;
}
#logo {
	width:86px;
	height:85px;
	position: absolute;
	top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
#username,#psd {
	border-bottom: 1px solid #DBDBDB;
	margin: 0 35px 0 46px;
	position: relative;
}
#username > input{
  padding-left: 0.26rem;
  margin-bottom: 0.04rem
}
#psd >input {
  padding-left: 0.26rem;
  margin-bottom: 0.06rem;
  margin-top: 0.34rem;
}
.iconsize > img {
	width: 25px;
	height: 25px;
	position: absolute;
	left: 0px;
	top: 24px;

}
#psd > img {
	top: 33px;
}
.iconsize > input {
	font-size:17px;
	font-family:PingFangSC-Regular;
	color:rgba(102,102,102,1);
	margin-top: 25px;
	border: 0px;
	outline:none;
}
.registerInfor {
	padding-bottom: 197px;
}
.registerBtn{
	width: calc(100% - 70px);
	height: 48px;
	color: write;
	background-color: #FE6B1C;
	margin: 48px 30px 0 40px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
