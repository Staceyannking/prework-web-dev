import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import AddCreators from "./pages/AddCreators";
import EditCreators from "./pages/EditCreator";
import ShowCreators from "./pages/ShowCreators";
import ViewCreators from "./pages/ViewCreator";
// import {supabase } from "./client";
// import { useEffect, useState } from 'react';
 

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/creators/new" element={<AddCreators/>}/>
            <Route path="/edit/:id" element={<EditCreators/>}/>
            <Route path= '/' element= {<ShowCreators />}/> 
            <Route path= '/creators/:id' element= {<ViewCreators />}/> 
        </Routes>
      </Router>
    </>
  )
}

export default App;
