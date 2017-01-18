import React from 'react'


const Header = () => (
    <header className='header'>
        <div className='header-wrapper'>
            <div className='header-menu'>
                <i className='fa fa-bars'></i>
            </div>

            <div className='header-logo'>
                <div className='header-logo__icon'>
                    C
                </div>
            </div>
            
            <nav className='header-items'>
                <div className='header-item'>
                    POLITICS
                </div>
                <div className='header-item'>
                    BUSINESS
                </div>
                <div className='header-item'>
                    TECH
                </div>
                <div className='header-item'>
                    SCIENCE
                </div>
                <div className='header-item'>
                    SPORTS
                </div>
            </nav>
        </div>
    </header>
)


export default Header
