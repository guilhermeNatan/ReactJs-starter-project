import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {ToastContainer} from 'react-toastify';
import { LayoutInterno } from '../layout/pages/LayoutInterno';
import '../resources/css/style.css';
import reducers from '../reducers';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from '../layout/pages/Login';
import {PrivateRoute} from "./PrivateRoute";
import {PesquisaScreen} from "../layout/pages/Pesquisa";
import {FORMULARIO} from "./Paths";

const history = createBrowserHistory();
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const renderizarComLayoutPadrao = Componente => props => (
  <LayoutInterno>
    <Componente
      params={props.match.params}
      router={props}
      isEditar={props.match.params.operacao === 'editar'}
      isCriar={props.match.params.operacao === 'criar'}
      history={history}
    />
  </LayoutInterno>
);

export const renderizarComLayoutLogin = Componente => (props) => {
  const elemento = (<Componente params={props.match.params} {...props} />);
  return (
    <div>
      {
          elemento
        }
    </div>
  );
};

const login = renderizarComLayoutLogin(Login);
const pesquisa = renderizarComLayoutPadrao(PesquisaScreen)

class Rotas extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={login} />
              <PrivateRoute path={FORMULARIO} component={pesquisa} />
              <Route render={() => <div>Ops : página não encontrada</div>} />
            </Switch>
            <ToastContainer />
          </div>
        </BrowserRouter>

      </Provider>
    );
  }
}


export default Rotas;

