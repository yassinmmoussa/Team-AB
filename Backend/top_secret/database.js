const {Firestore} = require('@google-cloud/firestore');
const session = require('express-session');

const {FirestoreStore} = require('@google-cloud/connect-firestore');

// ------------  DO NOT MODIFY THIS FILE ------------------//
module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/keys/spare-ab-key.json', // Rename your key to match this
  });
  // ------------  DO NOT MODIFY THIS FILE ------------------//