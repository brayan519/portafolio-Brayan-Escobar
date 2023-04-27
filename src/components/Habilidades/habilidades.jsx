import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHtml5, faCss3, faGit, faJava, faReact, faPython, faFigma, faJs, faGithub, faCuttlefish} from "@fortawesome/free-brands-svg-icons";
import './styles.css'
export const Habilidades = () => {
    return(
        <div>
            <h1>Habilidades</h1>
            <p>Tengo conocimiento y experiencia intermedia en HTML5, CSS, GIT, JAVA y C++. Y conocimiento Basico en REACT, PYTHON, FIGMA, JS y  HITHUB.</p>
            <p>He trabajado en algunos proyectos pequeños utilizando esta tecnología. Aunque no tengo experiencia avanzada, estoy comprometido con el aprendizaje y el desarrollo continuo en este campo.</p>
            <div>
                <a href="https://lenguajehtml.com/html/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faHtml5} /></a>
                <a href="https://lenguajecss.com/css/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faCss3} /></a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faGit} /></a>
                <a href="https://www.w3schools.com/java/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faJava} /></a>
                <a href="https://es.react.dev/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faReact} /></a>
                <a href="https://www.python.org/" target="blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faPython} /></a>
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faFigma} /></a>
                <a href="https://lenguajejs.com/javascript/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faJs} /></a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://openwebinars.net/blog/que-es-cpp/" target="_blank" rel="noopener noreferrer" className="icons"><FontAwesomeIcon icon={faCuttlefish} /></a>

            </div>
        </div>
    )
}