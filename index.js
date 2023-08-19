// javascript encription functions. using three different self-thought algorithms

// algorithm1 uses the -3 index property to determine the alternative string. This algorithm doesnt touch on symbols

// function to encrypt alphabeth    
function encSetAlpha(str) {
    // the function encrypts on char at a time
    // this function checks the position of our char in the english array and returns the char at the -3 index
    const englishAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upper = []

    for (let i = 0; i < englishAlpha.length; i++) { // to create an array of uppercase letters
        upper.push(englishAlpha[i].toUpperCase())
    }

    let enc = "";
    for (let i = 0; i < englishAlpha.length; i++) {
        let count = 3
        if (str === englishAlpha[0]) {
            enc = englishAlpha[23]; // to encrypt letter a 
            break;
        } else if (str === englishAlpha[1]) {
            enc = englishAlpha[24]; // to encrypt letter b
            break;
        } else if (str === englishAlpha[2]) {
            enc = englishAlpha[25]; // to encrypt letter c
            break;
        } else if (i >= 3 && str != upper[i]) {
            if (str === englishAlpha[i]) {
                enc = englishAlpha[i - count];
                break;
            }
        } else if (str === upper[0]) {
            enc = upper[23];
            break;
        } else if (str === upper[1]) {
            enc = upper[24];
            break;
        } else if (str === upper[2]) {
            enc = upper[25];
            break;
        } else if (i >= 3) {
            if (str === upper[i]) {
                enc = upper[i - count];
                break;
            }
        }
    }
    return enc;
}

// function to decrypt alphabeth    
function decSetAlpha(str) {
    // this function uses the reverse engineering of the encSetAlpha to decrypt the text
    const decEnglish = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
    const upper = []

    for (let i = 0; i < decEnglish.length; i++) {
        upper.push(decEnglish[i].toUpperCase())
    }
    let dec = "";
    for (let i = 0; i < decEnglish.length; i++) {
        let count = 3
        if (str === decEnglish[0]) {
            dec = decEnglish[23]; // to decrypt z
            break;
        } else if (str === decEnglish[1]) {
            dec = decEnglish[24]; // to decrypt y
            break;
        } else if (str === decEnglish[2]) {
            dec = decEnglish[25]; // to decrypt x
            break;
        } else if (i >= 3 && str != upper[i]) {
            if (str === decEnglish[i]) {
                dec = decEnglish[i - count];
                break;
            }
        } else if (str === upper[0]) {
            dec = upper[23];
            break;
        } else if (str === upper[1]) {
            dec = upper[24];
            break;
        } else if (str === upper[2]) {
            dec = upper[25];
            break;
        } else if (i >= 3) {
            if (str === upper[i]) {
                dec = upper[i - count];
                break;
            }
        }

    }
    return dec;
}

// function to encrypt numbers
function encSetNum(num) {
    // this function only swap numbers. 0=>9 and so on
    if (num == 0) {
        return "9"
    } else if (num == 1) {
        return "8"
    } else if (num == 2) {
        return "7"
    } else if (num == 3) {
        return "6"
    } else if (num == 4) {
        return "5"
    } else if (num == 5) {
        return "4"
    } else if (num == 6) {
        return "3"
    } else if (num == 7) {
        return "2"
    } else if (num == 8) {
        return "1"
    } else if (num == 9) {
        return "0"
    }
}

// function to decrypt numbers
function decSetNum(num) {

    if (num == 9) {
        return "0"
    } else if (num == 8) {
        return "1"
    } else if (num == 7) {
        return "2"
    } else if (num == 6) {
        return "3"
    } else if (num == 5) {
        return "4"
    } else if (num == 4) {
        return "5"
    } else if (num == 3) {
        return "6"
    } else if (num == 2) {
        return "7"
    } else if (num == 1) {
        return "8"
    } else if (num == 0) {
        return "9"
    }
}

