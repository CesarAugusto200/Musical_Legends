

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div classNameName="container-fluid">
          <a className="navbar-brand">Musical Legends</a>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              

              <li className="nav-item ">
                <a className="nav-link" href="CantoPage">Inicio </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Curso De Canto </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Curso De Musica </a>
              </li>

           

             
              
            </ul>
            
          </div>
        </div>
      </nav>
    )
}
export default Navbar;