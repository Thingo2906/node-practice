
const axios = require('axios');
const fs = require('fs');
const process = require('process');

/** read file at path and print it out. */

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}
//cat('one.txt');

function webCat(url){
    axios.get(url)
    .then(res =>{
        console.log(res.data)
    })
    .catch(e =>{
        console.log(e)
    })
}
let path = process.argv[2];
if (path.slice(0, 4) === "http"){
    webCat(path);
}
else{
    cat(path);
}
