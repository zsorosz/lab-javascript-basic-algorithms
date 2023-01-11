// Iteration 1: Names and Input
const hacker1 = "Zsofia";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Istvan";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let hacker1Modified = "";
for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    hacker1Modified += hacker1[i].toUpperCase() + " ";
  } else {
    hacker1Modified += hacker1[i].toUpperCase();
  }
}

console.log(hacker1Modified);

let hacker2Modified = "";

for (var j = hacker2.length - 1; j >= 0; j--) {
  hacker2Modified += hacker2[j];
}

console.log(hacker2Modified);

let order = hacker1.localeCompare(hacker2);

if (order < 0) {
  console.log("The driver's name goes first.");
} else if (order > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non orci dui. Donec ullamcorper ligula sodales, porttitor sem et, fermentum ipsum. Ut quis semper neque, et scelerisque dui. Cras euismod sollicitudin quam eu porta. Mauris porta viverra convallis. In justo eros, iaculis sit amet ligula non, rutrum ultrices purus. Mauris sit amet purus sit amet diam cursus varius eu ut mauris. Morbi consectetur tempus ipsum, sed aliquet enim efficitur at. Fusce laoreet volutpat nulla, sed ultricies nibh bibendum et. Vestibulum nec lacus tristique, accumsan arcu id, venenatis elit. Duis vitae mollis magna. Mauris et risus vel elit rutrum blandit auctor varius mi. Donec pretium eros a turpis pulvinar faucibus. Curabitur pharetra enim ac ornare dictum. Vivamus gravida ligula ipsum, eu scelerisque nisi vulputate id. Duis et aliquet arcu. Phasellus sed est feugiat, tempus leo nec, maximus nisl. In hac habitasse platea dictumst. Phasellus tempor in metus ut venenatis. Ut scelerisque iaculis dui, eu sodales enim. Integer arcu diam, volutpat quis condimentum malesuada, hendrerit eu ipsum. Phasellus ac magna nec urna commodo consequat eu egestas enim. Ut sed massa enim. Integer et orci nec ligula condimentum semper. Nunc neque nisl, tincidunt nec tortor sed, scelerisque rutrum dui. Donec mi dolor, cursus sit amet tincidunt sed, eleifend quis neque. Phasellus ut tellus velit. Etiam vitae lorem ipsum. Sed viverra, tortor nec mattis porta, urna lacus ultricies purus, eu tincidunt orci neque id arcu. Vestibulum faucibus, lacus sed vehicula consectetur, diam purus lacinia augue, quis dignissim tortor purus vitae nulla. Phasellus mollis quis ex id ultricies. Fusce congue pharetra orci et pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada fermentum consectetur. Proin ultricies sed augue eu tincidunt. Nulla vel fringilla ex. Nullam ac dolor laoreet, sodales diam id, consequat sem. Sed euismod, nunc pretium viverra pretium, ligula libero venenatis enim, ac hendrerit justo tortor sit amet turpis. Vestibulum aliquet vehicula purus, id tincidunt est molestie congue.";

let wordCount = 1;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }
}

console.log(wordCount);

let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] + longText[i + 1] + longText[i + 2] + longText[i + 3] ===
    " et "
  ) {
    etCount++;
  }
}

console.log(etCount);
