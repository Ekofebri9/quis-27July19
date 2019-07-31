let arrayInput = ["bat", "cod", "cat", "act", "cab", "cray", "tac"]
anagram = (array) => {
    let arrayIn = []
    let arrayOut = []
    for (let i = 0; i < array.length; i++){
       arrayIn[i] = array[i].split('').sort().join()
    }
    let Length = arrayIn.length
    for (let i = 0; i < Length; i++){
        if (i == Length-1){
            continue
        }
        for (let ii = i+1; ii < Length; ii++){
            if (arrayIn[i] == arrayIn[ii]){
                arrayOut = arrayOut.filter(word => word != arrayInput[i] && word != arrayInput[ii])
                arrayOut.push(arrayInput[i])
                arrayOut.push(arrayInput[ii])
                
            }
        }
    }
    console.log(arrayOut)
}
anagram(arrayInput)