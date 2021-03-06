/**
 * Google Firestore setup section
 *
 * https://github.com/googleapis/nodejs-firestore-session#google-cloud-firestore-session
 */
const { Firestore } = require('@google-cloud/firestore');
const session = require('express-session');

const { Firestorestore } = require('@google-cloud/connect-firestore');

const database = require('../top_secret/database');

// ========================================================= //

/**
 * Exported functions implementations
 */

function exampleDatabase() {

    console.log('The database is speaking to you...')

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
    // console.log('Someone tried to GET some data');
    let colRef = database.collection(type).where('year', '==', year).where('session','==',session);
    colRef.get()
    .then(function(querySnapshot) {
        var data =  querySnapshot.docs.map(function (documentSnapshot) {
                        return documentSnapshot.data();
                    });
        next(data)
        return data;
    })
    .catch(function(error) {
        console.log('Error getting documents: ', error);
    });
}

/**
 * Function to add 1 document
 */
function addOneCourse(course) {
    console.log('Someone tried to POST some data');
    let JSONcourse = JSON.parse(course);
    //console.log(JSONcourse)
    database.collection('courses').doc().set(JSONcourse)
        .then(function() {
        console.log('Document successfully written!');
       
        })
        .catch(function(error) {
            console.log('Error adding course: ', error);

        });
    
}

/**
 * If the year, session, department, code, section and type of a course
 * match an entry in the database, the provided course object's new properties
 * will be added to the course in the database.
 *
 * This function will not remove data from the database, it only appends.
 *
 * @param {*} course Course object with new properties that already exists in the database
 *
 * Returns true if the object is found and changed, false otherwise
 */
function updateCourse(course, callback) {
    let courseJSON = JSON.parse(course);
    database.collection('courses')
        .where('year','==',courseJSON.year)
        .where('session','==',courseJSON.session)
        .where('dept','==',courseJSON.dept)
        .where('code','==',courseJSON.code)
        .where('section','==',courseJSON.section)
        .where('type','==',courseJSON.type)
        .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            database.collection('courses').doc(doc.id).update(courseJSON);
        });
        callback(true);
    })
    .catch(() => {
        callback(false);
    });
}

/**
 * This function deletes a course permanently from the database 
 * given the information for filtering 
 * 
 * @param {*} course 
 * @param {*} callback 
 */
function deleteCourse(course, callback) {
    console.log('Someone deleted');

    let courseJSON = JSON.parse(course);
    database.collection('courses')
        .where('year','==',courseJSON.year)
        .where('session','==',courseJSON.session)
        .where('dept','==',courseJSON.dept)
        .where('code','==',courseJSON.code)
        .where('section','==',courseJSON.section)
        .where('type','==',courseJSON.type)
        .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            database.collection('courses').doc(doc.id).delete();
        });
        callback(true);
    })
    .catch(() => {
        callback(false);
    });
}

/**
 * Function to add 1 document
 */
function addOneCurriculum(curriculum) {
    console.log('Someone tried to POST a curriculum');
    let JSONcurriculum = JSON.parse(curriculum);
    //console.log(JSONcourse)
    database.collection('curricula').doc().set(JSONcurriculum)
        .then(function() {
        console.log('Document successfully written!');
       
        })
        .catch(function(error) {
            console.log('Error adding curriculum: ', error);

        });
    
}

/**
 * If the year, session, department, and name of a curriculum
 * match an entry in the database, the provided curriculum object's new properties
 * will be added to the course in the database.
 *
 * This function will not remove data from the database, it only appends.
 *
 * @param {*} curriculum Course object with new properties that already exists in the database
 *
 * Returns true if the object is found and changed, false otherwise
 */
function updateCurriculum(curriculum, callback) {
    let courseJSON = JSON.parse(curriculum);
    database.collection('curricula')
        .where('year','==',courseJSON.year)
        .where('session','==',courseJSON.session)
        .where('dept','==',courseJSON.dept)
        .where('name','==',courseJSON.name)
        .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            database.collection('curricula').doc(doc.id).update(courseJSON);
        });
        callback(true);
    })
    .catch(() => {
        callback(false);
    });
}

