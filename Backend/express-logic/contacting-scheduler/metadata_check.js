const request = require('request-promise');

const receivingServiceURL = 'localhost:9090/version'

// Set up metadata server request
// See https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature
const metadataServerTokenURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/service-account-name/identity?audience=';
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