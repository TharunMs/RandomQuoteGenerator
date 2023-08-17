import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index:Math.floor(Math.random()*30)+1
    };
    this.clicked=this.clicked.bind(this);
  }
  clicked(){
    var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
    this.setState({
      index:Math.floor(Math.random()*30)+1
    });
    document.body.style.backgroundColor =`rgb(${r}, ${g}, ${b})`
  }

  render() {
    const quotes = [
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra"
  },
  {
    quote: "The harder I work, the luckier I get.",
    author: "Gary Player"
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    quote: "The harder the conflict, the greater the triumph.",
    author: "George Washington"
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  },
  {
    quote: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
    author: "Chantal Sutherland"
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale"
  },
  {
    quote: "Success is not the absence of failure; it's the persistence through failure.",
    author: "Aisha Tyler"
  },
  {
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    quote: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis"
  },
  {
    quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    quote: "Success is not just about making money. It's about making a difference.",
    author: "Tharun"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not the absence of failure; it's the persistence through failure.",
    author: "Aisha Tyler"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra"
  },
  {
    quote: "The harder I work, the luckier I get.",
    author: "Gary Player"
  },
];
    const qu=`https://twitter.com/intent/tweet?text="${quotes[this.state.index-1].quote}"`
    return (
      <div id="quote-box">
  <p id="text" style={{color:`${document.body.style.backgroundColor}`}}>"{quotes[this.state.index-1].quote}"</p>
  <p id="author" style={{color:`${document.body.style.backgroundColor}`}}>- {quotes[this.state.index-1].author}</p>
        <div id="logo"><a id="tweet-quote" style={{backgroundColor:`${document.body.style.backgroundColor}`}} href={qu} target="_top"><img
            src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
            alt="Twitter Icon"
          /></a>
  <button id="new-quote" onClick={this.clicked} style={{backgroundColor:`${document.body.style.backgroundColor}`}}>New quote</button></div>
</div>

    );
  }
}

export default App;
