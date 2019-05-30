<template>
    <div class="loginBox">
        <!--登录头-->
        <div class="head">
            <div class="back" @click="comBack">
            </div>

            <div class="title">
                登录
            </div>
            <div class="block"></div>
        </div>

        <!--登陆方式-->
        <div class="loginform">
            <div class="logo"></div>
        </div>

<!--            <div class="inputbox">-->
<!--                <van-cell-group>-->
<!--                    <van-field-->
<!--                            v-model="username"-->

<!--                            clearable="true"-->
<!--                            label="用户名:"-->
<!--                            right-icon="question-o"-->
<!--                            placeholder="请输入用户名/手机号"-->
<!--                            left-icon="manager"-->

<!--                    />-->
<!--                    <van-field-->
<!--                            v-model="password"-->
<!--                            type="password"-->
<!--                            label="密码:"-->
<!--                            placeholder="请输入密码"-->
<!--                            required-->
<!--                            left-icon="lock"-->
<!--                            right-icon="closed-eye"-->
<!--                            @click-right-icon="icontoggle"-->
<!--                    />-->
<!--                </van-cell-group>-->
<!--                -->
<!--            </div>-->

            <div class="inputbox">
                <van-icon name="manager" />
                <label class="label">账户:</label>

                <input type="text" v-model="username" name="username" placeholder="请输入用户名/手机号">
            </div>

            <div class="inputbox">
                <van-icon name="lock" />
                <label class="label">密码:</label>
                <input type="password" name="password" v-model="password" placeholder="请输入密码">
            </div>

            <div class="bottom">
                <div class="forget" @click="forget">忘记登录密码？</div>
<!--                占位-->
                <div class="zhanwei"></div>
                <div class="zhuce" @click="zhuce">免费注册</div>
            </div>


            <div class="bigblock"></div>

            <!--点击登录-->
            <div class="clickLogin">
                <i-button
                        class="gologin"
                        type="warning"
                        long
                        shape="cirCle"
                        @click="gologin">登录</i-button>
            </div>


</div>

</template>

<script>

import {mapGetters , mapActions} from 'vuex'
import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                username:'',
                password:'',

            }
        },
        computed:mapGetters(['login']),

        methods:{
            comBack(){
                this.$router.push({path:'/'})
                this.$store.dispatch('setCurindex',0)
            },
            gologin(){
                if(this.username == ''){
                    Toast('请输入账户名')
                }else if(this.password == ''){
                    Toast('请输入密码')
                }else if(this.password.length <= 6){
                    Toast('密码不能低于六位哦')
                }else{

                    window.localStorage.setItem('username',this.username);
                    window.localStorage.setItem('password',this.password);

                    this.$store.dispatch('hasLogin');

                    let obj = {};
                    obj.username = this.username;
                    obj.password = this.password;

                    this.$store.dispatch('setUsername',this.username);
                    this.$store.dispatch('setUserinfo',obj);
                    Toast({
                        message: '登录成功',
                        duration: 500
                    });
                    setTimeout(()=>{
                        this.$router.push({
                            path:'/'
                        })
                    },600);

                    this.$store.dispatch('setCurindex',0)

                }
            },
            forget(){
                this.$router.push('/forget');
            },
            zhuce(){
                this.$router.push('/register');
            }
        }
    }
</script>

<style lang="css" scoped>
    .head {
        margin-top: .5rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        text-align:center;
        z-index:10;
    }
    .back {
        width: 3rem;
        height: 3rem;
        width:100%;
        z-index:8;
    }
    .block{
        width:12%;
        height:3rem;
    }
    .bigblock{
        height : 35px;
    }
    .title {
        flex: 1;
        /*text-align: center;*/
        font-size: 1.2rem;
        font-weight: 700;
        z-index:8;
        width:100%;
    }
    .loginform .logo{
        width: 100%;
        height: 10rem;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 2rem;
        margin-bottom: 2rem;
        background:#fff url('images/login.jpg') /*no-repeat*/;
        background-position: 75% 75%;
        background-size: 100% 100% ;
    }
    .clickLogin{
        margin: 0 auto;
        width: 80%
    }
    .back{
        width:12%;
        height: 2.5rem;
        position: relative;
        bottom: 0;
        left: 0rem;
        background:#fff url('images/back.png') no-repeat;
        background-position: 50% 50%;
        background-size: 100% 100% ;
    }
    .inputbox {
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 1rem;
        display: -webkit-flex;
        display: flex;
        padding: .7rem 0.7rem;
        box-sizing: border-box;
    }
    .inputbox .label {
        width: 3rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
    .inputbox input {
        border: none;
        outline: none;
        font-size: 1rem;
        color: #666;
    }
    .van-icon{
        width:10%;
        font-size: 25px;
    }
    .bottom{
        display: -webkit-flex;
        height: 2rem;
        line-height: 2rem;
        padding: 0 1.2rem;
        box-sizing: border-box;
        color: #17abe3;
    }
    .forget{
        width:25%;
    }
    .zhanwei{
        width:55%;
    }
    .zhuce{
        width:20%;
    }


    /*.logo{*/
        /*margin: 0 auto;*/
        /*position: absolute;*/
        /*top:40px;*/
        /*width: 100%;*/
        /*height: 50%;*/
        /*background:#fff url('images/logo.png') no-repeat;*/
        /*background-position: 50% 50%;*/
        /*background-size: 100% 100% ;*/
    /*}*/
</style>
