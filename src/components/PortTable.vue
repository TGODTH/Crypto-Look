<template>
  <div class="container">
    <Row v-for="data in datas" :key="data.fullName"></Row>
  </div>
</template>

<script>
import Row from "./Row.vue";

export default {
  name: "PortTable",
  components: { Row },
  props: {
    datas: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.container {
  background-color: aqua;
  height: 100vh;
}
</style>
