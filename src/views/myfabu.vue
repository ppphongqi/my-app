<template>
    <div class="wrap">
        <div class="head">
            <div class="back" @click="back">
            </div>
            <div class="title">我发布的</div>
            <div class="zhanwei"></div>
        </div>

        <div class="block"></div>

<!--        已发布的-->
<!--    <div class="fabuBox" v-if="show">-->
<!--        <div class="goodsbox" v-for="(item,index) in fabuinfo" :key="item.id">-->
        <div class="goodsbox">
            <div class="username">
                <img :src="url" alt="">
                <p class="name">pppty</p>
                <p class="price">￥1111</p>
            </div>

            <div class="swiper-box">
                <swiper>
                    <swiper-slide >

                    </swiper-slide>
                </swiper>
            </div>

            <div class="detail">
                <p class="desc">刚刚买的，成色还很新，一直都舍不得用的那种，成色新的一批</p>
            </div>

            <div class="bottom">
                <div class="kind"></div>
                <div class="time">发布时间：2019-05-23 15：44</div>
            </div>

            <div class="operate">
                <div class="change">修改发布</div>
                <div class="del">删除发布</div>
            </div>

        </div>
    </div>



<!--        没有发布的情况-->
<!--        <div class="nothingbox" v-if="hide">-->
<!--            <div class="nothing">-->
<!--                <img src="./images/nothing.jpg" alt="">-->
<!--                <p class="warn">还没有发布宝贝哦</p>-->
<!--                <van-button type="primary"-->
<!--                            size="small"-->
<!--                            @click="tofabu">立即发布</van-button>-->
<!--            </div>-->
<!--        </div>-->


<!--    </div>-->
</template>

<script>
    export default {
        data(){
            return {
                show: false,
                hide: true,
            }
        },
        methods:{

            back(){
                this.$router.push({path:'/my2'});
                this.$store.dispatch('setCurindex',4)
            },
            tofabu(){
                this.$router.push({path:'/fabu'})
            }
        },
        // mounted(){
        //     this.username = this.$store.mutation.username
        // }
    }
</script>

<style lang="css" scoped>
    *{
        margin:0;
        padding:0
    }
    .wrap {
        width: 100%;
        height: 100vh;
        background-color: #f7f7f7;
        overflow-y: scroll;
    }
    .head {
        width: 100%;
        height: 3rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .back{
        width:12%;
        height: 3rem;
        position: relative;
        bottom: 0;
        left: 0;
        background:#fff url('images/back.png') no-repeat;
        background-position: 50% 50%;
        background-size: 100% 100% ;
    }
    /*占位*/
    .zhanwei{
        width: 12%;
    }
    .title {
        flex: 1;
        font-size: 1.2rem;
        font-weight: 700;
        position: relative;
        text-align: center;
    }
    div{
        display:block;
    }
    .block{
        height: 4.4rem;
    }


    /*有发布样式*/
    .goodsbox {
        width: 95%;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        /*align-items: center;*/
        background-color: #fff;
        margin: 0 auto;
        margin-top: 1rem;
    }
    .username {
        display: -webkit-flex;
        display: flex;
        font-size: 1.4rem;
        height: 5rem;
        /*line-height: 5rem;*/
        align-items: center;
        padding: 0rem 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #f6f6f6;
    }
    .username img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }
    .name {
        flex:1;
        color: #000;
        font-weight: 700;
        padding-left: 1rem;
        box-sizing: border-box;
        background-position: 0 center;
    }
    .price {
        color: red;
        font-size: 1.5rem;
    }
    .detail {
        width: 100%;
        margin-top: .8rem;
        padding: 0 1rem;
        box-sizing: border-box;
    }
    .swiper-slide{
        width: 10rem!important;
        height: auto;
        padding: 1rem .6rem .6rem .6rem;
        box-sizing: border-box;
        margin-bottom: .4rem;
    }
    .swiper-slide img{
        width: 10rem;
        height: 10rem;
    }
    .detail .desc{
        font-size: 1.1rem;
        color: #000;
        font-weight: 600;
    }

    /*.swiper-slide{*/
    /*    width: 10rem!important;*/
    /*    height: auto;*/
    /*    padding: 1rem .6rem .6rem .6rem;*/
    /*    box-sizing: border-box;*/
    /*    margin-bottom: .4rem;*/
    /*}*/
    .swiper-slide img{
        width: 10rem;
        height: 10rem;
    }
    .detail .desc{
        font-size: 1.4rem;
        color: #000;
        font-weight: 600;
    }
    .bottom{
        display: -webkit-flex;
        height: 2rem;
        line-height: 2rem;
        padding: 0 1.2rem;
        box-sizing: border-box;
        color: #17abe3;
        border-bottom: 1px solid #f6f6f6;
    }
    .kind {
        flex: 1;
    }
    .time{

    }
    .operate {
        width: 100%;
        height: 4rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        position: relative;

    }
    .change{
        width: 6rem;
        height: 2.5rem;
        text-align:center;
        border:2px solid #3CB371;
        border-radius: 1.4rem;
        line-height:2.25rem;
        color:#3CB371;
        position:absolute;
        right:8rem;
    }
    .del {
        width: 6rem;
        height: 2.5rem;
        text-align: center;
        border: 2px solid red;
        border-radius: 1.4rem;
        line-height: 2.25rem;
        color: red;
        position: absolute;
        right: 1.2rem;
    }




    /*无发布样式*/
    .nothingbox{
        width: 100%;
        height: 100%;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nothing {
        width: 20rem;
        height: 20rem;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .nothing img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    .nothing .warn {
        margin: .6rem 0;
        font-size: 1rem;
        color: #888;
    }

</style>
