# URL Shortener
![image](https://github.com/user-attachments/assets/4acc8e0d-fbdf-4499-b32a-420fa3951c51)

A simple and efficient URL shortener built with **SolidJS** and **Firebase** for the frontend and **Express.js** for the backend.

## 🚀 Features

- Shorten long URLs into concise, shareable links.
- Track the number of visits for each shortened URL.
- User authentication via Firebase.
- Responsive and minimalistic UI.
- API for shortening and retrieving URLs.

## 🛠️ Tech Stack

### Frontend
- [SolidJS](https://www.solidjs.com/)
- [Firebase](https://firebase.google.com/)

### Backend
- [Express.js](https://expressjs.com/)

## 🔧 Installation

### Prerequisites
- Node.js installed
- Firebase project setup
- MongoDB database (if applicable)

### Backend Setup
```sh
cd backend
npm install
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

## 📌 API Endpoints

### Shorten a URL
**POST** `/api/shorten`
#### Request Body
```json
{
  "longUrl": "https://example.com"
}
```
#### Response
```json
{
  "shortUrl": "https://s.zvide.fun/?a=yNJPyKU2dvZFSgovpwel"
}
```


Redirects users to the original long URL.

## 📜 License

This project is licensed under the MIT License.

---

Made with ❤️ by Luis Ramos

