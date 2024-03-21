import React, { useContext } from 'react'
import App, { colors } from '../App';
import '../Main.css'


export default function Hin2() {
    const { theme, changetheme } = useContext(colors);

    return (
        <aside style={{ backgroundColor: `${theme}`, color: theme == "black" ? "white" : "black", height: "150px" }}>
            <h3 style={{ marginLeft: "10px" }}> बिजनेस डैशबोर्ड </h3>
            <div style={{display : "flex" , margin : "10px", padding : "10px" , gap : "20px" , backgroundColor : "${theme}"}}>
            <div className='Component'>
                <a href=''>ग्राहक</a>
            </div>
            <div className='Component'>
                <a href=''>आय</a>
            </div>
            <div className='Component'>
                <a href=''>उत्पादों की सूची</a>
            </div>
            <div className='Component'>
                <a href=''>उपयोगकर्ता अंतर्दृष्टि</a>
            </div>
            <div className='Component'>
                <a href=''>सेटिंग</a>
            </div>
            </div>
        </aside>
    )
}