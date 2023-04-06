# Image Resizer
This is a Node.js script that resizes images in a given folder. It can be used to resize a large number of images to a specific width and height.

## Installation
Install Node.js if you haven't already.
Clone or download this repository to your local machine.
In the project directory, run npm install to install the sharp package.
Usage
To use the script, run the following command:

`node index.js inputPath outputWidth outputHeight outputFolder`

where:

`inputPath` is the path to the folder containing the images you want to resize.
`outputWidth` is the desired width of the output images in pixels.
`outputHeight` is the desired height of the output images in pixels.
`outputFolder` is the path to the folder where you want to save the resized images.
By default, the script will resize all images in the input folder to the specified width and height. However, if an image filename contains the string @2x, the output image will be twice as large in both width and height.

For example, to resize all images in the images folder to be 800 pixels wide and 600 pixels tall (or twice that size if they contain `@2x` in the filename), and output them to a folder called resized, you would run the following command:

`node index.js images 800 600 resized`
The resized images will be saved to the resized folder.

## Notes
The script only supports JPEG, PNG, and GIF image formats.
If the `outputFolder` does not exist, it will be created.
If an image file does not match the supported formats or is not an image file, it will be skipped and not resized.