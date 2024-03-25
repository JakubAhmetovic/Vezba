// 1.
const a = +prompt("Unesite broj");
if (isNaN(a)) {
  console.log("Niste uneli broj");
} else {
  console.log(a * a);
}

// 2.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("FUZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FUZZ BUZZ");
  }
}

// 3.
let brBr = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 4 === 0 && i % 6 === 0 && brBr < 3) {
    console.log(i);
    brBr++;
  }
}
