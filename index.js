// code your solution here
// Function to find the year the Denver Broncos won the Super Bowl
function superbowlWin(record) {
    const winRecord = record.find(game => game.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  