# tape-demo
A very basic example of using the tape test framework

## Try it out
Clone the project, `cd` to the directory containing the `package.json` file and run `npm install`.

## Run tests
You can run the unit tests using `npm test` or `node_modules/.bin/tape 'tape_project/**/tests/*.js'`.

To run the slow test, use `node_modules/.bin/tape 'tape_project/**/tests/slow/*.js'`.

If you want prettier reports you may want to pipe the result through faucet: `node_modules/.bin/tape 'tape_project/**/tests/*.js' | node_modules/.bin/faucet`

If you don't want to type `node_modules/.bin/` you can install tape and faucet globally (`npm install -g tape` and `npm install -g faucet`) or add some cute alias.

## Coverage
To run the tests and get a coverage report, run `npm run coverage`. Se the scripts in `package.json` for what it does.
