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
  require("../db/models/1-general"),
  require("../db/models/2-contractaddress"),
  require("../db/models/3-history"),
  require("../db/models/4-education"),
  require("../db/models/5-skill"),
   require("../db/models/6-manpower"),
   require("../db/models/7-driving"),
   require("../db/models/8-application"),
  
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize).associate(sequelize.models);
}

// const { spawn } = require('child_process');
// const migrate = spawn("npx", ["sequelize-cli", "db:migrate"]);

// migrate.stdout.on("data", (data) => {
//   console.log(`${data}`);
// });

// migrate.stderr.on("data", (data) => {
//   console.error(`${data}`);
// });

module.exports = sequelize;
