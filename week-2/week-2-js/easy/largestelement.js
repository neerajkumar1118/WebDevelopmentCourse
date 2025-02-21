let arr = [1, 6, 8, 9];

function findlargestElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findlargestElement(arr));
console.log("Hello, World!");
module.exports=findlargestElement;