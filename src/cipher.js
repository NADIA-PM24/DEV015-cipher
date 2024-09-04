const cipher = {
  encode: function (offset, string) {

    console.log(string);
    console.log(typeof string);
    
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).join('');
    console.log('Alfabeto:', alphabet);

    offset = offset % 26;

    function encodeChar(char) {
      
      const upperChar = char.toUpperCase();

      const index = alphabet.indexOf(upperChar);
      console.log('Carácter original:', char);
      console.log('Carácter en mayúsculas:', upperChar);
      console.log('Índice en el alfabeto:', index);

      if (index !== -1) {
      
        const newIndex = (index + offset) % 26;

        return alphabet[newIndex];
      }

      return char;
    }
    
    return string.split('').map(encodeChar).join('');
  
  },

  decode: function (offset, string) {
    // Generar el alfabeto en mayúsculas dinámicamente
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).join('');
  

    // Convertir el offset a un rango válido (0-25) usando módulo 26
    offset = offset % 26;

    // Función descifrar una letra
    function decodeChar(char) {
      const upperChar = char.toUpperCase();
      const index = alphabet.indexOf(upperChar);

      if (index !== -1) {
        // Calcular el nuevo índice con el desplazamiento inverso
        const newIndex = (index - offset + 26) % 26;
        return alphabet[newIndex];
      }

      return char;
    }

    // Descifrar cada carácter de la cadena usando la función decodeChar
    return string.split('').map(decodeChar).join('');
  }
}

// Ejemplo de uso
const encoded = cipher.encode(3, "HOLA ¿CÓMO ESTÁS?");
console.log("Texto cifrado:", encoded);

//const decoded = cipher.decode(3, "AQUÍ ESCRIBIR UN MENSAJE HOLA ¿Cómo estás?");

//console.log("Texto descifrado:", decoded);


export default cipher;
