import react from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Header from './Header'
import Conteudo from './Conteudo'
import Card from './Card'
import Imagens from './Imagens'
import data from "./data"

function Index() {
    const dataEntry = data.map(props => {
        return <Card 
            key={props.id}
            item={props}
            {...props}
        /> 
    })
    return (
        <div>
            <Header />
            <Imagens />
            <Conteudo />
            <div className="cards-list">
                {dataEntry}
            </div>
        </div>
    )
}
//<Imagens />
//<Conteudo />


ReactDOM.render(<Index />, document.getElementById("root"))