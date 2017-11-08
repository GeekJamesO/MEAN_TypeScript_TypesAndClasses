const myNum: number = 5;
const myString: string = "Hello Universe";
const myArr: Array<number> = [1, 2, 3, 4];
let myObj: any = { name: "Bill" };
let anythingVariable: any = "Hey";
anythingVariable = 25;
let arrayOne: Array<boolean> = [true, false, true, true];
let arrayTwo: Array<any> = [1, "abc", true, 2];
myObj = { x: 5, y: 10 };
// object constructor
class MyNode{
	val: number;
	_prov: number;
	constructor(val: number ) {
		this.val = val;
	}
	doSomething() {
		this._prov = 10;
	}
}
var myNodeInstance = new MyNode(200);
console.log(myNodeInstance.val);

function myFunction():void  {
  console.log("Hello World");
  return;
}
function sendingErrors(): never {
  throw new Error("Error message");
}
