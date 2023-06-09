import React, { Children } from 'react';

import "./custom-button.styles.css";

const CustomButton = ({children,isGoogleSignIn,inverted, ...otherProps})=>(
    <button className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);


export default CustomButton;