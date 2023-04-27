import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
export const Navbar = () => {
    return (
        <header>
            <nav className='nav' class="navbar navbar-expand-lg ">
                <div className='logo' class="navbar-brand"> <Link className="nav-linki" to='/'>B</Link> </div>
                <button  class="navbar-toggler navbar-sm" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className='menu' class="navbar-nav">
                            <li class="nav-item">
                                <Link className="nav-linki"  to='/acercademi'>Acerca de mi</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-linki" to='/habilidades'>Habilidades</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-linki" to='/proyectos'>Proyectos</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-linki" to='/experiencia'>Experiencia Laboral</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-linki" to='/educacion'>Educacion</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-linki" to='/contacto'>Contactame</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
            <hr />
        </header>
    )
}