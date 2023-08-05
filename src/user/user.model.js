import { DataTypes } from 'sequelize';

import db from '../db/connection.js';

export const User = db.define('user', {
    email: {
        type: DataTypes.STRING,
        primaryKey:true,
        unique:true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
