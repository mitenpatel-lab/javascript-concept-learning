function convertStringLetters(str) {
  const words = str.split(" ");

  
  const newWords = [];

  words.forEach(function(word) {
    if (word.length === 0) {
      newWords.push(word);
      return; 
    }

    let first = word[0];
    let last = word[word.length - 1];
    let middle = word.slice(1, word.length - 1);

    if (first === first.toUpperCase()) {
      first = first.toLowerCase();
    } else {
      first = first.toUpperCase();
    }

    if (last === last.toUpperCase()) {
      last = last.toLowerCase();
    } else {
      last = last.toUpperCase();
    }

    const newWord = first + middle + last;
    newWords.push(newWord);
  });

  const result = newWords.join(" ");

  return result;
}


console.log(convertStringLetters("Hello world javaScript"));



///Count the occurance of elements


const number=[3,6,97,6,5,3,6,3];

const result=number.reduce((pre,current)=>{

        if(pre[current]){

            pre[current]+=1;

        }
        else{
            pre[current]=1;

        }
        return pre;

},{});

console.log(result);