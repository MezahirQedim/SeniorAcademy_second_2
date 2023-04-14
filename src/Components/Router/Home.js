import React from 'react';
import { useContext } from 'react';
import ThemeContext from "../../Context/Contex"

const Home = (props) => {

  const {theme, setTheme} = useContext(ThemeContext)


  return (
    <div>
      {props.newArray.map((x) => <h1>{x}</h1>)}

        {theme}

    </div>
  )
}

export default Home