function encryptText1(str) {
    let textEnc = str
    const text = textEnc.split("");
    var result = "";
    // function to see if char is a string or not
    function isAlphabeth(str) {
        return isNaN(str) && str.toUpperCase() !== str.toLowerCase();
    }

    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            result += "~" // to encrypt whitespace
            continue;
        }
        else if (isFinite(text[i])) {
            result += encSetNum(text[i]);
        } else if (isAlphabeth(text[i])) {
            result += encSetAlpha(text[i])
        } else if (text[i] === "~") {
            result += " ";

        } else {
            result += text[i]
        }
    }

    return result;
}

function decryptText1(str) {
    let textEnc = str;
    const text = textEnc.split("");
    var result = "";
    // function to see if char is a string or not
    function isAlphabeth(str) {
        return isNaN(str) && str.toUpperCase() !== str.toLowerCase();
    }

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "~") {
            result += " "
            continue;
        }
        else if (isFinite(text[i])) {
            result += decSetNum(text[i]);
        } else if (isAlphabeth(text[i])) {
            result += decSetAlpha(text[i])
        } else if (text[i] === " ") {
            result += "~";

        } else {
            result += text[i]
        }
    }

    return result;

}

// algorithm 2 This is also another self-thought algorithm. It is more secured then the above algorithm. less talk. let's work.... oh!! it's not fancy but it gets the job done
function algorithm2(str) {
    const text = str;
    const array = text.split("");// to convert strings into array..... including white spaces.

    var encrypted = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "a" || text[i] == "A") {
            array[i] = "1";
            encrypted += array[i];
        }
        else if (array[i] == "e" || text[i] == "E") {
            array[i] = "2";
            encrypted += array[i];
        }
        else if (array[i] == "i" || text[i] == "I") {
            array[i] = "3";
            encrypted += array[i];
        }
        else if (array[i] == "o" || text[i] == "O") {
            array[i] = "4";
            encrypted += array[i];
        }
        else if (array[i] == "u" || text[i] == "U") {
            array[i] = "5";
            encrypted += array[i];
        }
        else if (array[i] == " ") {
            array[i] = "V";
            encrypted += array[i];
        }
        else if (array[i] == "1") {
            array[i] = "|";
            encrypted += array[i];
        }
        else if (array[i] == "2") {
            array[i] = "[";
            encrypted += array[i];
        }
        else if (array[i] == "3") {
            array[i] = "]";
            encrypted += array[i];
        }
        else if (array[i] == "4") {
            array[i] = "<";
            encrypted += array[i];
        }
        else if (array[i] == "5") {
            array[i] = ">";
            encrypted += array[i];
        }
        else if (array[i] == ".") {
            array[i] = array[i];
            encrypted += array[i];
        }
        else if (array[i] == "?") {
            array[i] = array[i];
            encrypted += array[i];
        }
        else if (array[i] == ",") {
            array[i] = array[i];
            encrypted += array[i];
        }
        else if (array[i] == "/") {
            array[i] = array[i];
            encrypted += array[i];
        }
        else if (array[i] == "-") {
            array[i] = array[i];
            encrypted += array[i];
        }
        else {
            array[i] = array[i] + "a";
            encrypted += array[i];
        }

    }

    return encrypted;
}

