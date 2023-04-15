import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Header from '././components/Header/Header'
import SimpleBottomNavigation from "./components/MainNav"
import AllRoute from "./components/AllRoute/AllRoute";
import { Container } from "@mui/material";



function App() {
  return (
    <>
      <div className="app">
        <Container>
        <Header />
        <AllRoute/>
        
      
      </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;