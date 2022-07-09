const text = `
a 1-5: abcdj
z 2-4: asfalseiruqwo
b 3-6: bhhkkbbjjjb
2 3-5: 2235232213
`;

const arrayWithInfo = text.split("\n").slice(1, -1);

let statusPasswords = [];

arrayWithInfo.forEach((item, i) => {
  checkPassword(item, i);
});

function checkPassword(string, idx) {
  let counter = 0;
  let [key, numbers, password] = string.split(" ");
  const [min, max] = numbers.slice(0, -1).split("-");

  for (let i = 0; i < password.length; i++) {
    if (password[i] === key) counter++;
  }

  counter >= min && counter <= max
    ? statusPasswords.push({
        comment: `№${idx + 1} password is valid`,
        value: 1,
      })
    : statusPasswords.push({
        comment: `№${idx + 1} password isn't valid`,
        value: 0,
      });
}

function countValidPasswords(array) {
  return array
    .filter((item) => item.value === 1)
    .reduce((acc, item) => (acc += item.value), 0);
}

const result = ` ${countValidPasswords(
  statusPasswords
)} valid passwords were provided`;
console.log(result);
