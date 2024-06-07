const express = require('express');
const { create } = require('express-handlebars');
const path = require('path');
const { initializeDatabase, dropTable } = require('./models');

const app = express();
const PORT = process.env.PORT || 4000;

// Set up Handlebars
const hbs = create({ extname: '.hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts') });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: false }));

// Home route
app.get('/', (req, res) => {
    res.render('home');
});

// Initialize DB route
app.post('/initialize-db', async (req, res) => {
    try {
        await initializeDatabase();
        res.render('result', { message: 'Database initialized successfully!', success: true });
    } catch (error) {
        console.error('Error initializing database:', error);
        res.render('result', { message: 'Failed to initialize database. Please try again.', success: false });
    }
});

// Drop Table route
app.post('/drop-table', async (req, res) => {
    try {
        await dropTable();
        res.render('result', { message: 'Table dropped successfully!', success: true });
    } catch (error) {
        if (error.message === 'Table does not exist.') {
            res.render('result', { message: 'Error: Table does not exist.', success: false });
        } else {
            console.error('Error dropping table:', error);
            res.render('result', { message: 'Failed to drop table. Please try again.', success: false });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
