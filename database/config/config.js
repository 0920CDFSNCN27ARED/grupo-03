module.export = {
  development: {
    username: "root",
    password: null,
    database: "cala_db",
    host: "127.0.0.1",
    dialect: "mysql",
    timestamps: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
