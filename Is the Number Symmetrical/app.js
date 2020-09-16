/****************************************************

Is the Number Symmetrical?

Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

Examples
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true

https://edabit.com/challenge/at7jF9Y7SmPGyD92u

****************************************************/


function isSymmetrical(num) {
	num2 = String(num).split("").reverse().join("");
	if (num == Number(num2)){
		return true;
	}
    return false;	
    // in here, not necessary if block
}

function isSymmetrical(num){
    let reverse = num.toString().split("").reverse().join("");
    
    return num === Number(reverse);
    // in here, not necessary NUmber(), === and reverse variable.
}


const isSymmetrical = num => {
	const str = String(num);
    return str.split('').reverse().join('') === str;

    // in here, not necessary String(), === and str variable.
}

const isSymmetrical = num => 
num == num.toString().split('').reverse().join('');
// This is the most beatiful.


