import imageCampanhaRedTag from '../../assets/images/red-tagline.png';
import cloudsImage from '../../assets/images/clouds.png';
import {Link} from 'react-router-dom'
import './Header.css'
export default function Header(){
    return(
        <header>
        <div className="box-header">
           <div className="content-header">
                <div className="img-banner-one">
                <img  className="svg-image" src={imageCampanhaRedTag} alt="Campanha"/>
                </div>
                <div className="btn-sections">
                    <Link className="btnLink" to="/">Cadastrar</Link>
                    <Link className="btnLink" to="/login">Logar</Link>
                </div>
           </div>
           <div className="image-header">
                <img src={cloudsImage} alt="Clouds" />
           </div>
        </div>
    </header>
    )
}