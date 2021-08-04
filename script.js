const quotebutton = document.getElementById('quote-btn'); // gets quotes button
const quote = document.getElementById('quote-text'); // gets the space for quote-text
const author = document.getElementById('author'); // gets the space for the author

quotebutton.addEventListener('click', showquote) // quote button onclick

// gets quote from an api & displays it
function showquote() {
    fetch("https://type.fit/api/quotes") // fetches quote from api
        .then(response => response.json()) // converts response to json
        .then(data => {
            // console.log(data); // prints the json array
            data = data[getRandomInt(0, data.length - 1)] // selects a random quote from the json array
            quote.innerHTML = data.text; // sets the quote-text space to the random quote 
            author.innerHTML = data.author; // sets the author name
        })
}

// generates a random number that is used as an index to get a random quote from the json array
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}