
import { AdminPage } from "../../pages/Admin";
import { Link } from "react-router-dom";
import "./styles.modules.css"

export function Footer() {
    
    
    return(
        <div>
            <footer>
                <div className="footerContainer">
                    <section className="internalLinks">
                        <ul>
                            <p>Por <a href='https://github.com/Gab-Ahrens' target='_blank' >Gabriel Ahrens</a> e <a href='https://github.com/hudson-arpini' target='_blank' >Hudson Arpini</a></p>
                            <p><Link to="/admin" component={<AdminPage />} className='link'>Área de Gerenciamento</Link></p>
                        </ul>
                    </section>
                    <section className="logo">
                        <img src={require("../../assets/logo/retrofclogo.png")}/>
                    </section>
                    
                </div>
            </footer>
        </div>
    );
}