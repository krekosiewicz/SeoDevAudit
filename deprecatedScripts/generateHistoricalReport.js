const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);
const appendFile = promisify(fs.appendFile);

async function processDirectory(directoryPath, reportFilePath) {
  try {
    const reportData = [];

    // Read the files in the directory
    const filenames = await readdir(directoryPath);

    for (const filename of filenames) {
      const filePath = path.join(directoryPath, filename);
      if ((await isFile(filePath)) && path.extname(filename).toLowerCase() === '.json') {
        try {
          const jsonData = await readFile(filePath, 'utf-8');
          const data = JSON.parse(jsonData);

          // Extract the required fields from the JSON data
          const wwwAddress = data.www_address;
          const localIdDate = data.localIdDate;
          const displayValue = isScoreNull(data.score) ? 'null' : data.displayValue;

          // Check if the data for the www_address and localIdDate combination already exists in the report
          if (!isDuplicate(reportData, wwwAddress, localIdDate)) {
            // Add the data to the report
            reportData.push({ wwwAddress, localIdDate, displayValue });
          }
        } catch (error) {
          console.error(`Error processing JSON file: ${filePath}`);
        }
      }
    }

    // Append the report data to the CSV file
    await appendReport(reportFilePath, reportData);
    console.log(`Report file '${reportFilePath}' updated successfully.`);
  } catch (error) {
    console.error('Error processing directory:', error);
  }
}

function isFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (error, stats) => {
      if (error) {
        reject(error);
      } else {
        resolve(stats.isFile());
      }
    });
  });
}

function isDuplicate(reportData, wwwAddress, localIdDate) {
  return reportData.some((entry) => entry.wwwAddress === wwwAddress && entry.localIdDate === localIdDate);
}

function isScoreNull(score) {
  return score === null;
}

async function isFileEmpty(filePath) {
  try {
    const stats = await promisify(fs.stat)(filePath);
    return stats.size === 0;
  } catch (error) {
    return false;
  }
}

async function appendReport(reportFilePath, reportData) {
  const csvRows = reportData.map((entry) => [entry.wwwAddress, entry.localIdDate, entry.displayValue]);

  const csvContent = csvRows.map((row) => row.join(',')).join('\n');

  // Check if the file is empty or if the header row does not exist
  const shouldAppendHeader = await isFileEmpty(reportFilePath) || !await headerExists(reportFilePath);

  // Append the data to the report file
  const appendOptions = { encoding: 'utf-8', flag: 'a' };
  if (shouldAppendHeader) {
    await promisify(fs.appendFile)(reportFilePath, 'www_address,localIdDate,displayValue\n', 'utf-8');
  }
  await promisify(fs.appendFile)(reportFilePath, csvContent, appendOptions);
}

async function headerExists(reportFilePath) {
  try {
    const content = await promisify(fs.readFile)(reportFilePath, 'utf-8');
    return content.includes('www_address,localIdDate,displayValue');
  } catch (error) {
    return false;
  }
}

// Read the directory path from the command-line argument
const directoryPath = process.argv[2];
const reportFilePath = './report.csv';

if (!directoryPath) {
  console.error('Please provide the directory path as a command-line argument.');
  process.exit(1);
}

processDirectory(directoryPath, reportFilePath);
