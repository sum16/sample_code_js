// 1.ボタンをクリックするとinputのvalueが変更される関数
const onChangeText = () => {
  document.getElementById("textbox");
  textbox.value = "変更されます";
}


// 2.複数のクラス名から値を取得し、各要素を割り当てる関数
const changeMenu = () => {
  let menus = document.getElementsByClassName("menu");
  console.log(menus);
  menus[0].style.color = "#ff0000";
  menus[1].innerHTML = "ラーメン定食";
  menus[2].remove();
}
// menus変数の中身　→ [p.menu, p.menu, p.menu]


// 3.連想配列のkey-valueを順番に取得する
// let hash = {
//   key0: "value0",
//   key1: "value1"
// };

// for (let key in hash) {
//   alert('key:' + key + ' value:' + hash[key]);
// }

// // mapを使う
// {
//   let hash = {
//     key0: "value0", key1: "value1"
//   };

//   Object.keys(hash).map(key => console.log('key:' + key + ' value:' + hash[key]));
  // [undefined, undefined]が出てしまうが内容を確認したいだけなら十分
  // Object.keys(obj) オブジェクトのプロパティ名(キー)を取得
  // 配列に使う場合
  // const array = ["sa", "mu", "ra", "i"];
  // console.log(Object.keys(array));
  // ["0", "1", "2", "3"] → インデクスを取得
// }

//円グラフ用にカテゴリと合計金額を配列に入れる
// let keyArray = [];
// let valueArray = [];
// for (key in pieChartData) {
//   keyArray.push(key);
//   valueArray.push(pieChartData[key])
// }



// 4.現在時刻を取得
const current = new Date();
const result = document.getElementById("result");
result.textContent = current.toLocaleString();

  // toLocaleString()
  // 日付を地域の日付書式に従った文字列に変換

  // ●innerHTML
  // "HTMLを解釈して出力する"のがinnerHTML

  // ●textContent
  // "HTMLを解釈せずにそのまま文字として出力する"のがtextContent



// 5.aタグを全て取得し、リンク先を一覧表示する
  const list = document.getElementsByTagName('a');
  for (let i=0; i < list.length; i++) {
    console.log(list.item(i).href);
    console.log(list[i].href); // 同じ意味
  }

    // item(i) → i番目の要素を取得(iは0~length-1の範囲)
    // namedItem(name) →id、またはname属性が一致する要素を取得



// 6.テキストボックスに現在時刻を表示
  const current_time = new Date();
  const nam = document.getElementsByName('time'); //inputのname属性を取得
  nam[0].value = current_time.toLocaleString();