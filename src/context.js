import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
// Provider

// Consumer
export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    favorites: [],
    // open: false, // modal open
    // fullWidth: true,
    // maxWidth: "md",
    // modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // method that gets the item accordind to id
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    // console.log(id)
    // console.log(product)
    return product;
  };

  //  Modal
  // handleClickOpen = id => {
  //   const product = this.getItem(id);
  //   console.log(product);
  //   this.setState(() => {
  //     return { open: true };
  //   });
  // };

  // handleClose = () => {
  //   this.setState(() => {
  //     return { open: false };
  //   });
  // };
  // end Modal

  handleDetail = id => {
    const product = this.getItem(id);
    console.log(product);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    // console.log(`Added to the cart -- Id is ${id}`);
    // get acces to all products
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    // console.log(index)

    const product = tempProducts[index];
    //console.log(product)
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        // console.log(this.state);
        this.addTotals();
      }
    );
  };

  addToFavorites = id => {
    // console.log(`Added to the favorites -- Id is ${id}`);
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const product = tempProducts[index];
    //console.log(product)
    product.favorites = true;

    this.setState(
      () => {
        return {
          products: tempProducts,
          favorites: [...this.state.favorites, product]
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // tester methode
  // tester = () => {
  //   console.log("State products", this.state.products[0].inCart);
  //   console.log("Data products", storeProducts[0].inCart);

  //   const tempProducts = [...this.state.products]; // here are values from the state
  //   tempProducts[0].inCart = true;
  //   this.setState(
  //     () => {
  //       return { products: tempProducts };
  //     },
  //     () => {
  //       console.log("State products", this.state.products[0].inCart);
  //       console.log("Data products", storeProducts[0].inCart);
  //     }
  //   );
  // };

  // CART methods
  // increment
  increment = id => {
    // console.log("This is increment method")
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // decrement
  decrement = id => {
    // console.log("This is decrement method");
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  // remove item
  removeItem = id => {
    // console.log("item removed");
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));

    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    // console.log("cart was cleared");
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  // render
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          addToFavorites: this.addToFavorites,
          handleClickOpen: this.handleClickOpen,
          handleClose: this.handleClose,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {/* <button onClick={this.tester} style={{ zIndex: 9999, position: "absolute" }}>Tester</button> */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
