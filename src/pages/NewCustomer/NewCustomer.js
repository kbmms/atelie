import './NewCustomer.css'

import Form from '../../components/Form/Form'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
export default function Login(){


    return(
        <>
        <Header />
        <div className="main-content">
            <div className="box">
            <div className="main-content-info">
                <h4>CADASTRE-SE</h4>
                <p>Preencha os campos abaixo para validar sua participaçãona campanha e concorrer aos prêmios.</p>
            </div>
            <div className="form-content">
            <Form />
            </div>
            </div>
        </div>
        <Footer />

        </>
    )
}