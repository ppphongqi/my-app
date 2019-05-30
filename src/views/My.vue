<template>
    <div class="wrapper">



        <!--登录状态下的页面-->
        <!--昵称、头像部分及上传头像-->
        <div class="top"  v-if="login">
            <div class="loginhead">
                <div class="flex border">
                    <div class="flexprimary">
                        <!--{{username}}-->
                        <div class="name">{{ username }}</div>
                        <div class="somemsg">欢迎来到毛哥校园二手网站</div>
                    </div>
                    <!--头像-->
                    <div class="useravatar">
                        <img :src="url" alt="" class="avatar" @click="loadImg">
                        <input
                                hidden
                                type="file"
                                accept="image/jpeg,image/jpg,image/png"
                                capture="camera"
                                @click="fileInput">
                    </div>
                </div>


                <div class="school" >当前学校：云师大商学院</div>
            </div>
            <!--广告位-->
            <div class="open adv"></div>
        </div>



        <!--没有登陆状态下的页面-->
        <div v-else class="head">
            <div class="welcome">
                欢迎来到毛哥二手网站
            </div>
            <button class="login" @click="tologin">马上登录</button>
            <!--logo-->
            <div class="animate">
            </div>

        </div>


<!--        vant单元格-->
<!--        span内显示数量-->
        <div class="vant-cell">
            <van-cell title="我发布的" size="large" is-link icon="records" @click="changePush" center>
                <span class="number" v-if="login">{{ fabunum }}</span>
            </van-cell>
            <van-cell title="我收藏的" size="large" is-link icon="like-o" @click="collect" center>
                <span class="number" v-if="login">{{ colnum }}</span>
            </van-cell>
            <van-cell title="我买到的" size="large" is-link icon="completed" @click="buy" center>
                <span class="number" v-if="login">{{ buynum }}</span>
            </van-cell>
        </div>
<!--        vant单元格-->


<!--        占位-->
        <div class="block"></div>



        <!--退出登录按钮-->
        <!--v-if='login'-->
        <van-button type="warning" size="large" @click="logout" v-if="login">退出登录</van-button>
        <div class="block"></div>

    </div>

</template>

