
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
                            <p>Fale Conosco</p>
                            <p><Link to="/admin" component={<AdminPage />} className='link'>Área de Gerencimento</Link></p>
                        </ul>
                    </section>
                    <section className="logo">
                        <img src={require("../../assets/logo/retrofclogo.png")}/>
                    </section>
                    <section className="socialMedia">
                        <ul>
                            <a href="#"><img src={require("../../assets/social/facebook.png")}/></a>
                            <a href="#"><img src={require("../../assets/social/instagram.png")}/></a>
                            <a href="#"><img src={require("../../assets/social/twitter.png")}/></a>
                        </ul>                    
                    </section>
                </div>
            </footer>
        </div>
    );
}