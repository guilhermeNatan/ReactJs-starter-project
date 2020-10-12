import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import  {Colors as palette}  from '../../../../colors';

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ backgroundColor: palette.secondaryDarkColor }}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="inherit" component="p" noWrap>

            { 'Guia Comercial Sou Mais Minas '}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}


const mapStateToProps = state => ({ parametros: state.parametros });
const router = withRouter(Header);
export default connect(mapStateToProps, null)(router);
