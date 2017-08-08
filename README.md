# Test Framework

An empty project with Tape to demonstrate proper unit test writing. Part of a recent Intro to
JavaScript class I attended.

## Running

Follow the usual procedure for setting up NPM:

```sh
$ npm install
````

And then run the unit tests via NPM scripts:

```sh
$ npm test
# or npm run test
```

To set up local server:

```sh
$ npm run start:fe:dev
````

## Files

Any file ending in `spec.js` anywhere within the source folder will be included in the running
tests. For an example, check out `src/spec.js`, which tests `src/index.js`.

