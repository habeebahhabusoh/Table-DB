const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    dialect: "postgres",
  }
);

console.log(`ENVIRONMENT: ${process.env.ENVIRONMENT}`);

const modelDefiners = [
  require("../db/models/general"),
  require("../db/models/contractaddress"),
  require("../db/models/history"),
  require("../db/models/education"),
  require("../db/models/skill"),
   require("../db/models/manpower"),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize).associate(sequelize.models);
}

const { spawn } = require('child_process');
const migrate = spawn("npx", ["sequelize-cli", "db:migrate"]);

migrate.stdout.on("data", (data) => {
  console.log(`${data}`);
});

migrate.stderr.on("data", (data) => {
  console.error(`${data}`);
});

module.exports = sequelize;
