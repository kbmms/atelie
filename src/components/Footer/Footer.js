import imageCampanhaRed from '../../assets/images/red.png';
import './Footer.css'
export default function Footer(){
    return(
        <footer className="footer">
        <div className="footer-box">
            <div className="footer-content">
                <h3>Só quem vende curte as experiências mais diferentonas!</h3>
                <p>*Campanha válida de 01/02 a 31/03/2020. Vendas via Business Center e para o Setor Público não serão válidas. A apuração do mêsde agosto será retroativa. Imagens meramente ilustrativas. Realizamos todos os esforços para garantir a precisão das informações, mas não somos responsáveis por qualquer conteúdo editorial, fotográfico ou por erros tipográficos. Todas as imagens são apenas para fins ilustrativos. Para especificações completas de produto, informações de serviços e garantias, visite www.umbrindenaeuropa.com/saiba. Não fazemos nenhuma representação ou garantia em relação a produtos ou serviços de terceiros. Outros nomes de empresas, produtose serviços podem ser marcas registradas ou marcas de serviços de terceiros. © 2020. Todos os direitos reservados.</p>
            </div>
            <div className="footer-image">
                <img src={imageCampanhaRed} alt="Campanha" />
            </div>
        </div>
        <div className="footer-end">
            <div className="content-end">
                <span>Dúvidas? Envie um e-mail para atendimento@umbrindenaeuropa.com.br</span>
                <span>Imagens meramente ilustrativas. Promoção válida de 01/02 a 31/03/2020.</span>
            </div>
        </div>
    </footer>
    )
}