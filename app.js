const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
const { callbackify } = require('util');


app.listen(port, () => console.log(`listening at http://localhost:${port}`));

//all that is in here is supose to be public
app.use(express.static('public'));

//body parser support parsing of application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/forms', (req, res) => {
    console.log("forms");
    res.sendFile('public/forms.html', { root: __dirname });
});


app.post('/hola', function (req, res) {
    console.log('post');    
    console.log(req.body);
    const data = JSON.stringify(req.body);
    fs.writeFile('code.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
    res.redirect('/');
  });

  app.get('/leer',(req, res) => {
        
    //borrar    
    fs.readFile('code.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        // parse JSON object
        const user = JSON.parse(data.toString());
    
        // print JSON object
        console.log(user.textarea);
    });
  });
 