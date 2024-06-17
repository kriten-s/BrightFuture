import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="container-fluid ">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-1 border-bottom">

          <div className='col-md-1'></div>

          <Link to="/" className="col-md-2 align-items-center mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            {/* <img src='./Images/logo.png' width={'300'} height={'150'}/> */}
            <img src='./Images/logo2.png' height={'100'} />
            {/* <span class="fs-4">Bright Future</span> */}
          </Link>

          <ul className="col-md-7 nav nav-pills  align-items-center">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link">About Us</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link">Services</Link></li>
            <li className="nav-item"><Link to="#" className="nav-link">Contact Us</Link></li>
          </ul>

          <ul className="social col-md-2 justify-content-end  align-items-center">
            <li className=""><Link to="#" className='social'><i className="fa-brands fa-facebook"></i></Link></li>
            <li className=""><Link to="#" className='social'><i className="fa-brands fa-instagram"></i></Link></li>
            <li className=""><Link to="#" className='social'><i className="fa-brands fa-tiktok"></i></Link></li>
          </ul>

        </header>
      </div>
    </div>
  )
}
export default Header