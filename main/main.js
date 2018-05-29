// Write your cade below:
function main(inputVal) {
    let valArr = inputVal.split('')
    let totalTime = 0 
    let rightTime = 0
    let randomNumArr = [1, 2, 3, 4]
    // randomNumArr = getArrNoRep()
    console.log(randomNumArr)
    totalTime = valArr.filter(v => randomNumArr.indexOf(+v) !== -1).length
    for(let i = 0; i < randomNumArr.length; i++) {
        if(randomNumArr[i] === +valArr[i]) {
            rightTime++
        }
    }
    console.log(rightTime+'A'+(totalTime-rightTime)+'B')
    return rightTime+'A'+(totalTime-rightTime)+'B'
};

function getRandom() {
    return Math.ceil(Math.random() * 10)
}
function getArrNoRep() {
    let arr = []
    for(let i = 0; i > -1; i++) {   
        let newNum = getRandom()
        if(arr.indexOf(newNum) === -1) {
            arr.push(newNum)
        }
        if(arr.length === 4) {
            return arr
        }
    }
}
// main('4321')
module.exports = {
    main
}
