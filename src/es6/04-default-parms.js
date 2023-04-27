function newUser(name,age,country){
    var name=name|| 'Oscar';
    var age=age || 99;
    var country = country||'MX';
    console.log(name,age,country);
}
newUser();
newUser('Carlos',41,'PE');


function newAdmin(name='Carlos',age=99,country='PE'){
    console.log(name,age,country);
}
newAdmin();
newAdmin('Miguel',47,'CHM')