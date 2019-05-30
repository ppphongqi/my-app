<template>
  <div>
    <transition name="slide-fade">
      <div
        v-show="show"
        id="suspended-ball"
        @click="onClickPush"
        @touchstart="down"
        @touchmove.stop.prevent="move"
        @touchend="end"
      >
        <div id="suspended-ball-box">
          <div id="suspended-ball-center">发布</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { clearTimeout, setTimeout } from "timers";
export default {
  name: "suspendedBall",
  data() {
    return {
      show: true,
      flag: false,
      cur: {
        x: 0,
        y: 0
      },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      x: "",
      y: ""
    };
  },
  methods: {
    onClickPush() {
      if(!this.islogin){
        this.$toast("您还未登录")
      }else{
        this.$router.push({path:'/fabu'})}
      // this.$toast("您点击了发布按钮");

    },
    down() {
      this.flag = true;
      let touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.cur.x = touch.clientX;
      this.cur.y = touch.clientY;
      this.dx = document.querySelector("#suspended-ball").offsetLeft;
      this.dy = document.querySelector("#suspended-ball").offsetTop;
    },
    move() {
      if (this.flag) {
        let touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.cur.x;
        this.ny = touch.clientY - this.cur.y;
        this.x = this.dx + this.nx;
        this.y = this.dy + this.ny;
        if (this.x < 0) {
          this.x = 0;
        }
        if (this.x > document.documentElement.clientWidth - 42) {
          this.x = document.documentElement.clientWidth - 42;
        }
        if (this.y < 46) {
          this.y = 46;
        }
        if (this.y > document.documentElement.clientHeight - 42) {
          this.y = document.documentElement.clientHeight - 42;
        }
        document.querySelector("#suspended-ball").style.left = this.x + "px";
        document.querySelector("#suspended-ball").style.top = this.y + "px";
      }
    },
    end() {
      this.flags = false;
    },
    handleScroll() {
      this.show = false;
      clearTimeout(this.timer);
      this.timer = setTimeout(this.isScrollEnd, 1200);
      this.scrollTop1 =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    isScrollEnd() {
      this.scrollTop2 =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrollTop2 == this.scrollTop1) {
        // 消失逻辑
        this.show = !this.show;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
};
</script>

<style lang="scss">
// 悬浮球过渡动效
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
// 悬浮球过渡动效
#suspended-ball {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 30px;
  bottom: 120px;
  z-index: 1000;
  &-box {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(255, 68, 68, 1);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
    text-align: center;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
