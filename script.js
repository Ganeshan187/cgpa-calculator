function calculate() {
    let totalPoints = 0;
    let totalCredits = 0;

    // Calculate total points and total credits for each semester
    for (let semester = 1; semester <= 8; semester++) {
        const cgpaInput = parseFloat(document.getElementById(`semester${semester}CGPA`).value);
        const creditInput = parseFloat(document.getElementById(`semester${semester}Credit`).value);

        if (!isNaN(cgpaInput) && !isNaN(creditInput)) {
            totalPoints += cgpaInput * creditInput;
            totalCredits += creditInput;
        }
    }

    // Calculate total CGPA and percentage
    const totalCGPA = (totalPoints / totalCredits).toFixed(2);
    const percentage = ((totalCGPA - .5) * 10).toFixed(2); 

    // Display results
    document.getElementById("totalCGPA").value = totalCGPA;
    document.getElementById("percentage").value = percentage + "%";
}










// function calculate(){
//     let totalcredit = 0;
//     let totalPoints = 0;
//     for (let semester = 1; semester <= 8; semester++) {
//         const cgpaInput = parseFloat(document.getElementById(`semester${semester}CGPA`).value);
//         const creditInput = parseFloat(document.getElementById(`semester${semester}Credit`).value);
//         if (!isNaN(cgpaInput) && !isNaN(creditInput)) {
//             totalcredit += creditInput;
//             totalPoints += cgpaInput * creditInput;
//         }
//     }
//     const totalCGPA = (totalPoints / totalcredit).toFixed(2);
//     const percentage = ((totalCGPA - .5) * 10).toFixed(2);




//     document.getElementById("totalCGPA").value = totalCGPA;
//     document.getElementById("percentage").value = percentage;
// }