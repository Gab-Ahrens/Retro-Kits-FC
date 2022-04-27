
import { AdminPage } from "../../pages/Admin";
import { Link } from "react-router-dom";
import "./styles.modules.css"

export function Footer() {
    
    
    return(
        <div>
            <footer>
                <section className="footerinfo">
                    <ul>
                        <li>Fale Conosco</li>
                        <li>Termos e Condições</li>
                        <li><Link to="/admin" component={<AdminPage />} className='link'>Área de Gerencimento</Link></li>
                    </ul>
                </section>
                <section className="logo">
                    <img src={require("../../assets/logo/retrofclogo.png")}/>
                </section>
                <section className="footersocial">
                    <ul>
                        <li><a href="#"><img src={require("../../assets/social/facebook.png")}/></a></li>
                        <li><a href="#"><img src={require("../../assets/social/instagram.png")}/></a></li>
                        <li><a href="#"><img src={require("../../assets/social/twitter.png")}/></a></li>
                    </ul>                    
                </section>
            </footer>
        </div>
    );
}