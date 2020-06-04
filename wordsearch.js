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
    // const diagonalJoin = letters.map(ls => ls.join(''));
    // if (diagonalJoin) {
    //     const mainArray = []
    //     for (let i = 0; i < diagonalJoin.length; i++) {
    //         let longestLength = diagonalJoin.length
    //         if (diagonalJoin[i].length > longestLength) {
    //             longestLength = diagonalJoin[i].length
    //         }
    //         for (let j = 0; j < longestLength; i++, j++) {
    //             const subArray = []
    //             subArray.push(diagonalJoin[i][j])
    //             mainArray.push(subArray)
    //             let newString = subArray.join('')
    //             if (newString.includes(word)) {
    //                 return true
    //             }
    //         }
    //         console.log(subArray)
    //     }
    // }
    return false;
};
module.exports = wordSearch;