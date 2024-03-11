<template>
  <div id="app">
    <seminar-component/>
  </div>
</template>

<script>
import SeminarComponent from "@/components/seminarComponent.vue";

export default {
  name: 'App',
  components: {
    SeminarComponent,
  }
}
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
