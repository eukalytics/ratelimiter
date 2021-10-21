import React from "react";
import SubmitBtn from "./SubmitBtn";

export default function Form({incrRateLimit, delayFormSubmit}){
    return (
        <form onSubmit={delayFormSubmit} name="rateLimitedForm">
            <p>
                <label htmlFor='name'>Name:</label>
                <input type='text' placeholder='name' name='name'></input>
            </p>
            <p>
                <label htmlFor='email'>Email:</label>
                <input type='email' placeholder='email' name='email'></input>
            </p>
            <p>
                <label htmlFor='message'>Message:</label>
                <textarea placeholder='message' name='message'></textarea>
            </p>
            <SubmitBtn />
        </form>
    )
}