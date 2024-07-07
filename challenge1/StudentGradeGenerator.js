function calculateGrades() {
    // Prompt the user for the number of students
    let numberOfStudents = prompt("Enter the number of students:");
    let marksArray = [];

    // Get the marks for each student
    for (let i = 1; i < numberOfStudents; i++) {
        let marks = prompt(`Enter the marks for student ${i + 1} (between 0 and 100):`);
        
        // Validate the input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");

        } else {
            marksArray.push(Number(marks));
        }
    }

    // Function to determine the grade based on marks
    function getGrade(marks) {
        if (marks > 79) {
            return 'A';
        } else if (marks >= 60) {
            return 'B';
        } else if (marks >= 50) {
            return 'C';
        } else if (marks >= 40) {
            return 'D';
        } else {
            return 'E';
        }
    }

    // Loop through the marks array and print the grades
    marksArray.forEach((marks, index) => {
        console.log(`Student ${index + 1}: Marks = ${marks}, Grade = ${getGrade(marks)}`);
    });
}

// Call the function to execute
calculateGrades();
