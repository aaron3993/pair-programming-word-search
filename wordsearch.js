const wordSearch = (letters, word) => {
    let reversedWord = word.split('').reverse().join('');
    const horizontalJoin = letters.map(ls => ls.join(''));
    if (horizontalJoin) {
        for (let l of horizontalJoin) {
            if (l.includes(word || reversedWord)) {
                return true;
            }
        }
    }
    const verticalJoin = letters.map(ls => ls.join(''));
    if (verticalJoin) {
        for (let i = 0; i < verticalJoin[0].length; i++) {
            const subArray = [];
            for (let j = 0; j < verticalJoin.length; j++) {
                subArray.push(verticalJoin[j][i]);
            }
            let newString = subArray.join('');
            if (newString.includes(word || reversedWord)) {
                return true;
            }
        }
    }
    const diagonalJoin = letters.map(ls => ls.join(''));
    // if (diagonalJoin) {
        // const mainArray = []
        for (let i = 0; i < diagonalJoin.length; i++) {
            const subArray1 = []
            const subArray2 = []
            let I = i
            // I is always initialized as the current i value for each iteration of i, but will increment in the j loop without incrementing the original i
            let diagonalLength = diagonalJoin.length - I
            // The length of each check 
            for (let j = 0; j < diagonalLength; j++, I++) {
                subArray1.push(diagonalJoin[I][j])
                // console.log(subArray1)
                subArray2.push(diagonalJoin[j][I])
                let newString = subArray1.join('')
                let newString2 = subArray2.join('')
                // console.log(newString2)
                // console.log(reversedWord)
                if (newString.includes(word || reversedWord) || newString2.includes(word || reversedWord)) {
                    return true
                }
            }
            // mainArray.push(subArray)
            // mainArray.push(subArray2)
        }
        // console.log(mainArray)
        return false;
    }
// };
module.exports = wordSearch;

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'LLU'))