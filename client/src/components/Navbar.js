import React from 'react'
import {FaBars, FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import log from '../images/log.png'
//import { render } from 'react-dom'
import { useUser } from '../context/UserContext';
import { useHistory } from 'react-router-dom';

function Navbar() {
     const history = useHistory();
    const { user, login, logout } = useUser();
    const handgetOrder = async () => {
        await login({ username: 'exampleUser', password: 'examplePassword' });

        history.push('/orderdetails');
      };

      const handleLogo= async () => {
        

        history.push('/');
      };
    return (<ProductConsumer>
        {value =>{
            
            const { cartItems, handleSidebar, handleCart} = value

            return (
                <NavWrapper>
                    <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSidebar}  />
                
                <div>
                <img onClick={handleLogo} src={log}></img>
                </div>
                        




                <div className="nav-cart">

                 
                <button style={{marginRight:"3px"}} className="main-link" type="button" onClick={handgetOrder}>
                  Get Order Status
                </button>
                


                    <FaCartPlus className="nav-icon" style={{marginLeft: "7px"}} onClick={handleCart}/>
                    <div className="cart-items" >
                        {cartItems}

                    </div>
                   
                    </div> 
                    
                    </div>
                </NavWrapper>
            )
            
        }}

    </ProductConsumer>

    
        
    )
}

const NavWrapper = styled.nav`
position: -webkit-sticky;
position: sticky;
top:0;
width:100%;
padding:1rem 1.5rem;
background: var(--mainGrey);
border-bottom: 3px solid var(--primaryColor);
z-index: 1;
.nav-center{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
}
.nav-icon{
    font-size: 1.5rem;
    cursor: pointer;
}
.nav-cart{
    position:relative;
}
.cart-items{
    background : var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position:absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;


}


`

export default Navbar
