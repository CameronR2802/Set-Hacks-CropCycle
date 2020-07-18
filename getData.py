import csv
import json 

data = {}

#with open('RoughProfiles.csv', newline = '') as csvfile:
    reader = csv.reader(csvfile, delimiter = ',')
    firstline = next(reader)
    for row in reader:
        data[row[0]] = dict(zip(firstline, row))

#with open('postingData.json', 'w') as outfile:
    json.dump(data, outfile)