countChar = (resource, target) => {
    let count = 0
    for (let i = 0; i < resource.length; i++) {
        if (target === resource[i]) {
            count = count + 1
        }
    }
    return console.log(count)
}
countChar("bootcamp", "o")
countChar("banana", "a")