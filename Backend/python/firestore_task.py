from google.cloud import firestore
import json
import pandas as pd
import os

'''
    Mission: updates the color word to hex
'''

credential_path = "../key.json" 
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path
data=[ ]

# Add a new document
db = firestore.Client()
col = db.collection(u'courses').get()
documents = [snapshot.reference for snapshot in col]
updateMe = { 'blocks_per_wk' : 6 }

'''for doc in documents :
    doc.update(updateMe)
print('Done')'''
    