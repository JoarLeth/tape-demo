const test = require('tape');
const hello = require('../hello');

test("Test angry hello", (t) => {
    const expected = "Hello Alice you goddamn turkey!";
    const actual = hello.hello("Alice");

    t.equal(actual, expected, "Fail")

    t.end();
});

test('Test angry bye bye', (t) => {
    t.equal(hello.bye(), 'Get out of my face you goddamn turkey!');

    t.end();
})
