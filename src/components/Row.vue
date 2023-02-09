<template>
  <div class="grid-item coin">
    {{ coinData.nickName }}
    <p class="fullname">{{ coinData.fullName }}</p>
  </div>
  <div class="grid-item price">{{ coinData.price }}</div>
  <div class="grid-item total">{{ coinData.amount }}</div>
  <div class="grid-item value">{{ coinData.value }}</div>
  <div class="grid-item edit"><img class="edit-icon" src="../assets/edit.svg" alt="edit icon"/></div>
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

<style scoped>
.edit-icon{
  width: 1.5rem;
  height: 1.5rem;
  margin: auto;
  transition: width 0.2, height 0.2;
}
.edit-icon:hover{
  cursor: pointer;
  width: 1.55rem;
  height: 1.55rem;
}
</style>
