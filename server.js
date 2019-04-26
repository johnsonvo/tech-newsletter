const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

// DATABASE
const db = require('./models');

//============================ MIDDLEWARE ============================//

// Parse URL Encoded Data
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON  Data
app.use(bodyParser.json());

// Serve Public Directory
app.use(express.static(__dirname + '/public'));

//============================ ROUTES ============================//

// ROOT Route
app.get('/', (req, res) => {
	res.send('<h1>Newsletter</h1>');
});

// GET New User Route
app.get('/signup', (req, res) => {
	res.render('auth/signup');
});

// POST Create User Route
app.post('/signup', (req, res) => {
	// console.log(req.body);
	// res.send('<h1>Successsss</h1>');

	// // Authentification
	const errors = [];
	// // take name as a string, .split with " ", returns array, check length of 2
	// // if not, return error

	// req.body.name

	db.User.create((err, newUser) => {
		if (err) return res.render('auth/signup', { errors: [err] });
		res.redirect('/signup');
	});
});

// GET Dashboard
app.get('/dashboard', (rew, res) => {
	res.render('dashboard');
});

//============================ API ROUTES ============================//
// Helper route, just for development, so we can easily see the users in DB.
app.get('/api/v1/users', (req, res) => {
    db.User.find((err, allUsers) => {
        if (err) res.json(err);
        res.json(allUsers);
    });
});

//============================ Start Server ============================//

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
