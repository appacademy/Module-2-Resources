class Word {
  constructor(word) {
    this.word = word;
  }

  removeVowels() {
    let vowels = "aeiouAEIOU";
    let newWord = "";
    for (let i = 0; i < this.word.length; i++) {
      let char = this.word[i];
      if (!vowels.includes(char)) {
        newWord += char;
      }
    }
    return newWord;
  }

  removeConsonants() {
    let vowels = "aeiouAEIOU";
    let newWord = "";
    for (let i = 0; i < this.word.length; i++) {
      let char = this.word[i];
      if (vowels.includes(char)) {
        newWord += char;
      }
    }
    return newWord;
  }

  pigLatin() {
    let vowels = "aeiouAEIOU";

    if (vowels.includes(this.word[0])) {
      return this.word + "yay";
    }

    for (let i = 0; i < this.word.length; i++) {
      let char = this.word[i];
      if (vowels.includes(char)) {
        let first_half = this.word.slice(0, i);
        let second_half = this.word.slice(i);
        return second_half + first_half + "ay";
      }
    }
  }
}

module.exports = { Word };
