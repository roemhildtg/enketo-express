const redis = require('redis');
const config = require('../models/config-model').server;
const debug = require('debug')('enketo:redis');

const mainClient = redis.createClient(
    config.redis.main.port,
    config.redis.main.host,
    {
        auth_pass: config.redis.main.password,
        prefix: config.redis.main.prefix,
        tls: config.redis.main.host.tls,
    }
);

const cacheClient = redis.createClient(
    config.redis.cache.port,
    config.redis.cache.host,
    {
        auth_pass: config.redis.cache.password,
        prefix: config.redis.cache.prefix,
        tls: config.redis.cache.host.tls,
    }
);

cacheClient.on('error', (err) => debug('Redis Cache Client Error', err));
mainClient.on('error', (err) => debug('Redis Main Client Error', err));

module.exports = {
    mainClient,
    cacheClient,
};
