// 指定のdivにアンカータグを埋め込む
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('result_text').textContent = '<a href="https://www.google.com/?hl=ja">google</a>' // 文字列として入る
  document.getElementById('result_html').innerHTML = '<a href="https://www.google.com/?hl=ja">google</a>' // aタグとして生成される
}, false);
  
  // htmlを埋め込むのでなければtextContentを使用する → 高速でセキュリティ上の問題も発生しにくい


// 送信ボタンを押すと、入力ボックス/セレクトボックスの値を取得する
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    const name = document.getElementById('name'); // inputのidを取得しvalueで表示
    console.log(name.value);
  })
}, false);