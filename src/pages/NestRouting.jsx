import { Link, Outlet } from "react-router-dom";

function NestRouting() {
    return (
        <>
            <h1>Nest Routing</h1>

            <p>
                <Link to={"/net-routing/book"}>Book</Link>
            </p>
            <p>
                <Link to={"/net-routing/2"}>Car</Link>
            </p>
            <Outlet context={{ hello: "world" }} />
        </>
    );
}

export default NestRouting;