// the decryption uses the reverse engineering to decipher the encrypted text and return the string to its oringinal form in character and like.
function decryptAlgorithm2(str) {
    const text = str;
    var decrypted = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            const narray = text[i].split("");
            narray[0] = "";
            decrypted += narray[0]
        }
        else if (text[i] == "1") {
            const narray = text[i].split("");
            narray[0] = "a";
            decrypted += narray[0]
        }
        else if (text[i] == "2") {
            const narray = text[i].split("");
            narray[0] = "e";
            decrypted += narray[0]
        }
        else if (text[i] == "3") {
            const narray = text[i].split("");
            narray[0] = "i";
            decrypted += narray[0]
        }
        else if (text[i] == "4") {
            const narray = text[i].split("");
            narray[0] = "o";
            decrypted += narray[0]
        }
        else if (text[i] == "5") {
            const narray = text[i].split("");
            narray[0] = "u";
            decrypted += narray[0]
        }
        else if (text[i] === "|") {
            const narray = text[i].split("");
            narray[0] = "1";
            decrypted += narray[0]
        }
        else if (text[i] === "[") {
            const narray = text[i].split("");
            narray[0] = "2";
            decrypted += narray[0]
        }
        else if (text[i] === "]") {
            const narray = text[i].split("");
            narray[0] = "3";
            decrypted += narray[0]
        }
        else if (text[i] === "<") {
            const narray = text[i].split("");
            narray[0] = "4";
            decrypted += narray[0]
        }
        else if (text[i] === ">") {
            const narray = text[i].split("");
            narray[0] = "5";
            decrypted += narray[0]
        }
        else if (text[i] === "V") {
            const narray = text[i].split("");
            narray[0] = " ";
            decrypted += narray[0]
        }
        else if (text[i] == ".") {
            const narray = text[i].split("");
            narray[0] = text[i];
            decrypted += narray[0]
        }
        else if (text[i] == "?") {
            const narray = text[i].split("");
            narray[0] = text[i];
            decrypted += narray[0]
        }
        else if (text[i] == "/") {
            const narray = text[i].split("");
            narray[0] = text[i];
            decrypted += narray[0]
        }
        else if (text[i] == ",") {
            const narray = text[i].split("");
            narray[0] = text[i];
            decrypted += narray[0]
        }
        else if (text[i] == "-") {
            const narray = text[i].split("");
            narray[0] = text[i];
            decrypted += narray[0]
        }
        else {
            const narray = text[i].split("");
            narray[0] = text[i];;
            decrypted += narray[0]
        }
    }

    return decrypted
}


// algorithm 3: this uses algorithm one and two with another personal. its the hardest yet and it is a 9-bit encryption for each charcter.

function splitIntoGroups(str) {
    // function to split string into array of 9 characters
    let result = [];
    for (let i = 0; i < str.length; i += 9) {
        result.push(str.substr(i, 9));
    }
    return result;
}


function getFourthCharacter(str) {
    // function to retrive the middle character in the string
    return str[4];
}

function generateRandomString() {
    // function to encrypt text randomly
    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }
    return result;
}

function algorithm3(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let first_4 = generateRandomString();

        let last_4 = generateRandomString();
        var rand = first_4 + str[i] + last_4;
        result += rand
    }
    return result;
}

// function using reverse engineering to decrypt text
function decrypt3(str) {
    const arr = splitIntoGroups(str)
    let secret = "";
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        secret = getFourthCharacter(arr[i]);
        result += secret;
    }
    return result
}


// this function chooses which algorithm to use by random and uses one of the either decryption method to decrypt text.
function encryption() {
    const text = document.getElementById("text").value;
    const message = document.getElementById("message");

    let algo = Math.floor(Math.random() * 3);
    switch (algo) {
        case 0:
            // algorithm 1
            var enc = "|" + encryptText1(text);
            message.innerText = enc;
            break;

        case 1:
            // algorithm 2
            var enc = "'" + algorithm2(text);
            message.innerText = enc;
            break;
        case 2:
            // algorithm 3
            var enc = algorithm3(encryptText1(text));
            message.innerText = enc;
            break;
    }
}

function decryption() {
    const text = document.getElementById("text2").value;
    const message = document.getElementById("message2");

    const _key = text[0];
    var result = "";
    var dec;
    if (_key == "|") {
        dec = decryptText1(text);
        for (let i = 1; i < dec.length; i++) {
            result += dec[i]
        }
    } else if (_key == "'") {
        dec = decryptAlgorithm2(text);
        for (let i = 1; i < dec.length; i++) {
            result = result + dec[i]
        }
    } else {
        dec = decryptText1(decrypt3(text));
        result = dec;
    }

    message.innerText = result;

}


// COPY TO CLIBOARD
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("message");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied encryption: " + copyText.value);
}



// to style page
var tablinks = document.getElementsByClassName("links");// to assign the tab links 
var tabContents = document.getElementsByClassName("secs");// to assign the tab contents
// defining the function opentabs
function openTab(tabname) {
    for (tabContent of tabContents) {
        tabContent.classList.remove("active")
    }
    document.getElementById(tabname).classList.add("active");
}