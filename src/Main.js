import React, { useContext, useState } from 'react'
import GujaratiMain from './GujaratiMain'
import HindiMain from './HindiMain'
import EnglishMain from './EnglishMain'
import App , {colors} from './App'

const Main = () => {

  const [data, setData] = useState("English");

  const { theme, changetheme } = useContext(colors)


  const handal = (val) => {
    setData(val)
  }

  return (
    <>
      <div style={{display : "flex" , flexWrap : "wrap" }}>
        {/* <h3 style={{color: theme == "black" ? "white" : "black" , marginLeft : "10px"}}>You can change language type from here :</h3> */}
        <select style = {{height : "30px" , marginLeft : "10px" ,marginTop : "15px" , display : "block"}} id="" onClick={(e) => handal(e.target.value)}>
        <option value="English">Select language</option>
          <option value="English">English</option>
          <option value="ગુજરાતી">Gujarati</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      {data === "English" ?
        <>
          <EnglishMain />
        </> : data === "ગુજરાતી" ? <><GujaratiMain /></>
          : <><HindiMain /></>}
    </>
  )
}

export default Main; 