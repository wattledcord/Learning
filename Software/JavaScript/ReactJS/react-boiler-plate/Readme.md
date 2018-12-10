# React Boiler Plate with webpack and babel

## install Webpack

```bash
npm install webpack webpack-cli --save-dev
```

## install React

```bash
npm install react react-dom --save
```

## Installing Babel

```bash
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

* ___babel-core___: Transforms ES6 code to ES5
* ___babel-loader___: Webpack helper to transpile code, given the the preset.
* ___babel-preset-env___: Preset which helps babel to convert ES6, ES7 and ES8 code to ES5.
* ___babel-preset-react___: Preset which Transforms JSX to JavaScript.

## Installing loaders

```bash
npm install css-loader style-loader --save-dev
```

Keep in mind that webpack executes the loaders from last to first i.e from right to left.

## .babelrc

* env: This preset is used to transpile the ES6/ES7/ES8 code to ES5.
* react: This preset is used to transpile JSX code to ES5.

## Compiling files using Webpack

```bash
"start": "webpack --mode development --watch",
"build": "webpack --mode production"
```

## Installing Webpack-dev-server

```bash
npm install webpack-dev-server --save-dev
```
