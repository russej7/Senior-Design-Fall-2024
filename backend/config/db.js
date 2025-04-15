import { Sequelize } from 'sequelize';


const sequelize = new Sequelize({
  database: 'ParkingCitations',
  dialect: 'mssql',
  username: 'Parking', // Leave empty for Windows Auth
  password: '1234', // Leave empty for Windows Auth
  host: 'SSA-JRUSSELL-70\\SQLEXPRESS',
  dialectOptions: {
    options: {
      encrypt: false, // For local development
      trustServerCertificate: true // For self-signed certs
    }
  },
  logging: false // Disable SQL query logging in console
});

export default sequelize;
