import react from "react"
import logo from "./imagens/logo.png"

export default function Header() {
    return (
        <div className="header">
            <div className="esquerda">
                <img src={logo} alt="Logo." className="logo" />
            </div>
        </div>
    )
}