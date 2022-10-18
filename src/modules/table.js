const scores = [
  { Name: 'Name', score: 100 },
  { Name: 'Name', score: 20 },
  { Name: 'Name', score: 50 },
  { Name: 'Name', score: 78 },
  { Name: 'Name', score: 125 },
  { Name: 'Name', score: 77 },
  { Name: 'Name', score: 42 },
];

const scoresData = document.getElementById('table');

let userData = '';

scores.forEach((score) => {
  userData += `
  <li>${score.Name} : ${score.score}</li>
`;
});

scoresData.innerHTML = userData;
