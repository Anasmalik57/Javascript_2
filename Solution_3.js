const studentsList = [
    {
        name: "Anas",
        marks: 95,
    },
    {
        name: "Saurabh",
        marks: 55,
    },
    {
        name: "Azeem",
        marks: 91,
    },
    {
        name: "Shubham",
        marks: 35,
    },
    {
        name: "Lakshay",
        marks: 90,
    }
];

// Function for Toppers
function getToppers(students) {
    const toppers = students.filter((student) => student.marks >= 90);
    return toppers;
}

// Function for Failures
function getFailures(students) {
    const failures = students.filter((student) => student.marks < 90);
    return failures;
}

const topperStudents = getToppers(studentsList);
const failureStudents = getFailures(studentsList);

// Display congratulatory messages for toppers
topperStudents.forEach((student) => console.log(`💯 Congrats! ${student.name} You passed the exam`));

// Display messages for failures
failureStudents.forEach((student) => console.log(`😧 Sorry ${student.name} better Luck Next Time`));
