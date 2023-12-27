// Code your solution in this file!
  function distanceFromHqInBlocks(customerStreet) {
   
    return Math.abs(customerStreet - 42);
  }
  function distanceFromHqInFeet(customerStreet) {
    const blocks = distanceFromHqInBlocks(customerStreet);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const startInFeet = start * 264;
    const destinationInFeet = destination * 264;
    return Math.abs(destinationInFeet - startInFeet);

  }

  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
   if (distance <= 400){
    return 0;
   } else if (distance > 400 && distance <= 2000){
    return (distance - 400) * 0.02;
   } else if (distance > 2000 && distance <= 2500) {
    return 25;
   } else {
    return 'cannot travel that far'
   }
}
//   }
//   if (distanceInFeet <= 400) {
//     return 0;
//   } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
//     return (distanceInFeet - 400) * 0.02;
//   } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
//     return 25;
//   } else {
//     return 'cannot calculate fare for rides over 2500 feet';
//  