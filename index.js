#! /usr/bin/env node
var fs = require('fs');
var PARAMS = {
  COLOR: '#4c1',
  TEXT: 'coverage',
  PERCENTAGE: 95,
  FILEPATH: 'coverage.svg'
};

var INPUT_PARAMS = {};

for (let j = 0; j < process.argv.length; j++) {
  if(process.argv[j] && process.argv[j].startsWith('-') && process.argv[j+1] && !process.argv[j+1].startsWith('-')) {
    INPUT_PARAMS[process.argv[j].replace(/-/g, '')] = process.argv[j+1];
  }
}

if (INPUT_PARAMS.PERCENTAGE !== undefined) {
  INPUT_PARAMS.PERCENTAGE = parseInt(INPUT_PARAMS.PERCENTAGE);
}

if(!INPUT_PARAMS.COLOR) {
  if(INPUT_PARAMS.PERCENTAGE < 30) {
    INPUT_PARAMS.COLOR = 'red';
  } else if(INPUT_PARAMS.PERCENTAGE < 45) {
    INPUT_PARAMS.COLOR = 'orange';
  } else if(INPUT_PARAMS.PERCENTAGE < 65) {
    INPUT_PARAMS.COLOR = 'yellow';
  } else if(INPUT_PARAMS.PERCENTAGE < 80) {
    INPUT_PARAMS.COLOR = 'yellowgreen';
  } else if(INPUT_PARAMS.PERCENTAGE < 90) {
    INPUT_PARAMS.COLOR = 'green';
  }
} else {
  var re = /^[0-9A-Fa-f]{3,6}$/g;
  if(re.test(INPUT_PARAMS.COLOR)) {
    INPUT_PARAMS.COLOR = `#${INPUT_PARAMS.COLOR}`;
  }
}

Object.assign(PARAMS, INPUT_PARAMS);

// Change the content of the file as you want
// or either set fileContent to null to create an empty file
var fileContent = `<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="104" height="20" viewBox="0 0 104 20">
    <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="a">
        <rect width="104" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#a)">
        <path fill="#555" d="M0 0h61v20H0z"/>
        <path fill="${PARAMS.COLOR}" d="M61 0h43v20H61z"/>
        <path fill="url(#b)" d="M0 0h104v20H0z"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="110">
        <text x="315" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="510">${PARAMS.TEXT}</text>
        <text x="315" y="140" transform="scale(.1)" textLength="510">${PARAMS.TEXT}</text>
        <text x="815" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="330">${PARAMS.PERCENTAGE}%</text>
        <text x="815" y="140" transform="scale(.1)" textLength="330">${PARAMS.PERCENTAGE}%</text>
    </g>
</svg>`;

fs.writeFile(PARAMS.FILEPATH, fileContent, (err) => {
    if (err) throw err;
    console.log("Badge created successfully!");
}); 