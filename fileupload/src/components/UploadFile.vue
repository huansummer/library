<template>
  <div class="upload">
    <h2>图片上传</h2>
    <input type="file" name="fileHead" id="fileHead" accept="image/*" @change="setImagePreview"/>
    <div id="localImg">
      <img id="preview" width="-1" height="-1" style="display: none" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  methods: {
    setImagePreview: function () {
      var preview
      var imgTxt = ''
      var localImg
      var fileHead = document.getElementById('fileHead')
      var picture = fileHead.value
      if (!picture.match(/.jpg|.gif|.png|.bmp/i)) {
        alert('您上传的图片格式不正确，请重新选择！')
        return !1
      }
      preview = document.getElementById('preview')
      if (fileHead.files && fileHead.files[0]) {
        preview.style.display = 'block'
        preview.style.width = '63px'
        preview.style.height = '63px'
        preview.src = window.navigator.userAgent.indexOf('Chrome') >= 1 || window.navigator.userAgent.indexOf('Safari') >= 1 ? window.webkitURL.createObjectURL(fileHead.files[0]) : window.URL.createObjectURL(fileHead.files[0])
      } else {
        fileHead.select()
        fileHead.blur()
        imgTxt = document.selection.createRange().text
        localImg = document.getElementById('localImg')
        localImg.style.width = '63px'
        localImg.style.height = '63px'
        try {
          localImg.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)'
          localImg.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = imgTxt
        } catch (f) {
          alert('您上传的图片格式不正确，请重新选择！')
          return !1
        }
        preview.style.display = 'none'
        document.selection.empty()
      }
      document.getElementById('DivUp').style.display = 'block'
      return !0
    }
  }
}
</script>

<style scoped>

</style>
