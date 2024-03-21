import React, { useContext } from 'react'
import App, { colors } from '../App';
import '../Main.css'


export default function Guj2() {
    const { theme, changetheme } = useContext(colors);

    return (
        <aside style={{ backgroundColor: `${theme}`, color: theme == "black" ? "white" : "black", height: "150px" }}>
            <h3 style={{ marginLeft: "10px" }}> બિઝનેસ ડેશબોર્ડ </h3>
            <div style={{display : "flex" , margin : "10px", padding : "10px" , gap : "20px" , backgroundColor : "${theme}"}}>
            <div className='Component'>
                <a href=''>ગ્રાહક</a>
            </div>
            <div className='Component'>
                <a href=''>આવક</a>
            </div>
            <div className='Component'>
                <a href=''>ઉત્પાદન સૂચિ</a>
            </div>
            <div className='Component'>
                <a href=''>વપરાશકર્તા આંતરદૃષ્ટિ</a>
            </div>
            <div className='Component'>
                <a href=''>સેટિંગ</a>
            </div>
            </div>
        </aside>
    )
}