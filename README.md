## Ejercicio con Testing

### Por qué testing?

Cuando comienzas a programar una aplicación web, todo es bastante fácil de probar de forma manual. Pero las aplicaciones web crecen en tamaño y complejidad de forma gradual, lo cual convierte el testing manual en un proceso difícil y costoso.

La solucion proviene del testing. El testing nos ayuda a mantener la calidad de la aplicación a la vez que ahorramos el tiempo de las pruebas manuales.

### Instrucciones de uso

- Realiza un "Fork" del proyecto a tu repositorio GitHub.
- Clona el proyecto en tu entorno de programació local.

  La estructura del código del ejercicio consiste en:

  ```
  proyecto/
  ├── __tests__/
  │   └── funcArray.test.js
  ├── src/
  |   └── funcArray.js
  ├── package.json

  ```

**Ejecución de los tests**

Para correr los tests de Jest ejecuta el comando  `pnpm test` en el terminal.

**Pasar los tests**

Modifica el fichero `funcArray.js` del directorio `src` siguiendo las instrucciones que se ofrecen en este mismo documento. Poco a poco se deben pasar todos los tests.

No se trata de pasar todos los tests a la vez. Hay que leer detenidamente lo que se pide en cada iteración, resolviendo los errores de uno en uno.

Cuando se programa con tests es muy importante leer y entender los errores que devuelve cada test, es la manera de saber qué hay que codificar.

## Entrega

- Sube los cambios a tu repositorio GitHub.
- Cuando hayas pasado todos los tests realiza un [pull-request](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) del ejercicio.


## Iteraciones

### 1. Encuentra el máximo

Define una función `maxOfTwoNumbers` que tome dos números como argumentos y devuelva el mayor.

### 2. Encuentra la palabra más larga

Escribe una función `findLongestWord` que tome un array de palabras y devuelva la más larga. Si hay 2 con la misma longitud, debería devolver la primera.

### 3. Calcula la suma

Itera sobre un array sumando cada elemento.

Semanticamente [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) es el mejor método para hacer esta operación, aunque se puede utilizar cualquier tipo de bucle de los que hemos visto.

Crea una función `sumArray` que tome un array de números como parámetro y calcule la suma de todos sus miembros.

### 4. Calcula la media aritmética

Para ello sigue el siguiente algoritmo:

1. Utiliza la suma del ejercicio anterior y divídela por el número de elementos.

#### 4.1: Array de Números

Escribe una función `averageNumbers` que reciba un array de números y calcule la media de los números.

#### 4.2: Array of Strings

Escribe una función `averageWordLength` que reciba un array de palabras y calcule la media de la longitud de las palabras.


### 5. Unique Arrays

Coge el siguiente array, elimina los duplicados y devuelve un nuevo array. Si lo necesitas consulta la función [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).

Realiza este ejercicio como una fución `uniquifyArray` que reciba un array de palabras como parámetro.

### 6. Busca elementos

Escribe una función `doesWordExist` que reciba un array de palabras como argumento y una palabra para buscar dentro del array. Devuelve `true` si existe, sino devuelve `false`. **No** utilices `indexOf` en este caso.

### 7. Cuenta repeticiones

Escribe una función `howManyTimes` que tome un array de palabras como argumento y una palabra para buscar. La función devolverá el número de veces que una palabra aparece en el array.

### X. Bonus Quest

Cual es el producto mayor de cuatro números adyacentes? Consideramos adyacentes cualquier grupo de cuatro números en `horizontal`, `vertical` o `diagonal`.

Por ejemplo, si tenemos una matriz de 5x5 como:

```
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```

El mayor producto será `20`x`20`x`20`x`4` = `32,000`;

Escribe una función `greatestProduct` para encontrar el producto mayor en la matriz de 20×20 siguiente!

```javascript
let matrix = [
  [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
];
```
