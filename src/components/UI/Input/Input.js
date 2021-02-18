import React from 'react';
import classes from './Input.module.css';
function Input(props) {
  let inputElement = null;
  let inputClassed = [classes.InputElement];

  // we check the valid of the input if it not valid we add new class into it
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClassed.push(classes.Invalid);
  }
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClassed.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClassed.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClassed.join(' ')}
          value={props.value}
          onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClassed.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  // create validation Error
  let validationError = null;

  if (props.invalid && props.touched) {
    validationError = (
      <p className={classes.ValidationError}>Please enter {props.valueType}</p>
    );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
}

export default Input;
