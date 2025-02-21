function countvowels(str){
    let count=0;
    let vowels = ['a','e','i','o','u'];
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countvowels("hello")); // This will print: 2
console.log(countvowels("javascript"));
module.exports=countvowels; // Exporting the function so that it can be used in other modules