import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

function About() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Proyecto E-Comerce en construcción.
            </p>
            <a
                className="App-link"
                href="https://github.com/valeguizamon"
                target="_blank"
                rel="noopener noreferrer"
            >
                Valentín Leguizamón Sevilla
            </a>
        </div>
    );
}

export default About;
