const Sequelize = require('sequelize');
const database = require('../database/config');

    const Users = database.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        tableName: 'users',
        timestamps: false,
    });

module.exports = { Users }