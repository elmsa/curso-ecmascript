// mejora interesante pára capturar en grupos valores que estan dentro de una expresion regular
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2023-04-01');
console.table(matchers);
