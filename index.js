require('dotenv').config();
const chalk = require('chalk');
const server = require('./api/server.js');

const port = process.env.PORT || 4000;
server.listen(port, () =>
  console.log(
    chalk.blue.bold(`\n** Tipsease running on http://localhost:${port} **\n`),
  ),
);
