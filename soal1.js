printTriangle = (param) => {
    let data = ''
    let dataData = ''
    for (let i = 0; i < param; i++) {
        let start = ''
        for (let ii = 0; ii <= i; ii++) {
            start = start + '*'
        }
        data = data + start + '\n'
    }
    dataData = dataData + data
    return dataData
}
console.log(printTriangle(5))