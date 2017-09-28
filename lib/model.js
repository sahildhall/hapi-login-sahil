/**
 * Created by netstorm on 8/16/17.
 */
var joi = require('joi');
module.exports= {
    email       : joi.string().email().required().max(100),
    password    : joi.string().required().min(4).max(100),
    name        : joi.string().optional().max(100),
    id          : joi.any().required()
};