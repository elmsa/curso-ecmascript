// declaramos la clase
// ejemplo1
class User{
    // acá va nuestro bloque de código

};


// instancia de una clase
// const newUrser = new User();
//ejemplo2
class user{
    //metodos
    greeting(){//metodo saludo
        return 'Helo';
    }
};

const obj = new user();
let respuesta = obj.greeting() ;
console.log(respuesta); 
const fabian = new user();
console.log(fabian.greeting()); 


// constructor
//ejemplo 3
class user{
    //Constructor
    constructor(){
        console.log('New Usuario');
    }
    greeting(){//metodo saludo
        return 'Helo';
    }
}
const yaki = new user();

//this
// ejemplo 4 
class user{
    constructor(name){
        this.name=name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const objthis = new user('Yaki');
console.log(objthis.greeting());

// setters getters
// ejemplo 5 
class user{
    //constructor 
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
}
const bebeloper1 = new user('Elmer',36);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=37);

