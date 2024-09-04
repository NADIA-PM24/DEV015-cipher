import cipher from './cipher.js';

const inputTextElement = document.getElementById("input-text");
const encodeButton = document.getElementById("encode-button");

const outputTextElement = document.getElementById("output-text");
const decodeButton = document.getElementById("decode-button");


encodeButton.addEventListener("click", () => {
    const inputText = inputTextElement.value;
    //const codificarTexto = cipher.encodeText(codificarTexto);
    const encodeText = cipher.encode(3,inputText); 
    console.log(encodeText); //tal vez la función no esta retornando el resultado
});


decodeButton.addEventListener("click", () => {
        const outputText = outputTextElement.value;
        //const decodificarTexto = cipher.decodeText(decodificarTexto)
        const decodeText = cipher.decode(outputText);
        console.log(decodeText)

    });




console.log(cipher);