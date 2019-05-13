import React from "react";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
const styles = theme => ({
  bgFull: {
    backgroundSize: "cover"
  }
});

class AlertDialog extends React.Component {
  state = {
    open: false,
    fullWidth: true,
    maxWidth: "md"
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    // old way props
    const { img, price, title, id, inCart } = this.props;
    // console.log(this.props);

    return (
      <ProductConsumer>
        {value => {
          // const { modalOpen, closeModal } = value;
          // const { addToCart } = value;
          // console.log(inCart)
          // const { img, price, title, id, inCart } = value.modalProduct;

          return (
            <React.Fragment>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={this.handleClickOpen}
                // onClick={this.openModal}
              >
                Quick view
              </Button>
              <Dialog
                fullWidth={this.state.fullWidth}
                maxWidth={this.state.maxWidth}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="max-width-dialog-title"
              >
                <DialogTitle id="max-width-dialog-title">
                  {title}
                  {inCart ? <div>inCart</div> : null}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>Price $ {price}</DialogContentText>
                  <img
                    src={img}
                    alt="Product"
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "1rem"
                    }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={this.handleClose}
                    variant="outlined"
                    color="primary"
                    size="small"
                  >
                    Continue Shopping
                  </Button>

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
                </DialogActions>
              </Dialog>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

AlertDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AlertDialog);