/**
 * This function deletes a curriculum permanently from the database 
 * given the information for filtering 
 * 
 * @param {*} curriculum 
 * @param {*} callback 
 */
function deleteCurriculum(curriculum, callback) {
    console.log('Someone deleted a curriculum');

    let courseJSON = JSON.parse(curriculum);
    database.collection('curricula')
        .where('year','==',courseJSON.year)
        .where('session','==',courseJSON.session)
        .where('dept','==',courseJSON.dept)
        .where('name','==',courseJSON.name)
        .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            database.collection('curricula').doc(doc.id).delete();
        });
        callback(true);
    })
    .catch(() => {
        callback(false);
    });
}

// function getCourseReference(course) {
//     let courseJSON = JSON.parse(course);
//     return database.collection('courses')
//         .where('year','==',courseJSON.year)
//         .where('session','==',courseJSON.session)
//         .where('dept','==',courseJSON.dept)
//         .where('code','==',courseJSON.code)
//         .where('section','==',courseJSON.section)
//         .where('type','==',courseJSON.type)
//         .get()
// }

/**
 * UNIMPLEMENTED, DO NOT USE
 */
function deleteDocument() {
    console.log('Someone tried to DELETE some data');
}


/**
 *
 * DON'T USE THIS - 'LEGACY' CODE, DEPRECATED
 *
 * Originally designed for building the request object
 *
 * Based on Scheduler input format, we retrieve list of curricula
 * then each curriculum will contain courses with its duration.
 *
 * @param {*} year
 * @param {*} session
 * @param {*} callback
 */
function scheduler_curricula(year, session, callback) {

    // Data that gets passed back to the caller
    var temp = [];

    const docRef = database.collection('curricula').where('year', '==', year).where('session','==',session);

    docRef.get()
        .then(function(querySnapshot) {

            querySnapshot.forEach(function(doc) {
                //console.log(doc.data())

                let curr = {};
                curr = doc.data();
                curr.id = doc.id;
                //temp.push(doc.data());
                temp.push(curr);
                return doc.data();
            });

            //console.log('Database: ' , temp);
            callback(temp);
            return temp;

        })
        .catch(function(error){
            console.log('Querying curricula ran into an error',error);
        });
}

/**
 * DON'T USE THIS - 'LEGACY' CODE, DEPRECATED
 *
 * Originally designed for building the request object
 *
 * @param {*} courseId
 * @param {*} next
 */
function scheduler_course(courseId, next) {

    let colRef = database.collection('courses').doc(courseId).onSnapshot(documentSnapshot => {

        if (documentSnapshot.exists) {

          var data = documentSnapshot.get('duration');
          next(data);
        }

      }, err => {
        console.log(`Encountered error: ${err}`);
      });
}

/**
 * Unofficial function for Mocha regression testing
 * 
 * @param {*} collection 
 * @param {*} docId 
 * @param {*} next 
 */
function lookUpDoc(collection, idfield, next) {
    let colRef = database.collection(collection).where('course_ref', '==', idfield);
    colRef.get() 
    .then(function(querySnapshot) {
        var data =  querySnapshot.docs.map(function (documentSnapshot) {
                        return documentSnapshot.data();
                    });
        console.log(data)
        next(data)
        return data;
    })
    .catch(function(error) {
        console.log('Error getting documents: ', error);
    });
    }


// ========================================================= //

module.exports = {
    example:            exampleDatabase,
    getAll:             batchDocuments,
    addOneCourse,
    deleteCourse,
    updateCourse,
    addOneCurriculum,
    deleteCurriculum,
    updateCurriculum,
    pcpCurricula:       scheduler_curricula,
    pcpCourses:         scheduler_course,
    lookUpDoc,
}
