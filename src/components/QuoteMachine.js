import React from 'react';
import Button from './Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) => {
    return(
        <>  <div id="quote" className="animate">
                <p id="text">
                    <span id="quotation-mark">" </span>{selectedQuote.quote}
                </p>
                <p id="author">
                    <span>-</span>{selectedQuote.author}
                </p>
            </div>
            <div className="btn-row">
                <a href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=DONE`)} target="_blank"
                id="tweet-quote">
                    <button className="animate-btn">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </button>
                </a>
                <Button buttonDisplayName="Next Quote" clickHandler={assignNewQuoteIndex}/>
            </div>
        </>
    );
}
export default QuoteMachine