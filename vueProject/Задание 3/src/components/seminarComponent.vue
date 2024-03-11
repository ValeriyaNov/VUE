<template>
  <div>
    <h2>Данные с сервера</h2>
    <ul>
      <li v-for="item in data" :key="item">{{ item }}</li>
    </ul>
    <button @click="fetchData">Получить данные</button>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
  name: "seminarComponent",
  computed: {
    ...mapState(['data']),
  },
  methods: {
    ...mapActions(['fetchData'])
  },
};
</script>
