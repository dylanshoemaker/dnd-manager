const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
var exphbs = require('express-handlebars')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//handlebars GET
app.get('/', (req, res) => {
  res.render('home');
})

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

//handlebars port, for testing
app.listen(3000);