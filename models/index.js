const sequelize = require('../config/db');
const Entry = require('./myModel');

const initializeDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión lograda con éxito.');
        await sequelize.sync({ force: true });
        console.log('Base de datos sincronizada con éxito.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

const dropTable = async () => {
    try {
        await Entry.drop();
        console.log('Table dropped successfully.');
    } catch (error) {
        if (error.original && error.original.code === '42P01') {
            console.error('Error dropping the table: Table does not exist.');
            throw new Error('Table does not exist.');
        } else {
            console.error('Error dropping the table:', error);
            throw error;
        }
    }
};


module.exports = { initializeDatabase, dropTable, Entry };
