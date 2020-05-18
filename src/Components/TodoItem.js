import React, { Component } from "react";
import PropTypes from "prop-types";
import EditTodo from "./EditTodo";

class TodoItem extends Component {
	getStyle = () => {
		return {
			background: "f4f4f4",
			padding: "30px",
			borderBottom: "1px #ccc dotted",
			textDecoration: this.props.todo.completed ? "line-through" : "none",
		};
	};

	render() {
		const { _id, title } = this.props.todo;
		return (
			<div style={{ maxHeight: "83.4px" }}>
				<div style={this.getStyle()}>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, this.props.keyId)}
					/>{" "}
					{"  "}
					{title}
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "right",
						position: "relative",
						bottom: "3.4rem",
						maxWidth: "12rem",
						float: "right",
					}}
				>
					<EditTodo editTodo={this.props.editTodo} keyId={this.props.keyId} />
					<button
						onClick={this.props.delTodo.bind(this, this.props.keyId)}
						style={btnStyle}
					>
						x
					</button>
				</div>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
	background: "#ff0000",
	color: "white",
	border: "none",
	padding: "5px 9px",
	borderRadius: "50%",
	cursor: "pointer",
	float: "right",
	marginLeft: "32px",
};

export default TodoItem;
