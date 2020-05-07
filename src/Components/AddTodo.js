import React, {Component} from 'react';
import PropTypes from "prop-types";

class AddTodo extends Component {
    state = {
        title: ''
    }

    addButtonHandler = (e) => this.setState({[e.target.name]: e.target.value});

    submitForm = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.submitForm} autoComplete='off' style={{display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.addButtonHandler}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}


export default AddTodo;
