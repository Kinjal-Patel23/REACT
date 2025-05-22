import React, { useEffect, useState } from 'react'
import './QuoteGenerator.css'
import quotesData from '../data/quotesData';

const QuoteGenerator = ({ selectMood , trigger }) => {

    const [currentQuote, setCurrentQuote] = useState('');

    useEffect(() => {
        if(selectMood && quotesData[selectMood])
        {
            const randomQuote = Math.floor(Math.random() * quotesData[selectMood].length);
            setCurrentQuote(quotesData[selectMood][randomQuote].text);
        }
        else
        {
            setCurrentQuote('');
        }
    },[selectMood, trigger])

    return (
        <>
            <div className="quote-box">
                <p className="quote-text">{currentQuote}</p>
            </div>
        </>
    )
}

export default QuoteGenerator
