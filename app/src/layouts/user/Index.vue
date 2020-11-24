<template>
  <v-app
      class="app d-flex justify-center align-center"
  >
    <div>
      <v-card
          class="card"
          color="blue darken-2"
          dark
          elevation="6"
      >
        <router-view/>
      </v-card>
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/sections/Footer";

export default {
  name: "Index.vue",
  components: {Footer},
}
</script>

<style scoped>
.app{
  font-size: 16px;
}

.card{
  width: 450px;
  padding: 30px;
  margin-top: 100px;
  left: 50%;
  transform: translate(-50%);
}
</style>