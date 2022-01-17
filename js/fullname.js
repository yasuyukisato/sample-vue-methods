// 1 ユーザーに名字/名前をそれぞれのテキスト入力欄で入力させる
// 2 フルネームを firstName + lastName の形式で表示させる
// 3 入力値に変化があるたびに、フルネーム表示を更新させる
// 4 算出プロパティと監視プロパティでそれぞれ実装する

var app = new Vue({
  el: "#app",
  data: () => ({
    firstName: "",
    lastName: "",
    fullName: "",
  }),
  computed: {
    fullName: {
      get: function () {
        return `${this.firstName + "" + this.lastName}`;
      },
      set: function (value) {
        console.log(value);
        return `${this.firstName + "" + this.lastName}`;
      },
    },
  },
  watch: {
    firstName: function (value) {
      this.fullName = value + "" + this.lastName;
    },
    lastName: function (value) {
      this.fullName = this.firstName + "" + value;
    },
  },
});
