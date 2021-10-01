document.querySelector ('button').addEventListener ("click", generate)
function generate (){
let array = []
for (i=0; i<10; i++){
    let min = -10
    let max = 10
    array.push (Math.floor(Math.random( ) * (max - min + 1)) + min);
}
let min = Math.min (...array);
let max = Math.max (...array);
let sumResult = array.reduce (function(sum, current) {
    return sum + current
});
let average = sumResult / array.length
let multyResult = array.reduce (function(multy, current) {
    return multy * current
});
document.querySelector ('#generate').innerHTML = array;
document.querySelector ('#min').innerHTML = min;
document.querySelector ('#max').innerHTML = max;
document.querySelector ('#sum').innerHTML = sumResult;
document.querySelector ('#average').innerHTML = average;
document.querySelector ('#multy').innerHTML = multyResult;
}