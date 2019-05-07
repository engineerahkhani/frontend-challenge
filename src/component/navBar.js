import React from 'react';
import avatar from '../images/avatar.png';
import Settings from '@material-ui/icons/Settings';
import Dehaze from '@material-ui/icons/Dehaze';

export const Navbar = props => {
    return (
        <div className="nav">
            <div className="nav__right-block">
                <Dehaze className="nav__menu-icon" />
                <div className="nav__avatar">
                    <img
                        alt="avatar"
                        className="nav__avatar-img"
                        src={avatar}
                    />
                    <span className="nav__avatar-title">احمد حسین خانی</span>
                </div>
            </div>

            <Settings className="nav__menu-icon" />
        </div>
    );
};
