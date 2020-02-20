const request = require('request-promise');

const receivingServiceURL = 'https://course-sched-6jwajnedta-uc.a.run.app/sched'

function schedule(requestData, callback) {

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
            const options = {
            method: 'POST',
            uri: receivingServiceURL,
            body: requestData,
            json: true
            };
            return request(options).auth(null, null, true, token)
        })
        .then((response) => {
            callback(response);
        })
        .catch((error) => {
            console.log(error);
        });

}

module.exports = schedule;