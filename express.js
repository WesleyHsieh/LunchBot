
var fs      = require('fs');
var express = require('express');
var https   = require('https');
var path    = require('path');
var pug     = require('pug');

var RecipeLib = require('./logic.js');
var GroupLib = require('./group.js');
var logicLib = require('./logic.js');

var key = fs.readFileSync('./ssl.key');
var cert = fs.readFileSync('./ssl.cert')
var https_options = {
    key: key,
    cert: cert
};

var PORT = 443;
app = express();

server = https.createServer(https_options, app).listen(PORT);
console.log('HTTPS Server listening on Port %s', PORT);

// routes
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/room', function(req, res) {
    res.sendFile(path.join(__dirname, 'room.html'));
});

app.get('/room', function(req, res) {
  var locals = {
    maintainer: {
      name: 'Forbes Lindesay',
      twitter: '@ForbesLindesay',
      blog: 'forbeslindesay.co.uk'
    }
  };

  var html = pug.renderFile(path.join(__dirname, 'templates', 'room.pug'), locals);
  res.send(html);
});

app.get('/room/:id', function(req, res) {
  // Where we have entered a specific room and want to vote for recipes (or add them)
  //var mac = RecipeLib.Recipe("Mac n Cheese");
  //mac.details = "macaroni and cheese, ya dig?";
  //mac.link = "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps41117_ESC1801517D82.jpg";

  var mac = RecipeLib.Recipe("Mac n' Cheese", "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps41117_ESC1801517D82.jpg");
  var caprese = RecipeLib.Recipe("Caprese Salad", "https://pleasebebrave.files.wordpress.com/2012/06/dsc_0961.jpg");
  var smoothie = RecipeLib.Recipe("Avocado and Spinach Smoothie", "http://www.upstateramblings.com/wp-content/uploads/2014/06/mango-avocado-smoothie-2.png");

  //var mac = RecipeLib.Recipe("Mac n Cheese");
  mac.details = {"uncooked elbow macaroni": "8 ounces",
                 "shredded Sharp Cheddar cheese": "2 cups",
                 "grated Parmesan cheese": "0.5 cup",
                 "milk": "3 cups",
                 "butter": "0.25 cups",
                 "all-purpose flour": "2.5 tablespoons",
                 "bread crumbs": "2 tablespoons",
                 "paprika": "1 pinch",
                 "step1": "Cook macaroni according to package directions, drain",
                 "step2": "In a saucepan, melt butter over medium heat. Stir in flour and add milk and cheeses",
                 "step3": "melt butter and add breadcrumbs. Spread over mac and cheese and cover. Sprinkle paprika",
                 "step4": "Bake at 350 degrees for 30 minutes."};
  mac.picture = "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps41117_ESC1801517D82.jpg";
  //var caprese = RecipeLib.Recipe("Caprese Salad");
  caprese.details = {"vine-ripe tomatoes": "3 cut into .25-inch thick slices",
                     "fresh mozzarella": "1 pound cut into 0.25-inch thick slices",
                     "fresh basil": "20-30 leaves",
                     "extra-virgin olive oil": "for drizzling",
                     "coarse salt and pepper": "for taste",
                     "step1": "Layer alternating slices of tomato and mozzarella adding a basil leaf between each, on a large, shallow platter.",
                     "step2": "Drizzle the salad with extra virgin olive oil and season with salt and pepper, to taste"};
caprese.picture = "https://pleasebebrave.files.wordpress.com/2012/06/dsc_0961.jpg";  
  //var smoothie = RecipeLib.Recipe("Avocado and Spinach Smoothie");
  smoothie.details = {"apple juice": "1.5 cups",
                      "stemmed and chopped spinach": "2 cups",
                      "unpeeled, cored, chopped apple": "1",
                      "chopped avocado": "0.5",
                      "step1": "Combine the apple juice, spinach, apple, and avoacdo in a blender and puree until smooth, about 1 minute, adding water to reach desired consistency"};
  smoothie.picture = "http://www.upstateramblings.com/wp-content/uploads/2014/06/mango-avocado-smoothie-2.png";
  var locals = {
    room_id: req.params.id,
    recipes: [ mac, caprese , smoothie ]
  };
  var html = pug.renderFile(path.join(__dirname, 'templates', 'vote.pug'), locals);
  res.send(html);
});

app.get('/room/:id/mealtime', function(req, res) {
  var mac = RecipeLib.Recipe("Mac n' Cheese", "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps41117_ESC1801517D82.jpg");
  var caprese = RecipeLib.Recipe("Caprese Salad", "https://pleasebebrave.files.wordpress.com/2012/06/dsc_0961.jpg");
  var smoothie = RecipeLib.Recipe("Avocado and Spinach Smoothie", "http://www.upstateramblings.com/wp-content/uploads/2014/06/mango-avocado-smoothie-2.png");
  var locals = {
    recipe: mac,
    recipe: caprese,
    recipe: smoothie
  };

  mac.details = {"uncooked elbow macaroni": "8 ounces",
                 "shredded Sharp Cheddar cheese": "2 cups",
                 "grated Parmesan cheese": "0.5 cup",
                 "milk": "3 cups",
                 "butter": "0.25 cups",
                 "all-purpose flour": "2.5 tablespoons",
                 "bread crumbs": "2 tablespoons",
                 "paprika": "1 pinch",
                 "step1": "Cook macaroni according to package directions, drain",
                 "step2": "In a saucepan, melt butter over medium heat. Stir in flour and add milk and cheeses",
                 "step3": "melt butter and add breadcrumbs. Spread over mac and cheese and cover. Sprinkle paprika",
                 "step4": "Bake at 350 degrees for 30 minutes."};
  mac.picture = "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps41117_ESC1801517D82.jpg";

  caprese.details = {"vine-ripe tomatoes": "3 cut into .25-inch thick slices",
                     "fresh mozzarella": "1 pound cut into 0.25-inch thick slices",
                     "fresh basil": "20-30 leaves",
                     "extra-virgin olive oil": "for drizzling",
                     "coarse salt and pepper": "for taste",
                     "step1": "Layer alternating slices of tomato and mozzarella adding a basil leaf between each, on a large, shallow platter.",
                     "step2": "Drizzle the salad with extra virgin olive oil and season with salt and pepper, to taste"};

  smoothie.picture = "http://www.upstateramblings.com/wp-content/uploads/2014/06/mango-avocado-smoothie-2.png";

  smoothie.details = {"apple juice": "1.5 cups",
                      "stemmed and chopped spinach": "2 cups",
                      "unpeeled, cored, chopped apple": "1",
                      "chopped avocado": "0.5",
                      "step1": "Combine the apple juice, spinach, apple, and avoacdo in a blender and puree until smooth, about 1 minute, adding water to reach desired consistency"};
  caprese.picture = "https://pleasebebrave.files.wordpress.com/2012/06/dsc_0961.jpg";
  var html = pug.renderFile(path.join(__dirname, 'templates', 'recipe.pug'), locals);
  res.send(html);
});

app.get('/room/:id/split', function(req, res) { 
  var mac = RecipeLib.Recipe("Mac n Cheese");
  mac.details = "macaroni and cheese, ya dig?";
  mac.price = 9;
  var hiBob = new logicLib.Person(1, "Bob");
  var group = new GroupLib.Group(hiBob.userid, hiBob);
  group.add_person(2, "Alice");
  group.add_person(3, "Eve");
  group.selected_recipe = mac;
  var locals = {
    room_id: req.params.id,
    costs: group.splitCosts()
  };
  var html = pug.renderFile(path.join(__dirname, 'templates', 'split.pug'), locals);
  res.send(html);
});
