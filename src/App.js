import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import RateLimitInfo from './components/RateLimitInfo'

function RateLimitedForm() {

  const header = 'Rate Limited Form';
  const [rateLimit, setRateLimit] = useState(0);
  const delay = ms => new Promise(res => setTimeout(res, ms));
 
  const incrRateLimit = () => {
    setRateLimit(rateLimit + 1);
    console.log(rateLimit)
  }
  
  const delayFormSubmit = async (e) => {
    e.preventDefault();
    await delay(rateLimit * 1000);
    incrRateLimit();
    //document.rateLimitedForm.submit();
  }

  useEffect(() => {
    document.title = rateLimit ? `${rateLimit}s rate limit` : `rate not limited` ;
  }, [rateLimit])

  return (
    <section>
      <Header header={header}/>
      <Form incrRateLimit={incrRateLimit} delayFormSubmit={delayFormSubmit}/>
      <RateLimitInfo rateLimit={rateLimit} />
    </section>
  );
}

export default RateLimitedForm;
