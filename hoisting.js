//hoisting with var
a();
var a = () => {
  console.log(123);
};
//gives type error, -> a is not a function. Since it declares a as a variable

//-----------------------------------------------------------------------------------------------------------------------

//hoisting with let
a();
let a = () => {
  console.log(123);
};
//gives reference error, -> a is not defined. Since let and const donot declare variable in windows object. It creates it on unknown location

//-----------------------------------------------------------------------------------------------------------------------

//hoisting with const
a();
const a = () => {
  console.log(123);
};
//gives reference error, -> a is not defined. Since let and const donot declare variable in windows object. It creates it on unknown location

//-----------------------------------------------------------------------------------------------------------------------

//hoisting with coventionsl fun syntax
a();
function a() {
  console.log(123);
}
//works fine, -> No errors
