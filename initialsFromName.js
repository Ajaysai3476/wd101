/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

let createInitialsFromName = (name) => {
  let NAME = name.split(" ");

  
  if (NAME.length === 1) {
    
    return NAME[0].substring(0, 2).toUpperCase();
  } else if (NAME.length === 2) {
    
    return NAME[0][0].toUpperCase() + NAME[1][0].toUpperCase();
  } else {
    
    return NAME[0][0].toUpperCase() + NAME[NAME.length - 1][0].toUpperCase();
  }
};
let initial = createInitialsFromName("john nick");
console.log(initial);
module.exports = createInitialsFromName;
