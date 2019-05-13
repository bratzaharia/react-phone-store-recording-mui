import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: "100%",
    maxWidth: 500
  }
};

function Title(props) {
  const { classes, name, title } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        {name} {title}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
