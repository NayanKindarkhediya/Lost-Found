<div align="center">
<img src="lost logo.png" alt="Lost & Found Logo" width="110" />
# Lost & Found
 
**Reconnect lost items with their owners.**
 
A full-stack web platform where people can report lost items, report found items, and connect safely to get things back.
 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
 
</div>
---
 
## About
 
Losing something important is stressful, and many honest people who find an item do not know how to return it. **Lost & Found** bridges that gap. Users can sign up, post a lost or found item with photos and details, browse reports from the community, and contact the owner or finder directly.
 
## Features
 
- **User accounts**: sign up, log in, log out and a profile page with profile photo
- **Report a lost item** and **report a found item** with name, category, location, date, description, photos and contact details
- **Browse Lost and Found lists** with:
  - search by item name
  - search by city or zip code
  - category filter, date filter and colour filter
  - pagination
- **Item detail popup** with category, date, location map, and owner or finder contact info
- **Delete your own reports** with a confirmation popup
- **Home page** with typing effect, community impact section, "Our Story" and contact details
- Item categories: Bags, Electronics, Clothing, Documents and Other
- Responsive UI with smooth animations
## Tech Stack
 
| Layer | Technology |
| --- | --- |
| Frontend | HTML, CSS, Vanilla JavaScript |
| Backend | Node.js, Express 5 |
| Database | PostgreSQL (`pg`) |
| Other | CORS, body-parser |
 
## Project Structure
 
```
Lost & Found/
├── backend/
│   ├── server.js           # Express API + PostgreSQL connection
│   └── package.json
└── frontend/
    ├── Home.html           # Landing page
    ├── Loginpage.html      # Login
    ├── signup.html         # Sign up
    ├── Lost.html           # Browse lost items
    ├── Found.html          # Browse found items
    ├── Lostreport.html     # Report a lost item
    ├── Foundreport.html    # Report a found item
    ├── profile.html        # User profile
    ├── script.js           # Shared JS (login state, tabs, delete)
    └── All img/            # Images and icons
```
 
## Getting Started
 
**Requirements:** [Node.js](https://nodejs.org) (LTS), [PostgreSQL](https://www.postgresql.org/download/) and the VS Code **Live Server** extension (or any static server).
 
### 1. Clone the repository
 
```bash
git clone https://github.com/<your-username>/lost-and-found.git
cd "lost-and-found"
```
 
### 2. Set up the database
 
Create a database named `lfconnect` and run this SQL:
 
```sql
CREATE TABLE users (
  id        SERIAL PRIMARY KEY,
  fullname  TEXT NOT NULL,
  email     TEXT UNIQUE NOT NULL,
  phone     TEXT,
  password  TEXT NOT NULL
);
 
CREATE TABLE items (
  id           SERIAL PRIMARY KEY,
  item_name    TEXT NOT NULL,
  category     TEXT,
  location     TEXT,
  date_report  TEXT,
  description  TEXT,
  item_type    TEXT NOT NULL,   -- 'lost' or 'found'
  image_data   TEXT,            -- image stored as base64
  owner_name   TEXT,
  owner_email  TEXT,
  owner_phone  TEXT,
  user_email   TEXT
);
```
 
### 3. Configure the backend
 
Open `backend/server.js` and set your own PostgreSQL details in the `Pool` config (user, password, database, host and port).
 
### 4. Start the backend
 
```bash
cd backend
npm install
node server.js
```
 
The API runs on `http://localhost:5000`.
 
### 5. Start the frontend
 
Open `frontend/Home.html` with **Live Server** (default port `5501`), or use any static server.
 
## API Endpoints
 
| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/signup` | Create a new account |
| `POST` | `/login` | Log in with email and password |
| `POST` | `/report-item` | Save a lost or found report |
| `GET` | `/get-items/:type` | Get all items of type `lost` or `found` |
| `DELETE` | `/delete-item/:id` | Delete a report |
 
## Roadmap
 
- [ ] Hash passwords with bcrypt
- [ ] Move database credentials to a `.env` file
- [ ] Token-based authentication (JWT) for protected routes
- [ ] Upload images to cloud storage instead of base64
- [ ] Email or SMS notifications when a match is found
## Credits
 
Designed and developed by **Nayan** at [Autocraft Web](https://instagram.com/Autocraft.web), Surat.
 
<div align="center">
If you like this project, give it a star.
 
</div>
 
