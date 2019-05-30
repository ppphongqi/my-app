<template>
  <div class="app">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickBack"/>
    <div class="txt_input">
      <van-cell-group>
        <van-field v-model="title" label="标题"/>
        <van-field v-model="detail" label="描述" type="textarea" autosize/>
        <van-field v-model="price" label="价格(¥)" type="number"/>
      </van-cell-group>
    </div>
    <div class="upload-img">
      <p>选择图片</p>
      <ul class="load-list">
        <li v-for="(item,index) in imgArr" :key="index">
          <div class="load-container">
            <img :src="item">
            <span @click="delImg(index)">
              <van-icon name="close" size="20px"/>
            </span>
          </div>
        </li>
        <li class="img-upload" v-if="allowAddImg">
          <div class="only-add">
            <div class="load-add" @click="upload()">
              <van-icon name="add-o" size="3.5em"/>
              <input
                type="file"
                accept="image/*"
                multiple="multiple"
                style="display: none"
                @change="changeImg($event)"
                ref="uploadImages"
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="tag">
      <div>
        <p>新旧程度</p>
        <van-slider v-model="slider_value" @change="onChange" :step="10"/>
      </div>
      <p>能否出租</p>
      <van-switch v-model="isRentable"/>
    </div>
    <div class="publishBtn">
      <van-button type="primary" size="large" @click="publish">发布</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "uploadimg",
  data() {
    return {
      imgArr: [], // 存放临时图片的数组
      allowAddImg: true, // 上传达到限制后隐藏上传按钮
      imgData: "",
      imgSrc: "",
      title: "",
      detail: "",
      price: 0,
      slider_value: 1,
      isRentable: false
    };
  },
  methods: {
    onChange(slider_value) {
      this.$toast(slider_value / 10 + "成新");
    },
    upload() {
      // 调起input选择框
      this.$refs.uploadImages.click();
    },
    changeImg(e) {
      var _this = this;
      var imgLimit = 1024;
      var files = e.target.files;
      var image = new Image();
      if (files.length > 0) {
        var dd = 0;
        var timer = setInterval(function() {
          if (
            files.item(dd).type != "image/png" &&
            files.item(dd).type != "image/jpeg" &&
            files.item(dd).type != "image/gif"
          ) {
            return false;
          }

          if (files.item(dd).size > imgLimit * 102400) {
            //to do sth
          } else {
            image.src = window.URL.createObjectURL(files.item(dd));
            image.onload = function() {
              // 默认按比例压缩
              var w = image.width,
                h = image.height,
                scale = w / h;
              w = 200;
              h = w / scale;
              // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
              var quality = 1;
              //生成canvas
              var canvas = document.createElement("canvas");
              var ctx = canvas.getContext("2d");
              // 创建属性节点
              var anw = document.createAttribute("width");
              anw.nodeValue = w;
              var anh = document.createAttribute("height");
              anh.nodeValue = h;
              canvas.setAttributeNode(anw);
              canvas.setAttributeNode(anh);
              ctx.drawImage(image, 0, 0, w, h);
              var ext = image.src
                .substring(image.src.lastIndexOf(".") + 1)
                .toLowerCase(); //图片格式
              var base64 = canvas.toDataURL("image/" + ext, quality);
              // 回调函数返回base64的值
              if (_this.imgArr.length <= 4) {
                _this.imgArr.push("");
                _this.imgArr.splice(-1, 1, base64); //替换数组数据的方法，此处不能使用：this.imgArr[index] = url;
                if (_this.imgArr.length >= 3) {
                  _this.allowAddImg = false;
                }
              }
            };
          }

          if (dd < files.length - 1) {
            dd++;
          } else {
            clearInterval(timer);
          }
        }, 1000);
      }
    },
    // 删除图片
    delImg(n) {
      this.imgArr.splice(n, 1);
      if (this.imgArr.length < 5) {
        this.allowAddImg = true;
      }
    },
    onClickBack() {
      this.$router.push("/");
    },
    publish() {
      if (this.title == null || this.title == "") {
        this.$toast("标题不能为空");
      } else if (this.price == null || this.price == "") {
        this.$toast("价格不能为空");
      } else {
        this.$toast("发布成功，待管理员审核后，别的用户将能看到你的商品");
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.upload-img {
  margin-top: 50px;

  h1 {
    padding-left: 20px;
  }

  .load-list {
    display: flex;
    flex-flow: row wrap;
    padding: 0 15px;

    li {
      height: 100px;
      flex: 0 0 33.3%;
      margin-top: 15px;
      position: relative;
      display: flex;
      align-items: center;

      span {
        display: block;
        width: 20px;
        height: 20px;
        background: gray;
        border-radius: 50%;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        position: absolute;
        right: 2px;
        top: 2px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .img-upload {
    flex: 0 0 31%;
    margin-right: auto;
    margin-top: 15px;

    .load-add {
      width: 50%;
      height: 60%;
      background: #ffffff;
      border-radius: 50px;
      margin: 15px auto 0;
      text-align: center;
      line-height: 60px;
      font-size: $font-size20;
    }
  }

  .load-container, .only-add {
    width: 90%;
    height: 90%;
    margin: auto;
    background: #f7f7f7;
  }

  .publishBtn {
    width: 100%;
    height: 100%;
    text-align: center;
    margin-top: 50px;
  }
}
</style>
<style>
.publishBtn {
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 50px;
}
</style>

