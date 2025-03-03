// Code your solution in this file!
// Constants for distance calculations
const HQ_BLOCK = 42;
const BLOCK_IN_FEET = 264;

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - HQ_BLOCK);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  // Call distanceFromHqInBlocks and convert the result to feet
  return distanceFromHqInBlocks(someValue) * BLOCK_IN_FEET;
}

// Function to calculate distance travelled in feet between two locations
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * BLOCK_IN_FEET;
}

// Function to calculate fare price based on start and destination
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    // Free for distances less than or equal to 400 feet
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    // 2 cents per foot for distances between 400 and 2000 feet
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    // Flat fare for distances over 2000 feet
    return 25;
  } else {
    // Rides over 2500 feet are not allowed
    return 'cannot travel that far';
  }
}

// Test cases (optional)

console.log(distanceFromHqInBlocks(43)); // 1 block
console.log(distanceFromHqInFeet(43)); // 1 block * 264 = 264 feet
console.log(distanceTravelledInFeet(34, 42)); // 8 blocks * 264 = 2112 feet
console.log(calculatesFarePrice(34, 50)); // Fare for 16 blocks -> 4224 feet -> $25
