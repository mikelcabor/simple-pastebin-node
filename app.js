const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
const { json } = require('body-parser');
var currentCode = [];
var newCode = [];


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

    newCode.push(req.body);
    console.log(newCode);    
    
    fs.readFile('code.json', (err, data) =>{
        if (err){
            console.log(err);
        } else {
        
        var json = JSON.stringify(newCode); //convert it back to json
        console.log(json);
        fs.writeFile('code.json', json); // write it back 
    }});




    /*fs.readFile('code.json', (err, data) => {
        if (err) {
            throw err;
        }    
        // parse JSON object
        const readCode = JSON.parse(data.toString());
    
        // print JSON object
        console.log(readCode);
    });
    let rawdata = fs.readFileSync('code.json');
    let code = JSON.parse(rawdata);
    code.push(...anchors);

    console.log(student);
    const data = JSON.stringify(req.body);
    fs.writeFile('code.json', student, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });*/
    res.redirect('/');
  });

  app.get('/leer',(req, res) => {
        
    //borrar    
    fs.readFile('code.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        // parse JSON object
        const readCode = JSON.parse(data.toString());
    
        // print JSON object
        console.log(readCode);
    });
  });
 