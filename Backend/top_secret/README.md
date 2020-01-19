# My "top secret" folder generation guide
Note: /top-secret folder is now listed in gitignore.
Any change you make in this dir will not be committed.

In order to authenticate Firestore db, your js is required to pass over an account service credentials in the format of `some-hashed-key.json` as shown in ./database.js example.
It's your responsibility to store and protect this private key as it's linked to GCP billing per requesto.

### Setting up
1. Get the .json key from GCP spare-ab 
2. Update the path in your js.

```
module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/1234.json', // UPDATE ME
  });
```
