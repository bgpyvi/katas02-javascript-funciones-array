export function maxOfTwoNumbers(numero1, numero2) {
    return Math.max(numero1, numero2);
}

export function findLongestWord(array) {
    let longestWord = "";
    if (array.length === 0) {
        return undefined;
    }
    array.forEach(element => {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    });
    return longestWord;
}

export function sumArray(array) {
    let sumaNum = 0;
    array.forEach(element => {
        sumaNum += element;
    });
    return sumaNum;
}

export function averageNumbers(array) {
    if (array.length === 0) {
        return undefined;
    }

    let sumaNum = 0;
    array.forEach(element => {
        sumaNum += element;
    });
    return sumaNum / array.length;
}

export function averageWordLength(array) {
    if (array.length === 0) {
        return undefined;
    }

    let totalLength = 0;
    array.forEach(word => {
        totalLength += word.length;
    });

    return totalLength / array.length;
}

export function uniquifyArray(array) {
    if (array.length === 0) {
        return undefined;
    }

    const uniqueSet = new Set(array);
    const uniqueArray = [...uniqueSet];
    return uniqueArray;
}

export function doesWordExist(array, palabra) {
    return array.includes(palabra);
}

export function howManyTimes(array, palabra) {
    let count = 0;
    array.forEach(word => {
        if (word === palabra) {
            count++;
        }
    });
    return count;
}

export function greatestProduct(array) {
    if (array.length < 2) {
        return undefined;
    }

    let maxProduct = array[0] * array[1];
    for (let i = 1; i < array.length - 1; i++) {
        const product = array[i] * array[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }

    return maxProduct;
}
