<template>
  <div class="bady">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickBack"/>
    <div class="register">
      <van-cell-group>
        <van-field
          type="number"
          label-align="center"
          v-model="phoneNumber"
          clearable
          label="电话号码"
          placeholader="请输入电话号码"
        >
          <van-button
            slot="button"
            :disabled="disabled"
            @click="getCode"
            size="small"
            type="primary"
          >{{btntxt}}</van-button>
        </van-field>
        <van-field
          type="number"
          label-align="center"
          v-model="code"
          @change="active++"
          label="验证码"
          placeholader="请输入验证码"
        />
        <van-field
          type="password"
          label-align="center"
          v-model="passWord"
          label="密码"
          placehoder="请输入密码"
        />
        <van-field
          type="password"
          label-align="center"
          v-model="passWord_R"
          @change="active++"
          label="再次输入密码"
          placehoder="请再次输入密码"
        />
      </van-cell-group>
      <div class="btn">
        <van-button type="primary" @click="end">重置密码</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      code_time: 60,
      btntxt: "获取验证码",
      code: "",
      phoneNumber: "",
      userName: "",
      studentId: "",
      passWord: "",
      passWord_R: ""
    };
  },
  methods: {
    getCode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
      if (this.phoneNumber == "") {
        this.$toast("手机号码不能为空");
      } else if (!reg.test(this.phoneNumber)) {
        this.$toast("手机格式不正确");
      } else {
        // 耗时事件考虑使用js异步编程
        /*axios.post(url).then(
                        res=>{
                        this.phonedata=res.data;
                    })*/
        this.disabled = true;
        this.timer();
        // 渲染
      }
    },
    timer() {
      if (this.code_time > 0) {
        this.code_time--;
        this.btntxt = this.code_time + "秒后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.code_time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    showProtocol() {
      this.protocol_show = true;
      return;
    },

    agree() {
      this.checked = true;
      this.protocol_show = false;
      Dialog.close();
    },
    disagree() {
      this.checked = false;
      this.protocol_show = false;
      Dialog.close();
    },
    end() {
      this.$toast("请记住新密码");
    }
  }
};
</script>
<style>
.body {
  width: 100%;
  height: 100%;
}
.register {
  width: 100%;
  height: 100%;
}
.btn {
  width: 100%;
  height: 30px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}
</style>
