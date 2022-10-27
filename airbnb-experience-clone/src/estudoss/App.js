import react from "react"
import Joke from "./Joke"
export default function App() {
    return (
        <div>
            <Joke 
                punchline="a1"
                upVote={53}
                downVote={10}
                isPun={true}
                comments={[{author: "", body: "", tittle: ""}]}
            />
            <Joke 
                punchline="a2"
                setup="b3"
                upVote=""
                downVote=""
                isPun={true}
            />
            <Joke 
                punchline="a3"
                setup=""
                upVote=""
                downVote=""
                isPun={true}
            />
            <Joke 
                punchline="a4"
                setup="a5"
                upVote=""
                downVote=""
                isPun={true}
            />
        </div>
    )
}