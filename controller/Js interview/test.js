function findMissingLetter(str) {
    for(let i = str.length - 1; i >= 0; i--) {
        const diff = str.charCodeAt(i) - str.charCodeAt(i + 1)
        console.log(String.fromCharCode(str.charCodeAt(i) + 1));
    }
}

const str = 'abcdfi';
console.log(findMissingLetter(str))