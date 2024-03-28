const Sequelize = require('sequelize');
const dbConfig = require('./db_config');

//'postgres://postgres:postgres@localhost:5432/week11'
exports.sq = new Sequelize(dbConfig.PGDATABASE, dbConfig.PGUSER, dbConfig.PGPASSWORD, {
    host: dbConfig.PGHOST,
    dialect: dbConfig.DIALECTS,
    port: dbConfig.PGPORT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: {
        raw: true
    }
});

exports.testDbConnection = async () => {
    try {
      await sq.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
};
