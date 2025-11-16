const quotes = [
  "The best way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. - Steve Jobs",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you."
];

const element = document.getElementById("btn");
const quote = document.getElementById("quote");
let randomIdx = 0;
element.addEventListener('click', ()=> {
    randomIdx = Math.floor(Math.random()*10 + 0);  // generates a random number from 0 to 9 both inclusive
    quote.textContent = quotes[randomIdx];
})