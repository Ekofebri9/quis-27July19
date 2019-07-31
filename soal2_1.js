printTriangle = (param) => {
    let data = ''
    let dataData = ''
    for (let i = 0; i < param; i++) {
        let start = ''
        let space = ''
        for (let ii = param; ii > i; ii--) {
            space += ' '
        }
        for (let iii = 0; iii <= i; iii++) {
            start += '* '
        }
        data += space + start + '\n'
    }
    dataData = dataData + data
    return dataData
}
console.log(printTriangle(9))