/** Given a string S consisting of lowercase Latin Letters. Return the first non-repeating character in S. If there is no non-repeating character, return '$'.*/

function  nonrepeatingCharacter(s)
{
    // code here
    const strArr = s.split('');
    
    for(let i=0; i<=strArr.length-1;i++){
        if(strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i]))
        {
            return strArr[i]
        }else if(i===strArr.length-1){
            return '$';
        }
    }
    
    
}

console.log(nonrepeatingCharacter('hello'))