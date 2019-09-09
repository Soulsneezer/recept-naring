const fs = require('fs');
 
let data = require('./livsmedelsdata.json');
 
// There is only important data in this path
data = data.LivsmedelDataset.LivsmedelsLista.Livsmedel;
 
// Check how many items we have
console.log("Number of items:", data.length);
 
// Have a look at an item to understand its structure
console.log("\n\nBefore cleaning (example item):\n", data[100]);
 
// Change the data format of all items
for(food of data){
    // I don't need the Nummer property
    delete food.Nummer;
    // Test is ViktGram ever something else than
    // 100 - it isn't
    /*if(food.ViktGram !== '100'){
        console.log('Viktgram', food.ViktGram);
    }*/
    delete food.ViktGram;
    // There is an unneccessary/empty level here
    // - remove it
    food.Naringsvarden = food.Naringsvarden.Naringsvarde;
 
    // I would rather have a object
    // with name of the nutrient as key
    // and quantity and unit as value
    // than an array
    let obj = {};
    for(nutrient of food.Naringsvarden){
        // I am only interested in the
        // properties Varde and Enhet 
        // and actually everything I want to
        // keep is in gram so I only need
        // to store the Varde
        // also I want to convert to number
        obj[nutrient.Namn] = nutrient.Varde.replace(/,/g,'.') / 1;
    }
    // I am not interested in all the
    // Naringsvarden - only keep the ones 
    // I am interested in
    let interesting = [
        'Summa mättade fettsyror',
        'Summa enkelomättade fettsyror',
        'Summa fleromättade fettsyror',
        'Protein',
        'Kolhydrater',
        'Socker totalt',
        'Energi (kcal)',
        'Salt',
        
    ];
    for(key in obj){
        if(interesting.includes(key)){ 
            /*if(obj[key].enhet !== "g"){
                // As it turns out this never happens
                // it's always gram for the nutrients 
                // I am interested in
                console.log(obj[key].enhet);
            }*/
            continue; 
        }
        delete obj[key];
    }
 
    // Replace the Naringsvarden array
    // with our object
    food.Naringsvarden = obj;
}
 
// Have a look at the same item
// after cleaning it
console.log("\n\nAfter cleaning (example item):\n", data[100]);
 
let json = JSON.stringify(data, '', '  ');
fs.writeFileSync('dataCleaner.json', json, 'utf-8');