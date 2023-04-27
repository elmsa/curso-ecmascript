// arrays destructuring
let fruits=['Apple','Banana'];
let [a,b]=fruits;
console.log(a,fruits[1]);

//Object destructuring

let user ={username:'Carlos', age:34};
let {username,age}=user;
console.log(username,user.age);

// spred operator

let persona = {name:'Carlos', age: 28};
let country='PE';
let data ={ ...persona,country };
console.log(data);

//rest
function sum(num,...values){
    console.log(values);
    console.log(num+values[0]);
    return num+values[0];
}
sum(1,1,2,3);