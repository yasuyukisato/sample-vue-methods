"use strict";
// discripterについて

// - descriptorを出力する -

const obj = { prop: 0 };
// 第一引数に対象のオブジェクト、第二引数にプロパティの名前
const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(descriptor);

// - definePropertyメソッドを用いて値を定義して出力する -
// 基本のdiscripterが全てfalseとなるため書き換え等が不可になる
// 第三引数に設定値を渡す
const obj1 = {};
Object.defineProperty(obj1, "prop", {
  value: 0,
  writable: true, //書き換えをtrueにする
});

const descriptor1 = Object.getOwnPropertyDescriptor(obj1, "prop");

console.log(descriptor1);
obj1.prop = 1;
console.log(obj1.prop);
// 値を変更しても書き換わらない,コンソールにエラーがでないため、ES5からは"use strict"を記述することでエラーを表示させられる
// read only property 'prop' of object 'がでる
// writable = falseで書き込み可能になる
