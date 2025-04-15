import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';
import Officer from './OfficerModel.js';
import Violation from './ViolationModel.js';
import State from './StateModel.js';
import Make from './MakeModel.js';
import Disposition from './DispositionModel.js';
import User from './UserModel.js';


const Citation = sequelize.define('Citation', {
    citationID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    citationNumber: { type: DataTypes.INTEGER, allowNull: false },
    citationDateTime: { type: DataTypes.DATE, allowNull: false },
    officerID: { type: DataTypes.INTEGER, allowNull: false },
    violationID: { type: DataTypes.INTEGER, allowNull: false },
    citationLocation: { type: DataTypes.STRING, allowNull: false },
    ownerFirstName: { type: DataTypes.STRING },
    ownerLastName: { type: DataTypes.STRING },
    ownerMiddleName: { type: DataTypes.STRING },
    ownerAddr1: { type: DataTypes.STRING },
    ownerAddr2: { type: DataTypes.STRING },
    ownerCity: { type: DataTypes.STRING },
    ownerStateID: { type: DataTypes.INTEGER },
    ownerPostalCode: { type: DataTypes.STRING },
    MakeID: { type: DataTypes.INTEGER },
    //ModelID: { type: DataTypes.INTEGER },
    licensePlateNumber: { type: DataTypes.STRING },
    licensePlateStateID: { type: DataTypes.INTEGER },
    dispositionID: { type: DataTypes.INTEGER },
    amtPaid: { type: DataTypes.DECIMAL(10, 2) },
    //towed: { type: DataTypes.BOOLEAN, defaultValue: false },
    notes: { type: DataTypes.STRING },
    dateEntered: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    lastUpdateDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    lastUserID: { type: DataTypes.INTEGER }
}, {
    tableName: 'Citations',
    timestamps: false
});

Citation.belongsTo(Officer, { foreignKey: 'officerID', as: 'Officer' });
Citation.belongsTo(Violation, { foreignKey: 'violationID', as: 'Violation' });
Citation.belongsTo(State, { foreignKey: 'ownerStateID', as: 'OwnerState' });
Citation.belongsTo(State, { foreignKey: 'licensePlateStateID', as: 'LicensePlateState' });
Citation.belongsTo(Make, { foreignKey: 'MakeID', as: 'Make' });
Citation.belongsTo(Disposition, { foreignKey: 'dispositionID', as: 'Disposition' });
Citation.belongsTo(User, { foreignKey: 'lastUserID', as: 'LastUser' });

export default Citation;
