import react from "react"
import star from "./imagens/Star.png"
import katie from "./imagens/katie-zaferes.png"

export default function Card(props) {
    
    return (
        <div className="card--t">
            <div className="card">
                <article className="foto">
                    <img src={katie} />
                    {props.vagas && <p>SOLD OUT</p>}
                    {!props.vagas && <p>ONLINE</p>}
                </article>
                <article className="info">
                    <div className="nota">
                        <img src={star}  className="estrela" />
                        <span className="review--star">{props.rating}</span>
                        <span>({props.review}) •</span>
                        <span>{props.country}</span>
                    </div>
                    <div className="nome">
                        <p>{props.title}</p>
                    </div>
                    <div className="preco">
                        <p><strong>From ${props.price}</strong> / person</p>
                    </div>
                </article>
            </div>
        </div>
    )
}