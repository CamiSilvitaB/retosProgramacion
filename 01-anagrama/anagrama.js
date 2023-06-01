const word1 = document.getElementById('input1');
const word2 = document.getElementById('input2');
const button = document.querySelector('#btn');
const answer = document.querySelector('.answer');

button.addEventListener("click", anagrama)




function anagrama () {
  if (word1.length === word2.length && word1.value != word2.value) {
    
    const  letters1 = word1.value.split('').sort().toString ()
    const  letters2 = word2.value.split('').sort().toString()
    
    if (letters1 == letters2) {
      const imAnagram = 'Son un anagrama 🤯'
      answer.innerHTML = imAnagram
    } else {
      const notAnagram = 'Tus palabras NO son un Anagrama 🫠'
      answer.innerHTML = notAnagram
    }
  } else {
    answer.innerHTML = 'Tus palabras son igual 😵‍💫'
  }
}

