# 🔍 Lost & Found
 
A community-driven web platform that helps people **report lost items, post found items, and reconnect belongings with their rightful owners**.
 
> Report → Match → Contact
 
---
 
## ✨ Features
 
- **User Authentication** – Sign up and log in with an account (Node.js + PostgreSQL)
- **Report Lost Items** – Submit item name, category, date, last seen location, description, photo and contact details
- **Report Found Items** – Post items you have found so the owner can reach you
- **Browse Listings** – Separate Lost and Found pages with a search bar and category / time filters
- **Item Details Modal** – View full details of an item and contact the owner
- **Delete Reports** – Remove your own reports with a confirmation popup
- **User Profile** – Tabs for account info, your lost items, your found items, and change password
- **Categories** – Bags, Electronics, Clothing, Documents, Other
- **Image Upload** – Item photos are sent along with the report (up to 10 MB request size)
- **Offline Fallback** – Falls back to `localStorage` if the database is unreachable
- **Responsive Landing Page** – Typing-effect hero section, community impact section and a "Our Story" expander
---
 
## 🛠️ Tech Stack
 
| Layer      | Technology                              |
| ---------- | --------------------------------------- |
| Frontend   | HTML5, CSS3, Vanilla JavaScript         |
| Backend    | Node.js, Express 5                      |
| Database   | PostgreSQL (`pg`)                       |
| Middleware | `cors`, `body-parser`                   |
| Dev Tools  | VS Code + Live Server                   |
 
---
 
## 📁 Project Structure
 
```
Lost & Found/
├── backend/
│   ├── server.js            # Express server + REST API
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── Home.html            # Landing page
│   ├── Lost.html            # Browse lost items
│   ├── Found.html           # Browse found items
│   ├── Lostreport.html      # Report a lost item
│   ├── Foundreport.html     # Report a found item
│   ├── Loginpage.html       # Login
│   ├── signup.html          # Sign up
│   ├── profile.html         # User profile & my reports
│   ├── script.js            # Shared JS (login state, tabs, delete, effects)
│   ├── style.css            # Global styles
│   └── All img/             # Icons, logos and item images
│
└── .vscode/settings.json    # Live Server port (5501)
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [PostgreSQL](https://www.postgresql.org/) (v12 or later)
- VS Code with the **Live Server** extension (or any static file server)
### 1. Clone the repository
 
```bash
git clone https://github.com/<your-username>/lost-and-found.git
cd lost-and-found
```
 
### 2. Set up the database
 
Create a PostgreSQL database named `lfconnect` and run the following:
 
```sql
CREATE DATABASE lfconnect;
 
\c lfconnect
 
CREATE TABLE users (
    id        SERIAL PRIMARY KEY,
    fullname  VARCHAR(100) NOT NULL,
    email     VARCHAR(150) UNIQUE NOT NULL,
    phone     VARCHAR(20),
    password  VARCHAR(255) NOT NULL
);
 
CREATE TABLE items (
    id           SERIAL PRIMARY KEY,
    item_name    VARCHAR(150) NOT NULL,
    category     VARCHAR(50),
    location     VARCHAR(255),
    date_report  DATE,
    description  TEXT,
    item_type    VARCHAR(10) NOT NULL,   -- 'lost' or 'found'
    image_data   TEXT,                   -- base64 image
    owner_name   VARCHAR(100),
    owner_email  VARCHAR(150),
    owner_phone  VARCHAR(20),
    user_email   VARCHAR(150)
);
```
 
### 3. Configure the backend
 
Open `backend/server.js` and update the PostgreSQL credentials to match your local setup:
 
```js
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lfconnect',
    password: 'YOUR_DB_PASSWORD',
    port: 5432,
});
```
 
### 4. Install dependencies & start the server
 
```bash
cd backend
npm install
node server.js
```
 
You should see:
 
```
Server running on http://localhost:5000
Database Connected Successfully
```
 
### 5. Run the frontend
 
Open the `frontend` folder in VS Code, right-click `Home.html` and choose **Open with Live Server** (default port: `5501`).
 
---
 
## 🔌 API Endpoints
 
Base URL: `http://localhost:5000`
 
| Method | Endpoint               | Description                              |
| ------ | ---------------------- | ---------------------------------------- |
| POST   | `/signup`              | Register a new user                      |
| POST   | `/login`               | Log in with email and password           |
| POST   | `/report-item`         | Submit a lost or found item report       |
| GET    | `/get-items/:type`     | Fetch all items (`type` = `lost`/`found`)|
| DELETE | `/delete-item/:id`     | Delete an item by its ID                 |
 
### Example – Report an item
 
```http
POST /report-item
Content-Type: application/json
 
{
  "item_name": "Black Wallet",
  "category": "Bags",
  "location": "Surat Railway Station",
  "date_report": "2026-05-01",
  "description": "Black leather wallet with ID cards",
  "item_type": "lost",
  "image_data": "data:image/jpeg;base64,...",
  "owner_name": "John Doe",
  "owner_email": "john@example.com",
  "owner_phone": "9876543210",
  "user_email": "john@example.com"
}
```
 
---
 
## 🧭 How It Works
 
1. **Sign up / Log in** to your account.
2. **Report** a lost or found item with details and a photo.
3. **Browse** the Lost and Found listings and use filters to search.
4. **Contact** the owner or finder directly from the item details popup.
5. **Delete** your report once the item has been returned.
---
 
## ⚠️ Known Limitations & Roadmap
 
- [ ] Hash passwords with `bcrypt` (currently stored as plain text)
- [ ] Add JWT / session-based authentication instead of `localStorage` login flag
- [ ] Move DB credentials to a `.env` file (`dotenv`)
- [ ] Verify item ownership on the server before allowing delete
- [ ] Automatic matching between lost and found reports
- [ ] Email / SMS notifications on a possible match
- [ ] Store images in cloud storage instead of base64 in the database
- [ ] Deploy backend and frontend (Render / Railway / Vercel)
---
 
## 🤝 Contributing
 
Contributions are welcome!
 
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request
---
 
## 📄 License
 
This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
 
---
 
## 👤 Author
 
**[Nayan Kindarkhediya]**
- GitHub: [@NayanKindarkhediya](https://github.com/NayanKindarkhediya)
  
---

🔗 **Live Demo:** 

---

⭐ If you like this project, give it a star on GitHub!
 
