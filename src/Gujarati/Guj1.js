import React, { useContext } from 'react'
import App, { colors } from '../App';

export default function Guj1() {
    const { theme, changetheme } = useContext(colors)
    let a = (theme == "black" ? "white" : "black")
    return (
        <>

<h4 style={{marginLeft : "10px"}}>વર્તમાન ભાષા: ગુજરાતી</h4>

            <div style={{ textAlign: "center", margin: "10px", color: theme == "black" ? "white" : "black" }}>
                <h1>વપરાશકર્તા ડેશબોર્ડ પ્રોજેક્ટમાં આપનું સ્વાગત છે</h1>
            <div style={{display : "block"}}>
                <img style={{ height : "100px" , width : "100px"}} src='https://static.vecteezy.com/system/resources/thumbnails/011/999/627/small/monitoring-icon-logo-illustration-dashboard-admin-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg'></img>
            </div>
            </div>

        </>
    )
}