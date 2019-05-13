import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Title name="Our" title="Houses" />

        <Grid container spacing={16} justify="center">
          <ProductConsumer>
            {value => {
              //console.log(value)
              return value.products.map(product => {
                return(
                  <Grid item xs={11} sm={6} md={3} key={product.id} >
                  <Product key={product.id} product={product} />
                  </Grid>
                );
              });
            }}
          </ProductConsumer>
        </Grid>
      </React.Fragment>
    );
  }
}
