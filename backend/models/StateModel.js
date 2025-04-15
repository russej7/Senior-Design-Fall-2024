// StateModel.js
import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';

const State = sequelize.define('State', {
    StateID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Description: { type: DataTypes.STRING }
}, {
    tableName: 'States',
    timestamps: false
});

export default State;
