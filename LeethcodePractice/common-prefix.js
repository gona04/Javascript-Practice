var longestCommonPrefix = function (strs) {
  let ref = strs[0];

  for (let i = 1; i < strs.length; i++) {
    //flow | flight
    let nWord = strs[i];
    // 4 < 6 true | 6 < 4 false
    if (nWord.length < ref.length) {
    // flow 
      ref = ref.split("").splice(0, nWord.length).join("");
    }
    //false | true | true 
    while(!nWord.startsWith(ref) && ref.length >= 0) {
        //3 | 2  
      ref = ref
        .split("")
        .splice(0, ref.length - 1)
        .join("");
    } 
    //false
    if (ref.length == 0) ref = "";
  }
  return ref;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
