# node-fping

A simple wrapper for fping

## Requirements

Obviously, you need to have fping installed.

```
sudo apt-get install fping
```

## Installation

```sh
npm install node-fping
```

## Usage

Here is a usage example, with the results of just me hotspotted to my phone:

```js
var fping = require('node-fping').subnet; // aliased to .network

fping('192.168.43.0/24', function(err, hosts) {
  // outputs: [  '192.168.43.1' , '192.168.43.63'  ]
  console.dir(hosts);
});
```

### Caveats

Since I was the only use case for this, I did hardcode the arguments so that the code above will call `/usr/bin/fping -r0 -aqg 192.168.43.0/24`:

* `-r0` means it will only try to ping each host once
* `-a` means only live hosts will be output to stdout
* `-q` means stop printing dead hosts to stderr
* `-g` means generate the hosts list from the given network

Also `err` will always be set as fping returns error code 1 unless every single host replies.

## Todo

* make it properly async, `fping` will output an IP address as soon as it gets a reply
* allow pinging an array of hosts `module.exports.hosts = function(hosts, callback) {}`
* allow specifying CLI options as an object
