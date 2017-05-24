var string2 = "(id,created,employee(id,firstname,employeeType(id),lastname),location)";

// takes a string and converts according to the rules given in the example
function convert(str) {
  let count = -1; // use this to track number of hyphens
  let word = "";
  let arr = [];
  for (var char of str) {
    switch (char) {
      case ")":
        if (count === -1) arr.push(word); // reached end of string
        if (word) arr.push("-".repeat(count) + word);
        count--;
        word = "";
        break;
      case "(":
        if (word) arr.push("-".repeat(count) + word);
        count++;
        word = "";
        break;
      case ",":
        if (word) arr.push("-".repeat(count) + word);
        word = "";
        break;
      default:
        word += char;
    }
  }
  arr.forEach(function(param) {
    console.log(param + "\n");
  })
}