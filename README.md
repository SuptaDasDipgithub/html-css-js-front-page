# HTML–CSS–JS Front Page (with Node.js backend)

A small web front-page project with a minimal Node.js backend to serve static pages and handle simple form submissions (contact form).  
This project was developed as part of a course/project submission and includes supporting documents (SRS and an IEEE paper) for reference.

---

## 🚀 Features
- Static front-end: `index.html`, `contact.html`
- Styling via `style.css`
- Minimal Node.js server (`server.js`) to serve files and process form submissions
- Uses common npm packages such as `express`, `body-parser`, and `mime`
- Example assets and demo PDF documents included

---

## 🧩 Project Structure

html-css-js-front-page-main/
├── index.html
├── contact.html
├── style.css
├── server.js
├── package.json
├── package-lock.json
├── node_modules/ # installed packages
├── IEEE-BD-Zhang-2023.pdf
├── SP06_SRS_CSE336_4598_4548.pdf
└── demo/
├── assets/
│ ├── images/
│ └── favicon.ico
└── README-demo.md


---

## 🛠️ Requirements
- Node.js (>= 12)
- npm

---

## ➕ Quick install & run
1. Clone
```bash
git clone https://github.com/YOUR_USERNAME/html-css-js-front-page.git
cd html-css-js-front-page-main
```
2. Install dependencies

npm install


3. Run the server

node server.js
# or if a start script exists
npm start


4. Open in browser:

http://localhost:3000  # or the port defined in server.js

# 🔍 server.js (what it does)

Serves static files (index.html, style.css, images, etc.)

Parses form data (typically using body-parser)

Handles POST from contact.html and responds (e.g., sends a "thank you" page or redirects)

May set correct mime types using mime when serving static files.

# 💾 Persistence & Improvements (Recommended)

To persist contact submissions or user data, integrate either:

MongoDB + Mongoose (document store, easy to set up with MongoDB Atlas)

MySQL / PostgreSQL (relational DB; use mysql2 or pg + an ORM/Query Builder like knex or sequelize)

# 📜 License

Academic / educational use. Please attribute authors when reusing.

** Refernece:** https://youtu.be/W8HyWkefaGk?si=cWXs33ZuLK5NcM7C
