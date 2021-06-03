var num1 = 10;
var num2 = 20;

function getSum() {
    var sum = num1 + num2;
    var beautifyResponse = function() {
        sum = "The result of sum is -> " + sum;
    }
    beautifyResponse();
    return sum;
}
console.log(getSum())
console.log(beautifyResponse());

// SCOPE
// GLOBAL - main file variables & functions
// LOCAL - inside a function


























// function calcAvg(num1, num2) {
//     return (num1 + num2)/2
// }

// var calcAvg = function (num1, num2) {
//     return (num1 + num2)/2
// }
// console.log(calcAvg(10, 30));



































// var mArr = [3, 2, 1, 5, 6, 7];
// var sort = [1, 2, 3, 5, 6, 7];
// var min = sort[0];
// var max = sort[sort.length - 1]

























// var result = 0;
// var mArr = [1, 2, 3, 4, 5, 6, 7, 5, 5]
// for(var i=0; i<mArr.length;i++){
//     if(mArr[i] === 5) {
//         continue;
//     }
//     result += mArr[i]
// }
// console.log(result)
// Get sum of array elements but skip the number 5























// function getSum(...args) {
//     var result = 0;
//     for(var i=0; i<args.length;i++){
//         result += args[i]
//     }
//     return result
// }

// console.log(getSum(10, 20, 30));
// console.log(getSum(10, 20, 30, 50, 60));








































// var mArr = ["Sasivardhan", "Shanmugavek", "Gourav", "Chandan", "Ganesh", "Ayush", "Ankush"];
// mArr = [
//     {
//         name: "Sasivardhan",
//         age: 26
//     },
//     {
//         name: "Gourav",
//         age: 28
//     },
//     {
//         name: "Chandan",
//         age: 25
//     },
//     {
//         name: "Ganesh",
//         age: 24
//     },
//     {
//         name: "Ayush",
//         age: 23
//     },
//     {
//         name: "Ankush",
//         age: 20
//     },
//     {
//         name: "Ankush",
//         age: 21
//     },
// ]

// function customSort(valA, valB) {
//     // -1 then valA comes first
//     // +1 then valB comes first
//     // 0 then sequence doesn't change
//     if(valA.name < valB.name) {
//         return -1
//     } else if(valB.name < valA.name) {
//         return 1;
//     } else {
//         if(valA.age < valB.age) {
//             return -1
//         } else if(valB.age < valA.age) {
//             return 1;
//         } else {
//             return 0
//         }
//     }
// }

// mArr.sort(customSort);
// console.log(mArr);


// // var mArr = {
// //     sort: function(sortMethod) {
// //         //Processing
// //         // Call sortMethod(val1, val2)
// //     }
// // }

// // Bubble Sort
