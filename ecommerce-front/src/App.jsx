//---DEPENDENCIAS----
import { Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/Home";

function App() {
  

  return (
    <>
      <Routes>
        {/* Error Display*/ }
        <Route path="*" element={<Error404/>}/>
        <Route exact path="/" element={<Home/>}/>



        
      </Routes>
    </>
  )
}

export default App
