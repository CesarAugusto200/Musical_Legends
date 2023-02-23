import {Routes , Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import CantoPage from "../Page/CantoPage"
import MusicaPage from "../Page/MusicaPage"
function RoutePrincipal(){
    return(
        <>
  
          <Routes>

              <Route>
             
                 <Route path="/Navbar" element={<Navbar/>}></Route>
                  <Route path="/Canto" element={<CantoPage/>}></Route>
                  <Route path="/Musica" element={<MusicaPage/>}></Route>
                
               
              
    
              </Route>
          </Routes>
        </>
    )
}
export default RoutePrincipal