import React from 'react';

const MyWebsite = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">My Website</a>
          {/* You can add other navbar elements here */}
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Side Panel - Modified to be full height */}
          <nav 
            id="sidebarMenu" 
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            style={{ height: 'calc(100vh - 56px)' }} // Adjust height based on navbar height
          >
               <div className="position-sticky pt-3">
              {/* Centered Name with Padding */}
              <div className="text-center p-3"> {/* Added padding */}
                <h3 className="fs-4">Bryan</h3>
              </div> </div>
            <div className="position-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item"> 
    
                  <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>Verify Manuscript
                  </a>
                </li>
                {/* Add more sidebar items as needed */}
              </ul>
              <div className="flex-grow-1"> 
              <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span> Verify Manuscript
                  </a>
                </li>
              </ul>
              </div>
            </div>
            <div className="w-100 p-3"> 
              <button className="btn btn-outline-primary btn-sm w-100">
                  Logout
                </button>
              </div>
          </nav>

          {/* Main Content Area */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* Your main content goes here */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyWebsite;