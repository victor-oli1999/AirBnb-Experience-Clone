import react from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Header from './Header'
import Conteudo from './Conteudo'
import Imagens from './Imagens'


function Index() {
    return (
        <div>
            <Header />
            <Imagens />
            <Conteudo />
        </div>
    )
}
//<Imagens />
//<Conteudo />

ReactDOM.render(<Index />, document.getElementById("root"))