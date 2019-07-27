printTriangle = (param) => {
    let data = ''
    let dataData = ''
    for (let i = param; i > 0; i--) {
        let start = ''
        for (let ii = i; ii > 0; ii--) {
            start = start + '*'
        }
        data = data + start + '\n'
    }
    dataData = dataData + data
    return dataData
}
console.log(printTriangle(5))