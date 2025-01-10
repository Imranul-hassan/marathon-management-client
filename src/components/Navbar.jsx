
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = ({ isDarkMode, toggleTheme, handleCheckboxChange }) => {
  const { user, logOut } = useContext(AuthContext)


  return (
    <div className="navbar md:w-11/12 mx-auto text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-50 bg-[#2c598d] rounded-box mt-3 w-52 p-2 shadow">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li> <Link to="/all-marathon">Marathons</Link></li>
            <li>
              <Link to='/add-marathon'>Add Marathon</Link>
            </li>
            <li>
              <Link to={`/my-marathon/${user?.email}`}>My Marathon </Link>
            </li>
            <li>
              <Link to={`/my-apply/${user?.email}`}>My Apply </Link>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl pl-0">MARATHON</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 space-x-6 font-semibold text-base">
          {
            user?.email ?
              (
                <div>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/all-marathon"><span className="ml-3">Marathons</span></NavLink>
                  <NavLink to='/add-marathon' >
                  <span className="m-3">Add Marathon</span>
                  </NavLink>
                  <NavLink to={`/my-marathon/${user?.email}`}>My Marathon </NavLink>
                  <NavLink to={`/my-apply/${user?.email}`}><span className="ml-3">My Apply</span></NavLink>
                </div>
              ) :
              (<div>
                <NavLink to="/"><span className="m-3">Home</span></NavLink>
                <NavLink to="/all-marathon">Marathons</NavLink>
                <NavLink to="/about-us"><span className="ml-3">About Us</span></NavLink>
                
              </div>
              )
          }
        </div>
      </div>
      <div className="navbar-end">
        {
          user?.email ?
            (<div className="flex gap-2">
              <div className="relative group">
                <img
                  className="w-9 h-9 rounded-full hover:scale-110 hover:border-2 hover:border-gray-400 "
                  src={user.photoURL}
                  alt="User Avatar"
                />
                <div className="absolute top-11 left-1/2 -translate-x-1/2 z-50 hidden group-hover:block bg-[#2c598d] text-white text-base rounded-md px-2 py-1">
                  {user.displayName}
                </div>
              </div>
              <button className="font-semibold py-1  px-1 md:px-2 bg-[#112548] rounded-md" onClick={logOut}>Logout</button>
            </div>) :
            (
              <div className="flex gap-2">
                <div>
                  <NavLink to="/login">
                    <a className="py-2 px-3 bg-[#112548] text-white rounded-md font-semibold">Login</a>
                  </NavLink>
                </div>
                <div className="md:block hidden">
                  <NavLink to="/register">
                    <a className="py-2 px-3 bg-[#112548] text-white rounded-md font-semibold">Register</a>
                  </NavLink>
                </div>
              </div>
            )
        }

      </div>
    </div>
  );
};

export default Navbar;