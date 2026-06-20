interface Database {
  save(orderId: string): void;
}

class MySQLDatabase implements Database {
  save(orderId: string): void {
    console.log(`Saved details ${orderId} to MySQL.`);
  }
}

class MongoDatabase implements Database {
  save(orderId: string): void {
    console.log(`Saved details ${orderId} to MongoDB.`);
  }
}

// High-level module relies completely on the abstraction
class BackAccountManager {
  private database: Database;

  // The dependency is injected from the outside
  constructor(database: Database) {
    this.database = database; 
  }

  processOrder(id: string): void {
    this.database.save(id);
  }
}

// Execution Phase
const mysqlRepo = new MySQLDatabase();
const mongoRepo = new MongoDatabase();

// Easily switch implementations without altering OrderManager
const orderManagerWithMySQL = new BackAccountManager(mysqlRepo);
const orderManagerWithMongo = new BackAccountManager(mongoRepo);