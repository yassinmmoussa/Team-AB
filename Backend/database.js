/**
 * Google Firestore setup section
 * 
 * https://github.com/googleapis/nodejs-firestore-session#google-cloud-firestore-session
 */
const { Firestore } = require('@google-cloud/firestore');
const session = require('express-session');

const { Firestorestore } = require('@google-cloud/connect-firestore');

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

function batchDocuments(year, session, next) {
    console.log("Someone tried to GET some data");
    let colRef = database.collection('courses').where("year", "==", year).where("session","==",session);
    colRef.get()
    .then(function(querySnapshot) {
        var data =  querySnapshot.docs.map(function (documentSnapshot) {
                        return documentSnapshot.data();
                    });
        next(data)
        return data;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });        
}

function addDocuments() {
    console.log("Someone tried to POST some data");
    //a testing doc data to add into firestore, in the future i will 
    //use passed data from post request
    var newCourse= { 
        code: 4413,
        colour: "blue",
        days: {
            0:0,
        },
        dept: "EECS",
        duration: 4,
        instructor: "Marin Litou",
        lab_section: "1",
        name: "Building E-Commerce Systems",
        section: "E",
        session: "F",
        starting_block: 8,
        type: "lab",
        year: 1997
    }

    let colRef = database.collection('courses').doc("TESTING").set(newCourse).then(function() {
        console.log("Document successfully written!");
    });
}

function updateDocument() {
    console.log("Someone tried to PUT some data");
    let colRef = database.collection('courses').where("year","==",1997)
    .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            database.collection("courses").doc(doc.id).update({year: 1});
        });
    })
}

function deleteDocument() {
    console.log("Someone tried to DELETE some data");
    let colRef = database.collection('courses').where("year","==",1)
    .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            database.collection("courses").doc(doc.id).delete();
        });
    })
}

function PCP_curricula(year, session, next) {
    // first give connor all curricula
    let colRef = database.collection("curricula").where("year", "==", year).where("session","==",session);
    colRef.get()
        .then(function(querySnapshot) {
            var data =  querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data();
        }).catch(function() {
            console.log("Couldn't retreive curricula!");
        });
        next(data);
    }) 
}

function PCP_courses(courseId, next) {
    // then feed him courses info per curriculum
    let colRef = database.collection("courses").where("id","==",courseId);
    colRef.get()
        .then(function(querySnapshot) {
            var data =  querySnapshot.docs.map(function (documentSnapshot) {
                return documentSnapshot.data().duration;
        }).catch(function() {
            console.log("Couldn't retreive courses!");
        });
        next(data);
    })
}

// ========================================================= //

module.exports = {
    example:        exampleDatabase, 
    getAllCourses:  batchDocuments, 
    postCourses:    addDocuments,
    putCourse:      updateDocument,
    deleteCourse:   deleteDocument,
    pcpCurricula:   PCP_curricula,
    pcpCourses:     PCP_courses,
}
