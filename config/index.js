const { NODE_ENV } = process.env;
const dev = require('./dev.json');
const prod = require('./prod.json');

module.exports = NODE_ENV === 'development' ? dev : prod;
