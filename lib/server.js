/**
 * Created by sahil on 8/15/17.
 */
require('env2')('.env') // Add a file .env , this will read this file store into env.
var hapi = require('hapi'),
    vision = require('vision');
var server =new hapi.Server();
var requireFields = require('./model');

server.register(vision)
server.connection({port:process.env.PORT})

server.route({
    method:'GET',
    path:'/',
    handler:function(req,reply){
        reply('Hello');
    }
})
server.start(function(){
    console.log('Server is listening on ',process.env.PORT);
})
module.exports = server;

//server.register(visi)