import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Formulario } from './Formulario'
import { Inicio } from './Home';
import { PaginaJuego } from './juegosXd';
export function App(){
    return(
        <div className="app">
        <BrowserRouter>
        <header>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Inicio</NavLink></li>
                        <li><NavLink to='/formulario'>Formulario</NavLink></li>
                        <li><NavLink to='/juego'>Juego</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element = {<Inicio/>}/>
                <Route path='/formulario' element = {<Formulario/>}/>
                <Route path='/juego' element = {<PaginaJuego/>}/>
            </Routes>
        </BrowserRouter>
        </div>  
    )
}