import React from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'
import { toggleMenu } from '../actions'

import HeaderItem from './HeaderItem'

let Header = ({
    toggleMenu,
    menu,
}) => (
    <header className='header'>
        <div className='header-wrapper'>
            <div className='header-menu'
                 onClick={() => toggleMenu(menu)}>
                <i className='fa fa-bars'></i>
            </div>

            <div className='header-logo'>
                <div className='header-logo__icon'>
                    C
                </div>
            </div>
            
            <nav className={classNames('header-items', !menu && 'header-items-hide')}>
                <HeaderItem tag='politics' />
                <HeaderItem tag='business' />
                <HeaderItem tag='tech' />
                <HeaderItem tag='science' />
                <HeaderItem tag='sports' />
            </nav>
        </div>
    </header>
)

const mapStateToProps = (state) => ({
    menu: state.menu
})

Header = connect(
    mapStateToProps,
    { toggleMenu },
)(Header)


export default Header
