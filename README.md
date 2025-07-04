# 📚 Book Note Website
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)
![EJS](https://img.shields.io/badge/EJS-Templating-orange?logo=ejs)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)

The **Book Note Website** is a full-stack web application that allows users to store and manage books they have read. For each book, users can leave a review and assign a rating — making it a personal reading log and review system all in one.

---

## 🌟 Features

- 📖 Add books you've read
- 📝 Write personal reviews for each book
- ⭐ Rate books on a scale (e.g., 1 to 5)
- 🔍 View a list of all stored books
- 🧐 Search for the book you have read before stored in the database
- 🧹 Edit or delete book entries

---

## 🛠️ Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | HTML, CSS, JavaScript, EJS     |
| Backend    | Node.js, Express               |
| Database   | PostgreSQL                     |
| Version Control | Git, GitHub               |
| Environment Variables | dotenv              |

---

## 🚀 Getting Started

Before you begin, make sure the following are installed in your development environment:

- **[Node.js](https://nodejs.org/en/download)**
- **[PostgreSQL](https://www.postgresql.org/download/)**
- (Optional) **[pgAdmin](https://www.pgadmin.org/download/)** – GUI for PostgreSQL

> ⚠️ You can initialize your PostgreSQL database using the SQL file included in this repository.

---

### 1. Clone the Repository

```bash
git clone https://github.com/TingWai-85/book-notes.git
cd book-notes
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root directory:
```bash
touch .env
```
Open the .env file and add the following variables (replace with your actual credentials):
```env
PG_USER=your_db_username
PG_HOST="localhost"
PG_DATABASE="booknote"
PG_PASSWORD=your_db_password
PG_PORT="5432"
```
Make sure PostgreSQL is installed and your database is set up with the matching credentials.

### 4. Run the App
```bash
node index.js
```
The app will be accessible at: http://localhost:3000

---

## 🎥 Video Tutorial

Watch the setup tutorial on [YouTube](https://www.youtube.com/watch?v=vx5v4JAE2as).

---

## 🔧 Future Enhancements

 - 🔐 Add user authentication (login, register)
 - 📅 Track reading dates or reading time
 - 📊 Dashboard for reading statistics
 - 👥 Community for sharing the books

---

## 👨‍💻 Author
©2025 TingWai-85
