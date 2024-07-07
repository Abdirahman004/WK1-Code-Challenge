function calculateNetSalary() {
    // Prompt for basic salary and benefits
    let basicSalary = prompt("Enter the basic salary:");
    let benefits = prompt("Enter the benefits:");

    // Convert the input to numbers
    basicSalary = Number(basicSalary);
    benefits = Number(benefits);

    // Check if inputs are valid numbers
    if (isNaN(basicSalary) || isNaN(benefits)) {
        console.log("Invalid input. Please enter valid numbers for salary and benefits.");
        return;
    }

    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Calculate NSSF Deductions
    const nssfDeductions = calculateNssfDeductions(grossSalary);

    // Calculate NHIF Deductions
    const nhifDeductions = calculateNhifDeductions(grossSalary);

    // Calculate PAYE (Tax)
    const taxableIncome = grossSalary - nssfDeductions;
    const paye = calculatePaye(taxableIncome);

    // Calculate Net Salary
    const netSalary = grossSalary - nssfDeductions - nhifDeductions - paye;

    // Output the results
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`NSSF Deductions: ${nssfDeductions.toFixed(2)}`);
    console.log(`NHIF Deductions: ${nhifDeductions.toFixed(2)}`);
    console.log(`PAYE: ${paye.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

// Function to calculate PAYE based on taxable income
function calculatePaye(taxableIncome) {
    let paye = 0;

    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        paye = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        paye = 24000 * 0.1 + 8333 * 0.25 + (taxableIncome - 32333) * 0.3;
    } else if (taxableIncome <= 800000) {
        paye = 24000 * 0.1 + 8333 * 0.25 + (500000 - 32333) * 0.3 + (taxableIncome - 500000) * 0.325;
    } else {
        paye = 24000 * 0.1 + 8333 * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (taxableIncome - 800000) * 0.35;
    }
    
    return paye;
}

// Function to calculate NSSF Deductions based on gross salary
function calculateNssfDeductions(grossSalary) {
    let nssfDeduction = 0;

    if (grossSalary <= 7000) {
        nssfDeduction = grossSalary * 0.06;
    } else if (grossSalary <= 18000) {
        nssfDeduction = (7000 * 0.06) + ((grossSalary - 7000) * 0.06);
    } else {
        nssfDeduction = 1080; // Maximum NSSF contribution per month
    }

    return nssfDeduction;
}

// Function to calculate NHIF Deductions based on gross salary
function calculateNhifDeductions(grossSalary) {
    let nhifDeduction = 0;

    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    return nhifDeduction;
}

// Call the function to execute
calculateNetSalary();
