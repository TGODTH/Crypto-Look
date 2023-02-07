<template>
  <div class="table-container">
    <div class="grid-item grid-header">Coin</div>
    <div class="grid-item grid-header">Price</div>
    <div class="grid-item grid-header">Total</div>
    <div class="grid-item grid-header">USDT Value</div>
    <Row
      v-for="data in datas"
      :key="data.fullName"
      :coinData="{ ...data }"
    ></Row>
  </div>
</template>

<script>
import Row from "./Row.vue";

export default {
  name: "PortTable",
  components: { Row },
  props: ["datas"],
};
</script>

<style>
.table-container {
    margin: 0 auto;
    padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr repeat(3, 2fr);
}
.grid-header{
    font-weight: 600;
    font-size: 1.2rem;
}
.grid-item{
    padding: 6px;
    border: 0.5px solid #e6e6e6;
}
.fullname{
    font-size: 0.8rem;
    font-weight: 300;
    color:#4b4b4b
}
</style>
