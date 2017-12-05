/* 

The recommended way to install node-windows is with npm, using the global flag:

npm install -g node-windows

Then, in your project root, run:

npm link node-windows

*/

var Service = require('node-windows').Service;
var EventLogger = require('node-windows').EventLogger;

// Create a new service object
var svc = new Service({
  name:'medimage-debug',
  description: 'The nodejs.org example web server.',
  script: 'C:\\medimage\\bin\\server.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  console.log("Installed. Starting...");
  svc.start();
});

svc.install();




var log = new EventLogger('medimage-debug');