const quotebutton = document.getElementById('quote-btn');

quotebutton.addEventListener('click', showquote)

function showquote() {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
        let html ='';
        html += `
            <p>${data.text}</p>
            <p class="author">${data.author}</p>`;
    
    })
}
