function generateOtp(min, max) {
    // let x = Math.floor(Math.random().toFixed(4)*10000) // here both methods works for otp generation
    let x = Math.floor(Math.random() * (max - min)) + min;
    return x;
}
console.log("Randomly Generated OTP of Four digits is =>", generateOtp(999, 9999));