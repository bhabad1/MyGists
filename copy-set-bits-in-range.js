

function setSetBit(x, y, l, r){

    let newNum = x;
    for(let i=l; i<r-1;i++){
        console.log((1<<i-1), i, (i-1).toString(2))
        if((y & (1<<i-1))>0)
        newNum |=(1<<i-1);
    }
    return newNum;


}

console.log(setSetBit(44,3,1,5));