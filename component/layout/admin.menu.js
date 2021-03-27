import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a  className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">saksit | Site</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link href="/"><a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Home</p>
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="service"><a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Service</p>
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="about"><a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>About</p>
                  </a>
                  </Link>
                </li>
              </ul>
            </li>



{/* จัดการสมาชิก */}
<li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  สมาชิก
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link href="listmember"><a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>List Member</p>
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="addmember"><a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Member</p>
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="updatemember"><a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Update Member</p>
                  </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="deletemember"><a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Delete Member</p>
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default AdminSidebar;
