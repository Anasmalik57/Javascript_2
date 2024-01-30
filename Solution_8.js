function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const newDate = new Date(eventDate);
    const remainingDays = newDate - currentDate;
    const x = Math.floor(remainingDays / (1000 * 60 * 60 * 24))
    return x;
}

const eventDate = '2024-2-28';
console.log(calculateRemainingDays(eventDate));