// API
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const getQuote = document.getElementById('getQuote');

const request = () =>{
    fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = '"'+data.content+'"';
            author.innerHTML = data.author;
        });
    fetch('https://picsum.photos/1920/1080')
        .then((res) => {
            document.body.style.backgroundImage = `url('${res.url}')`
        })
}

getQuote.addEventListener('click', request);
request();
setInterval(request, 15000)
