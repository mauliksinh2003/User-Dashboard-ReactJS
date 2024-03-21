import React, { useContext } from 'react'
import App, { colors } from '../App';

export default function Hin1() {
    const { theme, changetheme } = useContext(colors)
    let a = (theme == "black" ? "white" : "black")
    return (
        <>

<h4 style={{marginLeft : "10px"}}>वर्तमान भाषा: हिन्दी</h4>

            <div style={{ textAlign: "center", margin: "10px", color: theme == "black" ? "white" : "black" }}>
                <h1>उपयोगकर्ता डैशबोर्ड प्रोजेक्ट में आपका स्वागत है</h1>
            <div style={{display : "block"}}>
                <img style={{ height : "100px" , width : "100px"}} src='https://static.vecteezy.com/system/resources/thumbnails/011/999/627/small/monitoring-icon-logo-illustration-dashboard-admin-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg'></img>
            </div>
            </div>

        </>
    )
}