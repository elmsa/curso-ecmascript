// nos devuelve una matriz de cualquier sub matriz
const array = [1,1,2,3,4,5, [2,4,6, [5,7,9]]];
console.log(array.flat(0));

// flatmap
const array2=[1,2,3,4,5];
console.log(array2.flatMap(v=>[v,v*2]));

