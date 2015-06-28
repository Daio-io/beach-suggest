'use strict';

var cluster = require('cluster');
var CPULength = require('os').cpus().length;

function startWorker() {
  var worker = cluster.fork();
  console.log('Cluster: worker %d started', worker.id);
}

if (cluster.isMaster) {

  for (var i = 0; i < CPULength; i++) {
    
    startWorker();
    
  }

  cluster.on('disconnect', function (worker) {
    console.log('worker %d disconnected from the cluster. ', worker.id);
  });

  cluster.on('exit', function (worker, code, signal) {
    console.log('worker %d died with code: %d (%s)', worker.id, code, signal);
    startWorker();
  });
} 

else {
  require('./index.js');
}