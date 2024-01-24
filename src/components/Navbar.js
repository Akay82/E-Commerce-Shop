import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../img/logo.png'
import contactImg from '../img/contact.png'
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import './universal.css'
//import Contact from './Contact.js';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" />
                  
               </Link> 
                  
               <Link to='/contact'>
            
                  <img src={contactImg} alt="store" className="contact" style={{width:'50px'}} />
               </Link> 

               <ul className="navbar-nav align-items-center">
               
                 <li className="nav-item ml-5">
                 <input
                       type="search"
                           placeholder="Search ..."      
                           className="search" style={{width:'100%', textAlign:'left', borderRadius:"15px"
                           
                        
                    }}     
                 >
                 </input>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">{' '}My cart</i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
