var mArr = [10, 20, 30, 40, 50];
// console.log(mArr[0]);
// console.log(mArr[1]);
// console.log(mArr[2]);
// console.log(mArr[3]);
// console.log(mArr[4]);

// Iteration of array!
var item = 100;
var atPos = -999; //Default val which means elem not found. Which means I cannot have any value which is 0 or higher
for(var i=0; i<mArr.length; i++) {
    if(mArr[i] === item) {
        atPos = i;
    }
}

if(atPos >= 0){
    console.log("Found " + item + " at position " + atPos);
} else {
    console.log("Element not found!")
}
