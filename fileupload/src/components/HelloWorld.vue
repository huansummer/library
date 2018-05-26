<template>
  <div class="hello">
    <div id="header">
					<img src="../assets/left-jiantou.png"/>
					<span>{{fanhui}}</span>
					<span class="shenfenzheng">{{sqsfzzp}}</span>
		</div>
				<p>{{sfzz}}</p>
				<!--这是正面照-->
				<div id="sfzzm">
					<p class="fl ">{{sfzzm}}</p>
					<div ref="divGenres" class="fileInputContainer" v-show="isPhoto">
						<input type="file" class="fileInput" accept="image/jpeg,image/jpg,image/png"  @change="showPreview"/>
						<img class="imgShow" className="imgShow" src="#" alt="" />
					</div>
					<div data-role="fieldcontain">
				    <div id="localImag">
				        <img class="preview" ref="preview"  width="-1" height="-1" style="display: none" />
				    </div>
					</div>
						<input type="hidden" id="picIndex" value="0">
				</div>
				<div id="sfzfm">
					<p class="fl">{{sfzfm}}</p>
					<div class="fileInputContainer">
						<input type="file" class="fileInput" accept="image/jpeg,image/jpg,image/png" capture="camera"/>
					</div>
				</div>
				<div v-if="images.length >0">
               <ul>
                  <li v-for="(key,image) in images">
                    
                     <img :src="image" @click='delImage(key)' />
                     <a href="#" style="position: absolute;" @click='delImage(key)'>
                        <span class="glyphicon glyphicon-remove"></span>
                    </a>
                  </li>
               </ul>
                <button @click="removeImage">移除全部图片</button>
                <button>上传</button>
            </div>
            <input type="file" id="fileHead" accept="image/jpeg,image/jpg,image/png" @change="showPreview(this)"/>  
            <img id="portrait" ref = "portrait" src=""> 
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
	  	fanhui:"返回",
	  	sqsfzzp:"上传身份证照片",
	  	sfzz:"身份证照",
	  	sfzzm:"身份证正面",
	  	sfzfm:"身份证反面",
	  	scsfz:"手持身份证",
	  	isPhoto: true, 
	  	images: [],
	  	data:[]
    }
  },
  created:function () {
    var self = this
//  Vue.axios.get(api).then((response) => {
//		  console.log(response.data)
//		})
//this.$http.get(api).then((response) => {
//console.log(response.data)
//})
    this.$axios.get('/users')
      .then(function (res) {
        self.data = res.data
        console.log("0001");
        console.log(self.data)
      })
      .catch(function (error) {
      	console.log("0002");
        console.log(error)
      })
      
  },
  methods:{
    showPreview: function(source){
    	var fileHead = document.getElementById('fileHead')
    	console.log(fileHead);
    	var file = fileHead.files[0]||fileHead.files;  
            if(window.FileReader) {  
                var fr = new FileReader();  
                fr.onloadend = function(e) { 
                var portrait = document.getElementById('portrait');
                    portrait.src = e.target.result;  
                };  
                fr.readAsDataURL(file);  
            }   
	}
	 
		}	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scoped属性，这个的意思就是这个样式仅在当前组件内有效果，
如果没有这个属性，则这个样式就是全局的，
会影响到其他组件的样式，所以这个一定要根据情况而定。-->

<style scoped>
		html{
      font-style: 12px;
    }
		.fl{
			float: left;
		}
    .fr{
    	float: right;
    }
    .clearfix:after{
    	content: "";
    	display: block;
    	clear: both;
    	
    }
  .content{
    height: 91vh;
    padding-top: 2vh;
    font-size: 1.167rem;
  }
  .content ul{
    box-shadow: 0 -1px 1px 0px #cecece;
    margin-bottom: 1rem;
    background-color: #fff;
  }
  .content li{
    height: 4rem;
    line-height: 4rem;
    box-shadow: 0 1px 1px 0px #cecece;
  }
  .content a{
    display: block;
    height: 100%;
    position: relative;
  }
  .pr1{
    padding-right: 1rem;
  }
  .shenfenzheng{
  	padding-left: 2 rem;
  	font-size: 1.5rem;
  }
  #header{
  	padding-bottom: 1rem;
  	border-bottom: 1px solid gainsboro;
  }
  #sfzzm{
  	width: 10 rem;
  	height: 100px;
  }
  .fileInputContainer{
    height: 99px;
    width: 200px;
    margin: 20px 20px 20px 20px ;
    border: 1px solid gainsboro;
    background: ghostwhite;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
}
.fileInput{
    height: 106px;
    border: none;
    font-size: 300px;
    opacity: 0;
    filter:alpha(opacity=0);
    cursor: pointer;
    position: absolute;
}
#portrait{
	width: 200px;
	height: auto;
}
#imgShow{
	height: 106px;
	font-size: 300px;
	border: 1px solid red;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
