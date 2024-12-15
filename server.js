// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Create an express app
const app = express();
app.use(cors());
app.use(express.json());

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: '',      
    database: 'contact_form_db', 
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as ID ' + db.threadId);
});

// API endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const { full_name, mobile_number, email, message } = req.body;
    
    // Insert the form data into the database
    const query = 'INSERT INTO contacts (full_name, mobile_number, email, message) VALUES (?, ?, ?, ?)';
    db.query(query, [full_name, mobile_number, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            return res.status(500).send('Server Error');
        }
        res.status(200).send('Form data submitted successfully');
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
