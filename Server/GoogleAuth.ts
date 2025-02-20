import { JWT } from "google-auth-library";
import creds from "./GoogleAuth.json";

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
  ];

export async function createTokenAsync() {
    const token = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: SCOPES,
    })
    return token;
}


