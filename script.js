let currentCategory = 'science';
let currentIndex = 0;

const quoteElement = document.getElementById('quote');
const categorySelect = document.getElementById('categories');

function displayQuote() {
    const categoryQuotes = quotes[currentCategory];
    quoteElement.textContent = categoryQuotes[currentIndex];
}

categorySelect.addEventListener('change', function() {
    currentCategory = this.value;
    currentIndex = 0;
    displayQuote();
});
displayQuote();

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');

function showNextQuote() {
    const categoryQuotes = quotes[currentCategory];
    currentIndex = (currentIndex + 1) % categoryQuotes.length;
    displayQuote();
}

function showPreviousQuote() {
    const categoryQuotes = quotes[currentCategory];
    currentIndex = (currentIndex - 1 + categoryQuotes.length) % categoryQuotes.length;
    displayQuote();
}


function showRandomQuote() {
    const categoryQuotes = quotes[currentCategory];
    currentIndex = Math.floor(Math.random() * categoryQuotes.length);
    displayQuote();
}

nextBtn.addEventListener('click', showNextQuote);
prevBtn.addEventListener('click', showPreviousQuote);
randomBtn.addEventListener('click', showRandomQuote);

const themeToggle = document.getElementById('themeToggle');

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

themeToggle.addEventListener('change', toggleTheme);


const increaseFontBtn = document.getElementById('increaseFont');
const decreaseFontBtn = document.getElementById('decreaseFont');

let currentFontSize = 18;


function increaseFontSize() {
    currentFontSize += 2; 
    quoteElement.style.fontSize = currentFontSize + 'px';
}


function decreaseFontSize() {
    if (currentFontSize > 10) { // Set a minimum font size limit
        currentFontSize -= 2; // Decrease font size by 2px
        quoteElement.style.fontSize = currentFontSize + 'px';
    }
}


increaseFontBtn.addEventListener('click', increaseFontSize);
decreaseFontBtn.addEventListener('click', decreaseFontSize);
