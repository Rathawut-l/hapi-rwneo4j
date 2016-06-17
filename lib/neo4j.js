/**
 * Created by rathawut on 6/9/16.
 */
const neo4j = require('neo4j-driver').v1;

const singleton = Symbol();
const singletonEnforcer = Symbol();

class Neo4j {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
  }

  static get instance() {
    if (!this[singleton]) {
      this[singleton] = new Neo4j(singletonEnforcer);
    }
    return this[singleton];
  }

  connect(host, user, password) {
    const driver = neo4j.driver(`bolt://${host}`, neo4j.auth.basic(user, password));
    this.session = driver.session();
  }
}

module.exports = Neo4j;
