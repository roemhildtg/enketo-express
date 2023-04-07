const redis = require('redis');
const config = require('../models/config-model').server;

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

module.exports = {
    mainClient,
    cacheClient,
};
