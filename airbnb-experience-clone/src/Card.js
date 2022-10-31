import react from "react"
import star from "./imagens/Star.png"

export default function Card(props) {

    return (
        <div className="card--t">
            <div className="card">
                <div className="foto">
                    <img src={props.item.img} />
                    {props.item.vagas && <p>SOLD OUT</p>}
                    {!props.item.vagas && <p>ONLINE</p>}
                </div>
                <div className="info">
                    <div className="nota">
                        <img src={star}  className="estrela" />
                        <span className="review--star">{props.item.stats.rating}</span>
                        <span>({props.item.stats.review}) •</span>
                        <span>{props.item.country}</span>
                    </div>
                    <div className="nome">
                        <p>{props.item.title}</p>
                    </div>
                    <div className="preco">
                        <p><strong>From ${props.item.price}</strong> / person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}