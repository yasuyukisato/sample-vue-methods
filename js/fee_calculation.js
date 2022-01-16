var app = new Vue({
  el: "#app",
  data: () => ({
    basePrice: 100,
  }),
  computed: {
    taxIncludedPrice: {
      get: function () {
        return this.basePrice * 1.1;
      },
      set: function (value) {
        // alert(value)
        // 税抜き価格入力時にsetが発動
        this.basePrice = value / 1.1;
      },
    },
  },
});
// チラツキ防止
// app.mount("#app");
