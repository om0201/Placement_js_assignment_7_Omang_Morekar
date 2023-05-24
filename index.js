function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const count = getRandomInt(100);

let countValue = new Promise(function (resolve, reject) {
  if (count % 2 === 0) {
    resolve("This is a even number. " + count);
  } else {
    reject("This is a odd number " + count);
  }
});

console.log(countValue);
