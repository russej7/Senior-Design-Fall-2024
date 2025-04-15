import express from 'express';
import cors from 'cors';
import citationRoutes from './routes/CitationRoutes.js';
import dropdownRoutes from './routes/DropdownRoutes.js';
import sequelize from './config/db.js'; // Assuming db.js is in config folder

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/citations', citationRoutes);
app.use('/api', dropdownRoutes); // Mounts under /api

// Database sync and server start
sequelize.sync({ alter: true })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// Additional server configurations can be added here

app.get('/test-db', async (req, res) => {
  try {
      // Assuming sequelize is imported and configured properly
      const [queryResult, metadata] = await sequelize.query('SELECT TOP 1 * FROM Citations');
      
      res.json({
          status: 'Database connection successful',
          queryResult: queryResult
      });
  } catch (error) {
      res.status(500).json({
          status: 'Connection failed',
          error: error.message,
          fullError: JSON.stringify(error)
      });
  }
});