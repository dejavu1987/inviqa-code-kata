# Code Kata Bootstrap (TypeScript)

## Getting Started

Start your project in the `typescript` directory:

```
$ cd typescript
$ yarn
```

### Quick start with a new kata

run following

```
$ yarn kata:new <kataName>
```

`kataName` argument needs to be the name of the kata.

It will create a new directory  
`/typescript/src/<kataName>`

with files

```
|-src
  |- <kataName>
    |- index.ts
    |- index.test.ts
```

which contains basic barebone to get you up and running and runs jest watch on that directory for you.

You are all set to start coding.

### Run the tests:

```
$ yarn test
```

Run the tests and watch file changes:

```
$ yarn test-watch
```

## (Optional) Run the tests using VSCode extension

Or install Jest for VSCode
https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
