let x = 'hello'
function foo(){
  let x = 'webcamp'
}
console.log(x)

// letやconstには有効範囲があり、ブロックの外側で定義した変数はHTMLないどこでも使えるが、ブロック内で定義した
// 変数はそのブロック内でしか使うことができず、外で使うと　Uncaught ReferenceError: x is not defined　という
// エラーが出る