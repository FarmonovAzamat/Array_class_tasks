//---------------------------------CLASS TASKS--------------------
//1) get 1st value
// function getFirstValue(arr){
//   return arr[0];
// }
// console.log(getFirstValue([1,2,3]));
// console.log(getFirstValue([80,5,100]));
// console.log(getFirstValue([-500,0,50]));

//2) makePair
// function makePair(...arr){ //rest - returns massive
//   return arr;
// }
// console.log(makePair(1,2));
// console.log(makePair(51,21));
// console.log(makePair(512124,215));


//3) Function to reverse
// function Reverse(arr){
//   return arr.reverse();
// }
// console.log(Reverse([1,2,3,4]));
// console.log(Reverse([9,9,2,3,4]));
// console.log(Reverse([]));


//4) Increment Items
// function IncrementItems(arr){
//   let plus = arr.map((e)=> e+1)
//   return plus;
// } 
// console.log(IncrementItems([0,1,2,3]));
// console.log(IncrementItems([2,4,6,8]));
// console.log(IncrementItems([-1,-2,-3,-4]));

//5) getLastItem
// function getLastItem(arr){
//   let rev = arr.reverse();
//   return rev[0];
// }
// console.log(getLastItem([1,2,3]));
// console.log(getLastItem(['cat','dog','duck']));
// console.log(getLastItem([true, false, true]));

//6) arrayToString
// function arrayToString(arr){
//   let str = arr.join("");
//   return str;
// }
// console.log(arrayToString([1,2,3,4,5,6]));


//7) check
// function check (arr, str){
//   return arr.includes(str);
// }
// console.log(check([1,2,3,4,5],3));
// console.log(check([1,1,2,1,1],3));
// console.log(check([5,5,5,6],5));


//8) findIndex
// function findIndex(arr,str){
//   return arr.indexOf(str);
// }
// console.log(findIndex(['he','edabit', 'fgh', 'abc'], 'fgh'));
// console.log(findIndex(['Red','blue', 'Blue', 'Green'], 'blue'));
// console.log(findIndex(['a','g', 'y', 'd'], 'd'));

//9) concat
// function Concat(arr1,arr2){
//   return arr1.concat(arr2);
// }
// console.log(Concat([1,2,3],[2,6,8]));

//10) toNumberArray
// function toNumberArray(arr){
//   let num = arr.map(e=>+e)
//   return num;
// }
// console.log(toNumberArray(['9.4','4.2']));

//12) parseArray()
// function parseArray(arr){
//   let str = arr.map(e=>e.toString())
//   return str;
// }
// console.log(parseArray([1,2,'a','b']));

//11) sumArray
// function sumArray (arr){
//   let sum =0;
//    arr.forEach(element => {
//     sum+=element;
//   }); return sum;
// }
// console.log(sumArray([0,4,8,12]));


//12) arrBerween
// function arrBerween (num1, num2, arr){
//   let answer = []
//   arr.filter(e =>{
//     if (e>num1 && e<num2){
//       answer.push(e)
//     }
//   }); return answer
// }
// console.log(arrBerween(3,8,[1,5,95,0,4,7]));

//13) arrayValuesTypes
// function arrayValuesTypes(arr) {
//   let type = arr.map(e=> typeof(e));
//   return type;
// }
// console.log(arrayValuesTypes([1,2, 'null',[]]));

//14) wordLenght
// function wordLenght(arr){
//   let lenght = arr.map(e=>e.length)
//   return lenght;
// }
// console.log(wordLenght(['hello','world']));

//15) checkSquareAndCube
// function checkSquareAndCube(arr) {
//   if (Math.pow(Math.sqrt(arr[0]),3) == arr[1]){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(checkSquareAndCube([4,8]));
// console.log(checkSquareAndCube([16,48]));
// console.log(checkSquareAndCube([9,27]));

//16) invertArray
// function invertArray(arr) {
//   let answer = [];
//   arr.filter(e=>{
//     if (e>0){
//       answer.push(e*(-1));
//     } else if(e<0){
//       answer.push(Math.abs(e));
//     }
//   }); return answer;
// }
// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1,-2,3,-4,5]));
// console.log(invertArray([-1,2,-3,4,-5,6,-7]));


//17) getMultipliedArr
// function getMultipliedArr(arr){
//   let multiply = arr.map(e=>e*2)
//   return multiply;
// }
// console.log(getMultipliedArr([2,5,3]));

//18) getSumOfItems()
// function getSumOfItems(arr){
//   let sum = 0;
//   arr.map(e=>{
//     sum+=e;
//   }); return sum
// }
// console.log(getSumOfItems([2,7,4]));
// console.log(getSumOfItems([45,3,0]));
// console.log(getSumOfItems([-2,84,23]));

// //19)forbiddenLetter
// function forbiddenLetter(letter,arr){
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes(letter)){
//       return false;
//     }
//   } return true;
//   }

// console.log(forbiddenLetter('r',['rock','paper','scissors']));
// console.log(forbiddenLetter('a',['spoon','fork','knife']));
// console.log(forbiddenLetter('m',[]));

//20) sumFive
// function sumFive(arr){
//   let sm = 0;
//   arr.map(e=>{
//     if (e>5){
//       sm+=e;
//     }
//   }); return sm
// }
// console.log(sumFive([1,5,20,30,4,9,18]));
// console.log(sumFive([1,2,3,4]));

//21) filterArray
// function filterArray(arr){
//   let filter = [];
//   let n = 1
//   arr.filter(e=>{
//     if (typeof (e) === typeof(n)){
//       filter.push(e);
//     }
//   });
//   return filter;
// }
// console.log(filterArray([1,2,3,'a','b',4]));
// console.log(filterArray(['A',0,'Edabit',1729,'Python', '1729']));
// console.log(filterArray(['Nothing here']));


//22) evenOrOdd
// function evenOrOdd(arr){
//   let sum = 0;
//   let even =[];
//   let odd = []
//    arr.filter(e=>{
//     sum+=e;
//   })
//   if (sum%2==0){
//     return '"even"'
//   } else{
//     return  '"odd"'
//   }
// }
// console.log(evenOrOdd([1]));
// console.log(evenOrOdd([]));
// console.log(evenOrOdd([0,1,5]));

//23) rangeOfNum
// function rangeOfNum(arr){
//   let first = arr.shift();
//   let last = arr.pop();
//   let str = [];
//   for (let i = first+1; i < last; i++) {
//     str.push(i);
//   }
//   return str;  
// }
// console.log(rangeOfNum([2,4]));
// console.log(rangeOfNum([5,9]));
// console.log(rangeOfNum([2,11]));