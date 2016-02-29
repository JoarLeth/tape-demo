const hello = (name) => {
    return "Hello " + name;
}

function bye() {
    return 'Bye bye!'
}

module.exports.hello = hello;
module.exports.bye = bye;
