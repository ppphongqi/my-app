<template>
<div class="wrapper">
    <div class="top">
        <van-nav-bar @click-lift="onclickSearch" fiexd>

            <!--顶端左部-->
            <div slot="left">
                <div class="useravatar" v-if="login" @click="tomy"></div>
                <div class="logo" v-else @click="tomy">
                </div>
            </div>

            <!--顶端中部-->
            <div class="middle"  slot='title'>
                    <div @click="onClickSearch" class="Search">
                        <i-input placeholder="请输入搜索关键词" search size="large" />
                    </div>
            </div>

            <!--顶端右部-->
            <div slot="right">
                <van-icon
                        @click="onClickComment"
                        class="message-icon"
                        color="grey"
                        info="6"
                        name="bell"
                        size="2em"
                        v-if="login"
                />
                <Button size="small"
                        type="warning"
                        v-else
                        @click="tologin">未登录</Button>
            </div>
        </van-nav-bar>

    </div>
</div>
</template>

<script>

import {mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name: "NavTop",

        data(){
          return {

          }
        },
        mounted(){
            this.isLogin = this.$store.state.mutation.isLogin;
        },

        computed: mapGetters(['login']),

        // mounted(){
        //     this.isLogin = this.$store.state.isLogin;
        // },

        methods:{
            onClickSearch(){
                this.$router.push({path:'/search'})
            },
            tologin(){
                this.$router.push({path:'/login'})
            },
            tomy(){
                this.$store.commit('setCurindex',4);
                this.$router.push({path:'/my2'})
            }
        }
    }
</script>

<style lang="scss" scoped>

    .wrapper{
        width: 100% ;
        position: relative;
        height: 8%;
        .top{
            width: 100%;
            height: 4.5rem;
            z-index: 10;
            position: fixed;
            top: 0;
            align-items:center;
        }
    }

    .top{
        /*width:100%;*/
        /*top:0;*/
        /*position: fixed;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*align-items: center;*/

    }
    .Search {
        height: 75%;
    }

    .logo {
        vertical-align: center;
        /*margin: 0 auto;*/
        position: relative;
        bottom: 8px;
        width: 52px;
        height: 45px;
        background: #fff url('../views/images/logo.png') no-repeat;
        background-position: 50% 50%;
        background-size: 100% 100%;
    }
    .useravatar{
        vertical-align: center;
        /*margin: 0 auto;*/
        position: relative;
        bottom: 8px;
        width: 52px;
        height: 45px;

        background-position: 50% 50%;
        background-size: 100% 100%;
    }

    /*ui组件设置，慎改*/
    .van-nav-bar__title {
        width: 65%;
    }
    .van-nav-bar__right {
        left: 82%;
    }
    .van-nav-bar {
        height: 60px;
        line-height: 60px;
    }


</style>
