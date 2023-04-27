class user{
    //constructor 
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //metodos privados, solo pueden ser accesidos dentro de la misma clase.
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
}
const bebeloper1 = new user('Elmer',36);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge=37);
