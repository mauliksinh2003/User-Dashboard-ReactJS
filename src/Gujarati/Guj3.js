import React, { useContext, useRef, useState } from 'react'
import App, { colors } from '../App';

export default function Guj3() {
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
                    img ? (<img style={{ height: "100px", borderRadius: "50px", width: "100px", border: "none" }} src={URL.createObjectURL(img)} alt='Select pic' />
                    ) : (<img style={{ height: "100px", borderRadius: "50px", width: "100px", border: "none" }}
                    />)
                }
                <br />
                {/* <label for="file">Choose file to upload</label> */}
                <input onChange={handleimgchange} type="file" id="myFile" name="filename" style={{marginTop : "40px"}}></input>
            </div>  

            <div style={{ textAlign: "left", marginBottom: "20px" , margin : "10px" , color: theme == "black" ? "white" : "black"       }}>
                <h3>થીમ બદલો</h3>
                <button onClick={() => changetheme("black")}>શ્યામ</button>
                <button onClick={() => changetheme("white")}>પ્રકાશ</button>
                <button onClick={() => changetheme("gray")}>ભૂખરા</button>
            </div>
        </div>
    )
}