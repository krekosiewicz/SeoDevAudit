const fs = require('fs');
const { DOMParser } = require('xmldom');

// Function to extract URLs from the XML data
function extractUrlsFromXml(xmlData) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

  // Extract URLs and display each URL on a new line
  const urlElements = xmlDoc.getElementsByTagName('loc');
  for (let i = 0; i < urlElements.length; i++) {
    const url = urlElements[i].textContent.trim();
    console.log(url);
  }
}

// Read the XML data from the file
fs.readFile('your_file.xml', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading XML file:', error);
  } else {
    extractUrlsFromXml(data);
  }
});