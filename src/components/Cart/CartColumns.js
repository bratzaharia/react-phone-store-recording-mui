import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function CartColumns(props) {
  const { classes } = props;
  const { cart } = props.value;
  //console.log(cart)

  return (
    <Paper className={classes.root}>
      {/* <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(item => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="left">
                <img
                  src={item.img}
                  alt="product"
                  style={{ maxWidth: "65px" }}
                />
              </TableCell>
              <TableCell align="left">{item.company}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </Paper>
  );
}

CartColumns.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CartColumns);
