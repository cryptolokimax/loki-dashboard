var express = require('express');
var proxy = require('http-proxy-middleware');
var hostValidation = require('host-validation')

var port = process.env.PORT || process.argv[2] || 4000;

var app = express();

app.use(hostValidation({ hosts: ['127.0.0.1:'+port,
                                 'localhost:'+port,
                                 'lokidashboard.com:'+port,
                                 /.*\.lokidashboard\.com$/] }));
 
app.use('/config', proxy({target: 'http://localhost:5000', changeOrigin: true}));
const wsProxy = proxy('/socket.io', {target:'ws://localhost:5000', changeOrigin: true, ws:true});
app.use(wsProxy);

app.use('/', express.static('build'));
app.listen(port, function () {
    console.log('app up on port: ' + port);
});

 