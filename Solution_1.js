// Program to check a user is valid or not
let usersList = ["Anas", "Sana", "Azeem", "Saurabh", "Raja"]

function isUserPresent(name)
{
    if(usersList.includes(name)){
        console.log(`😄 Yes, ${name} is a valid User`)
    }
    else{
        console.log(`😢 Sorry, ${name} isn't a valid User`)
    }
}

isUserPresent("Anas")
isUserPresent("Azeem")
isUserPresent("Rana")

