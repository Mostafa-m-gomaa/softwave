import React, { useContext, useState, useEffect, createContext } from "react";
import './App.css'
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
export const AppContext = createContext();
function App() {
 
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");
  const [loader, setLoader] = useState(false);
  const [route, setRoute] = useState("https://api.atharplus.com");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setLogin(true);
    }
  }, [login]);

  return (
    <>
     <AppContext.Provider value={{route ,setLoader ,
    login ,
    setLogin ,
    token ,
    setToken}}>
    <>
    <Header />
    <Routes>
          <Route path="/" element={<Home />} />
    

          {/* <Route path="" element={<UserLayOut/>} >
            <Route path="/goals" element={<Goals />} />
            <Route path="/add-goal" element={<AddGoal/>} />

          </Route> */}

    </Routes>
 

    </>
    </AppContext.Provider>
    </>
  )
}

export default App
