// enached object literals

function newUser(user,age,country,uId){
    return{
        user,
        age,
        country,
        id:uId
    }
}
console.log(newUser("Elmer",36,"PE",1));