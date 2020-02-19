from google.cloud import firestore
import json
import pandas as pd
import os

'''
    Mission: updates the color word to hex
'''

credential_path = "./top_secret/keys/spare-ab-key.json" 
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path
data=[ ]

# Add a new document
db = firestore.Client()
col = db.collection(u'courses').where('colour', '==', 'blue').get()
documents = [snapshot.reference for snapshot in col]
updateMe = { 'colour' : '#003366' }
for doc in documents :
    #doc.update(updateMe)
    