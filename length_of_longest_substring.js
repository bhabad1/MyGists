const solution =  (s) => {
    // Type your solution here
    
     function distinctSubstrings (s, n){
        let S =[];
        for(let i=0; i<n; ++i){
        let charFreq = Array(26).fill(false);
            let str = '';
            for(let j=i; j<n; ++j){
            let pos = (s[j]).charCodeAt(0)-'a'.charCodeAt(0);
                if(charFreq[pos]==true) break;
                charFreq[pos]=true;
                str+=s[j];
                S.push(str.length)
            }
        }
        
        S.sort(function(a,b){return b-a});
        return S[0];
    }
    
    const longestSubstr =  distinctSubstrings(s, s.length);
   // console.log(longestSubstr);
    return longestSubstr;
};

