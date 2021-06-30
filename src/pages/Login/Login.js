import './Login.css'


import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Login(){


    return(
        <>
        <Header />
        <div className="main-content">
            <div className="box">
            <div className="main-content-info">
                <h4>Login</h4>
            </div>
            <div className="form-content">

                <div className="input-name">
                    <input 
                    type="text"
                    id="cpf"
                    name="cpf" 
                    placeholder="Digite seu CPF" />
                </div>

                <div className="input-name">
                    <input 
                    type="password"
                    id="password"
                    name="password" 
                    placeholder="Digite sua senha" />    
                </div>
                <div className="btn-sections">
                    <button className="btnLink" type="submit">Enviar</button>
                </div>
            </div>
            </div>
        </div>
        <Footer />

        </>
    )
}