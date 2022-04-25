const express = require('express')
const app = express()
var sqlite3 = require('sqlite3').verbose();

app.use(function(req, res, next) {
  express.json();
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.type('.html')
  //res.send('{ "text":"hello world" }')
  res.send(' as hello world')
});

app.get('/GetRecipies', function(req, res, next) {
  res.type('json');
  let db = new sqlite3.Database('./Recipie.db');
  //db.all("Select json_array('RecipieName:',r.recipiename,'ING:',i.ingname) from ingredients as i left join recpies as r on r.recipiekey = i.ingrecipiekey;",
  db.all("Select r.recipiename as Recipie,  from recpies;",
    (error,results) => {
      console.log (results);
      res.send(results);
    });
  db.close();
});

// app.get('/GetIngredientsRecipies', function(req, res, next) {
//   res.type('json');
//   let db = new sqlite3.Database('./Recipie.db');
//   db.all("Select i.ingname as Ingredient from ingredients as i left join recpies as r on r.recipiekey = i.ingrecipiekey;",
//     (error,results) => {
//       console.log (results);
//       res.send(results);
//     });
//   db.close();
// });

app.get('/GetIngredients', function(req, res, next) {
  res.type('json');
  let db = new sqlite3.Database('./Recipie.db');
  db.all("Select ingname, count(ingname) as count from ingredients group by ingname order by count desc;",
    (error,results) => {
      console.log (results);
      res.send(results);
    });
  db.close();
});


app.listen(8080)
