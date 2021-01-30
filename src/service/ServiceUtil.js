import { isNil, omitBy } from 'lodash';

export default class ServiceUtil {




  static logout = () =>  console.log('realizar logout');


  static tryLogin = ({ email, password }) =>new Promise(()=> "resolve");



  static prepareDataBeforeUpsert = object => omitBy(object, isNil);



}
