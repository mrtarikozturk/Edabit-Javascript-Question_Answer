/****************************************************
Phone Number Formatting
Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

Examples
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"
Notes
Don't forget the space after the closing parenthesis.

Source : https://edabit.com/challenge/Z6oY6EWwT9rde8YXm
****************************************************/

// by using forEach and indexOf functions
function formatPhoneNumber(numbers) {

    let arr = "(XXX) XXX-XXXX".split('');

    numbers.forEach(item => {
        arr[arr.indexOf('X')] = item;
    });

    return arr.join('');
}

//by using forEach and replace functions
function formatPhoneNumber(numbers) {

    let temp = '(###) ###-####';

    numbers.forEach(item => temp = temp.replace("#", item));

    return temp;
}

// by using join ans replace function and Regex expresions
function formatPhoneNumber(numbers) {

    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');

}

// by using splice and join functions
function formatPhoneNumber(numbers) {

    numbers.splice(0, 0, '(');
    numbers.splice(4, 0, ') ');
    numbers.splice(8, 0, '-');

    return numbers.join('');
}

// by using replace and shift functions and Regex expression
const formatPhoneNumber = arr => '(xxx) xxx-xxxx'.replace(/x/g, v => arr.shift());