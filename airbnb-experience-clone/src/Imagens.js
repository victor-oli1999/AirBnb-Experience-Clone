import react from "react"
import cantando from "./imagens/cantando.png"
import cozinhando from "./imagens/cozinhando.png"
import dancando from "./imagens/dancando.png"
import meditando from "./imagens/meditando.png"
import moca from "./imagens/moca.png"
import nadando from "./imagens/nadando.png"
import teclado from "./imagens/teclado.png"
import temperando from "./imagens/temperando.png"
import violao from "./imagens/violao.png"

export default function Imagens() {
    return (
        <div className="imagens">
            <div className="imagens-estaticas">
                <article className="img-cl-1">
                    <img src={cozinhando} alt="Alguém cozinhando." />
                </article>
                <article className="img-cl-2">
                    <img src={moca} alt="Moça com paezinhos nos braços" className="imagens-topo" />
                    <img src={dancando} alt="Moça dançando." />
                </article>
                <article className="img-cl-3">
                    <img src={temperando} alt="Temperando a comida." className="imagens-topo" />
                    <img src={violao} alt="Tocando violão." />
                </article>
                <article className="img-cl-4">
                    <img src={teclado} alt="Tocando teclado e cantando." className="imagens-topo" />
                    <img src={nadando} alt="Homem nadando." />
                </article>
                <article className="img-cl-5">
                    <img src={meditando} alt="Moça meditando." className="imagens-topo" />
                    <img src={cantando} alt="Moça cantando." />
                </article>
            </div>
        </div>
    )
}