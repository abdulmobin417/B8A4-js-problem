function cubeNumber(number) {
  if (typeof number === "number") {
    return number * number * number;
  }
  return "Please enter a number";
}

function matchFinder(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    return string1.includes(string2);
  }
  return "Please enter two valid string";
}

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[0] === arr[1]) {
    return "equal";
  } else {
    if (arr[0] < arr[1]) {
      return [arr[1], arr[0]];
    }
    return arr;
  }
}

function findAddress(obj) {
  return (
    (obj.street || "__") +
    "," +
    (obj.house || "__") +
    "," +
    (obj.society || "__")
  );
}

function canPay(changeArray, totalDue) {
  if (changeArray.length) {
    let totalTaka = 0;
    for (let i = 0; i < changeArray.length; i++) {
      totalTaka += changeArray[i];
    }
    if (totalTaka >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
  return "You don't have any taka.";
}
