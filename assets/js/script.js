//Wait for the DOM to finish loading before running the page.
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

var quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source: "Nelson Mandela"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "Benjamin Franklin"
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        source: "Dr. Seuss"
    },
    {
        quote: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
        source: "Maya Angelou"
    },
    {
        quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.",
        source: "Dolly Parton"
    },
    {
        quote: "There isn't a way things should be. There's just what happens, and what we do.",
        source: "Terry Pratchett"
    },
    {
        quote: "You never really learn much from hearing yourself speak.",
        source: "George Clooney"
    },
    {
        quote: "Life is a flower of which love is the honey.",
        source: "Victor Hugo"
    },
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        source: "Mark Twain"
    },
    {
        quote: "Every moment is a fresh beginning.",
        source: "T.S. Eliot"
    },
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: "Dr. Seuss"
    },
    {
        quote: "As my knowledge of things grew I felt more and more the delight of the world I was in.",
        source: "Helen Keller"
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        source: "Aristotle"
    },
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        source: "Audrey Hepburn"
    },
    {
        quote: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
        source: "Lady Gaga"
    },
    {
        quote: "Weaknesses are just strengths in the wrong environment.",
        source: "Marianne Cantwell"
    },
    {
        quote: "When you've seen beyond yourself, then you may find, peace of mind is waiting there.",
        source: "George Harrison"
    },
    {
        quote: "A lot of people are afraid to say what they want. That's why they don't get what they want.",
        source: "Madonna"
    },
    {
        quote: "Real eyes, realize, real lies",
        source: "Tupac Shakur"
    },
    {
        quote: "However difficult life may seem, there is always something you can do and succeed at.",
        source: "Stephen Hawking"
    },
];

//function to get random quote value and return a quote from quotes array.
function getRandQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var randomQuote = quotes [randomNumber];
    return randomQuote; 
}

//function for calling the getRandomQuote function and stores the returned quote object.
function printQuote() {
    var quotes = getRandQuote();
    var quoteSection = document.getElementById('quote-section');
    var quoteLine = `<p class ="quote">${quotes.quote}</p><p class ="source">${quotes.source}</p>`;
        quoteSection.innerHTML = quoteLine;
    
}

window.setInterval(function(){
    printQuote ();
    }, 20000);

document.getElementById("load-quote").addEventListener("click", printQuote, false);



