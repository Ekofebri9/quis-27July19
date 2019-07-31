countVowels=(frase)=>{
    let vowels = 'aiueoAIUEO'
    let count = 0
    for (let i = 0; i < frase.length; i++) {
       let a = vowels.includes(frase[i])
       if (a == 1) {
           count = count + a
       } 
    }
    return count
}
console.log(countVowels('programmer'))
console.log(countVowels('hmm...'))