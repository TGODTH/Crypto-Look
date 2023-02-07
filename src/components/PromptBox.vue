<template>
  <div class="container">
    <form>
      <label for="nickname">Custom name</label>
      <input
        type="text"
        name="nickname"
        id="nickname"
        v-model="newCoin.nickName"
      /><label for="fullname">Coin fullname</label
      ><input
        type="text"
        name="fullname"
        id="fullname"
        v-model="newCoin.fullName"
      />
      <label for="amount">Coin amount</label
      ><input type="text" name="amount" id="amount" v-model="newCoin.amount" />
    </form>
    <div class="button-group">
      <button @click="summitForm" class="add-btn">Add</button>
      <button @click="closeForm" class="cancel-btn">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromptBox",
  data() {
    return {
      newCoin: {
        nickName: "",
        fullName: "",
        amount: "",
      },
    };
  },
  methods: {
    summitForm() {
      this.$emit("submit", this.newCoin);
    },
    closeForm() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.container {
  padding: 10px;
  position: fixed;
  height: 80%;
  max-height: 300px;
  width: 80%;
  max-width: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgba(107, 107, 107, 0.95);
}
form {
  display: flex;
  flex-direction: column;
}
.button-group {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
}
button {
  margin: 0.5rem;
  padding: 4px;
  color: white;
  border: none;
  font-size: 1.3rem;
}
.add-btn {
  background-color: rgb(5, 105, 255);
}
.cancel-btn {
  background-color: rgb(161, 11, 23);
}
label {
  color: white;
  font-size: 1.2rem;
}
input {
    appearance: none;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
}
</style>
