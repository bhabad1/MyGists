



/* A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. 
The number 32 has binary representation 100000 and has no binary gaps. */
function getGaps (BinaryArray, gaps) {
    // console.log(BinaryArray, gaps);
    const firstOne = BinaryArray.indexOf("1");
    if (firstOne > -1) {
         
         let NewBinaryArray = BinaryArray.slice(firstOne + 1);
         const secondOne = NewBinaryArray.indexOf("1");
         if (secondOne > 0) {
              gaps.push(secondOne);
         }
       

         return getGaps(NewBinaryArray.slice(secondOne), gaps); 
    }
    
   
    return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}
function solution (N) {
    
    
    if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
         const Binary = N.toString(2).split('');
         console.log("Binary representation: ", Binary)
         
         return getGaps(Binary, []);
    }
     
    return 0;
}



console.log(solution(66561))