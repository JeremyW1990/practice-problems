

function countOccurences(arr, val){
    let count = 0;
    for (v of arr) {
        if (v === val) count++
    }
    return count;

}

function wordLengths(arr){
    let arrLength = [];
    for (v of arr) {
        arrLength.push(v.length);
    }
    return arrLength;
}

function getMinMaxMean(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const mean = arr.reduce((a,b) => a + b, 0 )/ arr.length;
    const obj = {
        "min": min,
        "max": max,
        "mean" : mean
    };
    return obj;

}

function findMode(arr){
    const counter = [];
    const numSet = [];
    let index;
    for (v of arr) {
        index = numSet.indexOf(v);
        if (index === -1) {
            numSet.push(v);
            counter.push(1);
        } else {
            counter[index]++;
        }
    }
    return numSet[counter.lastIndexOf(Math.max(...counter))]

}
