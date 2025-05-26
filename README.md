# Coast-Salish-Plant-Nursery-App

A App which provides information about a plant based on the criteria provided.

- includes a searchbar, where you can search for either a specific plant or a list of plants matching with the search term

* includes a filter where you can provide some search criteria
* onClick user will be redirected to overview page
* More information Button and Search Images on Google Button

## 📦 Tech Stack

**Backend**

_Language:_ TypeScript
_Framework:_ ExpressJS
_Database:_ Google Spreadsheet (via Google Sheets API)
_Authentication:_ API Key (required to access endpoint)
_Hosting:_ Vercel

**Frontend**

_Framework:_ React Native (Expo)
_Platform Support:_ Android, iOS

## 🚀 Features

- API to serve nursery data
- Mobile app interface with live data
- Backend deployed with Vercel
- Simple integration using Expo (frequent updates recommended)

## 🔐 API Key Setup

To run the backend locally or on Vercel, you need a Google API Key to access the Google Sheets API.

**Steps**

1. Create a Google Cloud Project (https://console.cloud.google.com/)
   - _Email:_ nursery@wildbirdtrust.org
   - _Password:_ N@tivePl@ntsS@lmonberry
2. Create a Service Account
   - APIs and services
   - Login Details
   - Service Accounts
3. Create Key
   - Click on the Service Account
   - Keys
   - Add Key
   - Create new Key
   - JSON
4. Access the "Coast Salish Plant Nursery App Database" Spreadsheet
   - Share
   - Add the service Account Email Address as Editor
5. Add the API Key and the Service Account Email Address to the .env

## 🧪 API Endpoint

> **GET /api**

Returns the nursery dataset from the Google Spreadsheet.

**_Base URL (Vercel):_** https://coast-salish-plant-nursery-plants-api.vercel.app/api

## 🌍 Deployment (Vercel)

1. Login with GitHub Account
   - _Email:_ nursery@wildbirdtrust.org
   - _Password:_ PurpleMart1n!
2. Add new... (Project)
3. Import Git Repository (Coast-Salish-Plant-Nursery-App)
4. Set Project name
5. Framework Preset _Other_
6. Root Directory _Server_
7. Add the Environment variables (.env)
8. Deploy

## 📱 Running the App (Frontend)

Make sure the newest Expo version is installed:

**Updating Expo Version**

```
cd Client
cd coast-salish-plant-nursery-app
npx expo install expo@latest
npx expo install --fix
```

**Start the app**

```
cd Client
cd coast-salish-plant-nursery-app
npm run start
```

> ⚠️ Note: The Expo NPM package is frequently updated. Keeping it up to date is strongly recommended.

## 🔧 Running the Backend Locally

**To start**

```
cd Server
npm start
```
