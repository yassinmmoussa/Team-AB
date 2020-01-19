# My "top secret" folder generation guide
Note:  `/top-secret` folder is now listed in .gitignore.
Any change you make in this dir will not be committed.

In order to authenticate Firestore db, your js is required to pass over a service account credential bundle - in the format of `some-hashed-key.json`. You may review a working example in `database.js`.

It's your responsibility to store and protect this private key as it's linked to GCP billing per requesto.

### Setting up
1. Create a service account on GCP spare-ab and save the .json key
* `IAM & admin > Service accounts > Create service account`
2. Update the path in your js to the .json key path 
```
module.exports = new Firestore({
    projectId: 'spare-ab',
    keyFilename: './top_secret/1234.json', // UPDATE ME
  });
```

To avoid duplicating same privileges, we encourage you to inform server owners before creating a new account.  
