const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const appsSchema = new Schema({
    user: String,
    category: String,
    apps: Array,
    description: Object
});

const apps = mongoose.model('apps', appsSchema);
module.exports = apps;