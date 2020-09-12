//Test with gibhub
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
var currentCode = [];
var newCode = [];


app.listen(port, () => console.log(`listening at http://localhost:${port}`));

//all that is in here is supose to be public
app.use(express.static('public'));

//body parser support parsing of application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//route to index
router.use('/index', (req, res) => {
    console.log("index");
    res.sendFile('public/index.html', { root: __dirname });
});

app.use('/', router);

//im not using a router here because all is working as intended but is not the best solution
app.get('/forms', (req, res) => {
    console.log("forms");
    res.sendFile('public/forms.html', { root: __dirname });
});

//POST method that read the actual json file and add the new code on /forms
app.post('/addCode', function (req, res) {
    //console.log('post');        
    newCode.push(req.body);
    //console.log(newCode);    
    
    fs.readFile('code.json', (err, data) =>{
        if (err){
            console.log(err);
        } else {
        
        var json = JSON.stringify(newCode); //convert it back to json
        console.log(json);
        fs.writeFile('code.json', json, err => { if (err) console.log(err) }); // write it back 
    }});
    //back to the main page
    res.redirect('/');
  });

  app.get('/leer',(req, res) => {        
    //borrar    
    fs.readFile('code.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }  

        res.end(data);
    });
  });
 