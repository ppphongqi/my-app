<template>
  <div class="body">
    <div class="logo">
      <img
        src="http://img0.imgtn.bdimg.com/it/u=2764201662,1498207230&fm=11&gp=0.jpg"
        style="height: 200px; width:200px"
      >
    </div>
    <div class="steps">
      <van-steps :active-icon="active_icon" :active-color="active_color" :active="active">
        <van-step>手机验证</van-step>
        <van-step>学生认证</van-step>
        <van-step>设置密码</van-step>
        <van-step>完成注册</van-step>
      </van-steps>
    </div>
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
          type="name"
          label-align="center"
          v-model="userName"
          label="姓名"
          placeholader="请输入姓名"
        />
        <van-field
          type="number"
          label-align="center"
          v-model="studentId"
          @change="active++"
          label="学号"
          placehoder="请输入学号"
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
      <div class="endBtn">
        <van-checkbox v-model="checked">
          <a @click="showProtocol">同意用户协议</a>
          <van-dialog
            v-model="protocol_show"
            title="用户协议"
            closeOnClickOverlay="true"
            confirm="agree"
            cancel="disagree"
            before-close
            show-cancel-button
          >
            <div class="protocol">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558351484591&di=4afb9bdea059b291a66148f3bacba17a&imgtype=0&src=http%3A%2F%2Fww4.sinaimg.cn%2Forj360%2F9225741egw1etpx6m6622j20dwcn3u0x.jpg"
              >
            </div>
          </van-dialog>
        </van-checkbox>

        <van-button type="primary" @click="end">完成注册</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
import { Dialog } from "vant";
export default {
  data() {
    return {
      code_time: 60,
      active_icon: "success",
      active_color: "green",
      active: -1,
      disabled: false,
      btntxt: "获取验证码",
      type: "dashed",
      code: "",
      phoneNumber: "",
      userName: "",
      studentId: "",
      passWord: "",
      passWord_R: "",
      current: 1,
      model1: false,
      checked: false,
      protocol_show: false
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
      if (this.phoneNumber == "" || this.phoneNumber == null) {
        this.$toast("手机号不能为空");
        this.active = 0;
        this.active_icon = "fail";
        this.active_color = "red";
      } else if (this.code == "") {
        this.$toast("验证码不能为空");
        this.active = 0;
        this.active_icon = "fail";
        this.active_color = "red";
      } else if (this.userNname == "") {
        this.$toast("姓名不能为空");
        this.active = 1;
        this.active_icon = "fail";
        this.active_color = "red";
      } else if (this.studentId == "") {
        this.$toast("学号不能为空");
        this.active = 1;
        this.active_icon = "fail";
        this.active_color = "red";
      } else if (this.passWord != this.passWord_R) {
        this.$toast("两次密码不匹配");
        this.active = 2;
        this.active_icon = "fail";
        this.active_color = "red";
      } else if (this.checked == false) {
        this.$toast("请阅读用户协议");
        this.active = 3;
        this.active_icon = "fail";
        this.active_color = "red";
      } else {
        this.$toast("注册成功");
      }
    }
  }
};
</script>
<style>
.logo {
  width: 100%;
  height: 10%;
  margin-left: 30%;
  margin-right: 30%;
}
.body {
  width: 100%;
  height: 100%;
}
.steps {
  width: 100%;
  height: 100%;
}
.register {
  width: 100%;
  height: 100%;
}
.protocol {
  overflow-y: auto;
}
.endBtn {
  width: 100%;
  height: 30px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}
</style>
