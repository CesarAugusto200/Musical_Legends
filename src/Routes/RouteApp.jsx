import {Routes , Route } from "react-router-dom"
import LoginPage from "../Page/LoginPage";
import RegisterPage from "../Page/RegisterPage";


function RouteApp(){
 
    return (
        <>
          
         
          <Routes>
              <Route>
             
                  <Route path="/" element={<LoginPage/>}></Route>
                  <Route path="/LoginPage" element={<LoginPage/>}></Route>
                  <Route path="/registerPage" element={<RegisterPage/>}></Route>
              
    
              </Route>
          </Routes>
    
    
        </>
        
      )
}

export default RouteApp;