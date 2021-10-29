
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
