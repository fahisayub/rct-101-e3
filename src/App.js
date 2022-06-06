import "./App.css";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path='/' element={
       <RequiredAuth>
         <Home/>
       </RequiredAuth>
      }/>
       <Route path='/login' element={<Login/>}/>

     </Routes>
    </div>
  );
}

export default App;
