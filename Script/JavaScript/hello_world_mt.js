// LANGUAGE: Javascript
// ENV: Node.js
// AUTHOR: Matheus Pra (matheusvicente7)
// GITHUB: https://github.com/MatheusVicente7

const emojis = "😀🌍🎉";
const message = "Hello, World!";

function printWithEmojis() {
  const emojiArray = emojis.split("");
  let i = 0;

  const interval = setInterval(() => {
    if (i >= emojiArray.length) {
      clearInterval(interval);
      console.log(message);
    } else {
      process.stdout.write(emojiArray[i]);
      i++;
    }
  }, 200); // Adiciona um emoji a cada 200 milissegundos
}

printWithEmojis();