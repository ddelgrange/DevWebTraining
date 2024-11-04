const fs = require("fs");

fs.readFile("message2.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 

/*fs.writeFile("message2.txt", "Hello from David!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });*/