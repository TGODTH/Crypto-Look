<template>
  <main>
      <PortTable :datas="{ ...data }"></PortTable>
      <div class="button-box">
          <button @click="Fdata">Fetch data</button>
          <button @click="togglePrompt">Add data</button>
      </div>
  </main>
  <PromptBox @submit="addData" @close="togglePrompt" v-if="openedPrompt"/>
</template>

<script>
import PortTable from "./components/PortTable.vue";
import PromptBox from "./components/PromptBox.vue";

export default {
  name: "App",
  components: { PortTable, PromptBox },
  data() {
    return {
      link: "https://api.binance.com/api/v3/ticker/price?",
      port: [
        {
          nickName: "BTC",
          fullName: "BTCUSDT",
          amount: 2.241352552,
        },
        {
          nickName: "ETH",
          fullName: "ETHUSDT",
          amount: 12.31536,
        },
        {
          nickName: "LTC",
          fullName: "LTCUSDT",
          amount: 2376859135.235463,
        },
      ],
      data: [],
      openedPrompt: false,
    };
  },
  created() {
    this.Fdata();
  },
  methods: {
      togglePrompt() {
          console.log(this.openedPrompt);
          console.log(!this.openedPrompt);
        console.log("click ");
        this.openedPrompt =!this.openedPrompt;
    },
    Fdata() {
      const coinsName = this.port.map((port) => {
        return port.fullName;
      });
      let coins = [];
      try {
        fetch(
          this.link +
            new URLSearchParams({
              symbols: JSON.stringify(coinsName),
            }).toString()
        )
          .then((response) => response.json())
          .then((data) => {
            data.map((coin) => {
              let newCoin = [];
              this.port.forEach((port) => {
                if (port.fullName == coin.symbol) {
                  newCoin.push({
                    nickName: port.nickName,
                    fullName: port.fullName,
                    amount: port.amount,
                    price: coin.price,
                    value: coin.price * port.amount,
                  });
                }
              });
              coins = coins.concat(newCoin);
            });
            this.data = coins;
          });
      } catch (error) {
        console.log(error);
      }
    },
    addData(newCoin) {
      if (this.port.find((coin) => coin.fullName === newCoin.fullName)) {
        console.log("existing");
        return;
      }
      this.port.push(newCoin);
      this.Fdata();
    },
    removeData(fName) {
      this.port = this.port.filter(
        (coin) => coin.fullName !== fName.toUpperCase
      );
      this.Fdata();
    },
    changeData(editCoin) {
      this.port = this.port.map((coin) => {
        if (fName === coin.fullName) {
          return editCoin;
        } else {
          return coin;
        }
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
}
main{
    max-width: 800px;
    margin: 0 auto;
}
button {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
  color: black;
  margin-left: 0.5rem;
}
button:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
.button-box {
  float: right;;
}
</style>
