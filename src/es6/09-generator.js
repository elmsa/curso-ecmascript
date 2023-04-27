
function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it=iterate(['Elmer','Yaki','Fabian','Fredy','Mamaetha']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);