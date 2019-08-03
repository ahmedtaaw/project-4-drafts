//odd number 1, 3, 5, 7
function isOdd(v){return v%2==1;}

function exclude(arr,fn){
    var list=[];
    
    for(var i=0;i<arr.length;i++){
        if(fn(arr[i])){
            list.push(arr[i])
        }
    }
    return list;
}

console.log(exclude([1,2,3,4,5,6,7,8,9],isOdd))

function onlyOdds (val){
    return val % 2 == 1;
}

console.log ([1,2,3,4,5,6,7,8,9].filter(onlyOdds))