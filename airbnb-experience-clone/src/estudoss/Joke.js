import react from "react"

export default function Joke(props) {
    const punchline = props.punchline;
    const setup = props.setup;
    return (
        <div>
            {props.isPun && <h2>é piada</h2>}
            {setup && <h2>{setup}</h2>}
            <p>{punchline}</p>
        </div>
    )
}