from google.cloud import firestore
import json
import csv
import pandas as pd
import os

# aunthenticate step
credential_path = "/Users/nhivuong/Downloads/spare-ab-7e92704b1fa8.json" # add your
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path
store = firestore.Client()

# Step 1
'''
# Read csv and convert 
csv_file = pd.DataFrame(pd.read_csv("courses.csv", sep = ",", header = 0, index_col = False))
csv_file.to_json("courses.json", orient = "records", date_format = "epoch", double_precision = 10, force_ascii = True, date_unit = "ms", default_handler = None)
'''

'''
# Read in the file
with open('courses.json', 'r') as file :
    filedata = file.read()

# Replace the target string 
filedata1 = filedata.replace('\\"', '"')
filedata2 = filedata1.replace('"[', '[')
filedata3 = filedata2.replace(']"', ']')

# Write the file out again
with open('courses.json', 'w') as file:
  file.write(filedata3)
'''


# step 2
collection_name = "COURSES_VER2"

with open('courses.json') as f:
    batch_data = json.load(f)

batch = store.batch()
for data_item in batch_data:
    doc_ref = store.collection(collection_name).document()
    batch.set(doc_ref, data_item)
batch.commit()

print('Done')

