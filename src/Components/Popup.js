import React from 'react';

class Popup extends React.Component {
    state = {
        title: '',
    }

    editButtonHandler = (e) => this.setState({[e.target.name]: e.target.value})

    submitEdit = (e) => {
        e.preventDefault();
        this.props.editTodo(this.state.title,this.props.keyId);
        this.setState({title:''});
    }

    render() {
        return (
            <div style={popup}>
                <div style={popupinner}>
                    <form onSubmit={this.submitEdit} autoComplete='off' style={{display:'flex'}}>
                        <input
                            type='text'
                            name='title'
                            placeholder='Enter edit'
                            value={this.state.title}
                            onChange={this.editButtonHandler}
                        />
                        <input
                            type='submit'
                            value='Submit'
                            style={btnStyle}
                        />
                    </form>
                    <button onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        );
    }
}

const popup = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0,0.5)'
}

const popupinner = {
    position: 'absolute',
    left: '25%',
    right: '25%',
    top: '25%',
    bottom: '25%',
    margin: 'auto',
    borderRadius: '20px',
    background: 'white'
}

const btnStyle = {
    display: 'inline-block',
    border: 'none',
    padding: '7px 20px',
    cursor: 'pointer'
}

export default Popup;