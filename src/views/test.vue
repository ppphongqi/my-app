<template>

<!--    top头测试-->
<!--    <div class="wrapper">-->
<!--        <div class="header">-->
<!--            <van-nav-bar @click-lift="onclickSearch" fiexd>-->

<!--                <div slot="left">-->
<!--                    <div class="useravatar" v-if="login"></div>-->
<!--                    <div class="logo" v-else>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="middle"  slot='title'>-->
<!--                    <div @click="onClickSearch" class="Search">-->
<!--                        <i-input placeholder="请输入搜索关键词" search size="large" />-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div slot="right">-->
<!--                    <van-icon-->
<!--                            @click="onClickComment"-->
<!--                            class="message-icon"-->
<!--                            color="grey"-->
<!--                            info="6"-->
<!--                            name="bell"-->
<!--                            size="2em"-->
<!--                            v-if="login"-->
<!--                    />-->
<!--                    <Button size="small"-->
<!--                            type="warning"-->
<!--                            v-else>未登录</Button>-->
<!--                </div>-->


<!--            </van-nav-bar>-->
<!--        </div>-->
<!--    </div>-->

<!--    <div>-->
<!--        <mt-navbar v-model="selected">-->
<!--            <mt-tab-item id="1" style="margin-bottom:0px">选项一</mt-tab-item>-->
<!--            <mt-tab-item id="2" style="margin-bottom:0px">选项二</mt-tab-item>-->

<!--        </mt-navbar>-->

<!--        &lt;!&ndash; tab-container &ndash;&gt;-->
<!--        <mt-tab-container v-model="selected">-->
<!--            <mt-tab-container-item id="1">-->
<!--                <mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
<!--            </mt-tab-container-item>-->
<!--            <mt-tab-container-item id="2">-->
<!--                <mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
<!--            </mt-tab-container-item>-->
<!--            <mt-tab-container-item id="3">-->
<!--                <mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
<!--            </mt-tab-container-item>-->
<!--        </mt-tab-container>-->

<!--        <mt-switch v-model="value"></mt-switch>-->

<!--        <mt-radio-->
<!--                title="单选框列表"-->
<!--                v-model="value"-->
<!--                :options="['选项A', '选项B', '选项C']">-->
<!--        </mt-radio>-->
<!--    </div>-->

    <div class="vant-cell">
        <van-cell title="单元格" value="内容" size="large" is-link />
        <van-cell title="单元格" value="内容" size="large" is-link/>
        <van-cell title="单元格" value="内容" size="large" is-link/>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                selected : '1' ,
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped >

    .vant-cell{
        height: 400px;
    };
    .van-cell--large{
        height:33%;
    }

    /*top测试*/
    /*.wrapper{*/
    /*    width: 100% ;*/
    /*    position: relative;*/
    /*    height: 2000px;*/
    /*    .header{*/
    /*        width: 100%;*/
    /*        height: 4.5rem;*/
    /*        z-index: 10;*/
    /*        position: fixed;*/
    /*        top: 0;*/
    /*        align-items:center;*/
    /*    }*/
    /*}*/

    /*.mint-navbar .mint-tab-item.is-selected {*/
    /*    border-bottom: .3rem solid #ffda44;*/
    /*    color: #ffda44;*/
    /*    margin-bottom: 0;*/
    /*}*/


</style>
