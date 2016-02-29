function StressedOutException(message) {
    this.message = message;
    
    this.toString = function() {
        return this.message;
    };
}

function hello(hurry_up) {
    if (hurry_up) {
        throw new StressedOutException("I'm too stressed out. I just can't deal with this!");
    }

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("Heellooo!");
        }, 3000);
    });
}

module.exports.hello = hello;
