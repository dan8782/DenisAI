// const fs = require('fs');
import { denisHuesos } from './trainingData/denisAI.js';
import brain from './lib/browser.js'
import fs from 'fs'

// const denisHuesos = require('./denisAI.js');
// const brain = require('./node_modules/brain.js-master');

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(denisHuesos, {
  iterations: 20000,
  log: (details) => console.log(details),
  errorThresh: 0.011,
});
console.log('Training result: ', result);

const run1 = lstm.run('Дота');

const neuro_json = lstm.toJSON();

console.log('run 1: Jane' + run1);
console.log(neuro_json);

const data = JSON.stringify(neuro_json)

fs.writeFile('penis_model.json', data, err => {
    if (err) {
      throw err
    }
    console.log('JSON data is saved.')
  })

// Specify the path to the JSON file
// const filePath = './result.json';
// console.log(denisHuesos)
// Load the JSON file content as a string
// const jsonFileContent = fs.readFileSync(filePath, 'utf-8');

// Parse the JSON content
// const parsedJSON = JSON.parse(jsonFileContent);
// for (let i = 0; i < parsedJSON.messages.length; i++) {
//     const element = parsedJSON.messages[i];
//     if (element.from=="денис бля)" && typeof element.text == 'string' && element.text!=undefined) {
//         console.log(element.text)
// }
// }
// fs.readFile('denisAI.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     const filteredText = data.replace(/^\s*[\r\n]/gm, '');
//     fs.writeFile('denisAI.txt', filteredText, (err) => {
//       if (err) throw err;
//       console.log('Пустые строки удалены');
//     });
//   });
