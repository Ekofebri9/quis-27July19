const Dictionary = ["hot", "dot", "dog", "lot", "log"]
function searchPath(from, to) {
    let Dictionary1 = Dictionary
    let Long = from.length
    let found = []
    let output = []
    for (let i = 0; i < Long; i++) {
        found = Dictionary1.find(value => { return value[i] == to[i] })
        if (found != null) {
            Dictionary1 = Dictionary1.filter(value => value != found)
            output.push(found)
        }
    }
    if (output.length > 0){
        output = output.filter(value => value != from && value != to)
        output = [from, ...output, to]
        console.log("input : " + from + " become " + to + " || output : " + output.join(', ').toString())
    } else {
        console.log("input : " + from + " become " + to + " || output : can't find way to change string")
    }
}
searchPath("hit", "bot")
searchPath("hot", "dog")
searchPath("bot", "red")