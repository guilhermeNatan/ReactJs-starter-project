import { isNil, omitBy } from 'lodash';
import firebase from '../Firebase';

export default class ServiceUtil {
  static getRef = path => firebase.database().ref(path);

  static getOnce = path => firebase
    .database()
    .ref(path)
    .once('value');

  static logout = () => firebase.auth().signOut();

  static getCurrentUser = () => firebase.auth().currentUser;

  static tryLogin = ({ email, password }) => firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  static getUserInformations = () => {
    const user = ServiceUtil.getCurrentUser();
    return user
      ? ServiceUtil.getOnce(`/users/${user.uid}`).then(snap => snap.val())
      : null;
  }

    static convertSnapshotInArrayObjects = (snapshot) => {
      const values = snapshot.val();
      if (values) {
        const keys = Object.keys(values);
        return keys.map(id => ({ ...values[id], id }));
      }
      return [];
    };

  static prepareDataBeforeUpsert = object => omitBy(object, isNil);

  static upsert = async (object, path) => {
    const newObject = ServiceUtil.prepareDataBeforeUpsert(object);

    if (object.id) {
      delete newObject.id;
      return ServiceUtil.getRef(`${path}/${object.id}`)
        .set(newObject);
    }
    return ServiceUtil.getRef(`${path}`)
      .push({ ...newObject, createdAt: firebase.database.ServerValue.TIMESTAMP });
  }

  static deleteObject = async (pathWithId) => {
    try {
      await ServiceUtil.getRef(pathWithId).remove();
      return true;
    }
    catch (e) {
      console.log('Falha ao remover item', pathWithId);
      return false;
    }
  }


  // export const exluirItem = idItem => dispatch => firebase
  //     .database()
  //     .ref(`/itens/${idItem}`)
  //     .remove()
  //     .then(() => {
  //       const action = excluirItemAc();
  //       dispatch(action);
  //       return Promise.resolve();
  //     })
  //     .then(() => {
  //       ParametrosService.updateTotalItens(false);
  //     });
}
