// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
 applyFilter(reddify);

 
 //applyFilterNoBackground(increaseGreenByBlue);
 //applyFilter(increaseGreenByBlue)

 applyFilterNoBackground(reddify);


applyFilterNoBackground(decreaseBlue);
applyFilter(decreaseBlue);
 
// do not change the below line of code
  render($("#display"), image);
}
/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction){
for (var r = 0; r < image.length; r++){
for (var c = 0; c < image[r].length; c++){
var pixel = image[r][c];
var pixelArray = rgbStringToArray(pixel);
filterFunction(pixelArray);


var updatedPixel = rgbArrayToString(pixelArray);
image[r][c] = updatedPixel;
//This where I'll modify the color values later



}
}
}


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) { // Added { here
var backgroundColor = image[0][0];
for (var r = 0; r < image.length; r++) {
for (var c = 0; j < image[r].length; c++) {
if (image[r][c] !== backgroundColor) {
  var pixel = image[r][c];
var pixelArray = rgbStringToArray(pixel);
filterFunction(pixelArray);
image[r][c] = rgbArrayToString(pixelArray);
}
}
}
} // Make sure this closing brace is at the end of the function!


// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
if(num < 0){
  return 0;
}
else if(num > 225){
  return 225;
}
else{
  return num;
}
}

// TODO 4: Create reddify filter function
function reddify(array){
array[RED] = 200;
}
/*var testArray = [100, 100, 100];
reddify(testArray);
console.log(testArray); // Should show [200, 100, 100]*/
// TODO 7 & 8: Create more filter functions
function decreaseBlue(array) {
array[BLUE] -= 50;
array = keepInBounds(array[BLUE]);
}
function increaseGreenByBlue(array){
  array[GREEN] = keepInBounds(array[GREEN] + array[BLUE]);
}
// CHALLENGE code goes below here
