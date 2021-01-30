import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';


class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount = async () => {

  }

  render() {
    const { component: Comp, ...rest } = this.props;
    const { user } = this.state;
    if (!user) {
      return <div>Verificando acesso...</div>;
    }
    return (
      <Route
        {...rest}
        render={(props) => {
          if (user) {
            return (
              <React.Fragment>
                <Comp {...props} {...rest} />
              </React.Fragment>
            );
          }
          return (
            <Redirect
              to={{
                pathname: '/acessonegado',
                state: { from: props.location },
              }}
            />
          );
        }
        }
      />
    );
  }
}

export default PrivateRoute;
