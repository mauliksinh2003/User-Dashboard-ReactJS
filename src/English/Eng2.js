import React, { useContext } from 'react'
import App, { colors } from '../App';
import '../Main.css'


export default function Eng2() {
    const { theme, changetheme } = useContext(colors);

    return (
        <aside style={{ backgroundColor: `${theme}`, color: theme == "black" ? "white" : "black", height: "150px" }}>
            <h3 style={{ marginLeft: "10px" }}> Business Dashboard </h3>
            <div style={{display : "flex" , margin : "10px", padding : "10px" , gap : "20px" , backgroundColor : "${theme}"}}>
            <div className='Component'>
                <a href=''>CUSTOMER</a>
            </div>
            <div className='Component'>
                <a href=''>INCOME</a>
            </div>
            <div className='Component'>
                <a href=''>PRODUCT LIST</a>
            </div>
            <div className='Component'>
                <a href=''>USER INSIGHTS</a>
            </div>
            <div className='Component'>
                <a href=''>SETTING</a>
            </div>
            </div>
        </aside>
    )
}