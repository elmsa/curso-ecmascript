const user = {username: 'Elmersan',age:36,country:'PE'};
const {username, ...values}=user;
console.log(username);
console.log(values);