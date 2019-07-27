countVowels=(frase)=>{
    let word = frase.split('')
    let vowels = 'aiueoAIUEO'
    let b = 0
    for (let i = 0; i < word.length; i++) {
       let a = vowels.includes(word[i])
       if (a == 1) {
           b = b + a
       } 
    }
    return b
}
console.log(countVowels('programmer'))
console.log(countVowels('hmm...'))