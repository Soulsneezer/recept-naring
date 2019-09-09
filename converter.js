// Require modules
const parser = require('xml2json');
const fs = require('fs');

// Read the xml file
let xml = fs.readFileSync('./livsmedelsdata.xml', 'utf-8');

// Convert to JSON
let json = parser.toJson(xml);

// Make the JSON more readable 
// (with line breaks + indentation)
let data = JSON.parse(json);
json = JSON.stringify(data, '', '  ');

// Save the JSON
fs.writeFileSync('./livsmedelsdata.json', json, 'utf-8');