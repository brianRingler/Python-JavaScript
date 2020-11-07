let names = []
const getUsersFullNames = users => {
    for (let i = 0; i < users.length; i++){
        names.push(users[i]['first_name'] + " " + users[i]['last_name']);
        let names_str = names.join(', ');
    }
    return names_str;
}


//sample usage
const users = [{
    id: 1,
    first_name: "John",
    last_name: "Doe",
    is_verified: false
}, {
    id: 2,
    first_name: "Jennifer",
    last_name: "Doe",
    is_verified: true
}];
console.log(getUsersFullNames(users));