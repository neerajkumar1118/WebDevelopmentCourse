function anagram(str1,str2){
    let str1Arr = str1.split('').sort().join('');
    let str2Arr = str2.split('').sort().join('');
    if(str1Arr === str2Arr){
        return true;
    }else{
        return false;
    }
}
console.log(anagram('listen','silent'));