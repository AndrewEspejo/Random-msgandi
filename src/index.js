const messages= [
   "oscar",
   "Ana",
   "Nicolay",
   "Yesica",
   "Laura",
   "Aleja",
   "Caro"
];

const randomMsg = () => {
   const message = messages[Math.floor(Math.random()*messages.length)];
   console.log(message);
}

module.exports = { randomMsg};