import csv
import json 
import numpy as np
"""data = {}

#with open('RoughProfiles.csv', newline = '') as csvfile:
    reader = csv.reader(csvfile, delimiter = ',')
    firstline = next(reader)
    for row in reader:
        data[row[0]] = dict(zip(firstline, row))

#with open('postingData.json', 'w') as outfile:
    json.dump(data, outfile)"""

with open('postingData.json', 'r') as inFile:
    data = json.load(inFile)

for key in data:
    maxPrice = data[key]['Price/kg']
    minPrice = float(maxPrice[2:]) - np.random.rand()*5
    minPrice = "%.2f" % round(minPrice, 2)
    data[key]['minPrice'] = 'Rs' + minPrice

#with open('postingData.json', 'w') as outFile:
    json.dump(data, outFile)