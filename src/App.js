import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./Components/Todos";
import Header from "./Components/Layout/Header";
import AddTodo from "./Components/AddTodo";
import About from "./Components/Pages/About";
import axios from "axios";
import CompletedViewer from "./Components/CompletedViewer";
class App extends Component {
	state = {
		todos: [],
	};

	componentDidMount() {
		axios.get("/todos").then((res) => this.setState({ todos: res.data }));
	}

	markComplete = (keyId) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo._id === keyId) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	delTodo = (keyId) => {
		axios.delete(`/todos/${keyId}`).then((res) =>
			this.setState({
				todos: [...this.state.todos.filter((todo) => todo._id !== keyId)],
			})
		);
	};

	addTodo = (title) => {
		axios
			.post("/todos", {
				title,
				completed: false,
			})
			.then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
	};

	editTodo = (title, keyId) => {
		axios
			.patch(`/todos/${keyId}`, {
				title,
			})
			.then(({ data }) => {
				this.setState((prevSate) => {
					const { todos } = prevSate;
					const oldTodoIndex = todos.findIndex((todo) => todo.id === data.id);
					const newTodo = { ...todos[oldTodoIndex], ...data };
					todos.splice(oldTodoIndex, 1, newTodo);
					return { todos: todos };
				});
			});
		console.log(title);
		console.log(keyId);
	};

	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={(props) => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<CompletedViewer todos={this.state.todos} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
										editTodo={this.editTodo}
									/>
								</React.Fragment>
							)}
						></Route>
						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
