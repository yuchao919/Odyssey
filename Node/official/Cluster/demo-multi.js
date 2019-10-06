var cluster = require('cluster');

if (cluster.isMaster) {
} else if (cluster.isWorker) {
}
