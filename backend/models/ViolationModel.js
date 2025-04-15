// ViolationModel.js
import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';


const Violation = sequelize.define('Violation', {
    ViolationID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Description: { type: DataTypes.STRING },
    AmtDue: { type: DataTypes.DECIMAL}
}, {
    tableName: 'Violations',
    timestamps: false
});



export default Violation;
