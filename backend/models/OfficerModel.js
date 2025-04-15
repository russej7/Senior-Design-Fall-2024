// OfficerModel.js
import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';

const Officer = sequelize.define('Officer', {
    OfficerID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    BadgeNumber: { type: DataTypes.STRING },
    FirstName: { type: DataTypes.STRING },
    LastName: { type: DataTypes.STRING },
    //MiddleName: { type: DataTypes.STRING},
    //RankID: { type: DataTypes.INTEGER},
    //IsActive: { type: DataTypes.INTEGER}
}, {
    tableName: 'Officers',
    timestamps: false
});

export default Officer;
