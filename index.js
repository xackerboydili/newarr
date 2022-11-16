'1'
// function getAverage(marks){
//     return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
// }
// console.log(getAverage())

'2'
// function monkeyCount(n) {
//     return Array.from({length: n}, (a, index) => index + 1)
// }
// console.log(monkeyCount())

'3'

// const flip=(d, a)=>{
//     return d == 'R' ? a.sort((a, b) => a-b) : a.sort((a, b) => b-a)
// }

'4'

// function duckDuckGoose(players, goose) {
//     return players[(goose - 1) % players.length].name
// }

'5'

// function points(games) {
//     return games.reduce((a, [b, c, d]) => a + (b > d ? 3 : b == d), 0)
// }

'6'

// function howMuchILoveYou(nbPetals) {
//     return ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][nbPetals % 6]
// }

'7'

// function squareOrSquareRoot(array) {
//     return array.map(e => Math.sqrt(e) % 1 ? e * e : Math.sqrt(e)) 
// }

'8'
// function fakeBin(x){
//     return x.split('').map(e => e < 5 ? 0 : 1).join('')
// }


'9'

// function well(x){
//     let goodIdea = 0
//     for(let idea of x){
//         if(idea === 'good') goodIdea +=1
//     }
//     if(goodIdea > 2) return 'I smell a series'
//     if(goodIdea > 0) return 'Publish!'
//     return 'fail!'
// }

'10'

// function warnTheSheep(queue) {
//     const reversed = queue.reverse()
//     const index = reversed.indexOf('wolf')
//     if(index === 0) return "Pls go away and stop eating my sheep"
//     return "Oi! Sheep number N! You are about to be eaten by a wolf!"
// }

'11'

// function stairsIn20(s){
//     return 20 * s.reduce((a, b) => [...a, ...b], []).reduce((x, y) => x + y)
// }

'12'

// function eachCons(array, n) {
// 	const result = []
//     for(let i = 0; i < array.length; i++){
//         let smallArr = []
//         for(let j = 0; j < n; j++){
//             let index = i + j
//             if(index >= array.length) return result
//             smallArr.push(array[index])
//         }
//         result.push(smallArr)
//     }
//     return result
// }

'13'

// function smash (words) {
//     return words.join(' ')
//  };

'14'

// function swapValues(args) {
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

'15'

// function logicalCalc(array, op){
//    return array.reduce((a, b) => op == 'AND' ? a && b : op == 'OR' ? a || b : a ^ b)
// }

'16'

// function differenceInAges(ages){
//     return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
// }

'17'

// function arr2bin(arr){
//     return arr.reduce((a, b) => a + (typeof b == 'number' ? b : 0 ), 0).toString(2)
// }

'18'

// function all( arr, fun ){
//    return arr.every(fun)
//   }

'19'

// items = []
// items.push({a: "b", c: "d"}) 

'20'

// var ArrowFunc = function(arr) {
//     return arr.map(e => String.fromCharCode(e) ).join(''); //Complete this function
// }