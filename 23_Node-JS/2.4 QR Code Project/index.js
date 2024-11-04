/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import * as fs from 'node:fs';
import inquirer from 'inquirer';
import qr from 'qr-image'

inquirer
  .prompt([{
    type:"input",
    message: "Veuillez entrer l'URL à QRcoder ;)",
    name: "URL",}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
    
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      // Prompt couldn't be rendered in the current environment
    } else {
        console.log("Something else went wrong");
      // Something else went wrong
    }
  });
