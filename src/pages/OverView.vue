<template>
  <h1>OverView</h1>
</template>

<script>
export default {
  name: "OverViewPage",
  data() {
    return {
      count: 0,
    };
  },
  created() {
    console.log(this.$store.state.count);
    this.count = this.$store.state.count;
  },
};
</script>

<style>
</style>