let productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "grey",
    hardDisk: "256 GB"
};

function caller(detail) {
    console.log("Name: " , detail.name);
    console.log("Price: " , detail.price);
    console.log("Color: " , detail.color);
    console.log("Hard Disk: " , detail.hardDisk);
}

caller(productDetails);
