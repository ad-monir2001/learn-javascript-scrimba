// The generateSentence(desc, arr) takes two parameters: a description and an array.
// It should return a string based upon the description and array.


// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  const lastIndex = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i];
    } else {
      baseString += arr[i] + ', ';
    }
  }
  return baseString;
}

const sentence = generateSentence('largest countries', ['China', 'India', 'USA']);

console.log(sentence);
