from google.cloud import firestore
import json
import pandas as pd
import os

'''
    A short script that perform query all document under 'courses' collection
    and converts/writes to csv file. Some online examples
    https://github.com/GoogleCloudPlatform/python-docs-samples/blob/master/firestore/cloud-client/snippets.py 
    Documentation: https://googleapis.dev/python/firestore/latest/document.html# 
    
'''

credential_path = "/top_secret/keys/spare-ab-key.json" # add your
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path
data=[ ]

# Add a new document
db = firestore.Client()
users_ref = db.collection(u'courses')
for doc in users_ref.stream():
    data.append(doc.to_dict())

json_string = json.dumps(data)

df = pd.read_json (json_string)
df.to_csv ("output.csv", index=None)