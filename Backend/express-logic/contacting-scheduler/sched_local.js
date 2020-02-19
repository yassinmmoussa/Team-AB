const request = require('request-promise');

// const receivingServiceURL = 'https://course-sched-6jwajnedta-uc.a.run.app/sched'
const receivingServiceURL = 'http://localhost:9090/sched'


function schedule(requestData, callback) {

    // Fetch the token, then provide the token in the request to the receiving service
    const options = {
        method: 'POST',
        uri: receivingServiceURL,
        body: requestData,
        json: true
    }

    request(options)
    .then(token => console.log(token))
    .then(response => {
        callback(response);
    })
    .catch(error => console.log(error));

}

module.exports = schedule;