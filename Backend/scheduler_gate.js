// var fs = require('fs');
// const request = require('request-promise');

// const receivingServiceURL = 'https://course-sched-6jwajnedta-uc.a.run.app/sched';


// // "Authorization: Bearer $(gcloud auth print-identity-token)" -H 
// // "Content-type: application/json" --data 
// // "@examples/example_sched_request.json" 
// // https://course-sched-6jwajnedta-uc.a.run.app/sched


// // Set up metadata server request
// // See https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature
// const metadataServerTokenURL = 'http://metadata/computeMetadata/v1/instance/service-accounts/default/identity?audience=';
// const tokenRequestOptions = {
//   uri: metadataServerTokenURL + receivingServiceURL,
//   headers: {
//     'Metadata-Flavor': 'Google'
//   }
// };

// // Fetch the token, then provide the token in the request to the receiving service
// request(tokenRequestOptions)
//   .then((token) => {
//     console.log('got token');
//     const options = {
//       method: 'POST',
//       uri: receivingServiceURL,
//       body: JSON.parse(fs.readFileSync('./sample_scheduler_request.json', 'utf8')),
//       json: true
//     };
//     return request(options).auth(null, null, true, token)
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
// });


const request = require('request-promise');

const receivingServiceURL = 'https://course-sched-6jwajnedta-uc.a.run.app/sched'

// Set up metadata server request
// See https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature
const metadataServerTokenURL = 'http://metadata/computeMetadata/v1/instance/service-accounts/default/identity?audience=';
const tokenRequestOptions = {
  uri: metadataServerTokenURL + receivingServiceURL,
  headers: {
    'Metadata-Flavor': 'Google'
  }
};

// Fetch the token, then provide the token in the request to the receiving service
request(tokenRequestOptions)
  .then((token) => {
    return request(receivingServiceURL).auth(null, null, true, token)
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
});
