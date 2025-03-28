import React from "react";
 
function Buttoon({
    children,
    type = 'button',
    bgColor = 'bd-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}){
    return(
        <button className={`px-4 py-2 rouded-lg ${bgColor} ${textColor} 
        ${className}`} {...props}>
            {children}
        </button>
    )
}
export default Button