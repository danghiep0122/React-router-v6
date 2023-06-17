// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import AllRoutes from "./routes";

function App() {
    return (
        <>
            <Link to={"/"}>Dashboard</Link>
            <AllRoutes />
        </>
    );
}

export default App;
