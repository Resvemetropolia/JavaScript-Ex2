<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Dice Roll Program</title>
</head>
<body>

<script>
    // Function to return a random dice roll between 1 and the specified number of sides
    function rollCustomDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    // Prompt the user for the maximum number on the dice
    var maxNumber = prompt("Enter the maximum number on the dice:");

    // Convert the input to a number
    maxNumber = parseInt(maxNumber);

    // Validate the input
    if (isNaN(maxNumber) || maxNumber <= 0) {
        document.write("<p>Invalid input. Please enter a valid maximum number on the dice.</p>");
    } else {
        // Main program that rolls the dice until the result is the maximum number
        document.write("<ul>");

        while (true) {
            var result = rollCustomDice(maxNumber);
            document.write("<li>Dice roll: " + result + "</li>");

            if (result === maxNumber) {
                break; // Stop rolling if the result is the maximum number
            }
        }

        document.write("</ul>");
    }
</script>

</body>
</html>
