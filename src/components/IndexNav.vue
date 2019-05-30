<template>
    <div class="news" >

<!--        iview的ui Menu-->

<!--        <Menu mode="horizontal" :theme="theme1" active-name="1" class="nav" :class="totop?'fixed':'Menu'" v-model="selected">-->
<!--            <MenuItem name="1">-->
<!--                查看出售-->
<!--            </MenuItem>-->
<!--            <MenuItem name="2">-->
<!--                求购信息-->
<!--            </MenuItem>-->
<!--        </Menu>-->


<!--        mint的ui-->
        <div class="wrapper">
        <mt-navbar :class="totop?'fixed':'mint-navbar'" v-model="selected">
            <mt-tab-item id="1" style="margin-bottom:0px"><p class="f14">出售</p></mt-tab-item>
            <mt-tab-item id="2" style="margin-bottom:0px"><p class="f14">求购</p></mt-tab-item>
        </mt-navbar>
        </div>

        <!-- 内容主体 -->
        <mt-tab-container v-model="selected" class="container">

<!--            出售-->
            <mt-tab-container-item class="container-item" id="1">
                test1
            </mt-tab-container-item>


<!--            求购-->
            <mt-tab-container-item class="container-item" id="2">
                test2
            </mt-tab-container-item>


        </mt-tab-container>


    </div>
</template>

<script>

    export default {
        data(){
            return {
                selected : '1' ,
            }
        },
        methods: {

        }

    }
</script>

<style lang="scss" scoped>

.wrapper{
    width:100%;
}

.news{
    margin: 0 auto ;
}
.f14 {
    font-size: 1.4em;
    font-weight:bold
}
.nav{
    z-index:9;
}
/*.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {*/
/*    color: #19be6b;*/
/*    border-bottom: 2px solid #19be6b;*/
/*}*/
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: .3rem solid 	#3CB371;
    color: 	#3CB371;
}

.fixed{
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
}
</style>
