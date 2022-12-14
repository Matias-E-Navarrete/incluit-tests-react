import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../styles/components/Header.styl';

const Header = props => (
    <div className="Header" data-testid="header-component">
        <h1 className="Header-title" title='header-title'>
            <Link to="/">
                Incluit Course
            </Link>
        </h1>
        <div className="Header-checkout">
            <Link to="/checkout">
                <i className="fas fa-shopping-basket"/>
            </Link>
            {
                props.cart.length > 0
                    ? <div className="Header-alert" data-testid="alert-with-cart">{props.cart.length}</div>
                    : <div className="Header-alert">0</div>
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps, null)(Header);
