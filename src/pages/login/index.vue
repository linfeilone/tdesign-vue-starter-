<template>
  <div class="login-wrapper">

    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">登录到</h1>
        <h1 class="title">商机管理系统</h1>
        <div class="sub-title">
          <p class="tip">{{ type == 'register' ? '已有账号?' : '没有账号吗?' }}</p>
          <p class="tip" @click="switchType(type == 'register' ? 'login' : 'register')">
            {{ type == 'register' ? '登录' : '注册新账号' }}
          </p>
        </div>
      </div>

      <login v-if="type === 'login'" />
      <register v-else @register-success="switchType('login')" />
      <tdesign-setting />
    </div>
  </div>
</template>
<script>
import Login from './components/components-login.vue';
import Register from './components/components-register.vue';
import TdesignSetting from '@/layouts/setting.vue';

export default {
  name: 'LoginIndex',
  components: {
    Login,
    Register,
    TdesignSetting,
  },
  data() {
    return {
      type: 'login',
    };
  },
  methods: {
    switchType(val) {
      this.type = val;
    },
  },
};
</script>
<style lang="less">
@import url('./index.less');
</style>
