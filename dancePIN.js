/*
Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology.
The machines now interpret a series of consecutive dance moves in place of a PIN number.

Create a program that converts a customer's PIN number to its dance equivalent.
There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

Examples:
danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]
danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]
danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
danceConvert("32a1") ➞ "Invalid input."

Notes:
Each dance move will be selected from a list by an index based on the 
current digit's value plus that digit's index value. 
If this value is greater than the last index value of the dance list, 
it should cycle to the beginning of the list.
Valid input will always be a string of four digits. The output will be a string array.
If the input is not four valid numbers, return the string, "Invalid input."
*/

const dances = ['Shimmy', 'Shake', 'Pirouette', 'Slide', 'Arabesque', 'Pop'];
const letters = /[a-zA-Z]/g;

let isValid = true;

function getMoves(pin) {
    
    for (let i=0; i<pin.length; i++) {
        if (letters.test(pin[i])) {
            console.log('Invalid Data');
            isValid = false;
            break;
        }
    }
    
    if (isValid) {
        let moves = [];
        for (let i=0; i<pin.length; i++) {
            let index = parseInt(pin[i]) + i;
            while (index >= dances.length) {
                index = index - dances.length;
            }
            moves.push(dances[index]);
            
        }
        console.log(...moves);
    }
    
}

getMoves('0000'); // Shimmy, Shake, Pirouette, Slide
getMoves('3856'); // Slide, Slide, Shake, Slide
getMoves('9999'); // Slide, Arabesque, Pop, Shimmy
