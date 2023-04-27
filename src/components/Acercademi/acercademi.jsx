import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faWhatsapp, faGithub} from "@fortawesome/free-brands-svg-icons";
import "./acercademi.css"
export const Acercademi = () => {
    return(
        <div>
            <h2>Hola a Todos</h2>
            <img className='yo' src='./yo.jpg' alt="images" />
            <p>Mi nombre es Brayan Arturo Escobar Gutierrez estudiante de la carrera de Ingenieria de Sistemas en la UATF. </p>
            <p>Me enamoré de la programación y al menos he aprendido algo, creo… 🤷‍♂️</p>
            <p>Mi campo de interés es la creación de nuevas   tecnologías y productos web y también en áreas relacionadas con el aprendizaje profundo y el procesamiento del lenguaje natural.</p>
            
            <p>Mis Redes Sociales:</p>
            <div className="social-icono">
                <a href="https://twitter.com/ToBraya"  target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.facebook.com/brayan.escobargutierrez.9/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/brayato_519/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://wa.me/59168436260" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://github.com/brayan519" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
    
            </div>
        </div>
        
        

    )
}