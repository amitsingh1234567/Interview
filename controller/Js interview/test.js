function solveCryptogram(cipherText, mapping) {
  // mapping example: { A: 'T', B: 'H', C: 'E' }
  return cipherText
    .split('')
    .map(ch => {
      const upper = ch.toUpperCase();
      return mapping[upper] ? mapping[upper].toLowerCase() : ch;
    })
    .join('');
}

const cipher = "XLMW MW E QYR.";
const key = {
  X: 'T', L: 'H', M: 'I', W: 'S', E: 'A', Q: 'F', Y: 'U', N: 'N', R: 'Y'
};

console.log(solveCryptogram(cipher, key));