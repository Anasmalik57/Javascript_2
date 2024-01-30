const CartWithPrices = [10, 20, 66, 99, 11];

function calculateCart(cart) {
    // Check if the input is an array
    if (Array.isArray(cart)) {
        // Calculate the total sum using the reduce method
        const totalSum = cart.reduce((sum, price) => sum + price, 0);
        return totalSum;
    } else {
        // Display an error message for invalid input
        console.log("Sorry 😢 Invalid Input, It's not an Array");
    }
}

// Call the function and store the result in totalCalculation
const totalCalculation = calculateCart(CartWithPrices);

// Display the calculated total sum of the cart
console.log("Calculated Total Sum of Cart is =", totalCalculation);