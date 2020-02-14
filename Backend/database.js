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

/**
 * Function get batch documents (read)
 * currently take in year and session to return courses information
 * potentially gets abstract in the future for code-reuse
 * 
 * @param `type` is either 'courses' or 'curricula'
 */
function batchDocuments(type, year, session, next) {
    // console.log("Someone tried to GET some data");
    let colRef = database.collection(type).where("year", "==", year).where("session","==",session);
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

/**
 * Function to add 1 document 
 * currently adding directly under hard-coded doc ID 
 */
function addOneDocument() {
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

/**
 * Function update a document based on field value
 * also hard-coded for testing purpose
 */
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

/**
 * Delete document; should not be called at the moment
 */
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

/**
 * Based on Scheduler input format, we retrieve list of curricula 
 * then each curriculum will contain courses with its duration.
 */
function scheduler_curricula(year, session, callback) {
    // first give connor all curricula
    // var colRef = database.collection("curricula").where("year", "==", year).where("session","==",session);
    /* var output = colRef.get().then(function(querySnapshot) {
        var data =  querySnapshot.docs.map(function (documentSnapshot) {
            return documentSnapshot.data();
        });
        //next(data);
    })  */

    // Data that gets passed back to the caller
    var temp = [];

    const docRef = database.collection('curricula').where("year", "==", year).where("session","==",session);

    docRef.get()
        .then(function(querySnapshot) {
            
            querySnapshot.forEach(function(doc) {
                //console.log(doc.data())
                temp.push(doc.data());
                return doc.data();
            }); 
            
            console.log("Database: " + temp);
            callback(temp);
            return temp;

        })
        .catch(function(error){
            console.log("Querying curricula ran into an error",error);        
        })
}

/**
 * Function returns duration of a course
 */
function scheduler_course(courseId, next) {
    // then feed him courses info per curriculum
    // let colRef = database.collection("courses").where(firestore.FieldPath.documentId(),"==",courseId);
    // colRef.get().then(function(querySnapshot) {
    //     var data =  querySnapshot.docs.map(function (documentSnapshot) {
    //         return documentSnapshot.data().duration;
    //     });
    //     next(data);
    // })
    let colRef = database.collection("courses").doc(courseId).onSnapshot(documentSnapshot => {
        if (documentSnapshot.exists) {
          //console.log(documentSnapshot.get('duration'));
          var data = documentSnapshot.get('duration');
          next(data);
        }
      }, err => {
        console.log(`Encountered error: ${err}`);
      });
}

// ========================================================= //

module.exports = {
    example:         exampleDatabase, 
    getAllCourses:   batchDocuments,
    getAllCurricula: batchDocuments, 
    postCourses:     addOneDocument,
    putCourse:       updateDocument,
    deleteCourse:    deleteDocument,
    pcpCurricula:    scheduler_curricula,
    pcpCourses:      scheduler_course,

    // Connor added these
    scheduler_course: scheduler_course,
    scheduler_curricula: scheduler_curricula,
}
