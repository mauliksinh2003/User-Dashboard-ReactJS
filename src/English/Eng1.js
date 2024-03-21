import React, { useContext } from 'react'
import App, { colors } from '../App';

export default function Eng1() {
    const { theme, changetheme } = useContext(colors)
    let a = (theme == "black" ? "white" : "black")
    return (
        <>
        <h4 style={{marginLeft : "10px"}}>Current language : English</h4>

            <div style={{ textAlign: "center", margin: "10px", color: theme == "black" ? "white" : "black" }}>
                <h1>Welcome to The User Dashboard project</h1>
            <div style={{display : "block"}}>
                <img style={{ height : "100px" , width : "100px"}} src='https://static.vecteezy.com/system/resources/thumbnails/011/999/627/small/monitoring-icon-logo-illustration-dashboard-admin-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg'></img>
            </div>
            </div>

        </>
    )
}