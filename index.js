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
