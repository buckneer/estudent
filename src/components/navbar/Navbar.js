import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="nav position-fixed">
            <div className="d-flex flex-column flex-shrink-0 bg-white"  style={{width: "4.5rem", height: "100vh", borderRight: "1px solid #dee2e6"}}>
                <a href="/" className="d-flex justify-content-center align-items-center p-3 link-dark text-decoration-none">
                    <img src={logo} height={70} width={70} />
                    <span className="visually-hidden">Icon-only</span>
                </a>
                <ul className="nav nav-flush flex-column mb-auto text-center">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link py-3">
                            <i className="bi-house fs-4"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/class" className="nav-link py-3">
                            <i className="bi-book fs-4"></i>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3">
                            <i className="bi-people fs-4"></i>
                        </a>
                    </li>
                    <li>
                        <NavLink to="/exams" className="nav-link py-3">
                            <i className="bi-calendar fs-4"></i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks" className="nav-link py-3">
                            <i className="bi-list-task fs-4"></i>
                        </NavLink>
                    </li>
                </ul>
                <div className="dropdown border-top">
                    <a href="#"
                       className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                       id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24"
                             className="rounded-circle" />
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
