const request = require('request-promise');

// const receivingServiceURL = 'https://course-sched-6jwajnedta-uc.a.run.app/sched'
const receivingServiceURL = 'http://localhost:9090/version'

// Fetch the token, then provide the token in the request to the receiving service
request(receivingServiceURL)
  .then((token) => {
    return request(receivingServiceURL)
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
});
