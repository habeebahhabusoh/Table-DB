require('dotenv-flow').config()
const app = require('../config/express')();
const server = app.listen(process.env.PORT||9000);
console.log(`Start server at port : ${process.env.PORT}`);