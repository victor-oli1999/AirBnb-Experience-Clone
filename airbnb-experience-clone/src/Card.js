import react from "react"
import star from "./imagens/Star.png"
import katie from "./imagens/katie-zaferes.png"

export default function Card() {
    return (
        <div className="card--t">
            <div className="card">
                <article className="foto">
                    <img src={katie} />
                    <p>SOLD OUT</p>
                </article>
                <article className="info">
                    <div className="nota">
                        <img src={star}  className="estrela" />
                        <span className="review--star">5.0</span>
                        <span>(6) •</span>
                        <span>USA</span>
                    </div>
                    <div className="nome">
                        <p>Life lessons with Katie Zaferes</p>
                    </div>
                    <div className="preco">
                        <p><strong>From $136</strong> / person</p>
                    </div>
                </article>
            </div>
        </div>
    )
}