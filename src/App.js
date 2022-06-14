import logo from './logo.svg';
import './App.css';
import {GetData} from './components/GetData';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,createContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';





export const UserContext = createContext()

function App() {
  const inital = {}
  const  [handle,setHandle] =useState(inital)
  return (
    <div className="App">
      <UserContext.Provider value={{handle,setHandle}}>
      <GetData ></GetData>
      </UserContext.Provider>
  
      
    </div>
  );
}

export default App;
