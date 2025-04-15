// UserModel.js
import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
    UserID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    FirstName: { type: DataTypes.STRING },
    LastName: { type: DataTypes.STRING }, 
    Username: {type: DataTypes.STRING},
    Password: {type: DataTypes.STRING},
    RoleID: {type: DataTypes.INTEGER}
}, {
    tableName: 'Users',
    timestamps: false
});

export default User;
