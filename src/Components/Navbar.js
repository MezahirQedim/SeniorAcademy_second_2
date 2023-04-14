import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import ThemeContex from "../Context/Contex";



const Navbar = ({Tabs}) => {

  const {theme, setTheme} = useContext(ThemeContex)


  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        {Tabs.map((item, key) => {

          return(
            <li class="nav-item" key={key}>
              <Link class="nav-link active" to={item.path} >{item.name}</Link>
            </li>
          )
          
        })}
          
          
        </ul>
        <button className='btn btn-dark mx-2' 
          onClick={() => setTheme("dark")}
        >{theme}</button>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;