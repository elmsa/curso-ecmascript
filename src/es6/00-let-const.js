var lastname='Elmer';
lastname ='Carlos';
console.log(lastname);

let fruit ='Apple';
fruit ='kiwi';
console.log(fruit);

const animal='Dog';
animal = 'cat';
console.log(animal);


const fruits = () =>{
    if(true){
        var fruit1='Apple'; //function scope
        let fruit2='Kiwi'; //block scope
        const fruit3='Pera'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
