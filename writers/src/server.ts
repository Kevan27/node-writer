import express, { Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'; // Import body-parser
import connectDB from './db/db';
import authRoutes from './routes/auth.route';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use authentication routes
app.use('/api/auth', authRoutes);

// Call connectDB function to establish MongoDB connection
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});