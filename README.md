# js cryptography

Test client side Javascript cryptography algorythms.

## todo

- Implement MD5 hashing
- Deploy to github pages
- Add unit tests
- Add end to end tests
- Link to this from ebabel.eu home

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

## Run locally

```
node dev.index.js
```

## Browse locally

Browse to http://localhost:5000
