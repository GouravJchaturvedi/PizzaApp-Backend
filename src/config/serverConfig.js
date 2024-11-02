import dotenv from "dotenv";
dotenv.config();

// Exporting all the env variables that the project uses
export const serverConfig = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};
