
/* Reto #1

¿ES UN ANAGRAMA?}

Dificultad: MEDIA

Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.

- Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
- NO hace falta comprobar que ambas palabras existan.
- Dos palabras exactamente iguales no son anagrama.

*/

let word1 = prompt('Escriba la primer palabra del Anagrama')
let word2 = prompt('Escriba la segunda palagra del Anagrama')

function anagrama () {
  if (word1.length === word2.length) {
    const  letters1 = word1.split('').sort().toString ()
    const  letters2 = word2.split('').sort().toString()
    
    const isAnagrama = letters1 == letters2
    console.log(isAnagrama)
  } else {
    console.log('Tus palabras NO son un Anagrama')
  }
}

anagrama()