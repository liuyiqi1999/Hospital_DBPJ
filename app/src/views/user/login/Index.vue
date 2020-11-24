<template>
  <div>
    <v-snackbar
        v-model="showNotice"
        top
        elevation="8"
        :color="noticeColor"
        style="margin-top: -70px;"
    >
      {{ notice }}
    </v-snackbar>

    <v-card-title>登陆</v-card-title>

    <v-text-field
        label="身份证号"
        v-model="identification"
        prepend-icon="mdi-account-outline"
        outlined
    ></v-text-field>

    <v-text-field
        label="密码"
        type="password"
        v-model="password"
        prepend-icon="mdi-lock"
        outlined
    ></v-text-field>

    <v-btn
        light
        color="white"
        rounded
        large
        @click="login"
    >
      登陆
    </v-btn>

  </div>
</template>

<script>
export default {
  name: "Index.vue",
  data() {
    return {
      identification: '',
      password: '',
      showNotice: false,
      noticeColor: '',
      notice: '',
    }
  },
  methods:{
    login(){
      let that = this
      let data = new FormData()
      data.append('identification',that.identification)
      data.append('password', that.password)
      this.axios.post('/user/login', data, {
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function (response) {
        if(response.status === 200) {
          that.noticeColor = 'green'
          that.notice = '登陆成功！'
          that.showNotice = true
          that.$store.commit('setUserInfo',
              {
                token: response.data.data.tokenKey,
                id: response.data.data.id,
              })
        } else {
          that.noticeColor = 'error'
          that.notice = '用户名或密码错误！'
          that.showNotice = true
        }
      })
      .catch(function(error){
        console.log(error)
        that.noticeColor = 'error'
        that.notice = '用户名或密码错误！'
        that.showNotice = true
      })
    }
  }
}
</script>

<style scoped>

</style>