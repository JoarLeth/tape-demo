const test = require('tape');
const hello = require('../hello');

test("Test hello", (t) => {
    const expected = "Hello Alice";
    const actual = hello.hello("Alice");

    t.equal(actual, expected, "Fail")

    t.end();
});

test('Bye bye', (t) => {
    t.equal(hello.bye(), 'Bye bye!');

    t.end();
})
