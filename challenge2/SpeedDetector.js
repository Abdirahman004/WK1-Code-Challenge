function checkSpeed() {
    // Prompt the user to enter the speed of the car
    let speed = prompt("Enter the speed of the car:");

    // Convert to a number
    speed = Number(speed);

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }

    let demeritPoints = 0;
    for (let i = speedLimit + kmPerDemeritPoint; i <= speed; i += kmPerDemeritPoint) {
        demeritPoints++;
    }

    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}

// Calling the function
checkSpeed();
