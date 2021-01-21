// https://github.com/FaysalShuvo/Assignment_03/tree/main/Assignment_03


// Kilometer TO Meter
function kilometerToMeter(kiloMeter) {
  if (kiloMeter < 0) {
    return "Erorr!!! You Have to put a POSITIVE value.";
  } else {
    var meter = kiloMeter * 1000;
    return meter;
  }
}

// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    return "ERORR!! negative value not allowed...";
  } else {
    var totalBudget = watch * 50 + phone * 100 + laptop * 500;
    return totalBudget;
  }
}

// Hotel Costs
function hotelCost(days) {
  var costs = 0;
  if (days < 0) {
    return "Error!!! Days can't be negative...";
  } else if (days <= 10) {
    var costs = days * 100;
  } else if (days <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDays = days - 10;
    var secondTenDays = remainingDays * 80;
    costs = firstTenDays + secondTenDays;
  } else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remainingDays = days - 20;
    var restOfTheDays = remainingDays * 50;
    costs = firstTenDays + secondTenDays + restOfTheDays;
    
  }
  return costs;
}

// Who got the bigger name

function megaFriend(friendNames) {
  var nameLength = 0;
  var longestName;
  if (friendNames == " ") {
    return "There is no name! Please Enter some name.";
  } else {
    for (var i = 0; i < friendNames.length; i++) {
      if (friendNames[i].length > nameLength) {
        var nameLength = friendNames[i].length;
        longestName = friendNames[i];
      }
    }
  }
  return longestName;
}
