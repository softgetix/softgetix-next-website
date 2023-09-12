import React from "react";
import {useEffect, useState} from 'react';

function BackToTopButton () {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY > 200){
            setBackToTopButton(true)
        }else{
            setBackToTopButton(false)
        }
    })
    }, []) 

    const scrollUp = () => 
    {
        window.scrollTo({
            top : 0,
            behavior :"smooth"
        })
    }

    return <div className="App">
        {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "25px",
                color: '#fa7169',
                background:'#2f3b74',
                border:'none',
                borderRadius: '5px',
            }}
            onClick={scrollUp}
            ><span className="fa fa-chevron-up"></span></button>
        )}
    </div>;
}

export default BackToTopButton;