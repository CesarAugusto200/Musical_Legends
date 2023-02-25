import {Routes , Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import CantoPage from "../Page/CantoPage"
import MusicaPage from "../Page/MusicaPage"
import CursosCanto from "../Page/CursosCanto"
import IntermedioPage from "../Page/IntermedioPage"
import ProfesionalPage from "../Page/ProfesinalPage"
import AnimationPage from "../Page/AnimationPage"
function RoutePrincipal(){
    return(
        <>
     <Navbar/>
          <Routes>
      
              <Route>
             
                     
                  <Route path="/Canto" element={<CantoPage/>}></Route>
                  <Route path="/Musica" element={<MusicaPage/>}></Route>
                  <Route path="/Curso" element={<CursosCanto/>}></Route>
                  <Route path="/intermedio" element={<IntermedioPage/>}></Route>
                  <Route path="/Profesional" element={<ProfesionalPage/>}></Route>
                  <Route path="/Carga" element={<AnimationPage/>}></Route>
                
               
              
    
              </Route>
          </Routes>
        </>
    )
}
export default RoutePrincipal