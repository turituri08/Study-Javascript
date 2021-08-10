let jsbook = {title: 'javascript', price: 2000, stock: 3};

// console.log(jsbook);
// console.log(jsbook.title);
// console.log(jsbook['price']);
// jsbook.stock = 10;
// console.log(jsbook.stock);

// for(let p in jsbook){
//   console.log(p + ' = ' + jsbook[p]);
// }
// for（let 変数名 in オブジェクト名){}
//　一般的には変数名の部分をpにする
//　データの取り出しは、pでプロパティ名、オブジェクト名[p]でデータの方を読み取る

document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price;
document.getElementById('stock').textContent = jsbook.stock;