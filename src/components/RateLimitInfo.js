import React from 'react';

export default function RateLimitInfo({ rateLimit }) {
    return(
        <div className="mt-5 bg-yellow-300 rounded-full px-5 py-5 md:w-2/3 text-sm">
            {rateLimit 
                ? <p>Form submission currently rate limited by {rateLimit} seconds.</p>
                : <p>Form submission <u>not</u> currently rate limited.</p>
            }
        </div>
    );
}