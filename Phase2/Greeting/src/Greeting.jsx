import React from "react";

const Greeting = ({ name, language }) => {
    let message;

    if (language === "english") {
        message = `Hi ${name}`;
    } 
    else if (language === "hindi") {
        message = `Namaste ${name}`;
    } 
    else {
        message = "Enter a valid input";
    }

    return (
        <div className="Card">
            <p>{message}</p>
        </div>
    );
}

export default Greeting;