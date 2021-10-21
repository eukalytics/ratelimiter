import React from "react";
import SubmitBtn from "./SubmitBtn";

export default function Form({incrRateLimit, delayFormSubmit}){
    return (
        <form onSubmit={delayFormSubmit} name="rateLimitedForm">
            <p className="mb-5">
                <input type='text' placeholder='name' name='name' className="w-2/3 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-200" required></input>
            </p>
            <p className="mb-5">
                <input type='email' placeholder='email' name='email' className="w-2/3 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-200" required></input>
            </p>
            <p className="mb-5">
                <textarea placeholder='message' name='message' className="w-2/3 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-green-200" required></textarea>
            </p>
            <SubmitBtn />
        </form>
    )
}