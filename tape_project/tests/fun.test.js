const test = require('tape');
const fun = require('../fun');

test('Are functions fun?', (t) => {
    t.equal(fun.fun(), "Fun fun functions!", "Functions should be fun!");
    t.end();
});
