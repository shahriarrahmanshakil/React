import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Sidebar */}
        <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
                <NavLink to="/" className="d-block">Travel Management </NavLink>
            </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                        <NavLink to="/dashboard" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>Dashboard</p>
                        </NavLink>
                    </li>  

                    <li className="nav-item">
                        <NavLink to="/servic" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>Services</p>
                        </NavLink>
                    </li>  

                    <li className="nav-item">
                        <NavLink to="/servic" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>Packages</p>
                        </NavLink>
                    </li>  

                    <li className="nav-item">
                        <NavLink to="/Team" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>Team</p>
                        </NavLink>
                    </li>  

                    <li className="nav-item">
                        <NavLink to="/Client" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>Client</p>
                        </NavLink>
                    </li>  

                    <li className="nav-item">
                        <NavLink to="/add-category" className="nav-link">
                            <i className="nav-icon fas fa-user" />
                            <p> Category</p>
                        </NavLink>
                        {/* <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <NavLink to="/add-category" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Add-Category</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/manage-user" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Manage Category</p>
                                </NavLink>
                            </li>
                        </ul> */}
                    </li>

                    <li className="nav-item">
                        <NavLink to ="/add-user" className="nav-link">
                            <i className="nav-icon fas fa-user" />
                            <p> Users </p>
                        </NavLink>
                        {/* <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <NavLink to="/add-user" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Add New User</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/manage-user" className="nav-link">
                                    <i className="far fa-circle nav-icon" />
                                    <p>Manage Users</p>
                                </NavLink>
                            </li>
                        </ul> */}
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