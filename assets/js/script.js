//Wait for the DOM to finish loading before running the page.
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("load-quote").addEventListener("click", printQuote, false);
});

var quotes = [
    {
        quote: "Never fear shadows. They simply mean there's a light shining nearby.",
        source: "Ruth E. Renkel"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "Benjamin Franklin"
    },
    {
        quote: "A problem is a chance for you to do your best.",
        source: "Duke Ellington"
    },
    {
        quote: "The most sincere compliment we can pay is attention.",
        source: "Walter Anderson"
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
        quote: "Success is falling nine times and getting up ten.",
        source: "Jon Bon Jovi"
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
        quote: "Each day comes bearing its gifts. Untie the ribbon.",
        source: "Ann Ruth Schabacker"
    },
    {
        quote: "Weaknesses are just strengths in the wrong environment.",
        source: "Marianne Cantwell"
    },
    {
        quote: "There is only one certainty in life and that is that nothing is certain.",
        source: "G.K. Chesterton"
    },
    {
        quote: "Living is the art of getting used to what we didn't expect.",
        source: "Eleanor C. Wood"
    },
    {
        quote: "Real eyes, realize, real lies",
        source: "Tupac Shakur"
    },
    {
        quote: "Kindness is one thing you can't give away. It always comes back.",
        source: "George Skolsky"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        source: "Andre Gide"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        source: "Dalai Lama"
    },
    {
        quote: "Try to be a rainbow in someone else's cloud.",
        source: "Maya Angelou"
    },
    {
        quote: "The only real failure in life is not to be true to the best one knows.",
        source: "The Buddha"
    },
    {
        quote: "If you don't like the road you're walking, start paving another one.",
        source: "Dolly Parton"
    },
    {
        quote: "Lead from the heart, not the head.",
        source: "Princess Diana"
    },
    {
        quote: "The time is always right to do what is right.",
        source: "Martin Luther King Jr."
    },
    {
        quote: "There is nothing impossible to they who will try.",
        source: "Alexander the Great"
    },
    {
        quote: "Believe you can and you're halfway there.",
        source: "Theodore Roosevelt"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        source: "Aristotle"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        source: "Albert Einstein"
    },
    {
        quote: "Try to be a rainbow in someone else's cloud.",
        source: "Maya Angelou"
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
    }, 12000);