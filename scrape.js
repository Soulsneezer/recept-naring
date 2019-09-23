// This is a lesson in "scraping" - getting and resusing data from other web sites
// (if this is legal or not depends on the copyright of the data)
 
 
// Request is a module that makes it easy to get 
// data from an url (for example html)
// (request-promise-native is a small wrapper that 
//  lets you use await with request)
const request = require('request-promise-native');
 
// Cheerio is a "jQuery emulator" that let's you use 
// jQuery queries in a fake DOM on your backend
const cheerio = require('cheerio');
 
async function scrape(){
  // Get the raw HTML we want to scrape
  let html = await request('https://livsmedelsinfo.nu/volymvikt.aspx');
  // Convert into a "DOM" that cheerio can use
  let $ = cheerio.load(html);
 
  // After some studying of the HTML structure 
  // we are ready to extract the data...
  let data = [];
 
  // Mapping properties in table per column
  let columnHeadings = [
    {name: 'countBtn', include: false},
    {name: 'name', include: true},
    {name: 'group', include: false},
    {name: '1dl', include: true, number: true},
    {name: '1smallUnit', include: true, number: true},
    {name: '1mediumUnit', include: true, number: true},
    {name: '1largeUnit', include: true, number: true},
    {name: '1portion', include: true, number: true}
  ];
 
  // Grab the trs/rows from the table containing them
  let rows = $('tbody tr');
  rows.each(function(){
    let item = {};
    let columns = $(this).find('td');
    // Go through columns and add as properties
    // in our item object
    columns.each(function(i){
      if(columnHeadings[i].include){
        let text = $(this).text();
        if(columnHeadings[i].number){
          // convert 'XX g' format to a number
          text = text.split(' ')[0] / 1;
        }
        // add the property to the item (if not a NaN value)
        if(!isNaN(text)){
          // if(isNaN(text)==="-") {text=''}
          item[columnHeadings[i].name] = text;
        }
        // add the property to the item (if a Nan value)
        if(isNaN(text)){
          item[columnHeadings[i].name] = text;
        }
      }
    });
    // Add the item to our array of data
    data.push(item);
  });
 
  // Have a look at the data
  console.log(data);
 
  // Think about: Do I need to store all this data?
  // Should I only use one unit to gram property
  // - if so is that the 1medium or 1largeUnit?
  // (does the largeUnit-value always exist?)
  // etc. DO FURTHER FILTERING!
 
  // Save your data (to a file if yo want)
  // Import it to a database!

  let jsonData = JSON.stringify(data);

  var fs = require('fs');
  fs.writeFile("foodUnits.json", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
  });
 
}
 
scrape();