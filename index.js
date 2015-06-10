var exec = require('child_process').exec;

module.exports.subnet = function(network, callback) {
  var args = [
    '-r0',
    '-aqg',
    network
  ];

  exec('/usr/bin/fping ss '+args.join(' '), function(err, stdout, stderr) {
    if ( err.code == 1 ) err = null;
    var hosts = stdout.toString().trim().split("\n");
    callback && callback(err, hosts);
  });
}

module.exports.network = exports.subnet;
