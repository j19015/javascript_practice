//varによる再宣言
/*var nickname="taro"
console.log(nickname)
var nickname="ichiro"
console.log(nickname)
*/

//letによる再宣言
/*let nickname="taro"
console.log(nickname)
let nickname="ichiro"
console.log(nickname)*/
//errorが発生
//SyntaxError: Identifier 'nickname' has already been declared

//constによる再宣言
/*const nickname="taro"
console.log(nickname)
const nickname="ichiro"
console.log(nickname)*/
//errorが発生
//SyntaxError: Identifier 'nickname' has already been declared

//varに再代入
/*var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)*/

//letによる再代入
/*let nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)*/

// constによる再代入
/*const nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)*/
//errorが発生
//TypeError: Assignment to constant variable.
//const は再代入ができない

/*
//varでは関数スコープ（ローカルスコープ）、グローバルスコープの変数を宣言できます。

//グローバルスコープとはどこからでも参照できる変数です。
//関数スコープは関数の中でvarによって宣言された変数です。
//関数スコープの有効範囲は関数内になります。
var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}

foo()
console.log(y)
*/


//letでのスコープ
//letではブロックスコープ（ローカルスコープ）の変数を宣言することができます。
//ブロックとは() 、{}の組で区切られたものを指します。

/*
function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  console.log(y)
}

foo()
*/
/*
for (let i=0;i<10;i++){
  console.log(i)
}
console.log(i)
*/

//巻き上げ
/*var str = "webcamp"

function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
*/
/*var str = "webcamp"

function foo() { 
  var str
  console.log(str)
  str = "dmm webcamp"
  console.log(str)
}

foo()*/
/*
function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}
foo()
var str = "webcamp"
*/