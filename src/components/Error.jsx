import {useState, useEffect} from 'react';

const Error = ({children}) => {
    return (
        <div id="error" className="bg-red-800 text-center text-white font-bold rounded-md">
            <p>{children}</p>
        </div>
    )
}

export default Error
