import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Nav = () => {

    return (
        <div id="nav-component">
            <header>

                <Link to='/'>
                    <button>
                        <img id="logo" src={logo} alt="logo"/>
                    </button>
                </Link>

                <Link to='/count'>
                    <button>
                        iCount
                    </button>
                </Link>

            </header>
        </div>
    )
};

export default Nav;
