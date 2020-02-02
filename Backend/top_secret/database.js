const {Firestore} = require('@google-cloud/firestore');
const session = require('express-session');

const {FirestoreStore} = require('@google-cloud/connect-firestore');

// ------------  DO NOT MODIFY THIS FILE ------------------//

<<<<<<< HEAD
// Old Ver
  module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/keys/spare-ab-key.json', // Rename your key to match this
  });

=======
>>>>>>> 94e244e25acfad84b929c1eeb53b3e79479a2c13
/**
 * New Ver for auto-authenticate
 * Ref: https://cloud.google.com/docs/authentication/production#finding_credentials_automatically
 */
  if (process.env.DEV === "true") {
    module.exports = new Firestore({
        projectId: 'spare-ab',
        keyFilename: './top_secret/keys/spare-ab-key.json' //Store and Rename your key to match this
    });
} else {
    module.exports = new Firestore({
        projectId: 'spare-ab'
    });
}

// ------------  DO NOT MODIFY THIS FILE ------------------//
