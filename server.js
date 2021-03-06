var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON, MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// app.engine is setting the view engine as well as the default layout. This line tells express to look in the /views/layouts folder a main.handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// not sure  if I have to include '/'?
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});