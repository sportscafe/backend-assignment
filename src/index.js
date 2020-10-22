'use strict';

const Hapi = require('@hapi/hapi');

const Redis = require('ioredis');
const Sequelize = require('sequelize')

const redis = new Redis({host: 'redis'});

const dbName = "postgres"
const dbUser = "unicorn"
const dbPassword = "magical"
const dbHost = "postgres_service"

// sequlizer config
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})


const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0',
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();