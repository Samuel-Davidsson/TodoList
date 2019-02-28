import React from "react";
import shortid from "shortid";
import Button from "react-bootstrap/Button";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      done: false
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-style"
            name="text"
            type="text"
            maxLength="25"
            required
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="add a todo.."
          />
          <button
            className="button"
            type="submit"
            disabled={!this.state.text}
            variant="secondary"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
