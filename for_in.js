const studentScore = {
  John: 80,
  Jane: 90,
  Jack: 85,
  Jill: 87,
  Joe: 88,
  Jenny: 89,
  Jim: 86,
  Jen: 91,
  Jerry: 92,
  Jesse: 93,
};

// for (let student in studentScore) {
//   console.log(`${student} has scored ${studentScore[student]}`);
// }

let total = 0;
let scores = Object.values(studentScore);
for (let score of scores) {
  total += score;
}

console.log(`Total score: ${total}`);
console.log(`Average score: ${total / scores.length}`);
console.log(`Highest score: ${Math.max(...scores)}`);
console.log(`Lowest score: ${Math.min(...scores)}`);
console.log(`Range score: ${Math.max(...scores) - Math.min(...scores)}`);
console.log(`Median score: ${scores.sort()[Math.floor(scores.length / 2)]}`);
console.log(
  `Mode score: ${scores
    .sort(
      (a, b) =>
        scores.filter((v) => v === a).length -
        scores.filter((v) => v === b).length
    )
    .pop()}`
);
console.log(
  `Standard deviation score: ${Math.sqrt(
    scores
      .map((score) => Math.pow(score - total / scores.length, 2))
      .reduce((acc, curr) => acc + curr) / scores.length
  )}`
);
console.log(
  `Variance score: ${
    scores
      .map((score) => Math.pow(score - total / scores.length, 2))
      .reduce((acc, curr) => acc + curr) / scores.length
  }`
);
