/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1,numero2){
    return Math.max(numero1,numero2)
}
export function findLongestWord(array) {
    let longestWord = "";
    if(array.length==0){
        return undefined
    }
    array.forEach(element => {
        if (element.length > longestWord.length) {
        longestWord = element;
        }
    });
    return longestWord;
}
export function findLongestWord(array){}
export function sumArray(array){}
export function averageNumbers(array){}
export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(array, palabra){}
export function howManyTimes(){}
export function greatestProduct(){}





