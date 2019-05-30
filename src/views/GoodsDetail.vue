<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickBack"/>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="swiper_img" v-lazy="image" @click="showImg">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="detail">
      <h3>{{ title }}</h3>
      <p>{{ detail }}</p>
    </div>
    <div class="tag">
      <van-tag round type="danger">{{ degree }}成新</van-tag>
      <van-tag round type="primary">{{ people }}人想要</van-tag>
      <van-tag round type="success">{{ bool }}可租赁</van-tag>
    </div>
    <div class="price">
      <p>¥{{ price }}</p>
    </div>
    <div class="footBar">
      <van-goods-action>
        <van-goods-action-mini-btn icon="like-o" text="喜欢" @click="love"/>
        <van-goods-action-big-btn primary text="想要" @click="want"/>
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      show: false,
      index: 0,
      images: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3550779946,3540488083&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558077984974&di=567c87caa3a0a5ff35c31566fccef3b2&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F133e91e65d8f3f9e1540b940e70ea3ab352cec5d.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558077984971&di=594a3ef8b1e67a6c0764c8bc3674d4ce&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0736e4bebe05901ac2ef47e6e0554e5f4036ed7c3be13-N48Fka_fw658"
      ],
      value2: 0,
      degree: 7,
      people: 300,
      bool: "不",
      price: 666,
      title: "手机",
      detail:
        "如果天空总是黑暗的，那就摸黑生存；如果发出声音是危险的，那就保持沉默；如果自觉无力发光，那就蜷伏于墙角。但不要习惯了黑暗就为黑暗辩护；也不要为自己的苟且而得意；不要嘲讽那些比自己更勇敢的人们。我们可以卑微如尘土，但不可扭曲如蛆虫。"
    };
  },
  methods: {
    showImg() {
      ImagePreview({
        images: this.images,
        startPosition: 0, //图片预览起始位置索引 默认 0
        showIndex: true, //是否显示页码 默认 true
        showIndicators: true, //是否显示轮播指示器 默认 false
        loop: false //是否开启循环播放 貌似循环播放是不起作用的。。。
        // onClose: function(url) {
        //   //回调参数,官方文档解释的不是很清楚。。。
        //   //回调参数类型 url:{ index:Number(当前图片的索引值), url:当前图片的URL }
        //   var num = url.index,
        //     url_link = url.url;
        //   console.log(url);
        // }
      });
    },
    onChange(index) {
      this.index = index;
    },
    onClickWant() {
      this.$toast("您点击了想要");
    },
    onClickBack() {
      this.$router.push("/");
    }
  }
};
</script>
<style>
.swipe {
  width: 100%;
  height: 460px;
}
.swiper_img {
  height: 460px;
  width: 100%;
}

.detail {
  font-size: 2px;
  height: 150x;
  width: 100%;
}

.tag {
  width: 75%;
  height: 40px;
  float: left;
}
.price {
  font-size: 1.3em;
  color: red;
  width: 25%;
  height: 40px;
  float: right;
}
</style>

