
/* Reto #1

¿ES UN ANAGRAMA?}

Dificultad: MEDIA

Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.

- Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
- NO hace falta comprobar que ambas palabras existan.
- Dos palabras exactamente iguales no son anagrama.

*/

let word1 = document.getElementById('input1').value;
let word2 = document.getElementById('input2').value;

function anagrama () {
  if (word1.length === word2.length) {
    const  letters1 = word1.split('').sort().toString ()
    const  letters2 = word2.split('').sort().toString()
    
    if (letters1 == letters2) {
      console.log('tus palabras son un anagrama')
    } else {
      console.log('Tus palabras NO son un Anagrama')
    }

  } else {
    console.log('Tus palabras NO son un Anagrama')
  }
}
anagrama()
