import React, { useContext, useRef, useState } from 'react'
import App, { colors } from '../App';

export default function Eng3() {
    const { theme, changetheme } = useContext(colors);

    const [img, setimg] = useState("");

    const inputref = useRef(null);

    const handleimgchange = (e) => {
        setimg(e.target.files[0]);
    };


    return (
        <div style={{ backgroundColor: `${theme}` }}>

            <div style={{display : "flex" , gap : "20px" , margin : "0px 10px" , backgroundColor : "ButtonHighlight"}}>
                {
                    img ? (<img style={{ height: "100px", borderRadius: "50px", width: "100px", border: "none" }} src={URL.createObjectURL(img)} />
                    ) : (<img style={{ height: "100px", borderRadius: "50px", width: "100px", border: "none" }}
                    />)
                }
                <br />
                <input ref={inputref} onChange={handleimgchange} type="file" id="myFile" name="filename" style={{marginTop : "40px"}} />
            </div>  

            <div style={{ textAlign: "left", marginBottom: "20px" , margin : "10px" , color: theme == "black" ? "white" : "black"       }}>
                <h3>Change theme</h3>
                <button onClick={() => changetheme("black")}>Dark</button>
                <button onClick={() => changetheme("white")}>Light</button>
                <button onClick={() => changetheme("gray")}>Gray</button>
            </div>
        </div>
    )
}