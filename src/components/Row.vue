<template>
  <div class="grid-item coin">{{coinData.nickName}}<p class="fullname">{{coinData.fullName}}</p></div>
  <div class="grid-item price">{{coinData.price}}</div>
  <div class="grid-item total">{{coinData.amount}}</div>
  <div class="grid-item value">{{coinData.value}}</div>
</template>

<script>
export default {
  name: "Row",
  props: {
    coinData: {
      nickName: String,
      fullName: String,
      amount: Number,
      price: Number,
      value: Number,
    },
  },
};
</script>

<style>
</style>
