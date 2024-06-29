import { NavLink } from "react-router-dom";
import '../My.css';
function DashBoard() {
    return (
        <>
            <div className="nav">
                <ul>
                    <li><NavLink to='/services-list'>Services</NavLink></li>
                    <li><NavLink to='/destination-list'>Destination</NavLink></li>
                    <li><NavLink to='/packages-list'>Packages</NavLink></li>
                    <li><NavLink to='/team-list'>Team</NavLink></li>
                    <li><NavLink to='/clients-list'>Clients</NavLink></li>

                </ul>
            </div>
            <div style={{ marginLeft: "25%", padding: "1px 16px", height: 1000 }}>
                <h2>Admin Control Hub</h2>
                <h3>Dashboard For CRUD</h3>
                <p>
                    It's a place where only a Super Admin controls everything behind the scene for customizing the frontend of a Website.
                </p>
            </div>
            
        </>

    );
}
export default DashBoard;