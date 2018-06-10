const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config');
const util = require('./utils/utils');
const multiparty = require('connect-multiparty');
const request = require('request');

let multipartMiddleware = multiparty();