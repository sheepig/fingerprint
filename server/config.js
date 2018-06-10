const path = require('path');
const NODE_ENV = require('./env.conf').NODE_ENV;

let dataOrigin = {};
if (NODE_ENV === 'dev') {
    dataOrigin = {
        baseUrl: 'http://localhost:8080',
        isDev: true
    }
} else {
    dataOrigin = {
        baseUrl: 'xxx',
        isDev: false
    }
}

