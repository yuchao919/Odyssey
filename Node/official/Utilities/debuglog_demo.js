const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);
/**
 * If this program is run with NODE_DEBUG=foo in the environment, 
 * then it will output something like:
 *    FOO 3245: hello from foo [123]
 * where 3245 is the process id.
 * If it is not run with that environment variable set, then it will not print anything.
 * Multiple comma-separated section names may be specified in the NODE_DEBUG environment variable. 
 * For example: NODE_DEBUG=fs,net,tls.
 */
