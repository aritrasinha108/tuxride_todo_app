var express = require('express');
var connectionDB = require('./config/db');
var app = express();
var todoRouter = require('./controllers/todo');
const PORT = 5000;
connectionDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use('/', todoRouter);

app.listen(PORT, () => console.log('The server started runnig on port 5000'));
