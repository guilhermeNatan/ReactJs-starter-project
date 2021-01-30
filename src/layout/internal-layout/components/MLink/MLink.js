import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    textDecoration: 'none',
  },
};

function MLink({ to, classes, children }) {
  return (
    <Link to={to} style={styles.link}>
      {
                children
            }
    </Link>
  );
}

MLink.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MLink);
