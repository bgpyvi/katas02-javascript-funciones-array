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
    // Implementa la lógica para calcular la longitud promedio de las palabras en el array
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
    // Implementa la lógica para verificar si la palabra existe en el array
}

export function howManyTimes() {
    // Implementa la lógica para contar cuántas veces aparece una palabra en el array
}

export function greatestProduct() {
    // Implementa la lógica para encontrar el mayor producto de elementos adyacentes en el array
}
