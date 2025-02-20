import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout(){
  return (
    <>
      <div className="container-fluid d-flex">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid flex-column justify-content-start">
                  <NavLink to='/' className="nav-link fs-2">LOGO</NavLink>
              </div>
          </nav>

      </div>
      <div>
        <Outlet/>
      </div>
      
    </>
  )
}