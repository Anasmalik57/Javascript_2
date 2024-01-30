// Array of products with name and price
const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
];

// Function to identify and print products with max and min prices
function priceIdentifier(products) {
    // Check if the input is an array
    if (Array.isArray(products) || products.length > 0) {
        // lets Initialize variables to store products with max and min prices
        let maxPrice = products[0];
        let minPrice = products[0];

        // Loops starts here to iterate the array 
        for (let i = 0; i < products.length; i++) {
            // current product in the iteration yaha se milega
            const currentProduct = products[i];

            // Checking for max price
            if (currentProduct.price > maxPrice.price) {
                maxPrice = currentProduct;
            }

            // Checking for min price
            if (currentProduct.price < minPrice.price) {
                minPrice = currentProduct;
            }
        }

        // Print the product with max price
        console.log(`${maxPrice.name} has max price = ${maxPrice.price}`);
        // Print the product with min price
        console.log(`${minPrice.name} has min price = ${minPrice.price}`);
    }
}

// Call the function with the products array
priceIdentifier(products);

// Or ab kaam khatam
// I mean Program 😅