<script>
    import { Toast } from 'vant';
    import {mapGetters,mapActions,mapState} from 'vuex';


    export default {
        data(){
            return {
                url:'',

            }
        },
        // 钩子
        mounted(){
            this.$store.dispatch('setCurindex', 1);

            console.log(this.$store.state.mutation.curindex);

            let username = window.localStorage.getItem('username');

            this.$store.dispatch('setUsername',username);

            this.$store.dispatch('hasLogin');


            this.isLogin = this.$store.state.mutation.isLogin;

            console.log('登录状态：' + this.isLogin);

            // 已经登录
            // this.$store.dispatch('hasLogin');
            // console.log(this.$store.state.isLogin);
        },

        computed:mapGetters(['login','username','buynum','fabunum','colnum']),


        methods: {
            tologin() {
                this.$router.push({path: '/login'})
            },
            logout() {
                window.localStorage.clear();
                this.$store.dispatch('noLogin');
                this.$router.path.push({path: '/my2'});
            },

            // 照片上传，测试中
            // loadImg() {
            //     let vm = this;
            //     let add = document.querySelector('input[type=file]');
            //     add.click();
            //
            //     return false
            // },
            // fileInput(e) {
            //     var files = e.target.files;
            //     console.log(files);
            //     if (!files.length) return;
            //     this.createImage(files, e);
            // },
            // createImage(files, e) {
            //     let vm = this;
            //     //lrz图片先压缩再加载
            //     this.lrz(files[0], {width: 480}).then(function (rst) {
            //         vm.url = rst.base64;
            //         window.localStorage.setItem('useravatar', vm.url);
            //         return rst;
            //     }).always(function () {
            //         e.target.value = null;
            //     })
            // },

            // 发布
            changePush() {
                if (!this.isLogin) {
                    Toast("请登录再查看");

                } else {
                    this.$router.push({path: '/myfabu'})
                }
            },
            // 收藏
            collect() {
                if (!this.isLogin) {
                    Toast("请登录再查看")
                } else {
                    this.$router.push({path: '/mycol'})
                }

            },
            // 买到的
            buy() {
                if (!this.isLogin) {
                    Toast("请登录再查看")
                } else {
                    this.$router.push({path: '/mybuy'})
                }
            },

        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    ul,li {
        list-style: none;
    }
    .wrapper {
        width: 100%;
        min-height: 48rem;
        background-color: #f3f3f3;
    }




    /*登录状态下*/
    .top{
        width: 100%;
    }
    .loginhead {
        width: 100%;
        height: 15rem;
        background-color: #fff;
        padding: 0 1.2rem;
        box-sizing: border-box;
    }
    /*登陆头像*/
    .useravatar{
        width: 6rem;
        height: 6rem;
        background-color: #f9f9f9;
        border-radius: 50%;
        margin-right: 1.5rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .useravatar img{
        width: 100%;
        border-radius: 50%;
    }
    .school{
        position: center;
        text-align: center;
        padding: 12px;
    }




    /*未登录*/
    .buttonwrap {
        width: 100%;
    }
    .logout {
        display: block;
        width: 95%;
        font-size: 1.3rem;
        margin: 1rem auto;
        height: 4rem;
        outline: none;
        border: none;
        background-color: red;
        color: white;
    }

    .head {
        position: relative;
        width: 100%;
        height: 10rem;
        background-color: #fff;
    }

    /*.head .animate {*/
        /*position: absolute;*/
        /*bottom: 0;*/
        /*right: 1rem;*/
        /*width: 10rem;*/
        /*height: 75%;*/
        /*background:#fff;*/
        /*background:#fff url('/images/logo.png') no-repeat;*/
        /*background-position: 75% 75%;*/
    /*}*/

    /*没有登录状态下的logo*/
    .head .animate {
        position: absolute;
        bottom: 0;
        right: 1rem;
        width: 10rem;
        height: 75%;
        background:#fff url('images/logo.png') no-repeat;
        background-position: 50% 50%;
        background-size: 100% 100% ;
    }

    /*广告位*/
    .open {
        width: 100%;
        height: 6rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        padding: 0 1.2rem;
        box-sizing: border-box;
        background-color: #ffda44;
    }


/*弹性盒子*/
    .flex {
        display: -webkit-flex;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    .border {
        border-bottom: 1px solid #f8f8d8;
        height: 12rem;
    }
    .border:after {
        content: '';
        display: inline-block;
        height: .8rem;
        width: .8rem;
        border-width: 2px 2px 0 0;
        border-color:#999;
        border-style: solid;
        transform: rotate(45deg);
        position: relative;
        right: 1rem;
        z-index: 1;
    }



    .flexprimary {
             flex:1;
    }
    .flexprimary .name{
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: .4rem;
    }
    .flexprimary .somemsg{
        font-size: 1.0rem;
        color: #888;
    }








    .numbox {
        flex: 1;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50px;
    }
    .num {
        color: #000;
        font-weight: 600;
        font-size: 1.3rem;
        margin-bottom: .2rem;
    }
    .numname {
        color: #888;
        font-size: 1.3rem;
    }
    .block {
        height: 50px;
    }
    .smallblock{
        height: 5px;
    }

    .head .welcome {
        margin-left: 1.2rem;
        margin-top: 2rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
    .head .login {
        margin-top: 1rem;
        margin-left: 1.2rem;
        width: 8rem;
        height: 3.6rem;
        background-color: #3CB371 ;
        outline: none;
        border: none;
    }
    /*.list {*/
    /*    margin-top: 1rem;*/
    /*    width: 100%;*/
    /*    height: auto;*/
    /*    background-color: #fff;*/
    /*    font-size: 1.4rem;*/
    /*}*/

    /*23*/
    .vant-cell{
        margin-top: 1rem;
        height: 170px;
    };
    .van-cell--large{
        height:33%;
    };
    .van-cell--large .van-cell__title{
        font-size:1.2rem;

    };
    /*右边图标*/
    .van-cell__right-icon{
        font-size:32px;

    };

    /*左边图标*/
    .van-cell__left-icon{
        font-size:28px;

    };
    .van-icon-records:before{
        color:#3CB371;
    }
    .van-icon-like-o:before{
        color:#3CB371;
    }
    .van-icon-completed:before{
        color:#3CB371;
    }

    /*23*/



</style>
