import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer> 
      <div className="footer-conteiner">
        <div className="content">
          <p className="footer-version">v1.0</p>
          <Link className="footer-lastChanges" to="/lastchanges">Ultimos cambios</Link>
          <Link className="footer-aboutUS" to="/aboutus">
            Sobre nosotros y la App
          </Link>
          <p className="footer-conctacUs">Contactanos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

