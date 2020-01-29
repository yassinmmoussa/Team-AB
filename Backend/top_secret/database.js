const {Firestore} = require('@google-cloud/firestore');
const session = require('express-session');

const {FirestoreStore} = require('@google-cloud/connect-firestore');

module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/keys/spare-ab-YOUR_KEY_NAME_HERE.json', // Put your key here
  });