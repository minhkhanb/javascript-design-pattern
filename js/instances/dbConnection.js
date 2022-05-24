class DatabaseConnection {
  constructor() {
    this.databaseConnection = 'dummytext';
  }

  getNewDBConnection() {
    return this.databaseConnection;
  }
}

export default new DatabaseConnection();