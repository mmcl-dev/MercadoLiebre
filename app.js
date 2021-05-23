const express = require ('express');
const path = require ('path');
const app = express();

const publicPath = path.resolve (__dirname, './public');
console.log('PUBLIC :',publicPath);
app.use (express.static(publicPath));

app.listen(process.env.PORT || 3033, ()  => console.log('Servidor escuchando en puerto 3033'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, './views/login.html'));
});