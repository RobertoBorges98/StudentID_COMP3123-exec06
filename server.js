const express = require('express');
const mongoose = require('mongoose');
const notesRouter = require('./routes/NoteRoutes');
// body parser is depricated! SINCE EXPRESS 4.16.0 BODY PARSER MIDDLEWARE WAS ADDED TO EXPRESS.URLENCODED AND EXPRESS.JSON

const DB_URL = "mongodb+srv://roberto:474220Abc@cluster0.isirs.mongodb.net/noteApp?retryWrites=true&w=majority"
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use(notesRouter);

app.listen(8081, () => {
    console.log("Server is listening on port 8081, http://localhost:8081");
});