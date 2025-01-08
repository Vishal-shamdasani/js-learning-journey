const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Act as if what you do makes a difference. It does. - William James",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The best revenge is massive success. - Frank Sinatra",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller"
  ];

const s= new Set();

function genrateQuote(){
    let index= Math.floor(Math.random()*quotes.length);
    while(s.size<quotes.length){
    if (s.has(index)){
        continue;      
    }
    
    else{
        
        s.add(index);
        document.getElementById("Quote").innerHTML=quotes[index];
    }
    s.clear();
    break;
    }}