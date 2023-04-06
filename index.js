const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Get command line arguments
const [,, inputPath, outputWidth, outputHeight, outputFolder] = process.argv;

// Check if input path exists and is a directory
if (!fs.existsSync(inputPath) || !fs.lstatSync(inputPath).isDirectory()) {
  console.error(`Error: ${inputPath} is not a valid directory`);
  process.exit(1);
}

// Ensure output directory exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Loop through all files in input directory
fs.readdirSync(inputPath).forEach(file => {
  const filePath = path.join(inputPath, file);

  // Skip if not an image file
  if (!/\.(jpe?g|png|gif)$/i.test(file)) {
    console.log(`Skipping ${file} (not an image)`);
    return;
  }

  // Check if the filename contains "@2x"
  const isRetina = file.includes('@2x');

  // Calculate the output dimensions
  const width = parseInt(outputWidth) * (isRetina ? 2 : 1);
  const height = parseInt(outputHeight) * (isRetina ? 2 : 1);

  // Read and resize image
  sharp(filePath)
    .resize(width, height)
    .toFile(path.join(outputFolder, file), (err, info) => {
      if (err) {
        console.error(`Error resizing ${file}: ${err.message}`);
      } else {
        console.log(`Resized ${file} to ${info.width}x${info.height}`);
      }
    });
});
