import mysql from "mysql2/promise";

export class Repository {
  #connection = null;

  constructor() {
    this.databaseName = "fullcycle_database";
  }
  async savePerson(name) {
    const connection = await this.#getConnection();
    await connection.execute(
      `insert into ${this.databaseName}.people (name) value (?)`,
      [name]
    );
  }

  async getPersons() {
    const connection = await this.#getConnection();
    const [rows] = await connection.execute(
      `select id, name from ${this.databaseName}.people`
    );
    return rows;
  }
  async #getConnection() {
    if (!this.#connection) {
      this.#connection = await mysql.createConnection({
        host: "fullcycle-docker-node-database",
        user: "root",
        password: "admin",
        database: this.databaseName,
      });
    }
    return this.#connection;
  }
}
