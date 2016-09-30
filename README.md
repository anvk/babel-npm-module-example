# babel-npm-module-example [![Build Status](https://travis-ci.org/anvk/babel-npm-module-example.svg?branch=master)](https://travis-ci.org/anvk/babel-npm-module-example)

> A boilerplate to start writing your NPM modules in ES6 using Babel.

## Install

```
$ npm install babel-npm-module-example --save
```

## How to use

Open sourcecode, take a look and start coding...
https://github.com/anvk/babel-npm-module-example

## GULP or NPM commands?

Currently you can build this project either by running a gulp command or npm build command.

### NPM commands

If you want to build a basic JS module and do not require to run any extra advanced tasks during build you can use [npm-commands](https://github.com/anvk/babel-npm-module-example/tree/npm-commands) branch. Or you can remove `gulpfile.babel.js` file and remove the following npm modules from the project:

 - babel-core
 - gulp
 - gulp-babel
 - gulp-eslint
 - gulp-mocha
 - gulp-rimraf
 - run-sequence

#### Using NPM commands

```
$ npm run build
```

```
$ npm test
```

### GULP

For those who needs to run extra scripts and do other complicated tasks upon builds you can use [gulp-commands](https://github.com/anvk/babel-npm-module-example/tree/gulp-commands) branch. Or clean `scripts` object in `package.json` as well as remove the following npm modules from the project:

 - rimraf
 - babel-cli

#### Using GULP command

```
$ node_modules/gulp/bin/gulp.js
```

## Linting?

I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for this project with my few custom modifications. You can read more on the [Airbnb JavaScript Style Guide here](https://github.com/airbnb/javascript)

## Important!

I commented out `dist/` and `test-dist` folders in my ignore file on purpose to demonstrate how built files will look like. In a real project, most likely, you do not want to push those `dist folders` to your repo. If you do, you will constantly see changes in dist folders during your merges/code reviews which can be very annoying.

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2016 by Alexey Novak
