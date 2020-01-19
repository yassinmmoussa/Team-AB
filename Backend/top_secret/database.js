const {Firestore} = require('@google-cloud/firestore');
const session = require('express-session');

const {FirestoreStore} = require('@google-cloud/connect-firestore');

module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/spare-ab-47795b8e5779.json', // This key is no longer valid
  });