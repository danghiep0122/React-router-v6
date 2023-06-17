import { useOutletContext, useParams } from "react-router-dom";

function Game() {
    const { id } = useParams();
    const obj = useOutletContext();
    return (
        <h1>
            Game {id} {obj.hello}
        </h1>
    );
}

export default Game;
