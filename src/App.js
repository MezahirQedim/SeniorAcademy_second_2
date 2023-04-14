import Navbar from "./Components/Navbar";
import Home from "./Components/Router/Home";
import Form from "./Components/Router/Form";
import Service from "./Components/Router/Service";
import { Route, Routes } from "react-router-dom";
import User from "./Components/Router/User";
import Employee from "./Components/Router/Employee";
import Product from "./Components/Router/Product/Product";
import ThemeContext from "./Context/Contex";
import React from "react";

function App() {
  const newArray = ["test", "test_2"];

  const [theme, setTheme] = React.useState("light")


  const Tabs = [
    {
      path: "/home",
      element: <Home newArray={newArray} />,
      name: "Home",
    },
    {
      path: "/service",
      element: <Service />,
      name: "Service",
    },
    {
      path: "/form",
      element: <Form />,
      name: "Form",
    },
    {
      path: "/user",
      element: <User />,
      name: "User",
    },
    {
      path: "/employee",
      element: <Employee />,
      name: "Employee",
    },
    {
      path: "/product",
      element: <Product />,
      name: "Product",
    },
  ];


  const data = {
    theme, setTheme
  }



  return (
    <div className="App">
      <ThemeContext.Provider value={data} >
        <Navbar  Tabs={Tabs} />

        <Routes>
          {Tabs.map((item) => (
            <>
              <Route path={item.path} element={item.element} />
            </>
          ))}
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
