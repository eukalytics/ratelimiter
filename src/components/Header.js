import React from 'react';

export default function Header({header}) {
    return(
        <div>
            <h1 className="text-4xl mb-10">{header}</h1>
        </div>
    );
}