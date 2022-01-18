import { Link } from "react-router-dom";

const Navbar = () => {     
    return ( 
        <header>
        <section className="navbar">
              <nav>
                  <ul> 
                      <li><Link to='/'><span>Ejercicio 1-a</span></Link></li>                     
                      <li><Link to='/parte1b'><span>Ejercicio 1-b</span></Link></li>    
                      <li><Link to='/parte2'><span>Ejercicio 2</span></Link></li>                                       
                  </ul>
          </nav>
          </section>
      </header>    
      
     );
}
 
export default Navbar;