const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

//============================ MIDDLEWARE ============================//

// Parse URL Encoded Data
app.use(bodyParser.urlencoded({extended: true}));

// Parse JSON  Data
app.use(bodyParser.json());

// Serve Public Directory
app.use(express.static(__dirname + '/public'));

//============================ ROUTES ============================//

// ROOT Route
app.get('/', (req, res) => {
    res.send('<h1>Newsletter</h1>');
});

//============================ Start Server ============================//

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));