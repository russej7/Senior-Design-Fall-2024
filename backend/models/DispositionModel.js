// DispositionModel.js
import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';

const Disposition = sequelize.define('Disposition', {
    DispositionID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Description: { type: DataTypes.STRING }
}, {
    tableName: 'Dispositions',
    timestamps: false
});

export default Disposition;
