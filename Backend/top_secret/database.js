const {Firestore} = require('@google-cloud/firestore');
const session = require('express-session');

const {FirestoreStore} = require('@google-cloud/connect-firestore');

// ------------  DO NOT MODIFY THIS FILE ------------------//

// Old Ver
/*module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/keys/spare-ab-key.json', // Rename your key to match this
  });*/
  
// New Ver for auto-authenticate
  if (process.env.DEV === "true") {
    module.exports = new Firestore({
        projectId: 'spare-ab',
        keyFilename: './top_secret/keys/spare-ab-key.json'
    });
} else {
    module.exports = new Firestore({
        projectId: 'spare-ab'
    });
}

// ------------  DO NOT MODIFY THIS FILE ------------------//