class Database {
  save(orderId: string): void {
    console.log(`Saved order ${orderId} to Database.`);
  }
}

// High-level module
class OrderManager {
  private database: Database;

  constructor() {
    // Direct dependency violation
    this.database = new Database(); 
  }

  processOrder(id: string): void {
    this.database.save(id);
  }
}