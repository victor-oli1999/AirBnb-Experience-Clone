import react from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Header from './Header'
import Conteudo from './Conteudo'
import Card from './Card'
import Imagens from './Imagens'

function Index() {
    return (
        <div>
            <Header />
            <Imagens />
            <Conteudo />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                review="6"
                country="USA"
                title="Life lessons with Katie Zaferes"
                price="136"
                vagas={true}
            />
        </div>
    )
}
//<Imagens />
//<Conteudo />


ReactDOM.render(<Index />, document.getElementById("root"))