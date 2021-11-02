// 指定のdivにアンカータグを埋め込む
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('result_text').textContent = '<a href="https://www.google.com/?hl=ja">google</a>' // 文字列として入る
  document.getElementById('result_html').innerHTML = '<a href="https://www.google.com/?hl=ja">google</a>' // aタグとして生成される
}, false);
  
  // htmlを埋め込むのでなければtextContentを使用する → 高速でセキュリティ上の問題も発生しにくい