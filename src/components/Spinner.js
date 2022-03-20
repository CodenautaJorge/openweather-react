import React from 'react';
import '../assets/css/Spinner.css';

const Spinner = () => {

    return(
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    );
}

export default Spinner;