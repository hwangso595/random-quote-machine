import React, {useState, useEffect} from 'react';
import './App.scss';
import QuoteMachine from './components/QuoteMachine';

const colorList = ["#f0a37a", "#a0b874", "#92d18c", "#8cd1b1", "#8cced1", "#8cadd1", "#8ca8d1", "#938cd1", "#ad8cd1", "#d18ccc", "#d18ca0"];
var colorIndex;

const App = props => {
  const [quotes, updateQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);
  

  useEffect(() => {
      async function fetchData() {
        const data = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
        const quotes = await data.json();
        updateQuotes(quotes);
        setSelectedQuoteIndex(Math.floor(Math.random()*(quotes.length)));
        console.log("GOT QUOTE");
      }
      fetchData();
      
  }, []);

  const resetAnimation = (id) => {
    var element = document.getElementById(id);
    element.classList.remove("animate");
    void element.offsetWidth; // trigger a DOM reflow
    element.classList.add("animate");
  }

  const changeColor = (id) => {
    let element = document.getElementById(id);
    element.style.backgroundColor = colorList[colorIndex];
  }
  const changeColorClass = (cls) => {
    let element = document.getElementsByClassName(cls);
    console.log(element);
    for (let i = 0; i < element.length; i++) {
      element[i].style.backgroundColor = colorList[colorIndex];
    }
    
  }

  const getSelectedQuote = () => {
    if (!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  }

  const assignNewQuoteIndex = () => {
    if(!quotes.length) 
      return;
    let rand = Math.floor(Math.random()*(quotes.length));
    while(rand === selectedQuoteIndex) {
      rand = Math.floor(Math.random()*(quotes.length));
    }
   
    setSelectedQuoteIndex(rand);

    resetAnimation('quote');
    colorIndex = Math.floor(Math.random()*(colorList.length));
    (function() {
      changeColor('quote-box');
      changeColorClass("animate-btn");
    })();
  }
  return (
  <div className="App" id="quote-box">
    {
      getSelectedQuote()? 
      <QuoteMachine selectedQuote={getSelectedQuote()} assignNewQuoteIndex={assignNewQuoteIndex}/>: 
      null
    }
    
  </div>
  );
}
export default React.memo(App, () => {
  return true;
});
