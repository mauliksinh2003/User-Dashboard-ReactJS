import React from "react";

import { createContext, useState } from 'react';
import Main from "./Main";


export const colors = createContext()


function App() {
  const [theme, setTheme] = useState("Light");
  
  const changetheme = (theme) => {
    return setTheme(theme)
  }

  return (
    <> 
      <colors.Provider value={{ theme, changetheme }} >
        <div style={{ backgroundColor: `${theme}` }}>
          <Main />
        </div>
      </colors.Provider>
    </>
  );
}

export default App;