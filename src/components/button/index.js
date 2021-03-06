import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Modal from 'butter-component-modal'
import style from './style.styl';

class Button extends Component {

    static defaultProps = {
        type: 'normal',
        loading: false,
        apply: () => {}
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        icon: PropTypes.string,
        loading: PropTypes.bool,
        apply: PropTypes.func
    }

    constructor (props) {
        super()
        this.apply = props.apply.bind(this)
    }

    render () {
        let {props} = this
        return (
            <button className={style[props.type]} onClick={this.apply.bind(this)}>
                {props.loading && <i className="material-icons spin">cached</i>}
                {props.title && <span>{props.title}</span>}
                {props.icon && <i className="material-icons">{props.icon}</i>}
                {props.children}
            </button>
        )
    }
}

class ActionButton extends Component {

    constructor (props) {
        super()
        this.state = {
            showModal: props.showModal || false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState(prevState => ({showModal: !!!prevState.showModal}))
    }

    hideModal() {
        this.setState({showModal: false})
    }

    render () {
        let {state} = this;
        let {component, ...props} = this.props;
        const ModalComponent = component;

        return (
            <div>
                <Button apply={this.toggleModal} icon="open_in_new"
                        loading={state.showModal} {...props}>
                </Button>
                <Modal position="center" show={state.showModal} action={{apply: this.hideModal.bind(this)}}>
                    <ModalComponent {...props}/>
                </Modal>
            </div>
        )
    }
}

ActionButton.propTypes = {
    component: PropTypes.object.isRequired
}

let Buttons = {
    Button: translate(['button'])(Button),
    ActionButton: translate(['action-button'])(ActionButton)
}

export {Buttons as default}
