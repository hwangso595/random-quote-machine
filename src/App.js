import React, {useState, useEffect} from 'react';
import './App.css';
import QuoteMachine from './components/QuoteMachine';

const App = props => {
  const [quotes, updateQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);
  

  useEffect(() => {
      async function fetchData() {
        const data = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
        const quotes = await data.json();
        await updateQuotes(quotes);
        //setSelectedQuoteIndex(Math.floor(Math.random()*(quotes.length)));
        setSelectedQuoteIndex(Math.floor(Math.random()*(quotes.length)));
        console.log("GOT QUOTE");
      }
      fetchData();
      
  }, []);

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
  }
  return (
  <div className="App" id="quote-box">
    {
      getSelectedQuote()? 
      <QuoteMachine selectedQuote={getSelectedQuote()} assignNewQuoteIndex={assignNewQuoteIndex}/>: null
    }
    
  </div>
  );
}
export default React.memo(App, () => {
  return true;
});
