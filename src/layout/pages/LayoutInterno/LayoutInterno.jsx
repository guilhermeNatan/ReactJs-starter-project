import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import {Header} from './components/Header';
import {Menu} from './components/Menu';
import styles from "./LayoutInternoStyle";

class LayoutInterno extends React.Component {
  render() {
    const {
      classes, theme, children, history,
    } = this.props;


    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} theme={theme} />
        <Menu classes={classes} theme={theme} history={history} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

LayoutInterno.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LayoutInterno);
