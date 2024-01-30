const guests = ['Anurag', 'Sahil', 'Azeem', 'Muskan', 'Yash'];

function ListedGuests(guestsName) {
    if (Array.isArray(guestsName)) {
        const sentenceForGuest = guestsName.join(', ');
        return `Event will attended by ${sentenceForGuest}`;
    }
    else {
        return `There is no any list of Guests Here`;
    }
}
const datax = ListedGuests(guests);
console.log(datax);