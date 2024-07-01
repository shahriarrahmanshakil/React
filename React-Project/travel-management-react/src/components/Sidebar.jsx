import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src="assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <NavLink to="/" className="d-block">Travel Management</NavLink>
            </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />     
                    <p>Dashboard</p>
                </NavLink>
                </li>

                <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />     
                    <p>Services</p>
                </NavLink>
                </li>

                <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />     
                    <p>Destination</p>
                </NavLink>
                </li>

                <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />     
                    <p>Packages</p>
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />     
                    <p>Team</p>
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />     
                    <p>Client</p>
                </NavLink>
                </li>


                
            </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
        </aside>
    );
};

export default Sidebar;