import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <div
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}>
      Less
    </div>
    <div className={classes.More} onClick={props.added}>
      More
    </div>
  </div>
);

export default buildControl;
