const Apps = require('../../apps-model/apps-model');

function getApps(app) {
    app.get('/api/apps', (req, res) => {
        Apps.find({}, (err, apps) => {
            if (err) {
                throw err;
            }
            res.send(apps);
        })
    })
}

module.exports = getApps;