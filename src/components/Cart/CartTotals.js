import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => clearCart()}
          >
            Clear cart
          </Button>
        </Link>
        <h5>Subtotal: &euro; {cartSubtotal}</h5>
        <h5>Tax: &euro; {cartTax}</h5>
        <h5>Tax: &euro; {cartTotal}</h5>
      </div>
    </React.Fragment>
  );
}
