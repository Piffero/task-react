import React from "react";

import "./Button.css";

const Button = ({children, action}) => {
    return ( 
        <button onClick={action} className="button">{children}</button>
    );
}
 
export default Button;