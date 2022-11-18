// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${XORDecryption(cipher)}. <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}