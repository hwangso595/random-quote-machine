import React from 'react';
import Button from './Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({assignNewQuoteIndex, selectedQuote}) => {
    return(
        <>
            <p id="text">
                {selectedQuote.quote}
            </p>
            <p id="author">
                {selectedQuote.author}
            </p>
            <Button buttonDisplayName="Next Quote" clickHandler={assignNewQuoteIndex}/>
            <a href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=fock`)} target="_blank"
            id="tweet-quote">
                <button>
                    <FontAwesomeIcon icon={faTwitter}/>
                    fock
                </button>
            </a>
        </>
    );
}
export default QuoteMachine