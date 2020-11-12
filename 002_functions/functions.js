const getVotingMessage = person => {
    if(!person.name){
        return "";
    }
    return `Hey ${person.name}, your voting starts now`;
};

const john = {
    name: "John"
};


console.log(getVotingMessage(john));
console.log(getVotingMessage({}));