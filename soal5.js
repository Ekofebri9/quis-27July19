splitString = (pharase) => {
    let long = pharase.length
    let secondDictionary1 = []
    let dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
    for (let i = 0; i < long; i++) {
        let word = pharase.slice(0, i)
        if (dictionary.includes(word)) {
            let secondDictionary = []
            secondDictionary.push(word)
            let iii = i
            for (let ii = iii; ii <= long; ii++) {
                let words = pharase.slice(iii, ii)
                if (!dictionary.includes(words)) {
                    continue
                }
                secondDictionary.push(words)
                iii = ii
            }
            secondDictionary1 = secondDictionary.join(', ')
            if (pharase == secondDictionary.join(''))
                console.log(secondDictionary1)
        }
    }
}
splitString('programit')
console.log('===============')
splitString('programmerit')