function reverseVowlesFrequency(s) {
    let sA = s.toLowerCase().split("");

    let vowelSet = new Set(['a','e', 'i', 'o', 'u']);
    let vowelsObj = {a:0, e: 0, i:0, o:0, u:0}

    sA.forEach(l => {
        if(vowelSet.has(l)) {
            vowelsObj[l]++;
        }
    })
    let sortedVowels = Object.entries(vowelsObj)
    .filter(([key, freq]) => freq > 0)
    .sort((a,b) => b[1] - a[1])
    console.log(sortedVowels);
}

reverseVowlesFrequency("BAAAUUUUDENEESS") //a = 3 | e = 3