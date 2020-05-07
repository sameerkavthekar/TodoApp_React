import React, {Component} from 'react';
import Popup from "./Popup";

class editTodo extends Component {
    state = {
        isOpen : false
    }

    togglePopup = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.togglePopup}>Edit</button>
                {this.state.isOpen ?
                    <Popup
                        closePopup={this.togglePopup}
                        editTodo={this.props.editTodo}
                        keyId={this.props.keyId}
                    />
                    : null
                }
            </div>
        );
    }
}

export default editTodo;

