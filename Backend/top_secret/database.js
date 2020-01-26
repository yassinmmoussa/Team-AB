const {Firestore} = require('@google-cloud/firestore');
const session = require('express-session');

const {FirestoreStore} = require('@google-cloud/connect-firestore');

module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/spare-ab-7cdd504af0c3.json', // This key is no longer valid
  });