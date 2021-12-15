const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [username,github]= profileDataArgs;

fs.writeFile('./index.html',generatePage(username,github), err =>{
    if(err) throw new Error(err);
    console.log("Portfolio complete! Check out index.html to see the output!");
})

