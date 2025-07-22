console.log(calculator(5, 3, '+'));

function calculator(num1, num2, x) {
  if (x==='+') 
    return num1+num2;
  if (x==='*')
     return num1*num2;
  if (x==='-')
     return num1-num2;
  if (x==='/')
     return num1/num2;
  return 'error';
}



var degree=function(x){
    if (x>=(x/2)){
    console.log("passed");
  } else {
    console.log("failed");
  }
}
degree(20);


var str="shahddd";
var str2="sayed";
var edited= str.slice(0, 5);
console.log(edited.concat(" ",str2));


const user = {
  firstName: "jana",
  lastName: "sayed",
  fullName: function() {
    return this.firstName.concat(" ", this.lastName);
  }
};
console.log(user.fullName());


for (var i=0; i<5; i++) {
  if (i%2 === 0) {
      console.log(i , "num is even");
    }
 else {
    console.log(i + " num is odd");
  }
}


var students = [
  { name: "Ahmed", grade: 85 },
  { name: "salma", grade: 84 },
  { name: "jana", grade: 66 },
  { name: "mariem", grade: 73 }
];

for (var i = 0; i < 4 ; i++) {
    if (students[i].grade >= 90) {
      console.log(students[i].name + ":" + "A");
    } 
   else if (students[i].grade >= 80 && students[i].grade <= 90) {
      console.log(students[i].name + ":" + "B");
   }
      else if (students[i].grade >= 70 && students[i].grade <= 80) {
      console.log(students[i].name + ":" +"C");
   }
    else if (students[i].grade >= 60 && students[i].grade <= 70) {
      console.log(students[i].name + ":" +"D");
   }
  else {
    console.log(students[i].name + ":" + "F");
  }
}

let score = 90;
let result = (score >= 50) ? "Pass" : "Fail";
console.log(result);


var button ;
switch(button) {
  case "red":
    console.log("You chose red button");
    break;
  case "green":
    console.log("You chose green button");
    break;
  default:
    console.log("error");
}


var cnt = 0;
while (cnt < 3) {
  console.log(cnt);
  cnt++;
}

var num = 1;
do {
  console.log("Current num is:", num);
  num++;
} 
while (num <= 3);


var input = prompt("Enter anything:");
console.log("You entered:", input);
console.log("Type of input:", typeof iInput);


var Lastnum = num => num % 10;
console.log( Lastnum(1255));



var char = "ahmed";
var ASCII_value = char.charCodeAt(0); 
console.log(ASCII_value);



var productList = ["water", "cola"];
function deleteProducts(productList) {
  productList.pop();
  console.log("After delete:", productList);
}
deleteProducts(productList);

function addProducts(productList, product) {
  productList.push(product);
  console.log("After add:", productList);
}
addProducts(productList, "orange");