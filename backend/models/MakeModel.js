// MakeModel.js
import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';

const Make = sequelize.define('Make', {
    MakeID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Description: { type: DataTypes.STRING }
}, {
    tableName: 'Makes',
    timestamps: false
});

export default Make;
