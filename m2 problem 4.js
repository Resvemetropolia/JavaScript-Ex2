var numbers = [];
do {
    var userInput = prompt("Enter a number (enter 0 to stop):");
    var number = parseFloat(userInput);

    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
} while (number !== 0);
numbers.sort(function(a, b) {
    return b - a;
});
console.log("Numbers from largest to smallest:");
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
