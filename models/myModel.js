const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stockmin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'Product', // Explicitly specify the table name
    timestamps: false // Disable createdAt and updatedAt fields
});

module.exports = Product;




// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const Entry = sequelize.define('Entries', {

//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     cedula: {
//         type: DataTypes.STRING(255),
//         unique: true,
//         allowNull: false,
//     },
//     name: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//     },
//     lastname: {
//         type: DataTypes.STRING(255),
//         allowNull: true,
//     },
//     phone: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//     },
//     mobile: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//     },
//     address: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//     },
//     observations: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//     },

// }, {
//     tableName: 'Entries', // Explicitly specify the table name
//     timestamps: true // Disable createdAt and updatedAt fields
// });

// module.exports = Entry;




