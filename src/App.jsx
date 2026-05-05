import Header from "./components/Header"
import Cards from "./components/Cards"
import TodoContainer from "./components/TodoContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { useState } from "react";

function App() {
 const [users,setusers] = useState([{
            username:"manoj",
            password:"123"
        },
        {
          username:"abc",
          password:"123"
        }
    ]
)

  return(
    <div className="min-h-screen bg-black">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App