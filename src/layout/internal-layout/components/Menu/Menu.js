import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppSharp from '@material-ui/icons/ExitToAppSharp';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Notifications from '@material-ui/icons/Notifications';
import NewReleases from '@material-ui/icons/NewReleases';

import { withRouter } from 'react-router-dom';
import {MLink} from '../MLink';

class Menu extends Component {
    state = {
      mobileOpen: false,
    };

    handleDrawerToggle = () => {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
      const { classes, theme, history } = this.props;
      const drawer = (
        <div>
          <div className={classes.toolbar} />
          <List>

            <MLink to="/noticias">
              <ListItem button key="atendimento">
                <ListItemIcon>{<LibraryBooksIcon />}</ListItemIcon>
                <ListItemText primary="Notícias" />
              </ListItem>
            </MLink>
            <MLink to="/anuncios">
              <ListItem button key="anuncios">
                <ListItemIcon>{<TrendingUpIcon />}</ListItemIcon>
                <ListItemText primary="Anuncios" />
              </ListItem>
            </MLink>
            <MLink to="/contatos">
              <ListItem button key="contatos">
                <ListItemIcon>{<PermPhoneMsgIcon />}</ListItemIcon>
                <ListItemText primary="Contatos" />
              </ListItem>
            </MLink>
            <MLink to="/notificacoes">
              <ListItem button key="notificacoes">
                <ListItemIcon>{<Notifications />}</ListItemIcon>
                <ListItemText primary="Enviar notificação" />
              </ListItem>
            </MLink>

            <MLink to="/img_upload">
              <ListItem button key="img_upload">
                <ListItemIcon>{<NewReleases />}</ListItemIcon>
                <ListItemText primary="Upload de imagens" />
              </ListItem>
            </MLink>
          </List>
          <Divider />
          <div>
            <List>
              <ListItem
                button
                key="sair"
                onClick={async () => {
                  await console.log('realizar logout');
                  history.push('/');
                }}
              >
                <ListItemIcon>{<ExitToAppSharp />}</ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItem>
            </List>
          </div>

        </div>
      );


      return (
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      );
    }
}


export default withRouter(Menu);
