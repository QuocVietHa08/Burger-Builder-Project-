import React from 'react';
import Burger from '../../components/Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
function CheckoutSummary(props) {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>I hope this burger taste good</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
}

export default CheckoutSummary;
