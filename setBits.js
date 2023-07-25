/**
 * Given a positive integer N, print count of set bits in it. 
 */


function setBits(n){
    // let count =0
    // while(n){
    //     console.log(n);
    //     n &= (n - 1);
    //     count++
    //     console.log(n, count)
    // }
    // return count;
    console.log((10).toString(2),(9).toString(2),10 & 9)
    let binNum = n.toString(2);
    let bits  = (binNum.split('').sort().reverse()).lastIndexOf('1') + 1;
    return bits;
}
console.log(setBits(256));