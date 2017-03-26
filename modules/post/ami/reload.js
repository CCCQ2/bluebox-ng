/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const nami = require('nami');

const post = require('../../../lib/post');
const optsComm = require('../../../cfg/commonOpts/post');


module.exports.desc = 'Restart the server.';


module.exports.opts = optsComm;


module.exports.impl = (opts = {}) => {
  const optsParsed = opts;
  optsParsed.proto = 'ami';
  const action = new nami.Actions.Reload();

  return post(optsParsed.rhost, action, optsParsed);
};
