import React from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'


let Header = ({
    menu,
}) => (
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
            
            <nav className={classNames('header-items', !menu && 'header-items-hide')}>
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

const mapStateToProps = (state) => {
    const menu = state.menu

    return {
        menu,
    }
}

Header = connect(
    mapStateToProps,
    null,
)(Header)


export default Header
