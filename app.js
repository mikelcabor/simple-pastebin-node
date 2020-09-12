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

//route to user
router.use('/index', (req, res) => {
    console.log("index");
    res.sendFile('public/index.html', { root: __dirname });
});

app.use('/', router);


app.get('/forms', (req, res) => {
    console.log("forms");
    res.sendFile('public/forms.html', { root: __dirname });
});


app.post('/addCode', function (req, res) {
    console.log('post');        

    newCode.push(req.body);
    console.log(newCode);    
    
    fs.readFile('code.json', (err, data) =>{
        if (err){
            console.log(err);
        } else {
        
        var json = JSON.stringify(newCode); //convert it back to json
        console.log(json);
        fs.writeFile('code.json', json, err => { if (err) console.log(err) }); // write it back 
    }});

    res.redirect('/');
  });

  app.get('/leer',(req, res) => {        
    //borrar    
    fs.readFile('code.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        // parse JSON object
        //var readCode = JSON.parse(data.toString());
        
        // print JSON object
        
        res.end(data);
        
        
    });
  });
 