import React from 'react';

export default function RateLimitInfo({ rateLimit }) {
    return(
        <div>
            {rateLimit 
                ? <p>Form submission currently rate limited by {rateLimit} seconds.</p>
                : <p>Form submission <u>not</u> currently rate limited.</p>
            }
        </div>
    );
}