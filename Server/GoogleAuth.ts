import { JWT } from "google-auth-library";
import dotenv from "dotenv";
dotenv.config();

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ];

export async function createTokenAsync() {
    const token = new JWT({
    email: process.env.CLIENT_EMAIL,
    key: process.env.API_KEY,
    scopes: SCOPES,
    })
    return token;
}


