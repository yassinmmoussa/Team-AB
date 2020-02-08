# My "top secret" folder generation guide
In order to authenticate Firestore db, your js is required to pass over a service account credential bundle - in the format of `some-hashed-key.json`. You may review a working example in `database.js`. Change the name of your key to spare-ab-key.json to be used.

It's your responsibility to store and protect this private key as it's linked to GCP billing per requesto.

### Setting up
1. Create a service account on GCP spare-ab and save the .json key
* `IAM & admin > Service accounts > Create service account`
2. Update the name in your key to 'spare-ab-key.json' and put it in a /keys/ folder in this directory. (you will have to create this /keys/ folder)

To avoid duplicating same privileges, we encourage you to inform server owners before creating a new account.  
