var test = require('tape')
var slow_hello = require('../../slow_hello')


test("Slow hello", (t) => {
    var sh = slow_hello.hello();
    
    sh.then((message) => {
        t.equal(message, 'Heellooo!', 'Should say hello after a while');
        
        t.end();
    })
})

test("Try to make slow hello faster", (t) => {
    t.throws(slow_hello.hello.bind(null, true), slow_hello.StressedOutException, "Should be really stressed out.");
      
    t.end();
})

test("Check slow hello exception message", (t) => {
    try {
        slow_hello.hello(true);
    } catch(e) {
        t.equal(e + "", "I'm too stressed out. I just can't deal with this!", "Should return currect exception message");
        
        t.end();
    }
})

