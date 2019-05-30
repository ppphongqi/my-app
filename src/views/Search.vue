<template>
<div class="wrapper">
  <div class="back" @click="goHome"></div>
  <div class="top">




    <div class="title">

    <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"

            left-icon="arrow-left"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>


  </div>














<!--    <van-nav-bar @click-lift="goHome" fiexd>-->

<!--      &lt;!&ndash;顶端左部&ndash;&gt;-->
<!--      <div slot="left">-->
<!--        <div class="logo" @click="tomy">-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash;顶端中部&ndash;&gt;-->
<!--      <div class="middle"  slot='title'>-->
<!--        <div @click="onClickSearch" class="Search">-->

<!--          <i-input placeholder="请输入搜索关键词"-->
<!--                   @keypress.enter="search"-->
<!--                   v-model="keywords"-->
<!--                   size="large"-->
<!-- />-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash;顶端右部&ndash;&gt;-->
<!--      <div slot="right">-->

<!--        <Button size="small"-->
<!--                type="warning"-->
<!--                @click="search"-->
<!--                :value="value">搜索</Button>-->

<!--      </div>-->

<!--    </van-nav-bar>-->




<!--    <van-nav-bar right-text="搜索" @click-left="goHome" @click-right="onSearch">-->
<!--      <van-icon slot="left" name="arrow-left"/>-->
<!--      <van-search-->
<!--              slot="title"-->
<!--              v-model="value"-->
<!--              placeholder="搜索点什么感兴趣的吧！"></van-search>-->
<!--    </van-nav-bar>-->


  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
      goHome() {
          this.$router.push("/");
      },
      onSearch() {
          this.$toast(this.value);
      },
      search(){
        this.$toast('搜索中');
      }
  }
};
</script>

<style lang="scss" scoped>
  .wrapper{
    width:100%;
    height: 100vh;
    background-color: #f7f7f7;
  }

  .top{
    width:90%;
    height: 3.5rem;
    background-color: #fff;
    float:right;
    position: fixed;
    top: 0;

    right: 0;
  }
  .title{
    height:100%;
    font-size:1.4rem;
  }
  .back{
    width:10%;
    height: 3.5rem;
    position: fixed;
    top:0;
    left: 0;
    background:#fff url('images/back.png') no-repeat;
    background-position: 50% 50%;
    background-size: 100% 80% ;
  }
  /*.wrapper{*/
  /*  width: 100% ;*/
  /*  position: relative;*/
  /*  height: 10%;*/
  /*  .top{*/
  /*    width:100%;*/
  /*    height: 4.5rem;*/
  /*    z-index: 10;*/
  /*    position: fixed;*/
  /*    top: 0;*/
  /*    align-items:center;*/
  /*  }*/
  /*}*/

  /*.van-nav-bar__title {*/
  /*  width: 65%;*/
  /*}*/
  /*.van-nav-bar__right {*/
  /*  left: 82%;*/
  /*}*/
  /*.van-nav-bar {*/
  /*  height: 60px;*/
  /*  line-height: 60px;*/
  /*}*/

</style>
