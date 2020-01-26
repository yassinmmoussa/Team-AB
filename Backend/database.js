/**
 * Google Firestore setup section
 * 
 * https://github.com/googleapis/nodejs-firestore-session#google-cloud-firestore-session
 */
const { Firestore } = require('@google-cloud/firestore');
const session = require('express-session');

const { FirestoreStore } = require('@google-cloud/connect-firestore');

const database = require('./top_secret/database');

// ========================================================= //

/**
 * Exported functions implementations
 */

function exampleDatabase() {

    console.log("The database is speaking to you...")

    /**
 * Example database storing
 * 
 * This code shouldn't be permanent, should just
 * serve as an example for future database calls
 */
    let docRef = database.collection('users').doc('new_example');

    // .set() creates or overwrites data
    docRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 181
    });

    // Server boot counter
    let serverBoots = database.collection('Internal Data').doc('Server');

    serverBoots.update({
        Boots: Firestore.FieldValue.increment(1)
    });
}

function batchDocuments(res) {
    console.log("Someone tried to GET some data");
    //res.status(200).send({data: "whaddup"});
    let colRef = database.collection('courses');
    colRef.get()
    .then(function(querySnapshot) {
        var data = querySnapshot.docs.map(function (documentSnapshot) {
            return documentSnapshot.data();
        });
        res.status(200).send(data); 
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });  
       
}
// ========================================================= //

module.exports = {
    example: exampleDatabase, getAll: batchDocuments


}
