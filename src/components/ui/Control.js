import classes from './Control.module.css';

const Control = (props) => (
  <div className={classes.control}>
    <label htmlFor={props.id}>{props.label}</label>
    {props.type !== 'textarea' && (
      <input type={props.type} id={props.id} required></input>
    )}
    {props.type === 'textarea' && (
      <textarea rows='5' id={props.id} required></textarea>
    )}
  </div>
);

export default Control;
