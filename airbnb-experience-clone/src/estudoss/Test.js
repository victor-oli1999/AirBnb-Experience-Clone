import react from "react"
import jokesData from "./jokesData"

export default function Test() {
    const jokeElements = jokesData.map(jokes => {
        return <Joke setup={jokes.setup} punchline={jokes.punchline} />
    })

    return (
        <div>
            {jokeElements}
        </div>
    )
}