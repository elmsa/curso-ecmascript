async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const other = anotherGenerator();
//los next se crean tan cuantas veces se ejecute la promesa
other.next().then(response=> console.log(response.value));
other.next().then(response=> console.log(response.value));
other.next().then(response=> console.log(response.value));
console.log('Hello!');

async function arrayOfname(array){
    for await(let value of array){
        console.log(value)
    }
}

const name = arrayOfname(['Elmer','Yaki','Fabian']);
console.log('After');
