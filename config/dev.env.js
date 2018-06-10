var merge = require('webpack-merge');
var prod = require('./prod.env');
module.exports = merge(prod, {
    NODE_ENV: '"development"'
})