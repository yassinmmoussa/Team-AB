const request = require('request-promise');
const fs = require('fs');

// const receivingServiceURL = 'https://course-sched-6jwajnedta-uc.a.run.app/sched'
const receivingServiceURL = 'http://localhost:9090/sched'

// Fetch the token, then provide the token in the request to the receiving service
const options = {
    method: 'POST',
    uri: receivingServiceURL,
    body: JSON.parse(fs.readFileSync('./contacting-scheduler/example_sched_request.json', 'utf8')),
    json: true
}

request(options)
  .then((token) => {
    console.log(token);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
});
