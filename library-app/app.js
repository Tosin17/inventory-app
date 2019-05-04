const express = require('express');
const exhbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
const config = require('./config');
const mongoose = require('mongoose');
const addInitLibApps = require('./apis/initialize-apps/init');
const getApps = require('./apis/get-apps-api/get-apps-api');

// app.use('/assets', express.static(__dirname + '/public'));
app.engine('handlebars', exhbs());
app.set('view engine', 'hsb');
mongoose.connect(config.getDbConnection(), { useNewUrlParser: true })
.then(() => console.log('Connected to mongo db'))
.catch((err) => console.log(err));

addInitLibApps(app);
getApps(app);

app.listen(PORT, () => {
    console.log('Server started');
});

