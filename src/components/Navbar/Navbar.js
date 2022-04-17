import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">RT<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} style={{color:"white"}}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <a href="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="" style={{width:"30px"}}/>
                        <a href="/hometr">
                            <img src="https://cdn-icons-png.flaticon.com/512/3909/3909414.png" alt="" style={{width:"30px",marginLeft:"10px"}}/>
                        </a>
                    </a>
                    
                    
                </ul>
                
            </nav>
        )
    }
}

export default Navbar