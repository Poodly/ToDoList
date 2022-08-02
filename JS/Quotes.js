// -<Quotes>- //
//array 여야 한다.
const quotes = [
    {
        quotes: "- There is a difference between knowing the path and walking the path -",
        author: "Morpheus",   
    },
    {
        quotes: "- Unfortunately, no one can be told what The Matrix is. You have to see it for yourself -",
        author: "Morpheus",   
    },
    {
        quotes: "- The road to success and the road to failure are almost exactly the same -",
        author: "Colin R. Davis",   
    },
    {
        quotes: "- It is better to fail in originality than to succeed in imitation -",
        author: "Herman Melville",   
    },
    {
        quotes: "- The way to get started is to quit talking and begin doing -",
        author: "Walt Disney",   
    },
    {
        quotes: "- In order to succeed, we must first believe that we can -",
        author: "Nikos Kazantzakis",   
    },
    {
        quotes: "- The sun gives off sparks only by concentration into one focus -",
        author: "Alexander Graham Bell",   
    },
    {
        quotes: "- It is not where you start that counts, but where you choose to finish -",
        author: "Andrew Matthews",   
    },
    {
        quotes: "- When work is a pleasure, life is a joy. When work is a duty, life is slavery -",
        author: "Maxim Gorky",   
    },
    {
        quotes: "- Shut out all of your past except that which will help you weather your tomorrows -",
        author: "William Osler",   
    },
];

const quote  = document.querySelector("#quote span:first-child"); //span1
const author = document.querySelector("#quote span:last-child");  //span2


const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]); 

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;







