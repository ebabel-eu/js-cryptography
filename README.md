# js cryptography

Test client side Javascript cryptography algorythms.

## todo

- Add unit tests: see https://docs.angularjs.org/guide/unit-testing
- Add end to end tests.
- Add JSDoc.
- Look at other APIs where information related to an e-mail can be found (like Gravatar).

## Install

```
npm install
bower install
```

## Full build before a deployment

Prior to release, one-off build for both css, javascript and html, including minification: run `grunt` command.

There is no linting in this version, since linting is meant to happen during development.

```
grunt
```

## Watch build during development

During development, continuous building for both css and javascript: run `grunt watch` command.

Warning: this watch does not include minification.

```
grunt watch
```

## Run unit tests

```
grunt tests
```

### Test coverage report

To consult the test coverage report (unit tests), browse:

http://localhost:5000/unit-tests/coverage/

The directory with your local system should be listed as a link.

Example:

http://localhost:5000/unit-tests/coverage/PhantomJS%201.9.8%20(Mac%20OS%20X%200.0.0)/

## Run locally

The files to edit while working locally are located in the `src` directory. The entire `build` directory is generated and should not be edited.

```
node index.js
```

## Browse locally

Browse to http://localhost:5000

## Deploy to production

Checkout gh-pages and use the build files as the only files to push to gh-pages, from the root of the repository main directory.

## Browse on production

Browse to http://ebabel-eu.github.io/js-cryptography/
