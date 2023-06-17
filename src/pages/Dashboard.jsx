import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="/modal">Modal Demo</Link>
                <br />
                <Link to="/net-routing">Net Routing</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Dashboard;
