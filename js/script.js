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

// Function to return the sum of the ASCII values in the original text
function XORDecryption(arr) {
    let text = arr.slice();
    let howMany = Array(Math.max(...arr) + 1).fill(0);
    let key;

    for (let j=0;j<3;j++) {
        let index = 0;
        let temp = 0;
        for (let i=j;i<howMany.length;i+=3) {
            howMany[arr[i]] += 1;
        }

        for (let i=j;i<howMany.length;i++) {
            if (howMany[i] > temp) {
                temp = howMany[i];
                index = i;
            }
        }

        key = index ^(' '.charCodeAt());
        for (let i=j;i<arr.length;i+=3) {
            arr[i] ^= key;
            text[i] = String.fromCharCode(arr[i]);
        }
    }

    // console.log(text.join(''));
    return arr.reduce((p,c) => p + c, 0);
}