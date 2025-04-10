import {Button} from "react-bootstrap"
import "./LearnMore.css"

function LearnMore(){
    return (
        <div className="Learn-More-Div">
            <h1 className = "Learn-More-h1">“With real estate professional Simon Kim, navigating the world of real estate can be a joyful experience”</ h1>
            <h2 className = "Learn-More-h2">I, Simon Kim, am a top agent with RE/MAX, the industry leader in real estate thatcontinues to maintain its reputation as the #1 choice. As a professional real estateagent, my first and foremost goal is to protect the best interest of my clients.</ h2>
            <Button variant="primary" className = "Learn-More-Button">Learn More</Button>
        </div>
    );
}

export default LearnMore;