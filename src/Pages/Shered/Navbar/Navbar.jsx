import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><NavLink to='/contact'>CONTACT US</NavLink></li>
        <li><NavLink to='/dashBoard'>DASHBOARD</NavLink></li>
        <li><NavLink to='/ourMenu'>OUR MENU</NavLink></li>
        <li><NavLink to='/ourShope/salad'>OUR SHOP</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>

    </>

  return (
    <>
      <div className="navbar fixed z-10  bg-opacity-30 text-white bg-black react-responsive-carousel ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><div><p className="text-xl font-bold">Benni<span className="text-indigo-500">Bistro</span></p> <p className="text-sm">Restaurant</p></div></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
