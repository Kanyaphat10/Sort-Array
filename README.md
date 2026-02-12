# TypeScript + Jest Setup
## Dependencies

```bash
npm init -y
npm install --save-dev typescript jest ts-jest @types/jest @types/node
npx tsc --init
```
## Running Project
### Compile TypeScript
```bash
npm run build
```
### Run Tests
```bash
npx jest
```

## Setting
### package.json
```bash
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc"
  },
```
### jest.config.js
```bash
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
```
