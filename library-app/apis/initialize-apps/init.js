const Apps = require('../../apps-model/apps-model');

function setupInitialApps(app) {
    app.get('/api/setup-apps', (req, res) => {
        //Initial apps
        const initApps = [
            {
                user: 'poc',
                category: 'Performance',
                apps: ['Performance Snapshot', 'CMS'],
                description: {info: ''}
            },
            {
                user: 'poc',
                category: 'Investment',
                apps: ['Commitment Widget', 'CMS'],
                description: {info: ''}
            },
            {
                user: 'poc',
                category: 'Voice',
                apps: [],
                description: {info: ''}
            },
            {
                user: 'poc',
                category: 'Communication',
                apps: ['Skype'],
                description: {info: ''}
            }
        ]
        
        Apps.create(initApps, (err, apps) => {
            if (err) {
                throw err;
            }
            // Response should be localized
            res.send('DB populated');
        })
    })
}

module.exports = setupInitialApps;