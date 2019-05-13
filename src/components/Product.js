import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

// import { Redirect } from "react-router";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AlertDialog from "./AlertDialog";
// import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// handleOnClick = () => {
//   // then redirect
//   return <Redirect push to="/sample" />;
// };

const styles = theme => ({
  card: {
    maxWidth: 345,
    marginBottom: "1.5rem",
    position: "relative"
  },
  media: {
    height: 180,
    backgroundSize: "cover",
    paddingTop: ".5rem"
  },
  cardAction: {
    backgroundColor: "#fff"
  },
  // cardContent: {
  //   maxHeight: 150,
  //   overflow: 'hidden',
  //   marginBottom: '1rem'
  // },
  fab: {
    margin: theme.spacing.unit * 1
  },
  absoluteCart: {
    position: "absolute",
    top: theme.spacing.unit * 0.5,
    right: theme.spacing.unit * 0.5,
    width: 36,
    height: 36,
    color: "blue"
  },
  absoluteCart2: {
    position: "absolute",
    top: theme.spacing.unit * 6,
    right: theme.spacing.unit * 0.5,
    width: 36,
    height: 36,
    color: "blue"
  }
});
// nu e nevoie "sa primim" in fucntie product.prop
function Product(props) {
  const { classes } = props;
  const { id, title, img, price, info, inCart, favorites } = props.product;
  //console.log(props.product)
  return (
    <ProductConsumer>
      {value => (
        <Card className={classes.card}>
          <CardActionArea onClick={() => value.handleDetail(id)}>
            <Link to="/details" style={{ textDecoration: "none" }}>
              <CardMedia className={classes.media} image={img} title={title} />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="h6">
                  {"Price -- $"} {price}
                </Typography>
                <Typography component="p">{info}</Typography>
              </CardContent>
            </Link>
          </CardActionArea>

          <CardActions className={classes.cardAction}>
            <Button variant="outlined" size="small" color="primary">
              Share
            </Button>
            <AlertDialog img={img} price={price} title={title} inCart={inCart} id={id}/>
            {/* <AlertDialog id={id}/> */}
          </CardActions>
          <Fab
            className={classes.absoluteCart}
            disabled={inCart ? true : false}
            disableFocusRipple={inCart ? true : false}
            onClick={() => {
              value.addToCart(id);
            }}
          >
            <ShoppingCartIcon fontSize="small" />
          </Fab>
          <Fab
            className={classes.absoluteCart2}
            disabled={favorites ? true : false}
            disableFocusRipple={favorites ? true : false}
            onClick={() => {
              value.addToFavorites(id);
            }}
          >
            <FavoriteIcon fontSize="small" />
          </Fab>
        </Card>
      )}
    </ProductConsumer>
  );
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  })
};

export default withStyles(styles)(Product);
