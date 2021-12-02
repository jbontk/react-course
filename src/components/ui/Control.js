import React from 'react';
import classes from './Control.module.css';

// https://reactjs.org/docs/forwarding-refs.html

const Control = React.forwardRef((props, ref) => (
  <div className={classes.control}>
    <label htmlFor={props.id}>{props.label}</label>
    {props.type !== 'textarea' && (
      <input type={props.type} id={props.id} required ref={ref}></input>
    )}
    {props.type === 'textarea' && (
      <textarea rows='5' id={props.id} required ref={ref}></textarea>
    )}
  </div>
));

export default Control;
