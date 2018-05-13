import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Toolbar from '../toolbar';
import style from './style.styl';

const Identity = (a) => (a)

const GoBackButton = ({action = Identity, title}) => (
    <a className={style.button} onClick={action}>
        <i className="material-icons">arrow_back</i>
        {title ? <span>{title}</span> : null}
    </a>
)

GoBackButton.propTypes = {
    action: PropTypes.func.isRequired,
}

const Navbar = ({goBack, title, right, left, type}) => (
    <nav id="navbar" className={`${style.navbar} ${type}`}>
        <div className={style.menu}>
            {goBack && <GoBackButton {...goBack}/>}
            {left && left}
            {title && <h1 className={style.title}>{title}</h1>}
        </div>
        {right && right}
    </nav>
)

Navbar.propTypes = {
    title: PropTypes.string,
    goBack: PropTypes.func
}

const Translated = translate(['navbar'])(Navbar)

export {
    Translated as default,
    GoBackButton
}
