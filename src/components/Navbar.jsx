import React from 'react'

const Navbar = (props) => {
  return (
    <>


      <nav className={`navbar navbar-expand-lg  md:navbar-expand  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <p className={`"navbar-brand" text-${props.mode} `}>{props.title}</p>
          <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <dialog className="drawer drawer-end" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
            <div className="drawer-header">
              <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
            </div>
            <div className="drawer-body mb-2 md:mb-0">
              <ul className="nav navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <button className="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                    Menu
                  </button>
                  <div className="menu">
                    <a className="menu-item" href="#">Action</a>
                    <a className="menu-item" href="#">Another action</a>
                    <hr className="menu-divider" />
                    <a className="menu-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <div className="switch">
                <input type="checkbox" onClick={props.toggleMode} value="" id="switch" role="switch"  />
              </div>
            </div>
          </dialog>
        </div>

      </nav>

    </>
  )
}

export default Navbar