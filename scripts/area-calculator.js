function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // Show triangle area
    const areaspan = document.getElementById('triangle-area');
    areaspan.innerText = area;

}

//  calculate rectangle area

function calculateRectangleArea() {
    // rectangle width
    const widthField = document.getElementById('rectangle-width')
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // rectangle length 
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // Calculate area
    const area = width * length;

    // show rectangle area
    const RectangleAreaSpan = document.getElementById('rectangle-area');
    RectangleAreaSpan.innerText = area;
}

// resable function --> reduce duplicate code 
function calculateParallelogramArea() {
    // Base
    const base = getInputValue('parallelogram-base');
    console.log(base);
    // Height
    const height = getInputValue('parallelogram-height');
    console.log(height);

    // Calculation:-
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}
// reusable get input value field in num
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span, p , div etc text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// ellips area:

function calculateellipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
}

// pentagaon area:

function calculatepentagonArea(){
    const base = getInputValue('pentagon-base');
    const height = getInputValue('pentagon-height');
    const area = 0.5 * base * height;
    setElementInnerText('pentagon-area', area);
}
// Rhombus area:

function calculaterhombusArea(){
    const base = getInputValue('rhombus-base');
    const height = getInputValue('rhombus-height');
    const area = 0.5 * base * height;
    setElementInnerText('rhombus-area',area);
}