import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
// import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            company,
            info,
            price,
            inCart
          } = value.detailProduct;
          return (
            <div>
              <Typography variant="h4" gutterBottom>
                {title}
              </Typography>
              <img
                src={img}
                alt="Product"
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "1rem"
                }}
              />
              <Typography variant="h5" gutterBottom>
                {title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {company}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"Price "} {price}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {info}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {info}
              </Typography>
              <div>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" size="small" color="secondary">
                    Back to products
                  </Button>
                </Link>
                {inCart ? (
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      style={{ marginLeft: ".5rem" }}
                    >
                      To Cart
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    style={{ marginLeft: ".5rem" }}
                    disabled={inCart ? true : false}
                    onClick={() => {
                      // console.log("added to the cart222222");
                      value.addToCart(id);
                    }}
                  >
                    Add to cart
                  </Button>
                )}

                {/* <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  style={{ marginLeft: ".5rem" }}
                  disabled={inCart ? true : false}
                  onClick={() => {
                    // console.log("added to the cart222222");
                    value.addToCart(id);
                  }}
                >
                  {inCart ? "inCart" : "add to cart"}
                </Button> */}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
