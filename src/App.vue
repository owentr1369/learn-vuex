<template>
  <h1>Hello Vue</h1>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <NavBar />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  created() {
    console.log(document.querySelector("h1"));
    // created vẫn chưa thể truy cập dom vào thời điểm create
  },
  mounted() {
    console.log(document.querySelector("h1"));
    // có thể truy cập dom vào thời điểm mounted
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>