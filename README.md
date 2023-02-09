# Custom Prop Types

Selection of custom Prop Types to be used with React components and the [Prop Types](https://www.npmjs.com/package/prop-types) library

## Usage

```js
import CustomPropTypes from 'custom-prop-types';
```

## Type checks available

### `emailAddress`
Value matches email address pattern
```js
MyComponent.PropTypes = {
    someProp: CustomPropTypes.emailAddress({ isRequired: <bool> })
}
```

### `guid`
Value is hyphenated string in the format `8chars-4chars-4chars-4chars-12chars`
```js
MyComponent.PropTypes = {
    someProp: CustomPropTypes.guid({ isRequired: <bool> })
}
```

### `positiveNumber`
Value is a number greater than zero
```js
MyComponent.PropTypes = {
    someProp: CustomPropTypes.positiveNumber({ isRequired: <bool> })
}
```