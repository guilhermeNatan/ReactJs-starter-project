import React, { Component } from 'react';
import Bootstrap4Theme from 'react-jsonschema-form-bs4';
import Card from '@material-ui/core/es/Card';
import CardHeader from '@material-ui/core/es/CardHeader';
import CardContent from '@material-ui/core/es/CardContent';
import styles from './LoginStyle'
import {FORMULARIO} from "../../router/Paths";
const schema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: { type: 'string', title: 'Email' },
    password: { type: 'string', title: 'Senha' },

  },
};


const uiSchema = {
  email: {
    'ui:widget': 'email',
  },
  password: {
    'ui:widget': 'password',
  },
};



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erroMessage: '',
    };
  }

  componentDidMount() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     const { history } = this.props;
    //     return history.push('/contatos');
    //   }
    // });
  }

    onSubmit = ({ formData }) => {
      const { history } = this.props;
      if (formData) {
        return history.push(FORMULARIO)
        // ServiceUtil.tryLogin(formData)
        //   .then(() => {
        //     const { history } = this.props;
        //     return history.push(FORMULARIO);
        //   })
        //   .catch((error) => {
        //     console.log(error.mensage);
        //     this.setState({ erroMessage: error.message });
        //   });
      }
    }

    render() {
      const { erroMessage } = this.state;
      return (
        <div style={styles.container}>
          <Card style={styles.card}>
            <CardHeader
              title="Melhores do ano Sou Mais Minas"
            />
            <CardContent>
              <Bootstrap4Theme
                onSubmit={this.onSubmit}
                schema={schema}
                uiSchema={uiSchema}
                {...this.props}
              >
                <div>
                  <button className="btn btn-info" style={{ height: 45, width: 150 }} type="submit">Entrar</button>
                </div>
              </Bootstrap4Theme>

              <div>
                {erroMessage}
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
}


export default Login;
