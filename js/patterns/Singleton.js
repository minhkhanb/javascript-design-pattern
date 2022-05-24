import dbConnection from '../instances/dbConnection.js';

class Singleton {
  constructor() {
    throw new Error('Use the getInstance() method on the Singleton object!');
  }

  getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = dbConnection;
    }

    return Singleton.instance;
  }
}

export default Singleton;