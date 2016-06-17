/**
 * Created by rathawut on 5/27/16.
 */
const Neo4j = require('./neo4j');

const hapiNeo4j = {
  register: function register(server, options, next) {
    Neo4j.instance.connect(options.host, options.user, options.password);
    server.expose('session', Neo4j.instance.session);
    next();
  },
};

hapiNeo4j.register.attributes = {
  pkg: '../package.json',
};

module.exports = hapiNeo4j;
module.exports.Neo4j = Neo4j;
