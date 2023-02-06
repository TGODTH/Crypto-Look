<template>
  <PortTable :datas="port"></PortTable>
</template>

<script>
import PortTable from "./components/PortTable.vue";

export default {
  name: "App",
  components: { PortTable },
  data() {
    return {
      port: [
        {
          nickName: "BTC",
          fullName: "BTCUSDT",
          link: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
          amount: 2.241352552,
          price: 14534,
        },
        {
          nickName: "ETH",
          fullName: "ETHUSDT",
          link: "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT",
          amount: 12.31536,
          price: 2241,
        },
        {
          nickName: "LTC",
          fullName: "LTCUSDT",
          link: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
          amount: 2376859135.235463,
          price: 1.413525624,
        },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
