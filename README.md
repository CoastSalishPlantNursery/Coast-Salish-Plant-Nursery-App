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

> GET /api
> Returns the nursery dataset from the Google Spreadsheet.

**_Base URL (Vercel):_** https://your-vercel-deployment.vercel.app/api

## 🌍 Deployment (Vercel)

fjjf
