const findMinimumPlatforms = (arr1, dep1) => {
    // convert time strings to minutes for easier comparison 
    const convertHoursToMinutes = (time) => {
        const splitTime = time.split(":");
        const [hours, minutes] = splitTime;
        return parseInt(hours) * 60 + parseInt(minutes);
    };
    // convert artival and departure time to minutes
    const arrivalTimeArray = arr1.map(time => convertHoursToMinutes(time));
    const departureTimeArray = dep1.map(time => convertHoursToMinutes(time));
    console.log(arrivalTimeArray, departureTimeArray);

    let count = 0;
    let platformsArray = [];

    while (count < arrivalTimeArray.length) {
        const arrTime = arrivalTimeArray[count];
        const depTime = departureTimeArray[count];

        let neededPlatforms = 1;
        for (let i of arrivalTimeArray) {
            if (arrTime < i && i < depTime) {
                neededPlatforms += 1;
            }
        }
        platformsArray.push(neededPlatforms);
        neededPlatforms = 1;

        for (let i of departureTimeArray) {
            if (i < depTime && i > arrTime) {
                neededPlatforms += 1;
            }
        }
        platformsArray.push(neededPlatforms);
        neededPlatforms = 1;
        count += 1;
    }

    return Math.max(...platformsArray);

}
const arr1 = ["9:00", "9:40", "11:00", "15:00", "18:00"];
const dep1 = ["9:10", "12:00", "11:30", "19:00", "20:00"];
console.log(findMinimumPlatforms(arr1, dep1)); // Output: 3